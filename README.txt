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

--------------------

<strong>Welcome to jsTerminal wiki!</strong>
<br />

<a href="#how to add commands at initialization">How to Add Commands at Initialization</a>
<a href="#escaping html">Escaping HTML</a>
<a href="#environment variables within commands">Environment Variables Within Added Commands</a>
<a href="#batch files">Batch Files</a>
---

<a name="how to add commands at initialization"></a>
<strong>HOW TO ADD COMMANDS AT INITIALIZATION</strong>

Examples:

(1) Terminal initialization with added command "myCommand", eval method:

When the command's "eval" property is set to true, more than one variable parameter may be declared between the function's initial parentheses. The same eval method is used by the terminal for commands inserted dynamically.

~~~~~~
var terminal = new terminal({
    width: 500,
    height: 200,
    welcomeMessage: 'Welcome to our terminal!'
})
~~~~~~

<strong>(Command object names must be in lowercase)</strong>

~~~~~~
terminal.C.Terminal.System.cmd.command.mycommand = {
  name: 'mycommand',
  summary: 'returns a+b',
  help: 'Returns a+b.\nSyntax: myCommand A B',
  eval: true,
  execute: function(a,b){
             return a+b
           }
}
~~~~~~
<br />
(2) Terminal initialization with added command "myCommand", default method:

When the command's "eval" property is not set, parameters after the command-name are passed by the terminal to the function as one array. (Any statement between double quotes after the command name is passed as one element in the parameter-array, and the outer quotes are removed, allowing for escaped double quotes.)

~~~~~~
var terminal = new terminal({
    width: 500,
    height: 200,
    welcomeMessage: 'Welcome to our terminal!'
})

terminal.C.Terminal.System.cmd.command.mycommand = {
  name: 'mycommand',
  summary: 'returns a+b',
  help: 'Returns a+b.\nSyntax: myCommand A B',
  execute: function(parameter_array){
             return Number(parameter_array[0]) + Number(parameter_array[1])
           }
}
~~~~~~
<br />
(3) Terminal initialization with added command "myCommand", whole-line-as-parameter method:

When the command's "passWholeLineAsParameter" property is set to true, text after the command-name is passed by the terminal to the function as one string (only available in default method, not when using param object).

~~~~~~
var terminal = new terminal({
    width: 500,
    height: 200,
    welcomeMessage: 'Welcome to our terminal!'
})

terminal.C.Terminal.System.cmd.command.mycommand = {
  name: 'mycommand',
  summary: 'Prints "[Statement] is what I always wanted to do!"',
  help: 'Prints "[Statement] is what I always wanted to do!"'
        + '\nSyntax: myCommand [Statement]',
  passWholeLineAsParameter: true,
  execute: function(string){
             return string + '  is what I always wanted to do!'
           }
}
~~~~~~
<br />
(4) Terminal initialization with added command "myCommand", with param object:

When the command's "param" object is populated an extra parameter is assessed by the terminal before passing values to the function, in effect allowing for two-word commands.

~~~~~~
var terminal = new terminal({
    width: 500,
    height: 200,
    welcomeMessage: 'Welcome to our terminal!'
})

terminal.C.Terminal.System.cmd.command.mycommand = {
  name: 'mycommand',
  summary: 'with parameter ADD, returns a+b"',
  help: 'With parameter ADD, returns a+b"'
        + '\nSyntax: myCommand ADD A B',
  param: {
    add: function(parameter_array){
           return Number(parameter_array[0]) + Number(parameter_array[1])
         }
  }
}
~~~~~~

<br />
<a name="escaping html"></a>
<strong>ESCAPING HTML</strong>

Opening HTML tags ("<") and ampersands ("&") in strings returned by terminal functions are converted to html codes ("&amp;lt;" and "&amp;amp;")  for div output unless escaped by "HTML" (the "HTML" escape is removed). For example:

~~~~~~
terminal.C.Terminal.System.cmd.command.mycommand = {
  name: 'mycommand',
  summary: 'prints an HTML example',
  help: 'Prints an HTML example.\nSyntax: myCommand',
  execute: function(){
             return 'This is aHTML<br />break'
           }
}
~~~~~~

<br />
<a name="environment variables within commands"></a>
<strong>ACCESSING TERMINAL ENVIRONMENT VARIABLES WITHIN ADDED COMMANDS</strong>

Terminal converts defined environment variables (enclosed in '%') to their assigned value before passing parameters to commands. To access terminal environment variables from inside a command's execute or param object, call the parseVariable function. For example:

~~~~~~
terminal.C.Terminal.System.cmd.command.mycommand = {
  name: 'mycommand',
  summary: 'prints value of MyVariable',
  help: 'Prints value of MyVariable.\nSyntax: myCommand',
  execute: function(){
             return 'The value of MyVariable is: ' + parseVariable('%MyVariable%')

             /*
             Or alternatively:
             return parseVariable('The value of MyVariable is: %MyVariable%')
             */
           }
}
~~~~~~

<br />
<a name="batch files"></a>
<strong>BATCH FILES</strong>

DOS style batch files can be created and processed by Terminal. Batch files can be created at initialization, or dynamically within the Terminal by opening a new file in the editor or creating a string-type object method with the ending ".bat". 

<strong>Batch Dynamic Example</strong>

~~~~~~
cd Window:\terminal
EDIT my_batch_file.bat

echo Welcome to my batch file
set /p name=What is your name?
echo Hi %name%! & echo. & echo Goodbye.

[Ctrl+Q to save file and exit editor]
~~~~~~

or

~~~~~~
EVAL terminal['my_batch_file.bat'] = 'echo Welcome to my batch file\n' +
                                     'set /p name=What is your name? \n' +
                                     'echo Hi %name%! & echo. & echo Goodbye.'
~~~~~~

<br />
To run the batch file, you could type:

~~~~~~                                 
cd Window:\terminal
my_batch_file.bat
~~~~~~

<br />

<strong>Batch at Initialization</strong>

~~~~~~
var terminal = new terminal({
    width: 500,
    height: 200,
    welcomeMessage: 'Welcome to our terminal!'
})

terminal['my_batch_file.bat'] = 'echo Welcome to my batch file\n' +
                                'set /p name=What is your name? \n' +
                                'echo Hi %name%! & echo. & echo Goodbye.'
~~~~~~
