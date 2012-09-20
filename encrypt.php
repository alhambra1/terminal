<?php
  //CONFIGURATION - SERVER
  $server_name = "Lana";

  //CONFIGURATION - JCRYPTION PATH
  $JCRYPTION_PATH = "../jcryption/jcryption.php";
  $KEYS_100_1024_PATH = "../jcryption/100_1024_keys.inc.php";
 
  //FUNCTIONS
  function getquery ($q) {
  
    //CONFIGURATION - MYSQL
    $mysql_host = MYSQL_HOST;
    $mysql_db_name = MYSQL_DATABASE_NAME;
    $mysql_user = MYSQL_USER;
    $mysql_pass = MYSQL_USER_PASSWORD;
  
    if (!mysql_connect($mysql_host, $mysql_user, $mysql_pass))
      { 
        return "Can't connect to sql."; 
        exit;
      }
    if (!mysql_select_db($mysql_db_name))
      {
        return "Can't access $mysql_db_name"; 
        exit;
      }
    $result = mysql_query($q);
    return $result;
  }
  
  function safe_string_escape($str)
  {
     $len=strlen($str);
      $escapeCount=0;
      $targetString='';
      for($offset=0;$offset<$len;$offset++) {
          switch($c=$str{$offset}) {
              case "'":
              // Escapes this quote only if its not preceded by an unescaped backslash
                      if($escapeCount % 2 == 0) $targetString.="\\";
                      $escapeCount=0;
                      $targetString.=$c;
                      break;
              case '"':
              // Escapes this quote only if its not preceded by an unescaped backslash
                      if($escapeCount % 2 == 0) $targetString.="\\";
                      $escapeCount=0;
                      $targetString.=$c;
                      break;
              case '\\':
                      $escapeCount++;
                      $targetString.=$c;
                      break;
              default:
                      $escapeCount=0;
                      $targetString.=$c;
          }
      }
      return $targetString;
  } 
  
  function getNewMessage(){
    global $server_response, $new_message;
    
    switch ($_SESSION["is_logged_in"])
      {
        case "user2":
          $message_column = "message_from_g";
          break;
        case "user1":
          $message_column = "message_from_s";
          break;
      }
      
      $myq = "SELECT * FROM  `terminal_server_chat` WHERE  `index` = 0";
      $query = getquery ($myq);
      $num_items = mysql_num_rows($query);
        
      if ($num_items >= 1) {
        $row = mysql_fetch_array ($query, MYSQL_ASSOC);
        $message = $row[$message_column];
      }
      
      if ($message)
      {
        $server_response = $message; //. (($new_message) ? $new_message : "");
        $myq = "UPDATE `terminal_server_chat` "
                  . "SET  `" . $message_column . "` = '' "
                  . "WHERE `index` = 0";
                    
          $query = getquery ($myq);
          $num_items = mysql_affected_rows();
          if ($num_items != 1) $server_response = "Error: " . $num_items . " mysql-affected-rows.";
      }
      //else $server_response = ($new_message) ? $new_message : "";
  }
  //END FUNCTIONS
  
  //MAIN

  // Start the session so we can use PHP sessions
	session_start();
	// Include the jCryption library
	require_once($JCRYPTION_PATH);
  
	// Set the RSA key length
	$keyLength = 1024;
	// Create a jCrytion object
	$jCryption = new jCryption();
	
	// If the GET parameter "generateKeypair" is set
	if(isset($_GET["generateKeypair"])) {
		// Include some RSA keys
		require_once($KEYS_100_1024_PATH);
		// Pick a random RSA key from the array
		$keys = $arrKeys[mt_rand(0, 100)];
		// Save the RSA keypair into the session
		$_SESSION["e"] = array("int" => $keys["e"], "hex" => $jCryption->dec2string($keys["e"], 16));
		$_SESSION["d"] = array("int" => $keys["d"], "hex" => $jCryption->dec2string($keys["d"], 16));
		$_SESSION["n"] = array("int" => $keys["n"], "hex" => $jCryption->dec2string($keys["n"], 16));
		// Create an array containing the RSA keypair
		$arrOutput = array(
			"e" => $_SESSION["e"]["hex"],
			"n" => $_SESSION["n"]["hex"],
			"maxdigits" => intval($keyLength*2/16+3)
		);
		// JSON encode the RSA keypair
		echo json_encode($arrOutput);
	// If the GET parameter "handshake" is set
	} elseif (isset($_GET["handshake"])) {
		// Decrypt the AES key with the RSA key
		$key = $jCryption->decrypt($_POST['key'], $_SESSION["d"]["int"], $_SESSION["n"]["int"]);
		// Removed the RSA key from the session
		unset($_SESSION["e"]);
		unset($_SESSION["d"]);
		unset($_SESSION["n"]);
		// Save the AES key into the session
		$_SESSION["key"] = $key;
		// JSON encode the challenge
		echo json_encode(array("challenge" => AesCtr::encrypt($key, $key, 256)));
	} else {
		// Decrypt the request data
		$decryptedData = AesCtr::decrypt($_POST['jCryption'], $_SESSION["key"], 256);
    
    $decryptedData = safe_string_escape($decryptedData);
    
    //variables
    $server_response = "";
    
    //server commands
    if (preg_match('/^\s*\$server\s+[^\s]/i', $decryptedData))
    {
      $split = preg_split("/ +/", $decryptedData);
      $command = strtolower($split[1]);
      $user = $split[2];
      $pass = "";
      if ($split[3] and preg_match('/\/p/i', $split[3]) and $split[4]) $pass = md5($split[4]);
      
      //check if user exists
      $myq = "SELECT * FROM  `terminal_server_users` WHERE  LOWER(`user`) = LOWER('" . $user . "')";
      $query = getquery ($myq);
      $num_items = mysql_num_rows($query);
        
      if ($num_items >= 1) {
        $row = mysql_fetch_array ($query, MYSQL_ASSOC);
        $user = $row['user'];
      }
      else 
      {
        $server_response = "Cannot find the user, " . $user . ".";
        $user = null;
      }
      
      if ($user)
      {
        switch ($command)
        {
          case "logout":
            if (!isset($_SESSION["is_logged_in"])) $server_response = "";
            elseif ($_SESSION["is_logged_in"] != $user) 
              $server_response = "Please enter the correct username to logout.";
            else 
            {
              unset($_SESSION["is_logged_in"]);
              if (isset($_SESSION["chat"])) unset($_SESSION["chat"]);
              $server_response = "Logged out " . $user . ".";
            }
            break;
          case "login":
            if (isset($_SESSION["is_logged_in"]) and $_SESSION["is_logged_in"] == $user)
              $server_response = $user . " is already logged in.";
            elseif (isset($_SESSION["is_logged_in"]))
            {
              $server_response = "Only one user may be logged in any one browser window.";
            }
            elseif ($pass == "") $server_response = "Error: Please enter password.";
            else
            {
              $myq = "SELECT * FROM  `terminal_server_users` WHERE  `user` = '" . $user . "'";
              $query = getquery ($myq);
              $num_items = mysql_num_rows($query);
                
              if ($num_items >= 1) {
                for ($i = 0; $i < $num_items; $i++) {
                  $row = mysql_fetch_array ($query, MYSQL_ASSOC);
                  $saved_pass = $row['password'];
                }
              }
              
              if ($pass == $saved_pass)
              {
                $_SESSION["is_logged_in"] = $user;
                $server_response = "Welcome " . $user . "!";
              }
              else $server_response = "Password does not match.";
            }
            break;
          default:
            $server_response = "Command not recognized.";
            break;
        }
      }
      //server commands without username
      else
      {
        switch($command)
        {
          case "login":
            $server_response = "Please enter a username.";
            break;
          case "logout":
            if (!isset($_SESSION["is_logged_in"])) $server_response = "";
            else 
            {
              $server_response = "Logged out " . $_SESSION["is_logged_in"] . ".";
              if (isset($_SESSION["chat"])) unset($_SESSION["chat"]);
              unset($_SESSION["is_logged_in"]);
            }
            break;
          case "status":
            //encode json object in string form
            $server_response = "{
              \"user\" : " . "\"" . (($_SESSION["is_logged_in"]) ? $_SESSION["is_logged_in"] : "") . "\"," . 
              "\"chatOn\" : " . (($_SESSION["chat"]) ? "true" : "false") . 
            "}";
            break;
          case "unlink":
            $server_response = "Disconnected from " . $server_name . ".";
            unset($_SESSION["is_logged_in"], $_SESSION["chat"], $_SESSION["nickname"]);
            break;
          default:
            $server_response = "Command not recognized.";
            break;
        }
      }
    }
    //chat commands
    elseif (preg_match('/^\s*\$chat\s+[^\s]+/i', $decryptedData) and $_SESSION["is_logged_in"])
    {
      $split = preg_split("/ +/", $decryptedData);
      $command = strtolower($split[1]);
      
      switch(strtolower($command))
      {
        case "on":
          if (!isset($_SESSION["chat"])) $_SESSION["chat"] = true;
          $server_response = "Chat on.";
          break;
        case "off":
          if (isset($_SESSION["chat"])) 
          {
            unset($_SESSION["chat"]);
            $server_response = "Chat off.";
          }
          break;
        case "clear":
          $myq = "UPDATE `terminal_server_chat` "
                  . "SET  `chat_text` = '', "
                  . "`message_from_g` = '', "
                  . "`message_from_s` = '' "
                  . "WHERE `index` = 0";
                    
          $query = getquery ($myq);
          $num_items = mysql_affected_rows();
          $server_response = ($num_items == 1 or $num_items == 0) ? 
                             "Chat record cleared." : "Error: " . $num_items . " mysql-affected-rows.";
          break;
        case "nickname":
          if (!$split[2]) $server_response = "Error: Please enter a nickname.";
          else 
          {
            $_SESSION["nickname"] = $split[2];
            $server_response = "Set nickname " . $_SESSION["nickname"] . ".";
          }
          break;
        case "unset":
          if (strtolower($split[2]) == "nickname")
          {
            unset($_SESSION["nickname"]);
            $server_response = "Unset nickname.";
          }
          else $server_response = "";
        case "getnewmessage":
          getNewMessage();
          break;
        default:
          $server_response = "Command not recognized.";
          break;
      }
    }
    elseif (preg_match('/^\s*\$chat\s+[^\s]+/i', $decryptedData) and !$_SESSION["is_logged_in"])
      $server_response = "Please login to use chat commands.";
    elseif (isset($_SESSION["chat"]) and isset($_SESSION["is_logged_in"]))
    {
      switch ($_SESSION["is_logged_in"])
      {
        case "user2":
          $chatq_username = ($_SESSION["nickname"]) ? $_SESSION["nickname"] : "user2";
          $message_column = "message_from_s";
          break;
        case "user1":
          $chatq_username = ($_SESSION["nickname"]) ? $_SESSION["nickname"] : "user1";
          $message_column = "message_from_g";
          break;
      }
      
      $new_message = "<span class=\"chatq_username\">" . $chatq_username . "</span>: " 
             . $decryptedData;
      
      $myq = "UPDATE `terminal_server_chat` SET  `chat_text` = CONCAT(chat_text, '" 
             . $new_message  . "\n" . "'), " 
             . "`" . $message_column . "`" . " = CONCAT(" . $message_column . ", '" . $new_message . "')"
             . " WHERE `index` = 0";
             
      $query = getquery ($myq);
      $num_items = mysql_affected_rows();
      $server_response = ($num_items == 1) ? "" : "Error: " . $num_items . " mysql-affected-rows.";
      
      getNewMessage();
    }
    else $server_response = "Command not recognized.";
    
		// Encrypt it again for testing purposes
		$encryptedData = AesCtr::encrypt($server_response, $_SESSION["key"], 256);
		// JSON encode the response
		echo json_encode(array("data" => $encryptedData));
	}
?>