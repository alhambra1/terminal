TERMINAL-SERVER-PLUGIN README

The terminal-server-plugin is already added to the terminal.js code, 
and includes encrypted server communication and two-way chat.

The plugin adds the following commands:

  $SERVER LINK
  $SERVER UNLINK
  $SERVER LOGIN Username [/P Password]
  $SERVER LOGOUT [Username]
  $SERVER STATUS
        
  $CHAT ON
  $CHAT OFF
  $CHAT CLEAR
  $CHAT NICKNAME Nickname
  $CHAT UNSET NICKNAME

The plugin relies on jCryption, available here: www.jcryption.org.
Paths are configured for a jCryption folder installed in the website's 
public_html directory alongside Terminal. Without jCryption and the encrypt.php 
file, terminal.js will work fine but will not include the plugin features.

Terminal-server-plugin configuration in the terminal.js file can be adjusted at the 
"TERMINAL SERVER PLUGIN - CONFIGURATION & VARIABLES" section, and in the encrypt.php file 
at the "CONFIGURATION" section. The index.html file includes a path to jquery.jcryption.js, 
which may need adjusting.
