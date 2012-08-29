//JS TERMINAL
function terminal(settings) {
  if (!settings) settings = {}

  window.directoryInfo = {object: ['window'], path: 'Window:\\'}
  setTimeout(function(){
    for (i in window)
    {
      if (window.hasOwnProperty(i))
      {
        if (i != 'directoryInfo' && i != 'window')
        {
          var parent_di_object = window.directoryInfo.object.slice(0),
              di_object = window.directoryInfo.object.slice(0),
              obji_index = parent_di_object.length
          
          di_object[obji_index] = i
          
          if (window[i])  window[i].directoryInfo = {
                            object: di_object,
                            path: window.directoryInfo.path + (window.directoryInfo.path == 'Window:\\' ? '' : '\\') + i,
                            hidden: true,
                            parentDirectory: {object: parent_di_object, path: window.directoryInfo.path}
                          }
        }
      }
    }
  }, 5)
  //SETTINGS
  this.settings = {
    position: 'absolute',
    top: settings.top ? settings.top : 5,
    left: settings.left ? settings.left : 5,
    width: settings.width ? settings.width : 658,
    height: settings.height ? settings.height : 327,
    backgroundColor: settings.backgroundColor ? settings.backgroundColor : 'black',
    borderColor: settings.borderColor ? settings.borderColor : '#D4D0C8',
    borderWidth: settings.borderWidth ? settings.borderWidth : '5px',
    heading: settings.heading ? settings.heading : 'Terminal',
    headingFontSize: settings.headingFontSize ? settings.headingFontSize : '13px',
    headingFontWeight: settings.headingFontWeight ? settings.headingFontWeight : 'bold',
    headingFontFamily: settings.headingFontFamily ? settings.headingFontFamily : 'sans-serif',
    headingMargin: settings.headingMargin ? settings.headingMargin : '5px 0 0 7px',
    headingDivColor: settings.headingDivColor ? settings.headingDivColor : '#fff',
    headingDivBackgroundColor: settings.headingDivBackgroundColor ? settings.headingDivBackgroundColor : '#1D72F0',
    headingDivHeight: settings.headingDivHeight ? settings.headingDivHeight : '25px',
    headingBorderBottomColor: settings.headingBorderBottomColor ? settings.headingBorderBottomColor : '#D4D0C8',
    headingBorderBottomWidth: settings.headingBorderBottomWidth ? settings.headingBorderBottomWidth : '3px',
    fontColor: settings.fontColor ? settings.fontColor : '#c0c0c0', // '#3f0' green
    fontWeight: settings.fontWeight ? settings.fontWeight : '600',
    fontSize: settings.fontSize ? settings.fontSize : '15px',
    fontFamily: settings.fontFamily ? settings.fontFamily : 'courier new, lucida console, arial, courier, sans-serif', //'Terminal, FixedSys, system, verdana, arial',
    letterSpacing: settings.letterSpacing ? settings.letterSpacing : 'normal', //'.2px',
    promptSymbol: settings.promptSymbol ? settings.promptSymbol : '>',
    startingDirectory: 
      (settings.startingDirectory !== undefined) ? settings.startingDirectory : 'window.directoryInfo',
    welcomeMessage: 
      (settings.welcomeMessage !== undefined) ? settings.welcomeMessage : 'Terminal q [Version 1.0]<br />' +
                                                                          '(C) Copyright 2012 Diagonal Productions',
    
    //DOM object IDs
    containerID: settings.containerID ? settings.containerID : 'terminalqContainer',
    buttonID: settings.buttonID ? settings.buttonID : 'terminalqButton',
    terminalDivID: settings.terminalDivID ? settings.terminalDivID : 'terminalqDiv',
    terminalID: settings.terminalID ? settings.terminalID : 'terminalq',
    terminalTextID: settings.terminalTextID ? settings.terminalTextID : 'terminalqText',
    caretID: settings.caretID ? settings.caretID : 'caretq',
    terminalHistoryID: settings.terminalHistoryID ? settings.terminalHistoryID : 'terminalqHistory',
    headingDivID: settings.headingDivID ? settings.headingDivID : 'terminalqHeading'
    
  } //END THIS.SETTING//
  
  //DOCUMENT.WRITE TERMINAL//
  //terminalContainer
  document.write('<div id="' + this.settings.containerID + '" style="position:' + this.settings.position + ';top:')
  document.write(this.settings.top +';left:' + this.settings.left + ';">')
  //container heading div
  document.write('<div id="' + this.settings.headingDivID + '" style="position:relative;height:')
  document.write(this.settings.headingDivHeight + ';width:' + this.settings.width + ';background-color:')
  document.write(this.settings.headingDivBackgroundColor + ';color:'+ this.settings.headingDivColor)
  document.write(';border-width:' + this.settings.borderWidth + ' ' + this.settings.borderWidth + ' ')
  document.write(this.settings.headingBorderBottomWidth + ' ' + this.settings.borderWidth + ';border-color:')
  document.write(this.settings.headingBorderBottomColor + ';border-style:solid; font-size:')
  document.write(this.settings.headingFontSize + ';font-weight:')
  document.write(this.settings.headingFontWeight + ';font-family:' + this.settings.headingFontFamily + ';">')
  document.write('<div style="position:absolute;margin:' + this.settings.headingMargin + ';">')
  document.write(this.settings.heading + '</div></div>')
  //terminalButton
  document.write('<div id="' + this.settings.buttonID + '" style="position:absolute;">')
  document.write('<button onClick="$(\'#' + this.settings.terminalDivID + '\').toggle(\'slow\');')
  document.write('$(\'#' + this.settings.headingDivID + '\').toggle(\'slow\');')
  document.write('setTimeout(function(){$(\'#' + this.settings.terminalID + '\').focus();},10);')
  document.write('$(\'#' + this.settings.terminalID + '\').toggle(\'slow\');$(\'#')
  document.write(this.settings.buttonID + '\').toggle(\'slow\')">' + this.settings.promptSymbol + '</button></div>')
  //terminal
  document.write('<textarea wrap="off" id="' + this.settings.terminalID +'" style="position:absolute; left:9px;')
  document.write('outline:0px solid transparent;background-color:' + this.settings.backgroundColor)
  document.write(';color:' + this.settings.fontColor + '; z-index:-1;"></textarea>')
  //terminalDiv
  document.write('<div id="' + this.settings.terminalDivID + '" style="word-wrap:break-word;overflow-y:auto;')
  document.write('background-color:' + this.settings.backgroundColor + ';width:'+ this.settings.width + ';')
  document.write('height:' + this.settings.height + ';border-width:' + this.settings.borderWidth + ';border-color:')
  document.write(this.settings.borderColor + ';border-style: none solid solid solid;">')
  //terminalHistory
  document.write('<div id="' + this.settings.terminalHistoryID + '" style="position:relative;background-color:')
  document.write(this.settings.backgroundColor + ';color:' + this.settings.fontColor + ';width:')
  document.write((this.settings.width-1) + ';letter-spacing:' + this.settings.letterSpacing + ';font-size:')
  document.write(this.settings.fontSize + ';font-weight:' + this.settings.fontWeight + ';font-family:')
  document.write(this.settings.fontFamily + ';"></div>')
  //terminalText
  document.write('<div id="' + this.settings.terminalTextID + '"')
  document.write('style="position:relative;outline:0px solid transparent; padding-bottom:5px; background-color:' + this.settings.backgroundColor)
  document.write(';color:' + this.settings.fontColor + ';width:' + (this.settings.width-1) + ';letter-spacing:')
  document.write(this.settings.letterSpacing + ';font-size:' + this.settings.fontSize + ';font-weight:')
  document.write(this.settings.fontWeight + ';font-family:' + this.settings.fontFamily + ';"></div></div></div>')
  $('#' + this.settings.terminalID).hide()
  $('#' + this.settings.terminalDivID).hide()
  $('#' + this.settings.headingDivID).hide()
    
  var terminalDiv = document.getElementById(this.settings.terminalDivID),
      headingDiv = document.getElementById(this.settings.headingDivID),
      terminal = document.getElementById(this.settings.terminalID),
      terminalText = document.getElementById(this.settings.terminalTextID),
      terminalHistory = document.getElementById(this.settings.terminalHistoryID),
      terminal_line_history = [],
      terminal_line_history_pointer = -1,
      containerID = this.settings.containerID,
      headingDivID = this.settings.headingDivID,
      buttonID = this.settings.buttonID,
      terminalDivID = this.settings.terminalDivID,
      terminalID = this.settings.terminalID,
      terminalTextID = this.settings.terminalTextID,
      caretID = this.settings.caretID,
      blink,
      terminalHistoryID = this.settings.terminalHistoryID,
      promptSymbol = this.settings.promptSymbol,
      fontColor = this.settings.fontColor,
      fontSize = this.settings.fontSize,
      fontFamily = this.settings.fontFamily,
      fontColor_rgb = hex2rgb(fontColor),
      starting_directory = this.settings.startingDirectory,
      welcome_message = this.settings.welcomeMessage,
      command_queue = [],
      terminal_response,
      
      //pagination
      pagination_pointer = 0,
      pagination_div = undefined,
      paginationDivID = undefined,
      pagination_height = undefined,
      pagination_separator = undefined,
      pagination_num_per_line = undefined
      pagination_output = undefined,
      paginate_on = false,
      
      //set command as input
      set_input = false,
      set_input_variable = '',
      set_input_text = '',
      
      //setlocal
      setlocal = false,
      enableextensions = true,
      enabledelayedexpansion = false,
      
      //editor
      editor_on = false,
      editor_last_selected_start = false,
      editor_selecting_backwards = false,
      editor_find_on = false,
      editor_last_cursor_position = 0,
      editor_find_map_pointer = 0,
      terminal_history_tmp = undefined,
      terminal_text_tmp = undefined,
      terminal_font_color_tmp = undefined,
      terminal_font_weight_tmp = undefined,
      terminal_background_color_tmp = undefined,
      new_terminal_width = undefined,
      new_terminal_height = undefined,
      edited_item = undefined,
      edited_item_types = undefined,
      edited_item_types_pointer = undefined,
      editor_find_input_tmp = {
                editorq_find_what: '',
                editorq_replace: ' ',
                editorq_replace_with: '',
                editorq_replace_all: ' ',
                editorq_find_whole_word: 'X',
                editorq_find_match_case: ' ',
                editorq_find_ok: ' OK ',
                editorq_find_cancel: ' Cancel '
              },
      editor_find_what_caret_left_to_right = true,
      editor_find_what_caret_returned_to_zero = false,
      editor_find_input = undefined,
      editor_find_caret_color = undefined,
      editor_find_map = undefined,
      cancelEditorFind = undefined,
      matchRegex = undefined,
      editorFindWhatFiller = undefined,
      updateEditorFindWhatText = undefined,
      editor_replace_on = false,
      editor_called_from_queue = false,
      
      //batch
      batch_processing_on = false,
      batch_command_queue = [],
      batch_command_pointer = undefined,
      batch_goto_markers = {},
      batch_file_exit = false,
      batch_first_command = false
      
  
  this.C = {
    
    'Documents and Settings': {
      User: {
        'My Documents': {
          'User Functions': {
          }
        }
      }
    },
    
    'Program Files': {
    }, //END C.PROGRAM FILES//
    
    Terminal: {
      System: {
        //TERMINAL COMMAND//
        cmd: {
          //cmd responses
          response: {
            COMMAND_NOT_RECOGNIZED: 'Command not recognized.  Type HELP for a list of commands',
            COMMAND_SYNTAX_ERROR: 'Cannot follow command syntax.  For help, type HELP ',
            VALUE_NUMBER_ERROR: 'Syntax error: value must be a number.'
          }, //END CMD.RESPONSE//
          
          //cmd commands
          command: {
            call: {
              name: 'call',
              summary: 'calls User Functions',
              help: 'Calls User Functions from the USER_FUNCTIONS_PATH.\nSyntax: CALL UF ' + 
                    'Function-Name Parameters',
              param:  {
                uf: function(name_and_params){
                      //eval method
                      var function_name = name_and_params[0], 
                          parameters = name_and_params.slice(1),
                          response
                          
                      if (!USER_FUNCTIONS_PATH[function_name])
                        return 'System cannot locate User Function ' + function_name
                      
                      var func = USER_FUNCTIONS_PATH[function_name].execute.toString(),
                          func_exec = func.substr(func.indexOf('{')+1),
                          func_params = func.substr( func.indexOf('(')+1, func.indexOf(')')-func.indexOf('(')-1  ).split(','),
                          input_params = '', count=0
                          
                      if (func_params.length >= parameters.length-1 && parameters.length > 0)
                      {
                        //create parameter string to pass to command
                        input_params += 'var ' 
                        
                        while (count < parameters.length)
                        {
                          //add quotes to strings
                          if (isNaN(Number(parameters[count])/1))
                            parameters[count] = '"' + parameters[count] + '"'
                        
                          input_params += func_params[count] + '=' + parameters[count]
                          if (count < parameters.length-1) input_params += ','
                          count++
                        }
                        input_params += ';'
                      }
                      
                      response = window.eval ( '(function(){' + input_params + func_exec + ')()' )
                      
                      if (response) return response
                      else return (command_queue[0]) ? '' : '\n'
                    }
              }
            },
            cd: {
              name: 'cd',
              summary: 'changes working directory or displays current directory',
              help: 'Changes working directory or displays current directory\nSyntax: CD [Directory-Path]',
              passWholeLineAsParameter: true,
              execute:  function(path_name){
                          //current_directory structure {name, object, path as string}
                          
                          if (!path_name || path_name == '') return current_directory.path
                          else
                          {
                            //trim path name
                            path_name = path_name.replace(/^\s+|\s+$/g, '')
                            
                            if (path_name.match(/^~/))
                              path_name = path_name.replace(
                                                     '~', USER
                                                    )
                            
                            if (path_name == '..')
                            {
                              if (current_directory.parentDirectory)
                              {
                                if (current_directory.parentDirectory.object.length == 1)
                                {
                                  current_directory = ROOT_PATH.directoryInfo
                                  return (command_queue[0]) ? '' : '\n'
                                }
                                else
                                {
                                  var parent = current_directory.parentDirectory.object
                                  //check if path is accessible
                                  var target_directory
                                  if (ROOT_PATH[parent[1]])
                                    target_directory = ROOT_PATH[parent[1]]
                                  for (var i=2;i<parent.length; i++)
                                  {
                                    if (target_directory[parent[i]])
                                      target_directory = target_directory[parent[i]]
                                    else
                                    {
                                      break
                                      return 'The system cannot find the path specified'
                                    }
                                  }
                                  current_directory = target_directory.directoryInfo
                                  return (command_queue[0]) ? '' : '\n'
                                }
                              }
                              else return 'Working directory is root directory.'
                            }
                            
                            if (path_name == ROOT) 
                            {
                              current_directory = ROOT_PATH.directoryInfo
                              return (command_queue[0]) ? '' : '\n'
                            }
                            else
                            {
                              var path_name_array
                              
                              if (path_name.match(/\\/))
                              {
                                path_name = path_name.replace(':','')
                                path_name_array = path_name.split('\\')
                              }
                              else path_name_array = [path_name]
                              
                              //if path does not start with ROOT, change only to available directories.
                              if (path_name_array[0] != ROOT.replace(/:\\/,''))
                              {
                                //get current directory path
                                var tmp_current_directory = ROOT_PATH
                                for (var i=1; i<current_directory.object.length; i++)
                                {
                                  if (tmp_current_directory[current_directory.object[i]]) 
                                    tmp_current_directory = tmp_current_directory[current_directory.object[i]]
                                }
                                //check if path is accessible
                                var target_directory
                                if (tmp_current_directory[path_name_array[0]])
                                    target_directory = tmp_current_directory[path_name_array[0]]
                                else return 'The system cannot find the path specified'
                                for (var i=1;i<path_name_array.length; i++)
                                {
                                  if (target_directory[path_name_array[i]])
                                    target_directory = target_directory[path_name_array[i]]
                                  else
                                  {
                                    break
                                    return 'The system cannot find the path specified'
                                  }
                                }
                                
                                if (!target_directory.directoryInfo) 
                                  return 'directoryInfo object is undefined, try mapping ' + path_name +
                                         ' (for help, type HELP MAP)'
                                
                                current_directory = target_directory.directoryInfo
                                return (command_queue[0]) ? '' : '\n'
                              }
                              else
                              {
                                //check if path is accessible
                                var target_directory
                                if (ROOT_PATH[path_name_array[1]])
                                    target_directory = ROOT_PATH[path_name_array[1]]
                                for (var i=2;i<path_name_array.length; i++)
                                {
                                  if (target_directory[path_name_array[i]])
                                    target_directory = target_directory[path_name_array[i]]
                                  else
                                  {
                                    break
                                    return 'The system cannot find the path specified'
                                  }
                                }
                                current_directory = target_directory.directoryInfo
                                return (command_queue[0]) ? '' : '\n'
                              }
                            }
                          }
                       }
            },
            cls: {
              name: 'cls',
              summary: 'clears terminal display (retains 50 lines of input history)',
              help: 'Clears terminal display (retains 50 lines of input history).\nSyntax: CLS',
              execute:  function(){
                          setTimeout(function(){
                              if (welcome_message) terminalHistory.innerHTML = welcome_message + '<br /><br />'
                              else terminalHistory.innerHTML = ''
                              terminalText.innerHTML = current_directory.path 
                                                       + promptSymbol + '<span id="'
                                                       + caretID
                                                       + '" style="border-bottom: 3px solid ' 
                                                       + fontColor + ';">&nbsp;</span>'
                          },1)
                          return ''
                        }
            },
            copy: {
              name: 'copy',
              summary: 'copies an item',
              help: 'Copies an item.\nSyntax: COPY Item-Path Copy-Path\nEnclose Paths that ' +
                    'have spaces, commas or semicolons in double quotes.',
              passWholeLineAsParameter: true,
              execute:  function(paths){
                if (!paths) return CMD_PATH.response.COMMAND_SYNTAX_ERROR + 'COPY'

                var paths_array,
                    response = '',
                    copy_from,
                    copy_to_name,
                    copy_to_path,
                    copy_to_obj
                
                paths_array = splitStringWithQuotedCommas(paths)
                
                if (paths_array.length != 2) return CMD_PATH.response.COMMAND_SYNTAX_ERROR + 'COPY'
                
                copy_from = parsePath(paths_array[0])
                
                var path = paths_array[1],
                    obj
                  
                if (!path.match(/\\/))
                {
                  if (!current_directory) return 'Cannot copy item ' + path + '. Current directory is not set.'
                  else
                  {
                    copy_to_name = path
                    copy_to_path = current_directory.path
                    copy_to_obj = parsePath(copy_to_path)
                  }
                }
                else
                {
                  //separate new object name from path
                  var copy_to_name = String(path.match(/\\[^\\]+\\?$/)).replace(/\\/g, '')
                  copy_to_path = String(path.match(/.+(?=\\[^\\]+\\?$)/))
                  
                  copy_to_obj = parsePath(copy_to_path)
                  if (copy_to_obj.parsePathError) return copy_to_obj.parsePathError + ': ' + path
                }
                
                //copy
                if (copy_to_name.match(/[\|*?<>:/]/))
                {
                  return copy_to_name + ' contains an llegal character. \\/|*?:<> '
                         + 'cannot be used for file or directory names.'
                }
                else if (copy_to_obj[copy_to_name])
                {
                  return copy_to_path + (copy_to_path.substr(-1) == '\\' ? '' : '\\') 
                         + copy_to_name  + ' already exists'
                }
                else if (typeof(copy_from) == 'object')
                {
                  var tmp = JSON.stringify(copy_from, function(key, val){
                                            if (typeof val === 'function') {
                                              return val + ''
                                            }
                                            return val
                                          })
                  copy_to_obj[copy_to_name] = JSON.parse(tmp)
                  
                  var item_to_eval = copy_to_path + '\\' + copy_to_name
                      filename_regex = /\\[^\\]+$/,
                      filename_regex_result = filename_regex.exec(item_to_eval)
                      
                  item_to_eval = item_to_eval.substr(0, filename_regex_result.index) 
                                + '"]["' + filename_regex_result[0].substr(1) + '"]'
                  if (item_to_eval.match(/^window/i))
                    item_to_eval = item_to_eval.replace(
                                                  /Window:\\/, 'window["'
                                                ).replace(/\\$/, '').replace(/\\/g, '"]["')
                  else 
                    item_to_eval = item_to_eval.replace(/\\$/, '').replace(/\\/, '["').replace(/\\/g, '"]["')
                  
                  var evalObjectMethods = function(obj){
                        for (var i in obj)
                        {
                          if (typeof(obj[i]) == 'string' && obj[i].match(/function/i))
                          {
                            eval(item_to_eval + '["' + i + '"] =' + obj[i])
                          }
                          else if (typeof(obj[i]) == 'object')
                          {
                            evalObjectMethods(obj[i])
                          }
                        }
                      }
                  evalObjectMethods(copy_to_obj[copy_to_name])
                  
                  var map_path = copy_to_path
                  if (!map_path.match(/Window:\\/)) map_path = current_directory.path + '\\' + map_path
                  doCommand('map "' + map_path + '"')
                  
                  return '        1 object(s) copied.'
                }
                else if (typeof(copy_from) != 'object')
                {
                  copy_to_obj[copy_to_name] = copy_from
                  return '        1 item(s) copied.'
                }
                
                return response
              }
            },
            del: {
              name: 'del',
              summary: 'deletes one or more items',
              help: 'Deletes one or more items.\nSyntax: DEL Item-Path\nFor multiple items, ' +
                    'separate Item-Paths by commas, semicolons or\nspaces. Enclose Item-Paths that ' +
                    'have spaces, commas or semicolons in double\nquotes.',
              passWholeLineAsParameter: true,
              execute:  function(paths){
                if (!paths) return CMD_PATH.response.COMMAND_SYNTAX_ERROR + 'DEL'

                var to_del,
                    response = ''
                
                to_del = splitStringWithQuotedCommas(paths)
                
                for (var i in to_del)
                {
                  var path = to_del[i],
                      item_name,
                      item_path,
                      obj
                  
                  if (!path.match(/\\/))
                  {
                    if (!current_directory)
                    {
                      response += 'Cannot remove item ' + path + '. Current directory is not set.\n'
                      continue
                    }
                    else 
                    {
                      item_name = path
                      item_path = current_directory.path
                      obj = parsePath(item_path)
                    }
                  }
                  else
                  {
                    //separate new object name from path
                    var item_name = String(path.match(/\\[^\\]+\\?$/)).replace(/\\/g, '')
                    item_path = String(path.match(/.+(?=\\[^\\]+\\?$)/))
                    
                    obj = parsePath(item_path)
                    if (obj.parsePathError) 
                    {
                      response += obj.parsePathError + ': ' + path + '\n'
                      continue
                    }
                  }
                  
                  if (obj[item_name] == undefined || typeof(obj[item_name]) != 'object') delete obj[item_name]
                  else if (typeof(obj[item_name]) == 'object') 
                    response += item_path + (item_path.substr(-1) == '\\' ? '' : '\\') 
                                + item_name  + ' is a directory\n'
                }
                
                return (response == '') ? '\n' : response.replace(/\n$/, '')
              }
            },
            dir: {
              name: 'dir',
              summary: 'lists objects in current or other directory',
              help: 'Lists objects in current or other directory.\nSyntax: DIR [/P] [/B] [Directory-Path]\n\nFor ' +
                    'multiple directories, separate Directory-Paths by commas, semicolons or\nspaces. ' +
                    'Enclose Directory-Paths that have spaces, commas or semicolons in\ndouble quotes. ' +
                    '/P flag paginates results. /B flag returns item-names only,\none item name per line.' +
                    '\n\nItems may be filtered by appending a colon to the Path-Name, ' +
                    'followed by\nfilters separated by commas. Filters may include Item-Types and/or the ' +
                    'option\nSORTED to order items lexicograpically. One or more wildcards (denoted ' +
                    'by an\nasterix *) may also be placed after the path to filter items. For example:\n\n' +
                    '  DIR [Directory-Path]:object,string,sorted\n  DIR [Directory-Path]It*m-Nam*:number,function',
              passWholeLineAsParameter: true,
              execute:  function(paths){
                          
                          var response = '',
                              paginate_dir = false,
                              bare_format = false,
                              to_list
                          
                          if (paths) to_list = splitStringWithQuotedCommas(paths)
                          else to_list = ['']
                          
                          //pagination and bare flags
                          for (var i=to_list.length-1; i>=0; i--)
                          {
                            if (to_list[i].toLowerCase() == '/p')
                            {
                              to_list.splice(i, 1)
                              paginate_dir = true
                            }
                            else if (to_list[i].toLowerCase() == '/b')
                            {
                              to_list.splice(i, 1)
                              bare_format = true
                            }
                          }
                          
                          if (to_list.length == 0) to_list = ['']
                          
                          for (var i=0; i<to_list.length; i++)
                          {
                            var path = to_list[i],
                                target_directory,
                                file_list_string = '',
                                file_list,
                                wildcard_on,
                                wildcard_regex,
                                item_filter_on = false,
                                sort_items = false
                            
                            var checkItemType = function(){ return true },
                                item_type_filters = []
                                
                            //item type
                            if (path.match(/:/g))
                            {
                              if (path.match(/:/g).length > 1)
                              {
                                loop_response += 'The type filter, :, can only be applied once per set-item\n'
                                continue
                              }
                              
                              var item_type_array = path.split(':'),
                                  item_types = ['object', 'function', 'undefined', 'boolean', 'number', 'string'],
                                  
                              path = item_type_array[0]
                              
                              if (item_type_array[1].match(/sorted/i))
                              {
                                sort_items = true
                                item_type_array[1] = item_type_array[1].replace(/,?(sorted)/i, '')
                              }
                              
                              //get item-type filter(s)
                              item_type_array[1] = item_type_array[1].replace(/\s+/g, '')
                              if (item_type_array[1]) item_type_array[1] = item_type_array[1].split(',')
                              
                              if (item_type_array[1].length > 0)
                              {
                                for (var j in item_type_array[1])
                                {
                                  if (item_types.indexOf(item_type_array[1][j].toLowerCase()) == -1)
                                  {
                                    loop_response += 'Invalid item-type: ' + item_type_array[1] + '\n'
                                    continue
                                  }
                                  else 
                                  {
                                    item_type_filters.push(item_type_array[1][j])
                                    item_filter_on = true
                                  }
                                }
                                
                                checkItemType = function(item){
                                                  return (item_type_filters.indexOf(typeof(item)) != -1)
                                                }
                              }
                            }
                          
                            //wildcards
                            if (path.match(/\*/))
                            {
                              wildcard_on = true
                            
                              if (path.match(/\*.*\\[^\s]/))
                              {
                                loop_response += 'Wildcards cannot be used in path, only in item-name\n'
                                continue
                              }
                            
                              //get item and path
                              var wildcard_item,
                                  wildcard_path,
                                  wildcard_item_regex,
                                  wildcard_path_regex
                                  
                              if (path.match(/\\/))
                              {
                                //create regex with .+ instead of *
                                wildcard_item_regex = /[^\\]*\*/
                                wildcard_item = path.match(wildcard_item_regex).toString()
                                wildcard_item = wildcard_item.replace('*', '.*')
                                
                                wildcard_path_regex = /[\\][^\\]*\*/
                                wildcard_path = path.substr(0, wildcard_path_regex.exec(path).index)
                                
                                target_directory = parsePath(wildcard_path)
                                wildcard_path += '\\'
                              }
                              else
                              {
                                if (!current_directory)
                                  return 'Current directory is not set. Please set current directory'
                                  
                                target_directory = parsePath(current_directory.path)
                                wildcard_item = path.replace(/\*/g, '.*')
                                wildcard_path = ''
                              }
                              
                              wildcard_regex = new RegExp('^'+wildcard_item)
                            }
                            
                            if (!target_directory) target_directory = parsePath(path)
                            
                            if (target_directory.parsePathError) 
                            {
                              response += target_directory.parsePathError + ': ' + path 
                              if (i < to_list.length-1) response += '\n'
                              continue
                            }
                            
                            if (!target_directory.directoryInfo) 
                            {
                              response += 'directoryInfo object is undefined, try mapping '
                                          + path + ' (for help, type HELP MAP)\n'
                              if (i < to_list.length-1) response += '\n'
                              continue
                            }
                            
                            if (!bare_format)
                              response += 'Directory of ' + target_directory.directoryInfo.path + '\n\n'
                            
                            var fnc_count=0, obj_count=0, str_count=0, 
                                num_count=0, bool_count=0, undef_count=0, other_count=0,
                                spaces18 = '                  '
                                space_adj = {
                                  'boolean': 2, 'string': 3, 'function': 1, 'number': 3,
                                  'object': 3, 'undefined': 0, 'other': 4
                                }
                              
                            for (var j in target_directory)
                            {
                              //if target_directory is not window
                              if (target_directory != ROOT_PATH)
                              {
                                if (target_directory[j] == undefined)
                                {
                                  undef_count++
                                  
                                  if ((wildcard_on && !j.match(wildcard_regex))
                                      || (item_filter_on && !checkItemType(target_directory[j])))
                                    continue
                                
                                  file_list_string = j + ',Undefined\n'
                                }
                                else
                                {
                                  switch (typeof(target_directory[j]))
                                  {
                                    case 'function':
                                      fnc_count++
                                      break
                                    case 'object':
                                      if (!target_directory[j].hidden)
                                        obj_count++
                                      break
                                    case 'string':
                                      str_count++
                                      break
                                    case 'number':
                                      num_count++
                                      break
                                    case 'boolean':
                                      bool_count++
                                      break
                                  }
                                }
                                if (target_directory[j] != undefined && !target_directory[j].hidden)
                                {
                                  if ((wildcard_on && !j.match(wildcard_regex))
                                      || (item_filter_on && !checkItemType(target_directory[j])))
                                    continue
                                  
                                  var item_type = typeof(target_directory[j])
                                  file_list_string += j + ',' 
                                                      + item_type.substr(0,1).toUpperCase() + item_type.substr(1)
                                                      + '\n'
                                }
                              }
                              //if target_directory is window
                              else
                              {
                                switch (typeof(window[j]))
                                {
                                  case 'function':
                                    fnc_count++
                                    break
                                  case 'object':
                                    obj_count++
                                    break
                                  case 'string':
                                    str_count++
                                    break
                                  case 'number':
                                    num_count++
                                    break
                                  case 'boolean':
                                    bool_count++
                                    break
                                  case 'undefined':
                                    undef_count++
                                    break
                                }
                                
                                if ((wildcard_on && !j.match(wildcard_regex))
                                      || (item_filter_on && !checkItemType(target_directory[j])))
                                    continue
                                    
                                var item_type = typeof(window[j])
                                file_list_string += j + ',' 
                                                    + item_type.substr(0,1).toUpperCase() + item_type.substr(1)
                                                    + '\n'
                              }
                            }
                            
                            //create file-list array
                            file_list = file_list_string.split('\n')
                            
                            for (var j=file_list.length-1; j>=0; j--)
                            {
                              if (!file_list[j].match(',')) file_list.splice(j, 1)
                              else file_list[j] = file_list[j].split(',')
                            }
                            
                            //sort items
                            if (sort_items)
                            {
                              file_list.sort(function(a,b){
                                  if (a[0].toLowerCase() < b[0].toLowerCase()) return -1
                                  if (a[0].toLowerCase() > b[0].toLowerCase()) return 1
                              })
                            }
                            
                            for (var j=0; j<file_list.length; j++)
                            {
                              if (!bare_format)
                              {
                                var item_type = file_list[j][1]
                                response += item_type
                                
                                for (var num_space=0; num_space<space_adj[item_type.toLowerCase()]; num_space++)
                                {
                                  response += ' '
                                }
                                response += spaces18 + file_list[j][0] + '\n'
                              }
                              else response += file_list[j][0] + '\n'
                            }
                            
                            if (!bare_format)
                            {
                              response += '\n'
                                       + ((bool_count) ? '    ' + bool_count + ' Boolean(s)\n' : '')
                                       + ((num_count) ? '    ' + num_count + ' Numbers(s)\n' : '')
                                       + ((str_count) ? '    ' + str_count + ' Strings(s)\n' : '')
                                       + ((fnc_count) ? '    ' + fnc_count + ' Functions(s)\n' : '')
                                       + ((obj_count) ? '    ' + obj_count + ' Object(s)\n' : '')
                                       + ((undef_count) ? '    ' + undef_count + ' Undefined' : '')
                              
                              response = response.replace(/\n$/, '')
                            }
                            
                            if (i < to_list.length-1) response += '\n\n'
                          }
                          
                          if (paginate_dir)
                          {
                            //paginate
                            paginate({
                              paginationOutput: response
                            })
                            
                            return ''
                          }
                          else return response.replace(/\n$/, '')
                        }
            },
            dom: {
              name: 'dom',
              summary: 'lists dom elements',
              help: 'Lists dom elements.\nSyntax: ' +
                    'DOM LIST Element-Type',
              param: { 
                list: function (element_type){
                        if (!element_type || element_type.length >1) return CMD_PATH.response.COMMAND_SYNTAX_ERROR + 'DOM'
                        
                        var response,
                            with_id = []
                            without_id = []
                            
                        element_type = String(element_type)
                            
                        for (var i=0; i<document.getElementsByTagName(element_type).length; i++)
                        {
                          var el = document.getElementsByTagName(element_type)[i]
                          if (el.id) with_id.push(el.id)
                          else without_id.push(i)
                        }
                        
                        response = element_type.toUpperCase() + 's WITH IDS:\n'
                        
                        for (var i=0; i<with_id.length; i++)
                        {
                          response += with_id[i] + '\n'
                        }
                        
                        response += '\n' + element_type.toUpperCase() + 's WITHOUT IDS:\n'
                        
                        if (without_id.length > 0)
                        {
                          for (var i=0; i<without_id.length; i++)
                          {
                            response += 'document.getElementsByTagName("' + element_type + '")[' + i +']'
                            if (i < without_id.length-1) response += '\n'
                          }
                        }
                        else response = response.substr(0, response.length-1)
                        
                        return response
                      }
              }
            },
            dosname: {
              name: 'dosname',
              summary: 'displays an item in Dos 8.3 filename style',
              help: 'Displays an item in Dos 8.3 filename style.\nSyntax: ' +
                    'DOSNAME ITEM-NAME [Path]\n\nIf Path is ommited, system assumes the item is ' +
                    'in the current directory. If\nITEM-NAME is longer than eight characters, ' +
                    'system will map all item-names in the\ndirectory that share the ' +
                    'same first six non-space characters of ITEM-NAME.',
              execute:  function(item_name_and_path){
                          
                          if (item_name_and_path.length != 1 && item_name_and_path.length != 2)
                            return 'Please enter an item-name'
                          
                          var answer = item_name_and_path[0],
                              path,
                              path_object,
                              sort_array = []
                              
                          if (!item_name_and_path[1] && !current_directory) 
                            return 'Current directory is not set. Please set current directory ' +
                                   'or specify a mapped directory.'
                          else if (!item_name_and_path[1] && current_directory) path = current_directory.path
                          else path = item_name_and_path[1]
                          
                          path_object = parsePath(path)
                          if (path_object.parsePathError) return path_object.parsePathError
                          if (typeof(path_object) != 'object') return path + ' is not a valid path'
                          
                          var item_exists = false
                          for (var i in path_object)
                          {
                            if (i == answer) item_exists = true
                          }
                          if (!item_exists) return 'System cannot find ' + path 
                                                   + ((path.substr(-1) == '\\') ? '' : '\\') 
                                                   + item_name_and_path[0]
                          
                          //check if dosname_object exists
                          if (!path_object.directoryInfo) 
                            return path + ' does not contain a directoryInfo object. Please map ' + path
                          else if (!path_object.directoryInfo['dosname']) 
                             path_object.directoryInfo['dosname'] = []
                          else if (path_object.directoryInfo['dosname'][answer]) 
                            return path_object.directoryInfo['dosname'][answer]
                          
                          var dosname_object = path_object.directoryInfo['dosname']
                          
                          if (answer.length <= 8)
                          {
                            dosname_object[answer] = answer
                          }
                          else
                          {
                            for (var i in path_object)
                            {
                              if (i.replace(/\s+/g, '').substr(0,6) == answer.replace(/\s+/g, '').substr(0,6))
                              {
                                sort_array.push(i)
                              }
                            }
                            
                            sort_array.sort()
                            
                            //assign dosnames to first four items
                            for (var i=0; i<(sort_array > 4 ? 4 : sort_array.length); i++)
                            {
                              dosname_object[sort_array[i]] = (sort_array[i].replace(/\s+/g, '').substr(0,6) 
                                                              + '~' + (i+1).toString()).toUpperCase() 
                            }
                            
                            //if less than five similar named items
                            if (sort_array.length <= 4) return dosname_object[answer]
                            
                            //if more than four similar named items
                            
                            sort_array.splice(0,4)
                            
                            //sort by length, then lexicographically
                            sort_array.sort(function(a, b){
                            
                                              var x = a.toLowerCase(), 
                                                  y = b.toLowerCase();
                                                  xl = a.length,
                                                  yl = b.length
                                                  
                                              if (xl < yl) return -1
                                              else if (xl > yl) return 1
                                              else if (xl == yl)
                                              {
                                                  if (x < y) return -1
                                                  else if (x > y) return 1
                                                  else if (x == y) return 0
                                              }
                                            })
                                            
                            //calculate how many groups and their size, according to length of item-name
                            var item_name_sizes = [],
                                current_size = sort_array[4].length,
                                array_by_size = [[current_size]], //array_by_size: index0 = size of item-names, index1-end = item-names
                                array_by_size_pointer = 0
                                
                            for (var i=0; i<sort_array.length; i++)
                            {
                              if (sort_array[i].length > current_size)
                              {
                                current_size = sort_array[i].length
                                array_by_size_pointer++
                                array_by_size[array_by_size_pointer] = [current_size]
                              }
                              
                              array_by_size[array_by_size_pointer].push(sort_array[i])
                            }
                            
                            //permutations: 16 groups of 4096, 32 groups of 2048, 64 groups of 1024, 128 groups of 512, 256 groups of 256
                            var largest_group_size = 0,
                                num_groups = array_by_size.length,
                                too_large_groups = 0,
                                groups_4096 = 0,
                                groups_2048 = 0,
                                groups_1024 = 0,
                                groups_512 = 0,
                                groups_256 = 0,
                                groups_128 = 0,
                                groups_64 = 0,
                                groups_32 = 0,
                                groups_16 = 0
                                
                            for (i in array_by_size)
                            {
                              if (array_by_size[i].length > largest_group_size) 
                                largest_group_size = array_by_size[i].length
                              if (0 < array_by_size[i].length && array_by_size[i].length <= 16) groups_16++
                              else if (16 < array_by_size[i].length && array_by_size[i].length <= 32) 
                                groups_32++
                              else if (32 < array_by_size[i].length && array_by_size[i].length <= 64) 
                                groups_64++
                              else if (64 < array_by_size[i].length && array_by_size[i].length <= 128) 
                                groups_128++
                              else if (128 < array_by_size[i].length && array_by_size[i].length <= 256) 
                                groups_256++
                              else if (256 < array_by_size[i].length && array_by_size[i].length <= 512) 
                                groups_512++
                              else if (512 < array_by_size[i].length && array_by_size[i].length <= 1024) 
                                groups_1024++
                              else if (1024 < array_by_size[i].length && array_by_size[i].length <= 2048) 
                                groups_2048++
                              else if (2048 < array_by_size[i].length && array_by_size[i].length <= 4096) 
                                groups_4096++
                              else if (array_by_size[i].length > 4096) too_large_groups++
                            }
                            
                            if (sort_array.length > 144*4096) 
                              return 'Too many items with the same first six characters.'
                            
                            //hash patterns
                            var hash_pattern
                            if (too_large_groups > 0) hash_pattern = 'serial'
                            else if (groups_4096 > 0 && num_groups > 144) hash_pattern = 'serial'
                            else if (groups_4096 > 0 && num_groups <= 144) hash_pattern = 4096
                            else if (groups_2048 > 0 && num_groups > 288) hash_pattern = 'serial'
                            else if (groups_2048 > 0 && num_groups <= 288) hash_pattern = 2048
                            else if (groups_1024 > 0 && num_groups > 576) hash_pattern = 'serial'
                            else if (groups_1024 > 0 && num_groups <= 576) hash_pattern = 1024
                            else if (groups_512 > 0 && num_groups > 1152) hash_pattern = 'serial'
                            else if (groups_512 > 0 && num_groups <= 1152) hash_pattern = 512
                            else if (groups_256 > 0 && num_groups > 2304) hash_pattern = 'serial'
                            else if (groups_256 > 0 && num_groups <= 2304) hash_pattern = 256
                            else if (groups_128 > 0 && num_groups > 4608) hash_pattern = 'serial'
                            else if (groups_128 > 0 && num_groups <= 4608) hash_pattern = 128
                            else if (groups_64 > 0 && num_groups > 9216) hash_pattern = 'serial'
                            else if (groups_64 > 0 && num_groups <= 9216) hash_pattern = 64
                            else if (groups_32 > 0 && num_groups > 18432) hash_pattern = 'serial'
                            else if (groups_32 > 0 && num_groups <= 18432) hash_pattern = 32
                            else if (groups_16 > 0 && num_groups > 36864) hash_pattern = 'serial'
                            else if (groups_16 > 0 && num_groups <= 36864) hash_pattern = 16
                            
                            var hashes = []
                            
                            if (hash_pattern != 'serial')
                            {
                              var hash = Math.floor(Math.random()*(0xffff + 1))
                              for (var i in array_by_size)
                              {
                                hashes[i] = hash
                                hash += hash_pattern
                                if (hash > 0xffff) hash = Math.floor(Math.random()*hash_pattern)
                              }
                            }
                            
                            for (var i=0; i<array_by_size.length; i++)
                            {
                              var hash = hashes[i]
                              
                              for (var j=1; j<array_by_size[i].length; j++)
                              {
                                var hash_str = hash.toString(16)
                                while (hash.length < 4)
                                {
                                  hash_str = '0' + hash
                                }
                                
                                dosname_object[array_by_size[i][j]] = 
                                  (array_by_size[i][j].replace(/\s+/g, '').substr(0, 2) 
                                  + hash_str + '~' + String(Math.floor(i/(65536/hash_pattern)) + 1)).toUpperCase()
                                
                                hash++
                              }
                            }
                            return dosname_object[answer]
                          }
                        }
            },
            echo: {
              name: 'echo',
              summary:  'prints statement on screen or selected output',
              help: 'Prints statement on screen or selected output, converting any variables in the statement' +
                    'into assigned variable values.\nSyntax: ECHO Statement',
              passWholeLineAsParameter: true,
              execute:  function(statement){
                          if (!statement) return 'ECHO is on.'
                          return statement.replace(/\s+$/, '')
                        }
            },
            'echo.': {
              name: 'echo.',
              passWholeLineAsParameter: true,
              execute:  function(statement){
                          if (!statement || !statement.match(/[^\s]/)) return '\n'
                          else return statement
                        }
            },
            edit: {
              name: 'edit',
              summary: 'opens item in the terminal text editor',
              help: 'Opens item in the terminal text editor. If the item\'s path exists and the item\ndoes ' +
                    'not exist or is undefined, terminal creates and opens the item.\n' +
                    'Syntax: EDIT Path',
              passWholeLineAsParameter: true,
              execute:  function(path){
                          if (!current_directory) return 'Please set current directory'
                          if (!path) return CMD_PATH.response.COMMAND_SYNTAX_ERROR + 'EDIT'
                          path = splitStringWithDoubleQuotes(path)[0]
                        
                          var target_item = parsePath(path)
                          
                          if (target_item.parsePathError || target_item == undefined)
                          {
                            doCommand('mkdir /s ' + '"' + path + '"')
                            target_item = parsePath(path)
                          }
                          
                          return {
                              responseType: 'edit',
                              item: target_item,
                              itemType: typeof(target_item),
                              path: path
                            }
                        }
            },
            eval: {
              name: 'eval',
              passWholeLineAsParameter: true,
              execute: function(string){
                         var outer_response = window.eval ( string )
                         if (outer_response) return outer_response
                         else (command_queue[0]) ? '' : '\n'
                       }
            },
            exit: {
              name: 'exit',
              summary: 'exits terminal',
              help: 'Exits Terminal.<br />Syntax: EXIT',
              execute:  function(){
                          if (!batch_processing_on)
                          {
                            CMD_PATH.command.cls.execute()
                            if (welcome_message)
                            {
                              setTimeout(function(){
                                terminalHistory.innerHTML = welcome_message + '<br /><br />'
                              },3)
                            }
                            $('#'+terminalID).toggle('slow')
                            $('#'+terminalDivID).toggle('slow')
                            $('#'+headingDivID).toggle('slow')
                            $('#'+buttonID).toggle('slow')
                            return ''
                          }
                          else 
                          {
                            batch_processing_on = false
                            batch_file_exit = true
                            return ''
                          }
                        }
            },
            explore: {
              name: 'explore',
              summary: 'lists objects and functions in window, document, objects, or other subjects',
              help: 'Explores window, document, objects, or other subjects. If the subject is an object, ' +
                    'EXPLORE will try to list the objects properties/methods. If the subject is a number, string, ' +
                    'or function it will attempt to display it. If Object-Name is "window," EXPLORE will list ' +
                    'all window properties (an optional extra parameter of Number-of-Properties-per-Line is ' +
                    'provided).\nSyntax: EXPLORE Object-Name ' +
                    '[Subjects to List: object, function, string, and/or number | Number-of-Properties-per-Line]',
              execute:  function(object_name_and_subjects){
                          if (!object_name_and_subjects) return CMD_PATH.response.COMMAND_SYNTAX_ERROR + 'EXPLORE'
              
                          var object_string = String(object_name_and_subjects[0]),
                              obj = window.eval(object_name_and_subjects[0]),
                              subjects = object_name_and_subjects.slice(1),
                              list = [], 
                              response
                          
                          //if exploring window
                          if (object_string == 'window')
                          {
                            var num_per_line
                            if (object_name_and_subjects[1] && !isNaN(object_name_and_subjects[1])) 
                              num_per_line = Number(object_name_and_subjects[1])
                            var window_list = []
                            for (var i in obj)
                            {
                              if (obj.hasOwnProperty(i)) window_list.push('[Obj] ' + i)
                              else window_list.push(i)
                            }
                            
                            response = ''
                            var count=0
                            for (var i in window_list)
                            {
                              response += window_list[i] + '  |  '
                              count++
                              if (count%num_per_line == 0) response += '\n'
                            }
                            CMD_PATH.command.terminal.param.width([720])
                            
                            //paginate
                            paginate({
                              paginationOutput: response,
                              paginationSeparator: '|'
                            })
                            
                            return ''
                          }
                          
                          if (subjects[0] == 'all' || !subjects[0]) 
                            subjects = ['boolean', 'number', 'string', 'function', 'object', undefined]
                            
                          for (var i in subjects)
                          {
                            list[subjects[i]] = []
                          }
                          
                          //if obj is not an object
                          var types = ['boolean', 'number', 'string', 'function', undefined]
                          if (types.indexOf(typeof(obj)) != -1)
                          {
                            return 'Exploring ' + object_string + ':\n\n' + obj
                          }
                          
                          //if obj is object
                          for (var i in obj)
                          {
                            if (list[typeof(obj[i])]) list[typeof(obj[i])].push(i)
                          }
                          
                          response = 'Exploring ' + object_string + ':\n\n'
                               
                          for (var subject in list)
                          {
                            response += subject + ':\n'
                            
                            for (var item in list[subject])
                            { 
                              if (list[subject][item]) response += '  ' + list[subject][item] + '\n'
                            }
                                     
                            response += '\n'
                          }
                          return response.substr(0, response.length-2)
                        }
            },
            'for': {
              name: 'for',
              summary: 'runs a specified command for each item in a set of items',
              help: 'Runs a specified command for each item in a set of items.\n' +
                    'Syntax:\n\n  FOR %Variable IN (String-Set) DO COMMAND [Command-Parameters]\n' +
                    '  FOR /L %Variable IN (Start, Step, Stop) DO COMMAND [Command-Parameters]\n' +
                    '  FOR /F ["Options"] %Variable IN (Item-Set) DO COMMAND [Command-Parameters]\n' +
                    '  FOR /F ["Options"] %Variable IN ("String") DO COMMAND [Command-Parameters]\n' +
                    '  FOR /F ["Options"] %Variable IN (\'Command\') DO COMMAND [Command-Parameters]\n\n' +
                    '    or, if usebackq option present:\n\n' +
                    '  FOR /F ["Options"] %Variable IN (item-set) DO COMMAND [Command-Parameters]\n' +
                    '  FOR /F ["Options"] %Variable IN (\'String\') DO COMMAND [Command-Parameters]\n' +
                    '  FOR /F ["Options"] %Variable IN (`Command`) DO COMMAND [Command-Parameters]\n\n' +
                    'Where %Variable is any one lowercase or uppercase letter (case sensitive),\nItem-Set is ' +
                    'a set of item-names separated by spaces. (Item-names without paths\nwill be searched for ' +
                    'in the current directory. If usebackq option is selected,\npaths and item-names that have' +
                    ' spaces may be enclosed in double quotes.',
              passWholeLineAsParameter: true,
              execute:  function(str){
              
                          var flag_l,
                              flag_f,
                              flag_f_options_string,
                              flag_f_options,
                              variable, command
                          
                          if (!str) return CMD_PATH.response.COMMAND_SYNTAX_ERROR + 'FOR'
                          
                          var doFor = function(string){
                            //trim leading space
                            string = string.replace(/^\s+/, '')
                            
                            // /L flag
                            if (string.substr(0, 2).match(/\/l/i))
                            {
                              if (string.substr(2, 1) != ' ') return CMD_PATH.response.COMMAND_SYNTAX_ERROR + 'FOR'
                              flag_l = true
                              string = string.substr(2)
                            }
                            // /F flag
                            else if (string.substr(0, 2).match(/\/f/i))
                            {
                              if (string.substr(2, 1) != ' ') return CMD_PATH.response.COMMAND_SYNTAX_ERROR + 'FOR'
                              flag_f = true
                              string = string.substr(2).replace(/^\s+/, '')
                              flag_f_options = {
                                eol: undefined, 
                                skip: 0, 
                                delims: ' \\t', 
                                tokens: '1', 
                                usebackq: false
                              }
                            }
                            
                            //check for f-flag options
                            if (string.match(/^"[^"]+"/))
                            {
                              if (!flag_f) return string.match(/"[^"]+"/).toString() 
                                                  + ' was unexpected at this time.'
                              else
                              {
                                flag_f_options_string = string.match(/"[^"]+"/).toString()
                                string = string.substr(flag_f_options_string.length).replace(/^\s+/, '')
                                
                                flag_f_options_string = 
                                  flag_f_options_string.substr(1, flag_f_options_string.length-2).replace(/^\s+/, '')
                              
                                //spearate eol, skip, delims, tokens, & usebackq
                                var flag_f_options_regex = 
                                      new RegExp (' eol| skip| delims| tokens| usebackq', 'i'),
                                    flag_f_options_regex_result,
                                    flag_f_options_regex_result_array = []
                                   
                                while (flag_f_options_regex_result = 
                                        flag_f_options_regex.exec(flag_f_options_string))
                                {
                                  flag_f_options_regex_result_array.push(
                                    flag_f_options_string.substr(0, flag_f_options_regex_result.index)
                                  )
                                    flag_f_options_string = flag_f_options_string.substr(
                                      flag_f_options_regex_result.index+1)
                                }
                                //add end of string to the options array
                                flag_f_options_regex_result_array.push(flag_f_options_string)
                                
                                //error check and assign options
                                for (var i=0; i<flag_f_options_regex_result_array.length; i++)
                                {
                                  if (!flag_f_options_regex_result_array[i].match(/=/) 
                                      && !flag_f_options_regex_result_array[i].match(/usebackq/i))
                                    return flag_f_options_regex_result_array[i] + ' was unexpected at this time.'
                                  else if (flag_f_options_regex_result_array[i].match(/usebackq/i))
                                  {
                                    var tmp = flag_f_options_regex_result_array[i].replace(/usebackq/i, '')
                                    if (tmp.match(/[^\s]/))
                                      return flag_f_options_regex_result_array[i] + ' was unexpected at this time.'
                                    else flag_f_options.usebackq = true
                                  }
                                  else
                                  {
                                    var option = flag_f_options_regex_result_array[i].split('=')
                                    
                                    option = option[0].replace(/^\s+|\s+$/, '').toLowerCase()
                                    
                                    var assignment = 
                                      flag_f_options_regex_result_array[i].match(/=.*/).toString().substr(1)
                                      
                                    switch (option)
                                    {
                                      case 'eol':
                                        flag_f_options[option] = assignment
                                        break
                                      case 'skip':
                                        assignment = assignment.replace(/^\s+|\s+$/, '')
                                        if (!isNaN(assignment)) flag_f_options[option] = assignment.toNumber()
                                        else return 'Please set "skip" option as a number.'
                                        break
                                      case 'delims':
                                        flag_f_options[option] = assignment
                                        break
                                      case 'tokens':
                                        assignment = assignment.replace(/^\s+|\s+$/, '')
                                        if (!assignment.match(/[^\d,*-]/)) flag_f_options[option] = assignment
                                        else return 'Please set "tokens" option as digits and/or wildcards '
                                                    + '(*) separated by commas or\ndashes.'
                                        break
                                    }
                                  }
                                }
                              }
                            }
                            
                            //parse quotes and parentheses
                            var statements = parseQuotesAndParentheses(string)
                            if (statements.error) return statements.error
                            
                            string_array = string.split(' ')
                             //remove empty elements
                            for (var i=string_array.length-1; i>=0; i--)
                            {
                              if (!string_array[i] || string_array[i].match(/^\s+$/)) string_array.splice(i,1)
                            }
                            
                            //error check
                            if (!string_array[0])
                              return CMD_PATH.response.COMMAND_SYNTAX_ERROR + 'FOR'
                            else
                            {
                              string_array[0] = string_array[0].replace(/^\s+|\s+$/g, '')
                              if (!string_array[0].match(/%[a-zA-Z]/) || string_array[0].length > 2)
                                return  string_array[0] + ' was unexpected at this time.'
                              else if (!string_array[1])
                                return CMD_PATH.response.COMMAND_SYNTAX_ERROR + 'FOR'
                              else
                              {
                                string_array[0] = string_array[0].replace(/^\s+|\s+$/g, '')
                                variable = string_array[0]
                              }
                            }
                            if (string_array[1])
                            {
                              if (!string_array[1].match(/\s*in\s*/i)) 
                                return string_array[1].replace(/^\s+|\s+$/g, '') + ' was unexpected at this time.'
                              else if (!string_array[2])
                                return CMD_PATH.response.COMMAND_SYNTAX_ERROR + 'FOR'
                            }
                            if (string_array[2])
                            {
                              if (!string_array[2].match(/\s*\(/)) 
                                return string_array[2].replace(/^\s+|\s+$/g, '') + ' was unexpected at this time.'
                              else if (!string_array[3])
                                return CMD_PATH.response.COMMAND_SYNTAX_ERROR + 'FOR'
                              else
                              {
                                string_array[2] = 
                                  string.substr(statements.parenthetical[0][0][0], 
                                                statements.parenthetical[0][0][1] -
                                                statements.parenthetical[0][0][0]+1)
                                                
                                string_array[3] = string.substr(statements.parenthetical[0][0][1]+1)
                              }
                            }
                            if (string_array[3])
                            {
                              if (!string_array[3].match(/^\s*do/i))
                              {
                                string_array[3] = string_array[3].replace(/^\s+/g, '').split(' ')
                                return string_array[3][0] + ' was unexpected at this time.'
                              }
                              else if (!string_array[3].match(/\s*do\s+[^\s]/i))
                                return CMD_PATH.response.COMMAND_SYNTAX_ERROR + 'FOR'
                            }
                            
                            if (!statements.parenthetical[1])
                              command = string_array[3].substr(string_array[3].toLowerCase().indexOf('do')+3)
                            else
                              command = string.substr(statements.parenthetical[1][0][0]+1, 
                                                      statements.parenthetical[1][0][1] -
                                                      statements.parenthetical[1][0][0]-1)
                            //FOR COMMAND FLAGS
                            //flag l
                            if (flag_l)
                            {
                              string_array[2] = string_array[2].replace(/[\()\s]/g, '')
                              
                              //assign start, step, and stop
                              var tmp = string_array[2].split(','),
                                  start=0, step=0, stop=0
                              
                              if (tmp[0] != undefined && !isNaN(tmp[0])) 
                              {
                                start = 
                                  (tmp[0].toString().substr(0,1) == '0') ? parseInt(tmp[0], 8) : Number(tmp[0])
                              }
                              if (tmp[1] != undefined && !isNaN(tmp[1])) 
                              {
                                step = 
                                  (tmp[1].toString().substr(0,1) == '0') ? parseInt(tmp[1], 8) : Number(tmp[1])
                              }
                              if (tmp[2] != undefined && !isNaN(tmp[2])) 
                              {
                                stop = 
                                  (tmp[2].toString().substr(0,1) == '0') ? parseInt(tmp[2], 8) : Number(tmp[2])
                              }
                              
                              string_array[3] = string.substr(statements.parenthetical[0][0][1]+1)
                              // /l flag for-loop
                              var evaluate = function(c,a,b){
                                if (a >= b && c >= b) return true
                                if (a <= b && c <= b) return true
                                else return false
                              }
                              
                              var regex = variable,
                                  regex_modifiers = 'g',
                                  loop_response = '',
                                  loop_regex = new RegExp(regex, regex_modifiers)
                              
                              for (var i=start; evaluate(i, start, stop); i += step)
                              {
                                loop_response += doCommand(command.replace(loop_regex, i)) + '\n'
                              }
                              
                              return loop_response.substr(0, loop_response.length-1)
                            }
                            //flag f
                            else if (flag_f && flag_f_options)
                            {
                              var variable_parent = variable
                              
                              string_array[2] = string_array[2].substr(1, string_array[2].length-2)
                              
                              //if usebackq and quoted command
                              var quoted_command,
                                  usebackq_command_result,
                                  command_in_single_quotes
                              
                              if (string_array[2].match(/^\s*`.+`\s*$/) && flag_f_options.usebackq)
                              {
                                quoted_command = string_array[2].replace(/^\s+|\s+$/, '')
                                quoted_command = quoted_command.substr(1, quoted_command.length-2)
                              }
                              else if (string_array[2].match(/^\s*'.+'\s*$/) && !flag_f_options.usebackq)
                              {
                                quoted_command = string_array[2].replace(/^\s+|\s+$/, '')
                                quoted_command = quoted_command.substr(1, quoted_command.length-2)
                                command_in_single_quotes = true
                              }
                              
                              //preserve quotes to identify strings
                              var items,
                                  regex = variable,
                                  regex_modifiers = 'g',
                                  loop_response = '',
                                  loop_regex = new RegExp(regex, regex_modifiers)
                              
                              if (!quoted_command)
                              {
                                if (!flag_f_options.usebackq)
                                  items = splitStringWithDoubleQuotes(string_array[2], true)
                                //parse single quotes as strings and double quotes as items
                                else items = splitStringWithDoubleQuotes(string_array[2], true, true)
                              }
                              else items = [doCommand(quoted_command)]
                              
                              for (var i=0; i<items.length; i++)
                              {
                                //check if item exists or is a quoted string
                                var f_item,
                                    f_item_lines
                                
                                //if not usebackq
                                if (!flag_f_options.usebackq)
                                {
                                  if (!quoted_command)
                                    f_item = (items[i].substr(0,1) == '"') ? 
                                             items[i].substr(1, items[i].length-2) : parsePath(items[i])
                                  else f_item = items[i]
                                }
                                //if usebackq
                                else 
                                {
                                  if (!quoted_command)
                                  {
                                    if (items[i].substr(0,1) == '\'')
                                      f_item = items[i].substr(1, items[i].length-2)
                                    else if (items[i].substr(0,1) == '"')
                                    {
                                      items[i] = items[i].substr(1, items[i].length-2)
                                      f_item = parsePath(items[i])
                                    }
                                    else f_item = parsePath(items[i])
                                  }
                                  else f_item = items[i]
                                }
                                    
                                if (f_item.parsePathError) 
                                {
                                  loop_response += 'The system cannot find the item ' + items[i] + '.'
                                  if (i < items.length-1) loop_response += '\n'
                                  continue
                                }
                                  
                                if (typeof(f_item) == 'string' || typeof(f_item) == 'function')
                                {
                                  f_item_lines = f_item.toString().split('\n')
                                  
                                  //remove empty lines
                                  for (var j=f_item_lines.length-1; j>=0; j--)
                                  {
                                    if (f_item_lines[j] == '') f_item_lines.splice(j, 1)
                                  }
                                  
                                  for (var j=flag_f_options.skip; j<f_item_lines.length; j++)
                                  {
                                    //trim lines if eol is set
                                    if (flag_f_options.eol)
                                    {
                                      var eol_regex = new RegExp(flag_f_options.eol),
                                          eol_regex_result = eol_regex.exec(f_item_lines[j])
                                      if (eol_regex_result)
                                        f_item_lines[j] = f_item_lines[j].substr(0, eol_regex_result.index)
                                    }
                                    //split lines according to delims
                                    if (flag_f_options.delims != '')
                                    {
                                      f_item_lines[j] = f_item_lines[j].split(
                                                    RegExp('[' + flag_f_options.delims + ']')
                                                   )
                                      for (var k=f_item_lines[j].length-1; k>=0; k--)
                                      {
                                        f_item_lines[j][k] = f_item_lines[j][k].replace(/^\s+|\s+$/, '')
                                        if (f_item_lines[j][k] == '') f_item_lines[j].splice(k, 1)
                                      }
                                    }
                                    else f_item_lines[j] = [f_item_lines[j]]
                                  }
                                  
                                  //parse tokens option
                                  var item_tokens = flag_f_options.tokens.split(','),
                                      token_wildcard_on = false,
                                      token_wildcard_start
                                  
                                  for (var j=item_tokens.length-1; j>=0; j--)
                                  {
                                    //token wildcards error check
                                    if (item_tokens[j].match(/\*./) 
                                        || (item_tokens[j].match(/\*/g) && item_tokens[j].match(/\*/g).length > 1)) 
                                      return item_tokens[j].match(/\*./).substr(1) + ' was unexpected at this time.'
                                    else if (item_tokens[j].match(/\*$/) && j < item_tokens.length-1)
                                      return ',' + item_tokens[j+1] + ' was unexpected at this time.'
                                    
                                    //token wildcards
                                    else if (item_tokens[j].match(/\*$/))
                                    {
                                      token_wildcard_on = true
                                      
                                      if (item_tokens[j].match(/[^\*]/)) 
                                        item_tokens[j] = item_tokens[j].replace(/\*/, '')
                                      else item_tokens.splice(j, 1)
                                    }
                                    else if (!isNaN(item_tokens[j]) && !item_tokens[j] == '')
                                      item_tokens[j] = Number(item_tokens[j])
                                    else if (item_tokens[j].match(/-/g) && !item_tokens[j].match(/-/g).length > 1)
                                    {
                                      var tokens_range = item_tokens[j].split('-')
                                      if (tokens_range[0] <= tokens_range[1])
                                      {
                                        item_tokens.splice(j, 1)
                                        for (var k=tokens_range[0]; k<=tokens_range[1]; k++)
                                        {
                                          item_tokens.push(k)
                                        }
                                      }
                                      else item_tokens.splice(j, 1)
                                    }
                                    else item_tokens.splice(j, 1)
                                  }
                                  item_tokens.sort()
                                  
                                  //set token_wildcards_start
                                  if (token_wildcard_on)
                                  {
                                    var wildcard_start = 
                                          (item_tokens.length > 0) ? item_tokens[item_tokens.length-1] : 0
                                    item_tokens.push ('*' + String(wildcard_start))
                                  }
                                  
                                  //replace variables with tokens
                                  var variable_parent_number = variable.charCodeAt(1),
                                        is_upper_case = 
                                          (variable_parent == variable_parent.toUpperCase) ? true : false,
                                      variables_regex =
                                        (is_upper_case) ? '%[A-Z]' : '%[a-z]',
                                      num_variables_to_replace = 
                                        command.match(RegExp(variables_regex, 'g')).length,
                                      command_tmp
                                          
                                  for (var j=0; j<f_item_lines.length; j++)
                                  {
                                    command_tmp = command.toString()
                                          
                                    for (var k=0; k<num_variables_to_replace; k++)
                                    {
                                      var match = command_tmp.match(RegExp(variables_regex))[0],
                                          token_index = item_tokens[match.charCodeAt(1) - variable_parent_number]
                                      
                                      //if token is not a wildcard decrement token to match array index
                                      if (!isNaN(token_index)) token_index--
                                      
                                      if (match && f_item_lines[j][token_index])
                                      {
                                        command_tmp = command_tmp.replace(match, f_item_lines[j][token_index])
                                      }
                                      //if token is a wildcard
                                      else if (match && typeof(token_index) == 'string')
                                      {
                                        var wildcard_replacement = ''
                                        
                                        for (var l=Number(token_index.substr(1)); l<f_item_lines[j].length; l++)
                                        {
                                          wildcard_replacement += f_item_lines[j][l]
                                          if (l < f_item_lines[j].length-1) wildcard_replacement += ' '
                                        }
                                        
                                        command_tmp = command_tmp.replace(match, wildcard_replacement)
                                      }
                                    }
                                    
                                    loop_response += doCommand(command_tmp)
                                    if (j < f_item_lines.length-1) loop_response += '\n'
                                  }
                                  if (i < items.length-1) loop_response += '\n'
                                }
                              }
                              
                              return loop_response
                            }
                            //if no for command flags
                            else
                            {
                              string_array[2] = string_array[2].substr(1, string_array[2].length-2)
                              
                              var items = splitStringWithDoubleQuotes(string_array[2], true),
                                  regex = variable,
                                  regex_modifiers = 'g',
                                  loop_response = '',
                                  loop_regex = new RegExp(regex, regex_modifiers)
                              
                              //no flags for-loop
                              for (var i in items)
                              {
                                loop_response += doCommand(command.replace(loop_regex, items[i])) + '\n'
                              }
                              
                              return loop_response.substr(0, loop_response.length-1)
                            }
                          }
                          
                          var response = doFor(str)
                          if (response) return response
                          else return (command_queue[0]) ? '' : '\n'
                        }
            }, //END FOR COMMAND//
            'goto': {
              name: 'goto',
              summary: 'shifts the batch_command_pointer to the labeled section during batch file processing',
              help: 'shifts the batch_command_pointer to the labeled section during batch file processing' +
              '.\nSyntax: GOTO Section-Name',
              execute:  function(section){
                          if (!section) return 'GOTO section parameter missing.'
                          
                          section = section[0].replace(/^\s+|\s+$/, '').toLowerCase()
                          if (batch_goto_markers[section]) 
                          {
                            batch_command_pointer = batch_goto_markers[section]
                            return ''
                          }
                          else return 'System cannot find GOTO section ' + section + '.'
                        }
            },
            help: {
              name: 'help',
              execute:  function(command_name){
                          if (!command_name)
                          {
                            var response = 'For help with individual commands, type HELP [Command]\n\n'
                                           + 'Commands:\n'
                            for (var i in CMD_PATH.command)
                            {
                              if (CMD_PATH.command[i] && CMD_PATH.command[i].summary) 
                                response += CMD_PATH.command[i].name.toUpperCase() 
                                         + '  ' + CMD_PATH.command[i].summary + '\n'
                            }
                            return response.substr(0, response.length-2)
                          }
                          else if (CMD_PATH.command[command_name] && CMD_PATH.command[command_name].help)
                            return CMD_PATH.command[command_name].help
                          else if (!CMD_PATH.command[command_name])
                            return 'System does not recognize the command ' + command_name
                          else if (!CMD_PATH.command[command_name].help) 
                            return 'System cannot locate a help topic for this command.'
                        }
            },
            'if': {
              name: 'if',
              summary: 'performs conditional processing',
              help: 'Performs conditional processing.\n' +
                    'Syntax:\n\n  IF [NOT] EXIST Item Command [Cmd-Params]\n' + 
                    '  IF [NOT] String1==String2 Command [Cmd-Params]\n' +
                    '  IF [NOT] EXIST Item (Command [Cmd-Params]) ELSE [(]Command [Cmd-Params][)]\n' +
                    '  IF [NOT] String1==String2 (Command [Cmd-Params]) ELSE [(]Command [Cmd-Params][)]\n\n' +
                    'If Command Extensions are enabled (Cmd Exts are enabled by default in the terminal), ' +
                    'additional syntax options are:\n' +
                    '\n' +
                    '    IF [/I] String1 Compare-Op String2 Command [Cmd-Params]\n' +
                    '    IF DEFINED Variable Command [Cmd-Params]\n' +
                    '\n' +
                    'Compare-Op may be one of:\n' +
                    '\n' +
                    '  EQU - equal\n' +
                    '  NEQ - not equal\n' +
                    '  LSS - less than\n' +
                    '  LEQ - less than or equal\n' +
                    '  GTR - greater than\n' +
                    '  GEQ - greater than or equal\n' +
                    '\n' +
                    'The /I switch means a case insensitive string comparison.',
              passWholeLineAsParameter: true,
              execute:  function(str){
                          
                          if (!str) return CMD_PATH.response.COMMAND_SYNTAX_ERROR + 'IF'
                          
                          var doIf = function(string){
                            var evaluation, command
                            
                            //trim leading space
                            string = string.replace(/^\s+/,'')
                            
                            // /I
                            var case_insensitive = false
                            if (string.substr(0, 2).match(/\/i/i))
                            {
                              string = string.substr(2)
                              case_insensitive = true
                            }
                            
                            //NOT
                            var not = false
                            if (string.substr(0, 3).match(/not/i))
                            {
                              string = string.substr(3).replace(/^\s+/, '')
                              not = true
                            }
                            
                            //parse quotes and parentheses
                            var statements = parseQuotesAndParentheses(string)
                            if (statements.error) return statements.error
                            
                            //else string
                            var else_string
                            if (string.match(/else/i) && statements.parenthetical[0])
                            {
                              else_string = string.substr(statements.parenthetical[0][0][1] + 1)
                              else_string = else_string.substr(else_string.toLowerCase().indexOf('else') + 4)
                              else_string = else_string.replace(/^\s+/g, '')
                              if (else_string.substr(0, 1) == '(')
                                else_string = string.substr(statements.parenthetical[1][0][0] + 1,
                                                            statements.parenthetical[1][0][1] -
                                                            statements.parenthetical[1][0][0] - 1)
                            }
                            
                            //if exist / defined
                            if (string.substr(0, 5).match(/exist/i) || string.substr(0, 7).match(/defined/i))
                            {
                              var target_item
                              
                              if (string.substr(0, 5).match(/exist/i))
                              {
                                if (string.match(/\s*exist\s+"/i))
                                  target_item = string.substr(statements.quoted[0][0] + 1, 
                                                              statements.quoted[0][1] -
                                                              statements.quoted[0][0] - 1)
                                else
                                {
                                  target_item = string.substr(5)
                                  target_item = target_item.match(/[^\s]+/).toString()
                                }
                                
                                //evaluation
                                if (!not && doCommand('show /e ' + target_item)) evaluation = true
                                else if (not && !doCommand('show /e ' + target_item)) evaluation = true
                                
                                command = string.substr(5)
                              }
                              else if (string.substr(0, 7).match(/defined/i) && enableextensions)
                              {
                                if (string.match(/\s*defined\s+"/i))
                                  target_item = string.substr(statements.quoted[0][0]+1, 
                                                              statements.quoted[0][1]-
                                                              statements.quoted[0][0]-1)
                                else
                                {
                                  target_item = string.substr(7)
                                  target_item = target_item.match(/[^\s]+/).toString()
                                }
                                
                                //evaluation
                                if (!not && CMD_PATH.variable[target_item] != undefined) evaluation = true
                                else if (not && CMD_PATH.variable[target_item] == undefined) evaluation = true
                                
                                command = string.substr(7)
                              }
                              
                              //command
                              command = command.substr(command.indexOf(target_item)+target_item.length+1)
                              command = command.replace(/^\s+/, '')
                              if (command.substr(0, 1) == '(')
                                command = string.substr(statements.parenthetical[0][0][0]+1,
                                                        statements.parenthetical[0][0][1]-
                                                        statements.parenthetical[0][0][0]-1)
                            }
                            //if compare_op
                            else
                            {
                              if (string.substr(0, 1) == "\"" 
                                  && !string.match(/^"[^"]+"\s*[^\s"]+\s*"[^"]+"/)) return false
                              
                              var compare_op_array = {
                                    equ: '==',
                                    neq: '!=',
                                    lss: '<',
                                    leq: '<=',
                                    gtr: '>',
                                    geq: '>='
                                  }
                              
                              //compare-op
                              var compare_op, compare_op_str
                              if (string.match(/^[^\s=]*\s+[^\=\s]+\s+[^\s=]/) && enableextensions)
                              {
                                compare_op_str = string.replace(/\s+/g, ' ')
                                compare_op_str = compare_op_str.split(' ')
                                compare_op_str = compare_op_str[1].toLowerCase()
                                if (compare_op_array[compare_op_str]) compare_op = compare_op_array[compare_op_str]
                                else return CMD_PATH.response.COMMAND_SYNTAX_ERROR + 'IF'
                              }
                              else if (!string.match(/^[^\s=]*\s*==\s*[^\s=]/))
                                return CMD_PATH.response.COMMAND_SYNTAX_ERROR + 'IF'
                              
                              var string_array
                              if (!compare_op)
                                string_array = 
                                  [string.substr(0, string.indexOf('==')), string.substr(string.indexOf('==')+2)]
                              else 
                                string_array = 
                                  [string.substr(0, string.toLowerCase().indexOf(compare_op_str)), 
                                  string.substr(string.toLowerCase().indexOf(compare_op_str)+compare_op_str.length)]

                              //string1
                              var string1 = string_array[0]
                              if (string.substr(0, 1) != "\"" && string1.match('"')) return false
                              string1 = string1.replace(/^\s+|\s+$|"/g, '')
                              
                              //string2
                              //trim leading space
                              string_array[1] = string_array[1].replace(/^\s+/,'')
                              var string2_array = string_array[1].split(' '),
                                  string2 = string2_array[0]
                              if (string.substr(0, 1) != "\"" && string2.match('"')) return false
                              string2 = string2.replace(/^\s+|\s+$|"/g, '')
                              //command
                              command = string2_array.slice(1).join(' ')
                              command = command.replace(/^\s+/, '')
                              if (command.substr(0, 1) == '(')
                                command = string.substr(statements.parenthetical[0][0][0]+1,
                                                        statements.parenthetical[0][0][1]-
                                                        statements.parenthetical[0][0][0]-1)
                              
                              //conditional processing
                              if (case_insensitive)
                              {
                                string1 = string1.toLowerCase()
                                string2 = string2.toLowerCase()
                              }
                              
                              if (!isNaN(string1) && !isNaN(string2) && enableextensions)
                              {
                                if (string1.substr(0,1) == '0') string1 = parseInt(string1, 8)
                                else string1 = Number(string1)
                                if (string2.substr(0,1) == '0') string2 = parseInt(string2, 8)
                                else string2 = Number(string2)
                              }
                              
                              //evaluation
                              if (!compare_op)
                              {
                                if (!not && string1 == string2) evaluation = true
                                else if (not && string1 != string2) evaluation = true
                              }
                              else
                              {
                                if (!not && (eval(string1 + compare_op + string2))) evaluation = true
                                else if (not && !(eval(string1 + compare_op + string2))) evaluation = true
                              }
                            }
                            
                            if (evaluation) return doCommand(command)
                            else if (else_string) return doCommand(else_string)
                            else return false
                          }
                          
                          var response = doIf(str)
                          if (response) return response
                          else return (command_queue[0]) ? '' : '\n'
                        }
            },//END IF COMMAND//
            insert: {
              name: 'insert',
              summary: 'inserts a new command into the cmd.command or User Functions space',
              help: 'Inserts a new command into the cmd.command or User Functions space. Command Name must not ' +
                    'include any spaces. Declare functions in the form: function(){} with or without parameters ' +
                    'between the parentheses.\nIf parameters are objects, declare them between the ' +
                    'parentheses without colons and braces. You may use colons and braces to expand the ' +
                    'object parameters inside the function braces.\nDeclare strings within the function ' +
                    'inside single quotes since double quotes are removed when the function is passed to ' +
                    'system.\nSyntax: INSERT COMMAND Command-Name Javascript-Function / INSERT UF ' +
                    'Command-Name Javascript-Function',
              param: { 
                command:  function (name_and_function){
                            if (!name_and_function) return CMD_PATH.response.COMMAND_SYNTAX_ERROR + 'INSERT' 
                            var command_name = name_and_function[0], exec=''
                          
                            exec = name_and_function.slice(1).join(' ')
                            
                            CMD_PATH.command[command_name] = {
                              name: command_name,
                              eval: true,
                              execute: exec
                            }
                            
                            return 'Inserted command ' + CMD_PATH.command[command_name].name
                          },
                uf: function (name_and_function){
                      if (!name_and_function) return CMD_PATH.response.COMMAND_SYNTAX_ERROR + 'INSERT'
                      var command_name = name_and_function[0], exec=''
                      
                      exec = name_and_function.slice(1).join(' ')
                      
                      USER_FUNCTIONS_PATH[command_name] = {
                        name: command_name,
                        eval: true,
                        execute: exec
                      }
                      
                      return 'Inserted User Function ' + USER_FUNCTIONS_PATH[command_name].name
                    }
              }
            },
            map: {
              name: 'map',
              summary: 'adds directoryInfo object(s) to object(s)',
              help: 'Attempts to recursively add a directoryInfo object to all objects in the object\'s tree. ' +
                    'The object must already have its own directoryInfo object (see CHILD parameter below for '+
                    'information about how to add it). The optional parameter CHILD attempts to add a ' +
                    'directoryInfo object to only one child, and must be followed by the Child-Name (e.g., C) ' +
                    'and Parent-Path (e.g., terminal.C)\nThe optional parameter TERMINAL maps the terminal ' +
                    'object. \nSyntax: MAP Object-Name | MAP CHILD Child-Path Parent-Path | MAP TERMINAL',
              execute:  function (object_name){
                          if (!object_name) return CMD_PATH.response.COMMAND_SYNTAX_ERROR + 'MAP'              
              
                          object_name = object_name.join('')
                          var too_large_array = ['window', 'document', 'document.body']
                          
                          if (too_large_array.indexOf(object_name) != -1)
                            return 'The object ' + object_name + ' might be too large to map. Try a child of ' +
                                   'this object'
                          
                          var object_name_array = object_name.replace(/Window:\\/i, '').split(/\.|\\/),
                              obj = window
                          
                          //get object
                          for (var i in object_name_array)
                          {
                            if (obj[object_name_array[i]]) obj = obj[object_name_array[i]]
                            else return 'System cannot construct object ' + object_name
                          }
                          
                          if (typeof(obj) == 'object')
                          {
                            addDirInfo(obj)
                            return 'Mapped ' + object_name
                          }
                          else return object_name + ' does not seem a valid object'
                       },
              param: {
                terminal: function(){
                  for (i in window)
                  {
                    if (window[i] && typeof(window[i]) == 'object' && window[i]['C'] 
                        && window[i]['C']['Documents and Settings'] && window[i]['C']['Terminal'])
                    {
                      addDirInfo(window[i])
                      return 'Terminal mapped'
                    }
                  }
                },
                child: function(child_and_parent){
                      child_name = child_and_parent[0]
                      parent_name = child_and_parent[1]
                              
                      var parent_name_array = (parent_name.match(/Window:\\/i)) ? 
                                              ['window'] : parent_name.replace(/Window:\\/i, '').split(/\.|\\/),
                          parent_obj = window,
                          child_obj
                          
                      //get objects
                      for (var i in parent_name_array)
                      {
                        if (parent_obj[parent_name_array[i]]) parent_obj = parent_obj[parent_name_array[i]]
                        else return 'System cannot construct object ' + parent_name
                      }
                      
                      child_obj = parent_obj[child_name]
                      if (!child_obj) return 'System cannot construct object ' + child_name
                      
                      if (typeof(child_obj) != 'object')
                        return child_name + ' does not seem a valid object'
                      if (typeof(parent_obj) != 'object')
                        return parent_name + ' does not seem a valid object'
                      
                      if (parent_obj.directoryInfo)
                      {
                        var parent_di_object = parent_obj.directoryInfo.object.slice(0),
                        di_object = parent_obj.directoryInfo.object.slice(0),
                        obji_index = parent_di_object.length
                    
                        di_object[obji_index] = child_name
                        
                        child_obj.directoryInfo = {
                          object: di_object,
                          path: parent_obj.directoryInfo.path + (parent_obj.directoryInfo.path == ROOT ? '' : '\\') 
                                + child_name,
                          hidden: true,
                          parentDirectory: {object: parent_di_object, path: parent_obj.directoryInfo.path}
                          }
                        
                        if (child_obj.directoryInfo) return 'Added a directoryInfo object to ' + parent_name +
                                    '.' + child_name
                        else return 'System cound not add a directoryInfo object to ' + parent_name +
                                    '.' + child_name
                      }
                      else return 'System cannot find directoryInfo object for ' + parent_name
                    }
              }
            },
            matrix: {
              name: 'matrix',
              summary: 'duh?',
              help: 'Hello?\n' +
                    'Syntax: MATRIX [/L Number-Of-Lines] [/S Line-Spacing]',
              execute:  function(num_lines_and_spacing){
                          var matrix_line_spacing = Number(terminalText.style.fontSize.substr(0, 
                                                    terminalText.style.fontSize.length-2)) + 1
                          var matrix_num_lines = Math.floor(Number(terminalText.style.width.substr(0, 
                                                 terminalText.style.width.length-2))/matrix_line_spacing-1)
                          
                          if (num_lines_and_spacing)
                          {
                            if (num_lines_and_spacing.length > 4 || num_lines_and_spacing.length%2 != 0)
                              return CMD_PATH.response.COMMAND_SYNTAX_ERROR + 'MATRIX'
                              
                            for (var i=0; i< num_lines_and_spacing.length;)
                            {
                              if (num_lines_and_spacing[i].toLowerCase() == '/l')
                              {
                                if (isNaN(num_lines_and_spacing[i+1])) 
                                  return 'Number-Of-Lines parameter must be a number.'
                                matrix_num_lines = Number(num_lines_and_spacing[i+1])
                              }
                              else if (num_lines_and_spacing[i].toLowerCase() == '/s')
                              {
                                if (isNaN(num_lines_and_spacing[i+1])) 
                                  return 'Line-Spacing parameter must be a number.'
                                matrix_line_spacing = num_lines_and_spacing[i+1]
                              }
                              else return 'Invalid flag ' + Number(num_lines_and_spacing[i])
                              
                              i += 2
                            }
                          }
                          
                          matrix_tmp_font = terminalText.style.fontFamily
                          
                          setTimeout(function(){
                            terminalText.style.fontFamily = 'symbol, Matrix_Code_Font, verdana'
                            matrix_on = true
                            window.clearInterval(blink)
                            document.getElementById(terminalHistoryID).innerHTML = ''
                            document.getElementById(terminalTextID).innerHTML = ''
                          }, 20)
                          
                          setTimeout(function(){
                            createMatrix({
                              divId: terminalTextID,
                              numLines: matrix_num_lines,
                              spacing: matrix_line_spacing
                            })
                          }, 30)
                          
                          return ''
                        }
            },
            mkdir: {
              name: 'mkdir',
              summary: 'creates one or more directories',
              help: 'Creates one or more directories.\nSyntax: MKDIR [/S|/N|/B|/F] Directory-Path\nFor multiple directories, ' +
                    'separate Directory-Paths by commas, semicolons or\nspaces. Enclose Directory-Paths that ' +
                    'have spaces, commas or semicolons in double\nquotes. Optional flags direct terminal to create ' +
                    'item types other than objects:\n/S for string, /N for number, /B for boolean, and /F for function.',
              passWholeLineAsParameter: true,
              execute:  function(paths){
                if (!paths) return CMD_PATH.response.COMMAND_SYNTAX_ERROR + 'MKDIR'

                var to_mk,
                    response = '',
                    target_type
                
                to_mk = splitStringWithQuotedCommas(paths)
                
                if (to_mk[0].match(/^\//))
                {
                  switch(to_mk[0].toLowerCase())
                  {
                    case '/s':
                      target_type = 'string'
                      to_mk.splice(0, 1)
                      break
                    case '/n':
                      target_type = 'number'
                      to_mk.splice(0, 1)
                      break
                    case '/b':
                      target_type = 'boolean'
                      to_mk.splice(0, 1)
                      break
                    case '/f':
                      target_type = 'function'
                      to_mk.splice(0, 1)
                      break
                  }
                }
                
                for (var i in to_mk)
                {
                  var path = to_mk[i],
                      new_dir_name,
                      new_dir_path,
                      obj
                  
                  if (!path.match(/\\/))
                  {
                    if (!current_directory)
                    {
                      response += 'Cannot make directory ' + path + '. Current directory is not set.\n'
                      continue
                    }
                    else 
                    {
                      new_dir_name = path
                      new_dir_path = current_directory.path
                      obj = parsePath(new_dir_path)
                    }
                  }
                  else
                  {
                    //separate new object name from path
                    var new_dir_name = String(path.match(/\\[^\\]+\\?$/)).replace(/\\/g, '')
                    new_dir_path = String(path.match(/.+(?=\\[^\\]+\\?$)/))
                    
                    obj = parsePath(new_dir_path)
                    if (obj.parsePathError) 
                    {
                      response += obj.parsePathError + ': ' + path + '\n'
                      continue
                    }
                  }
                  
                  if (new_dir_name.match(/[\|*?<>:/]/))
                  {
                    response += new_dir_name + ' contains an llegal character. \\/|*?:<> '
                                + 'cannot be used for file or directory names.\n'
                    continue
                  }
                  else if (obj[new_dir_name])
                  {
                    response += new_dir_path + (new_dir_path.substr(-1) == '\\' ? '' : '\\') 
                                + new_dir_name  + ' already exists'
                    continue
                  }
                  else
                  {
                    if (!target_type) 
                    {
                      obj[new_dir_name] = {}
                      doCommand('map child ' + '"' + new_dir_name + '" "' + new_dir_path + '"')
                    }
                    else
                    {
                      switch(target_type)
                      {
                        case 'string':
                          obj[new_dir_name] = String('')
                          break
                        case 'number':
                          obj[new_dir_name] = Number(0)
                          break
                        case 'boolean':
                          obj[new_dir_name] = Boolean(false)
                          break
                        case 'function':
                          obj[new_dir_name] = function(){}
                          break
                      }
                    }
                  }
                }
                
                return (response == '') ? '\n' : response
              }
            },
            remove: {
              name: 'remove',
              summary: 'removes a command from the cmd.command or User Functions space',
              help: 'Removes a command from the cmd.command or User Functions space. For multiple\nitems, ' +
                    'separate commands by commas, semicolons or spaces.\nSyntax: ' +
                    'REMOVE COMMAND Command-Name(s)',
              param: { 
                command:  function (command_names){
                            if (!command_names) return CMD_PATH.response.COMMAND_SYNTAX_ERROR + 'REMOVE'
                            
                            var to_remove,
                                response = ''
                            
                            command_names = command_names.join('')
                            to_remove = splitStringWithQuotedCommas(command_names)
                            
                            for (var i=0; i<to_remove.length; i++)
                            {
                              if (CMD_PATH.command[to_remove[i]] == undefined)
                                response += 'System cannot find command ' + to_remove[i]
                              else
                              {
                                delete CMD_PATH.command[to_remove[i]]
                                response += 'Removed command ' + to_remove[i]
                              }
                              
                              if (i < to_remove.length-1) response += '\n'
                            }
                            
                            return response
                          },
                uf:  function (command_names){
                            if (!command_names) return CMD_PATH.response.COMMAND_SYNTAX_ERROR + 'REMOVE'
                            
                            var to_remove,
                                response = ''
                            
                            to_remove = splitStringWithQuotedCommas(command_names)
                            
                            for (var i=0; i<to_remove.length; i++)
                            {
                              if (USER_FUNCTIONS_PATH[to_remove[i]] == undefined)
                                response += 'System cannot find user-function ' + to_remove[i]
                              else
                              {
                                delete USER_FUNCTIONS_PATH[to_remove[i]]
                                response += 'Removed user-function ' + to_remove[i]
                              }
                              
                              if (i < to_remove.length-1) response += '\n'
                            }
                            
                            return response
                          }
              }
            },
            rename: {
              name: 'rename',
              summary: 'renames an item',
              help: 'Renames an item.\nSyntax: ' +
                    'RENAME [PATH]ITEM [PATH]NEW-ITEM',
              execute:  function(items){
                          if (!items || items[3]) return CMD_PATH.response.COMMAND_SYNTAX_ERROR + 'RENAME'
                          var response = '', 
                              is_object = false
                          
                          doCommand('copy ' + items[0] + ' ' + items[1])
                          if (typeof parsePath(items[0]) == 'object') is_object = true
                          
                          if (!is_object) doCommand('del ' + items[0])
                          else doCommand('rmdir ' + items[0])
                          
                          return (response == '') ? '\n' : response
                        }
            },
            rmdir: {
              name: 'rmdir',
              summary: 'removes one or more directories',
              help: 'Removes one or more directories.\nSyntax: RMDIR Directory-Path\nFor multiple directories, ' +
                    'separate Directory-Paths by commas, semicolons or\nspaces. Enclose Directory-Paths that ' +
                    'have spaces, commas or semicolons in double\nquotes.',
              passWholeLineAsParameter: true,
              execute:  function(paths){
                if (!paths) return CMD_PATH.response.COMMAND_SYNTAX_ERROR + 'RMDIR'

                var to_rm,
                    response = ''
                
                to_rm = splitStringWithQuotedCommas(paths)
                
                for (var i in to_rm)
                {
                  var path = to_rm[i],
                      dir_name,
                      dir_path,
                      obj
                  
                  if (!path.match(/\\/))
                  {
                    if (!current_directory)
                    {
                      response += 'Cannot remove directory ' + path + '. Current directory is not set.\n'
                      continue
                    }
                    else 
                    {
                      dir_name = path
                      dir_path = current_directory.path
                      obj = parsePath(dir_path)
                    }
                  }
                  else
                  {
                    //separate new object name from path
                    var dir_name = String(path.match(/\\[^\\]+\\?$/)).replace(/\\/g, '')
                    dir_path = String(path.match(/.+(?=\\[^\\]+\\?$)/))
                    
                    obj = parsePath(dir_path)
                    if (obj.parsePathError) 
                    {
                      response += obj.parsePathError + ': ' + path + '\n'
                      continue
                    }
                  }
                  
                  if (obj[dir_name] && typeof(obj[dir_name]) == 'object') delete obj[dir_name]
                  else if (typeof(obj[dir_name]) != 'object') 
                    response += dir_path + (dir_path.substr(-1) == '\\' ? '' : '\\') 
                                + dir_name  + ' is not a valid directory\n'
                }
                
                return response.replace(/\n$/, '')
              }
            },
            set: {
              name: 'set',
              summary: 'sets or displays information about environment variables',
              help: 'Sets or displays information about environment variables\n' +
                    'Syntax: SET [/P | /A] Variable-Name [=Value]',
              passWholeLineAsParameter: true,
              execute:  function(variable_assignment){
                          var var_list = [], response = ''
                          
                          if (!variable_assignment) return CMD_PATH.response.COMMAND_SYNTAX_ERROR + 'SET'              

                          //if not assignment display information about matching variables
                          if (!variable_assignment.match('='))
                          {
                            var count=0
                            for (var i in CMD_PATH.variable)
                            {
                              if (i.match(variable_assignment))
                              {
                                var_list.push(i)
                                count++
                              }
                            }
                            if (count > 0)
                            {
                              var_list.sort()
                              for (var i=0; i<var_list.length; i++)
                              {
                                response += var_list[i] + '=' + CMD_PATH.variable[var_list[i]] + '<br />'
                              }
                              return response.substr(0, response.length-6)
                            }
                            else return 'Environment variable ' + variable_assignment + ' not defined'
                          }
                          //if assignment, assign
                          else
                          {
                            var variable_assignment_array = []
                            variable_assignment_array[0] = 
                              variable_assignment.substr(0, variable_assignment.indexOf('='))
                            variable_assignment_array[1] = 
                              variable_assignment.substr(variable_assignment.indexOf('=')+1)
                            //trim variable
                            variable_assignment_array[0] = variable_assignment_array[0].replace(/^\s+|\s+$/g, '')
                            
                            //if not input or arithmetic set
                            if (!variable_assignment_array[0].substr(0,2).match(/\/p/i)
                                && !variable_assignment_array[0].substr(0,2).match(/\/a/i))
                            {
                              CMD_PATH.variable[variable_assignment_array[0]] = variable_assignment_array[1]
                              return (command_queue[0]) ? '' : '\n'
                            }
                            //if input
                            else if (variable_assignment_array[0].substr(0,2).match(/\/p/i))
                            {
                              //remove parameter
                              variable_assignment_array[0] = variable_assignment_array[0].substr(2)
                              //trim variable
                              variable_assignment_array[0] = variable_assignment_array[0].replace(/^\s+|\s+$/g, '')
                              //paint input string if any
                              
                              return {
                                  responseType: 'input',
                                  inputText: variable_assignment_array[1],
                                  variable: variable_assignment_array[0]
                                }
                            }
                            //if arithmetic
                            else if (variable_assignment_array[0].substr(0,2).match(/\/a/i))
                            {
                              var line = variable_assignment.substr(variable_assignment.indexOf('/a')+2),
                                  expressions = line.split(',')
                              
                              for (var i=0; i<expressions.length; i++)
                              {
                                //split expression into variable and assignment
                                var expression = expressions[i].split('='),
                                    variable = expression[0],
                                    assignment = expression[1],
                                    operator = '='
                                
                                if (expression.length < 2) return 'Missing assignment operator'
                                //assignment
                                //replace variable names not surrounded by '%' in assignment with variables
                                var regex = /[a-zA-Z_]+((\d+)?([a-zA-Z_]+)?)+/g, found_variable
                                while ( (found_variable = regex.exec(assignment)) )
                                {
                                  if (found_variable.index-1 >= 0
                                      && !isNaN(assignment.substr(found_variable.index-1,1))
                                      && !(assignment.substr(found_variable.index-1,2) == '0x'))
                                    return 'Invalid number.  Numeric constants are either decimal (17), ' 
                                           + 'hexadecimal (0x11), or octal (021).'
                                  if (CMD_PATH.variable[found_variable[0]] != undefined)
                                    assignment = assignment.replace(found_variable[0], CMD_PATH.variable[found_variable[0]])
                                }
                                //replace numbers starting with zero with parsed octal numbers
                                var regex = /^0[\d]+|[\D]0[\d]+/g, found_variable
                                while ( (found_variable = regex.exec(assignment)) )
                                {
                                  var trimmed_variable
                                  if (found_variable.index-1 >= 0
                                      && !isNaN(assignment.substr(found_variable.index-1,1)))
                                    trimmed_variable = found_variable[0].substr(1)
                                  assignment = assignment.replace(trimmed_variable, parseInt(trimmed_variable,8))
                                }
                                
                                //variable
                                //trim variable
                                variable = variable.replace(/^\s+|\s+$/g, '')
                                //find if variable includes extra operator
                                var operators1 = ['*', '/', '%', '+', '-', '&', '^', '|'],
                                    operators2 = ['<<', '>>'],
                                    operators3 = ['<', '>']
                                if (operators1.indexOf(variable.substr(-1)) != -1)
                                {
                                  operator = operators1[operators1.indexOf(variable.substr(-1))] + operator
                                  variable = variable.substr(0, variable.length-1)
                                }
                                if (operators2.indexOf(variable.substr(-2)) != -1)
                                {
                                  operator = operators2[operators2.indexOf(variable.substr(-2))] + operator
                                  variable = variable.substr(0, variable.length-2)
                                }
                                if (operators3.indexOf(variable.substr(-1)) != -1)
                                {
                                  operator = operators3[operators3.indexOf(variable.substr(-1))] + operator
                                  variable = variable.substr(0, variable.length-1)
                                }
                                
                                var tmp_var, tmp_assign
                                  
                                if (CMD_PATH.variable[variable]) tmp_var = CMD_PATH.variable[variable]
                                else tmp_var = 0
                                
                                if (operator.length > 1)
                                {
                                  operator = operator.substr(0, operator.length-1)
                                  tmp_assign = eval(tmp_var + operator + '(' + assignment + ')')
                                  if (!isNaN(tmp_assign)) response = CMD_PATH.variable[variable] = tmp_assign
                                  else return 'Expression is not a number'
                                }
                                else
                                {
                                  response = CMD_PATH.variable[variable] = eval(assignment)
                                }
                              }
                              
                              return response
                            }
                          }
                        }
            },
            setlocal: {
              name: 'setlocal',
              summary: 'begins localization of environment changes',
              help: 'Begins localization of environment changes.\nSyntax: SETLOCAL [ENABLEEXTENSIONS] ' + 
                    '[ENABLEDELAYEDEXPANSION]',
              execute:  function(options){
                          
                          if (options)
                          {
                            for (var i=options.length-1; i>=0; i--)
                            {
                              if (options[i].toLowerCase() == 'enableextensions') enableextensions = true
                              else if (options[i].toLowerCase() == 'enabledelayedexpansion') 
                                enabledelayedexpansion = true
                              else return CMD_PATH.response.COMMAND_SYNTAX_ERROR + 'SETLOCAL'
                            }
                          }
                          
                          return (command_queue[0]) ? '' : '\n'
                        }
            },
            show: {
              name: 'show',
              summary: 'displays the value of a boolean, number, or string; or the text of a function',
              help: 'Displays the value of a boolean, number, or string; or the text of a function\n' +
                    'Syntax: SHOW Path',
              passWholeLineAsParameter: true,
              execute:  function(path){
                          if (!current_directory) return 'Please set current directory'
                          if (!path) return CMD_PATH.response.COMMAND_SYNTAX_ERROR + 'SHOW'
                          path = splitStringWithDoubleQuotes(path)[0]
                          
                          //return true or false if /e switch is set
                          if (path.substr(0,2).match(/\/e/i))
                          {
                            exist = true
                            path = path.substr(2)
                          }
                          
                          var target_item = parsePath(path), 
                              exist = false
                          
                          if (target_item.parsePathError) return target_item.parsePathError
                          
                          if (!exist)
                          {
                            if (!target_item) return 'The item is undefined'
                            else return target_item
                          }
                          else
                          {
                            if (!target_item) return false
                            else return true
                          }
                        }
            },
            
            //terminal self commands
            terminal: {
              name: 'terminal',
              summary: 'displays or configures terminal variables',
              help: 'Displays or configures terminal variables.\nSyntax: TERMINAL Option ' +
                    '[value]\nOptions: width, height, background-color, font-color,  font-size, ' +
                    'font-weight, font-family, draggable [off]',
              //terminal width
              param: {
                width:  function(width){
                          width = width.join('')
                          if (!width) return 'Terminal width is ' + terminalDiv.style.width
                          else
                          {
                            var value = Number(width)/1
                            if (!isNaN(value))
                            {
                              terminalDiv.style.width = value
                              headingDiv.style.width = value
                              terminal.style.width = .5*(value-16)
                              terminalText.style.width = value-16
                              terminalHistory.style.width = value-16
                              return 'Terminal width set at ' + terminalDiv.style.width
                            }
                            else return CMD_PATH.response.VALUE_NUMBER_ERROR
                          }
                        },
                height: function(height){
                          height = height.join('')
                          if (!height) return 'Terminal height is ' + terminalDiv.style.height
                          else
                          {
                            var value = Number(height)/1
                            if (!isNaN(value)) {
                              terminalDiv.style.height = value
                              return 'Terminal height set at ' + terminalDiv.style.height
                            }
                            else return CMD_PATH.response.VALUE_NUMBER_ERROR
                          }
                        },
                'background-color': function(background_color){
                                      background_color = background_color.join('')
                                      if (!background_color) return 'Terminal background-color is '
                                                                    + terminalDiv.style.backgroundColor
                                      else
                                      {
                                        terminalDiv.style.backgroundColor = background_color
                                        terminalText.style.backgroundColor = background_color
                                        terminalHistory.style.backgroundColor = background_color
                                        return 'terminal background-color set to '
                                               + terminalDiv.style.backgroundColor
                                      }
                                    },
                  
                'font-color': function(font_color){
                                font_color = font_color.join('')
                                if (!font_color)
                                {
                                  if (!terminal.style.color) return 'Terminal font-color is undefined'
                                  else return 'Terminal font-color is ' + terminalText.style.color
                                }
                                else
                                {
                                  terminalText.style.color = font_color
                                  terminalHistory.style.color = font_color
                                  return 'Terminal font-color set to ' + terminalText.style.color
                                }
                              },
                'font-size':  function(font_size){
                                font_size = font_size.join('')
                                if (!font_size)
                                {
                                  if (!terminalText.style.fontSize) return 'Terminal font-size is undefined'
                                  else return 'Terminal font-size is ' + terminalText.style.fontSize
                                }
                                else
                                {
                                  terminalText.style.fontSize = font_size
                                  terminalHistory.style.fontSize = font_size
                                  return 'Terminal font-size set to ' + terminalText.style.fontSize
                                }
                              },
              'font-weight':  function(font_weight){
                                font_weight = font_weight.join('')
                                if (!font_weight)
                                {
                                  if (!terminalText.style.fontWeight) return 'Terminal font-weight is undefined'
                                  else return 'Terminal font-weight is ' + terminalText.style.fontWeight
                                }
                                else
                                {
                                  terminalText.style.fontWeight = font_weight
                                  terminalHistory.style.fontWeight = font_weight
                                  return 'Terminal font-weight set to ' + terminalText.style.fontWeight
                                }
                              },
              'font-family':  function(font_family){
                                font_family = font_family.join('')
                                if (!font_family)
                                {
                                  if (!terminalText.style.fontFamily) return 'Terminal font-family is undefined'
                                  else return 'Terminal font-family is ' + terminalText.style.fontFamily
                                }
                                else
                                {
                                  terminalText.style.fontFamily = font_family
                                  terminalHistory.style.fontFamily = font_family
                                  return 'Terminal font-family set to ' + terminalText.style.fontFamily
                                }
                              },
              draggable:  function(on_off){
                            on_off = on_off.join('')
                            if (!on_off) {
                              $('#'+containerID).draggable();
                              return 'Terminal is now draggable'
                            }
                            else if (on_off == 'off') {
                              $('#'+containerID).draggable('destroy')
                              return 'Terminal draggable is now off'
                            }
                            else return CMD_PATH.response.COMMAND_SYNTAX_ERROR + 'TERMINAL'
                          }
              }
            
            },  //END TERMINAL SELF COMMANDS//
            tree: {
              name: 'tree',
              summary: 'returns graphical representation of a directory',
              help:  'Returns graphical representation of a directory<br />' +
                        'Syntax: TREE [PATH]',
              passWholeLineAsParameter: true,
              execute:  function(path){
                          
                          var target_directory,
                              span_start = 'HTML<span>',
                              span_end = 'HTML</span>',
                              P = 'HTML&#9474;', //pipe
                              R = 'HTML&#9492;', //right
                              M = 'HTML&#9500;', //middle
                              D = 'HTML&#9472;' //dash
                              /*
                              P = 'HTML&#9553;', //pipe
                              R = 'HTML&#9562;', //right
                              M = 'HTML&#9568;', //middle
                              D = 'HTML&#9552;' //dash
                              */
                              
                          if (!current_directory) return 'Please set current directory'
                         
                          var target_directory = parsePath(path)
                          
                          if (target_directory == window) 
                            return 'System cannot present a tree of the window object. Try a child object.'
                          
                          if (target_directory.parsePathError) return target_directory.parsePathError
                          
                          if (!target_directory.directoryInfo) 
                            return 'directoryInfo object is undefined, try mapping ' + path +
                                   ' (for help, type HELP MAP)'
                          
                          var readTree = function(readTree_obj){
                            var readTree_response =
                                    (readTree_obj.directoryInfo.path == ROOT) ? 
                                      'WINDOW:.\n' : readTree_obj.directoryInfo.path.toUpperCase() + '\n'
                            var readTree_count = 0
                            
                            for (var i in readTree_obj)
                            {
                              if (!readTree_obj[i].hidden) readTree_count++
                            }
                              
                            var readChild = function(readChild_obj, depth, total_count, depthWhereCountGtOne){
                              var readChild_response = '',
                                  readChild_count = 0
                              
                              for (var i in readChild_obj)
                              {
                                if (!readChild_obj[i].hidden) readChild_count++
                              }
                              
                              if (depthWhereCountGtOne) depthWhereCountGtOne_child = depthWhereCountGtOne.slice(0)
                              else depthWhereCountGtOne_child = []
                              
                              var child_space = (total_count == 1) ? ' ' : P
                              for (var i=0; i<depth; i++)
                              {
                                if (i == 0) child_space += '   '
                                else if (depthWhereCountGtOne_child.indexOf(i) != -1) child_space += P+'   '
                                else child_space += '    '
                              }
                              
                              for (var i in readChild_obj)
                              {
                                if (typeof(readChild_obj[i]) == 'object' && !readChild_obj[i].hidden)
                                {
                                  if (readChild_count != 1)
                                  {
                                    readChild_response += child_space+M+D+D+D+i+' - '
                                                          +typeof(readChild_obj[i])+'\n'
                                    depthWhereCountGtOne_child.push(depth)
                                  }
                                  else 
                                  {
                                    readChild_response += child_space+R+D+D+D+i+' - '
                                                          +typeof(readChild_obj[i])+'\n'
                                    depthWhereCountGtOne_child = depthWhereCountGtOne
                                  }
                                  readChild_response += 
                                    readChild(readChild_obj[i], depth+1, total_count, depthWhereCountGtOne_child)
                                  readChild_count--
                                }
                                else if (typeof(readChild_obj[i]) != 'object')
                                {
                                  if (readChild_count != 1) readChild_response += child_space+M+D+D+D+i+' - '
                                                                                  +typeof(readChild_obj[i])+'\n'
                                  else readChild_response += child_space+R+D+D+D+i+' - '
                                                             +typeof(readChild_obj[i])+'\n'
                                  readChild_count--
                                }
                              }
                              return readChild_response
                            }
                            
                            for (var i in readTree_obj)
                            {
                              if (typeof(readTree_obj[i]) == 'object' && !readTree_obj[i].hidden)
                              {
                                if (readTree_count != 1) readTree_response += M+D+D+D+i+' - '
                                                                              +typeof(readTree_obj[i])+'\n'
                                else readTree_response += R+D+D+D+i+' - '+typeof(readTree_obj[i])+'\n'
                                readTree_response += readChild(readTree_obj[i], 1, readTree_count)
                                readTree_count--
                              }
                              else if (typeof(readTree_obj[i]) != 'object')
                              {
                                if (readTree_count != 1) readTree_response += M+D+D+D+i+' - '
                                                                              +typeof(readTree_obj[i])+'\n'
                                else readTree_response += R+D+D+D+i+' - '+typeof(readTree_obj[i])
                                readTree_count--
                              }
                            }
                            
                            return readTree_response
                          }
                          
                          return readTree(target_directory)
                        }
            },

            unset: {
              name: 'unset',
              summary: 'unsets environment variables',
              help:  'Unsets environment variables\n' +
                     'Syntax: UNSET Variable-Name',
              execute:  function(assigned_variable){
                          if (!assigned_variable) return CMD_PATH.response.COMMAND_SYNTAX_ERROR + 'UNSET'
                          var assigned_variable = assigned_variable.join(''), response
                          if (CMD_PATH.variable[assigned_variable])
                          {
                            delete CMD_PATH.variable[assigned_variable]
                            response = 'Unset ' + assigned_variable
                          }
                          else response =   'Cannot unset variable ' + assigned_variable + '. ' 
                                            + assigned_variable + ' does not seem to be assigned'
                          return response
                        }
            }
            
          }, //END C.TERMINAL.SYSTEM.TERMINAL.CMD.COMMAND//
          
          //cmd variables
          variable: {} //END C.TERMINAL.SYSTEM.TERMINAL.CMD.VARIABLE//
          
        } //END C.TERMINAL.SYSTEM.TERMINAL.CMD//
      } //END C.TERMINAL.SYSTEM
    } //END C.TERMINAL
	} //END C//
        
        //PATH CONFIGURATIONS
	var C = this.C,
      ROOT = 'Window:\\',
      ROOT_PATH = window,
      CMD_PATH = C.Terminal.System.cmd,
      USER_FUNCTIONS_PATH = C['Documents and Settings']['User']['My Documents']['User Functions'],
      USER = 'Window:\\terminal\\C\\Documents and Settings\\User'
  
  //add directory info
  function addDirInfo(obj){
    for (var i in obj)
    {
      if (obj[i] != null)
      {
        if (typeof(obj[i]) == 'object')
        {
          if (i != 'directoryInfo')
          {
            var parent_di_object = obj.directoryInfo.object.slice(0),
                di_object = obj.directoryInfo.object.slice(0),
                obji_index = parent_di_object.length
            
            di_object[obji_index] = i
            
            obj[i].directoryInfo = {
              object: di_object,
              path: obj.directoryInfo.path + (obj.directoryInfo.path == ROOT ? '' : '\\') 
                    + i,
              hidden: true,
              parentDirectory: {object: parent_di_object, path: obj.directoryInfo.path}
              }
              
            addDirInfo(obj[i])
          }
        }
      }
    }
  }
  
  var current_directory = eval(starting_directory)
  if (!current_directory) current_directory = {object: '', path: ''}
  
  //welcome message
  if (welcome_message) terminalHistory.innerHTML = welcome_message + '<br /><br />'
  terminalText.innerHTML = current_directory.path + promptSymbol 
                           + '<span id="' + this.settings.caretID + '" style="border-bottom: 3px solid ' 
                           + this.settings.fontColor + ';">&nbsp;</span>'
  
  terminal.value = ''
  caret = document.getElementById(this.settings.caretID)
  
  setTimeout(function(){
    blink = self.setInterval(function(){
      blinkBorder(caretID, fontColor_rgb)
    },532)
  },50)
	
	terminalText.ondblclick = function(){
    if (!editor_find_on) terminal.focus()
    else document.getElementById('editorq_find_input').focus()
  }
  terminalDiv.ondblclick = function(){
    if (!editor_find_on) terminal.focus()
    else document.getElementById('editorq_find_input').focus()
  }
  headingDiv.ondblclick = function(){
    if (!editor_find_on) terminal.focus()
    else document.getElementById('editorq_find_input').focus()
  }
  
  terminal.onkeyup = function(e){
    if (!e) e = window.event
    
    if (e.keyCode != 13 && !paginate_on) updateTerminalText()
  }

  terminal.onkeydown = function(e){
    if (!e) e = window.event
    
    if (e.keyCode != 13 && !paginate_on) updateTerminalText()
  }
  
  //TERMINAL ONKEYPRESS SCRIPT//
  terminal.onkeypress = function(e)
  {
    //clear matrix
    if (matrix_on)
    {
      for (var i in matrix_intervalID)
      {
        clearInterval(matrix_intervalID[i])
      }
      for (var i in matrix_subIntervalID)
      {
        clearInterval(matrix_subIntervalID[i])
      }
      for (var i in matrix_subIntervalID2)
      {
        clearInterval(matrix_subIntervalID2[i])
      }
      terminalText.style.fontFamily = matrix_tmp_font
      matrix_on = false
    }
    
    if (!e) e = window.event
    
    //terminal_line_history back
    if (e.keyCode == '38' && set_input == false && paginate_on == false && editor_on == false)
    {
      if (terminal_line_history.length > 0)
      {
        if (!current_directory) current_directory = {object: '', path: ''}
      
        if (terminal_line_history_pointer == -1) terminal_line_history_pointer = terminal_line_history.length-1
        else if (terminal_line_history_pointer > 0) terminal_line_history_pointer--
        if (terminal_line_history[terminal_line_history_pointer])
        {
          terminal.value = terminal_line_history[terminal_line_history_pointer]
          
          setTimeout(function(){
            updateTerminalText()
          },2)
        }
      }
    }
    //terminal_line_history forward
    if (e.keyCode == '40' && set_input == false && paginate_on == false && editor_on == false)
    {
      if (terminal_line_history.length > 0 && terminal_line_history_pointer < terminal_line_history.length-1)
      {
        terminal_line_history_pointer++
        if (!current_directory) current_directory = {object: '', path: ''}
        
        if (terminal_line_history[terminal_line_history_pointer])
        {
          terminal.value = terminal_line_history[terminal_line_history_pointer]
          
          setTimeout(function(){
            updateTerminalText()
          },2)
        }
      }
    }
    //if ENTER is pressed and not SET input command
    else if (e.keyCode == '13' && set_input == false && paginate_on == false && editor_on == false)
    {
      var input_string = terminal.value,
          terminal_input_line = current_directory.path + promptSymbol
                               + input_string.replaceArray(['&', '<', '>', ' '], 
                                      ['&amp;', '&lt;', '&gt;', '&nbsp;'])
      
      terminal_line_history_pointer = -1
         
      //record line input history
      if (terminal_line_history.length < 50) terminal_line_history.push(input_string)
      else
      {
        terminal_line_history.push(input_string)
        terminal_line_history.splice(0,1)
      }
      
      setTimeout(function(){
        terminal.value = ''
        updateTerminalText()
      }, 2)
      
      terminal_response = doCommand(input_string)
      doTerminalResponse(terminal_input_line, terminal_response)
    }
    //editor keyboard functions
    //move editor caret on return
    else if (editor_on && !editor_find_on && e.keyCode == '13')
    {
      setTimeout(function(){updateTerminalText()}, 3)
    }
    //tab
    else if (editor_on && !editor_find_on && e.keyCode == 9 && !isShift)
    {
      if ($('#'+terminalID).prop('selectionStart') == $('#'+terminalID).prop('selectionEnd'))
      {
        var tab_index = $('#'+terminalID).prop('selectionStart'),
            line_start_to_cursor_regex = /[^\n]*$/,
            line_start_to_cursor_regex_result = line_start_to_cursor_regex.exec(terminal.value.substr(0, tab_index)),
            cursor_before_first_word = 
              (!line_start_to_cursor_regex_result[0] || !line_start_to_cursor_regex_result[0].match(/[^\s]/)) ? 
              true : false,
            tab = (line_start_to_cursor_regex_result[0].length%2 == 0) ? '  ' : ' '
           
        if (cursor_before_first_word)
        { 
          var tab_regex_r = / *[^\s]| *\n| *$/,
              tab_regex_result_r = tab_regex_r.exec(terminal.value.substr(tab_index))
              
          terminal.value = terminal.value.substr(0, tab_index) 
                           + tab
                           + terminal.value.substr(tab_index)
          $('#'+terminalID).setCursorPosition(tab_index + tab.length + tab_regex_result_r[0].length - 1)
          updateTerminalText()
          setTimeout(function(){
            terminal.focus()
          }, 10)
        }
        else
        {
         terminal.value = terminal.value.substr(0, tab_index) 
                           + tab
                           + terminal.value.substr(tab_index)
          $('#'+terminalID).setCursorPosition(tab_index + tab.length)
          updateTerminalText()
          setTimeout(function(){
            terminal.focus()
          }, 10)
        }
      }
      else if ($('#'+terminalID).prop('selectionStart') != $('#'+terminalID).prop('selectionEnd'))
      {
        var tab_index_start = $('#'+terminalID).prop('selectionStart'),
            tab_index_end = $('#'+terminalID).prop('selectionEnd'),
            line_start_to_cursor_regex = /[^\n]*$/,
            line_start_to_cursor_regex_result = 
              line_start_to_cursor_regex.exec(terminal.value.substr(0, tab_index_start)),
            line_start_to_first_word_regex = / *(?=[^\s])/,
            line_start_to_first_word_regex_result = 
              line_start_to_first_word_regex.exec(terminal.value.substr(line_start_to_cursor_regex_result.index)),
            selection_to_line_end_regex = /[^\n]*(?=\n)|[^\n]*(?=$)/,
            selection_to_line_end_regex_result = 
              selection_to_line_end_regex.exec(terminal.value.substr(tab_index_end)),
            tab_selection = terminal.value.substr(
                              line_start_to_cursor_regex_result.index,
                              $('#'+terminalID).prop('selectionEnd') - line_start_to_cursor_regex_result.index
                            ),
            tab_regex_l = / */,
            tab_regex_result_l = tab_regex_l.exec(terminal.value.substr(0, line_start_to_cursor_regex_result.index)),
            tab = (!line_start_to_first_word_regex_result[0] 
                    || line_start_to_first_word_regex_result[0].length%2 == 0) ? '  ' : ' '

        tab_selection = tab_selection.split(/\n/)
        var tab_selection_length = tab_selection.length
        for (var i=0; i<tab_selection_length; i++)
        {
          tab_selection[i] = tab + tab_selection[i]
        }
        tab_selection = tab_selection.join('\n')
        terminal.value = terminal.value.substr(0, line_start_to_cursor_regex_result.index) 
                         + tab_selection
                         + terminal.value.substr(tab_index_end)
        $('#'+terminalID ).prop('selectionStart', line_start_to_cursor_regex_result.index)
        $('#'+terminalID ).prop(
                            'selectionEnd', 
                            tab_index_end
                            + selection_to_line_end_regex_result[0].length
                            + (tab_selection_length*tab.length)
                          )
        updateTerminalText()
        setTimeout(function(){
          terminal.focus()
        }, 10)
      }
    }
    else if (editor_on && !editor_find_on && e.keyCode == 9 && isShift)
    {
      if ($('#'+terminalID ).prop('selectionStart') == $('#'+terminalID ).prop('selectionEnd'))
      {
        var tab_index = $('#'+terminalID ).prop('selectionStart'),
            line_start_to_cursor_regex = /[^\n]*$/,
            line_start_to_cursor_regex_result = 
              line_start_to_cursor_regex.exec(terminal.value.substr(0, tab_index)),
            cursor_before_first_word = 
              (!line_start_to_cursor_regex_result[0] || !line_start_to_cursor_regex_result[0].match(/[^\s]/)) ? 
              true : false,
            line_start_to_first_word_regex = / *(?=[^\s])/,
            line_start_to_first_word_regex_result = 
              line_start_to_first_word_regex.exec(terminal.value.substr(line_start_to_cursor_regex_result.index)),
            tab_adj = 0
      
        if (!cursor_before_first_word)
        {
          if (line_start_to_cursor_regex_result 
              && line_start_to_cursor_regex_result[0].length != 0
              && line_start_to_cursor_regex_result[0].length%2 == 0) tab_adj = 2
          else if (line_start_to_cursor_regex_result 
                   && line_start_to_cursor_regex_result[0].length%2 != 0) tab_adj = 1
        }
        else
        {
          if (line_start_to_first_word_regex_result 
                && line_start_to_first_word_regex_result[0].length >= 2) tab_adj = 2
          else if (line_start_to_first_word_regex_result 
                   && line_start_to_first_word_regex_result[0].length < 2) tab_adj = 1
        }
        if (cursor_before_first_word)
          terminal.value = terminal.value.substr(0, tab_index - tab_adj)
                           + terminal.value.substr(tab_index)

        if (!cursor_before_first_word) $('#'+terminalID).setCursorPosition(tab_index - tab_adj)
        else $('#'+terminalID).setCursorPosition(
                                line_start_to_cursor_regex_result.index
                                + line_start_to_first_word_regex_result[0].length 
                                - tab_adj
                              )
        updateTerminalText()
        setTimeout(function(){
          terminal.focus()
        }, 10)
      }
      else if ($('#'+terminalID ).prop('selectionStart') != $('#'+terminalID ).prop('selectionEnd'))
      {
        var tab_index_start = $('#'+terminalID).prop('selectionStart'),
            tab_index_end = $('#'+terminalID).prop('selectionEnd'),
            line_start_to_cursor_regex = /[^\n]*$/,
            line_start_to_cursor_regex_result = 
              line_start_to_cursor_regex.exec(terminal.value.substr(0, tab_index_start)),
            selection_to_line_end_regex = /[^\n]*(?=\n)|[^\n]*(?=$)/,
            selection_to_line_end_regex_result = 
              selection_to_line_end_regex.exec(terminal.value.substr(tab_index_end)),
            tab_selection = terminal.value.substr(
                              line_start_to_cursor_regex_result.index,
                              $('#'+terminalID).prop('selectionEnd') - line_start_to_cursor_regex_result.index
                              + selection_to_line_end_regex_result[0].length
                            )

        tab_selection = tab_selection.split(/\n/)
        var tab_total = 0
        for (var i=0; i<tab_selection.length; i++)
        {
          var line_start_to_first_word_regex = / *(?=[^\s])/,
              line_start_to_first_word_regex_result = 
                line_start_to_first_word_regex.exec(tab_selection[i]),
              tab_adj = 0
           
          if (line_start_to_first_word_regex_result 
              && line_start_to_first_word_regex_result[0].length >= 2) tab_adj = 2
          else if (line_start_to_first_word_regex_result 
                   && line_start_to_first_word_regex_result[0].length < 2
                   && line_start_to_first_word_regex_result[0].length != 0) tab_adj = 1
          
          tab_selection[i] = tab_selection[i].substr(tab_adj)
          tab_total += tab_adj
        }
        tab_selection = tab_selection.join('\n')
     
        terminal.value = terminal.value.substr(0, line_start_to_cursor_regex_result.index) 
                         + tab_selection
                         + terminal.value.substr(tab_index_end + selection_to_line_end_regex_result[0].length)
        $('#'+terminalID ).prop('selectionStart', line_start_to_cursor_regex_result.index)
        $('#'+terminalID ).prop(
                            'selectionEnd', 
                            tab_index_end
                            + selection_to_line_end_regex_result[0].length
                            - tab_total
                          )
        updateTerminalText()
        setTimeout(function(){
          terminal.focus()
        }, 10)
      }
    }
    //help on F9
    else if (editor_on && e.keyCode == 120) 
    {
      $('#editorq_help_menu').toggle('fast')
      
      var color_black_rgb = hex2rgb('#000000'),
          color_bfbfbf_rgb = hex2rgb('#bfbfbf')
      
      $('#editorq_help_tag').css('color', (
        $('#editorq_help_tag').css('color') == color_black_rgb ? color_bfbfbf_rgb : color_black_rgb)
      )
      $('#editorq_help_tag').css('background', (
        $('#editorq_help_tag').css('color') == color_bfbfbf_rgb ? color_black_rgb : color_bfbfbf_rgb)
      )
    }
    //editor find on ctrl+m
    else if (editor_on && !editor_find_on && e.which == 109 && isCtrl == true)
    {
      editor_find_on = true
      $('#editorq_search_menu').toggle('fast')
      setTimeout(function(){
        terminalText.innerHTML = terminal.value.replaceArray(['&', '<', '>', ' ', '\n'], 
                                              ['&amp;', '&lt;', '&gt;', '&nbsp;', '<br />'])
        editor_find_input = document.getElementById('editorq_find_input')
        updateEditorFindWhatText()
        editor_find_input.focus()
        
        //terminal find keyboard functions
        if (editor_find_input)
        {
          editor_find_input.onkeyup = function(){
            if (editor_find_map_pointer == 0)
            {
              updateEditorFindWhatText()
              editorFindWhatFiller('editorq_find_filler')
            }
            else if (editor_find_map_pointer == 2)
            {
              updateEditorFindWhatText()
              editorFindWhatFiller('editorq_replace_filler')
            }
          }
          editor_find_input.onkeydown = function(){
            if (editor_find_map_pointer == 0)
            {
              updateEditorFindWhatText()
              editorFindWhatFiller('editorq_find_filler')
            }
            else if (editor_find_map_pointer == 2)
            {
              updateEditorFindWhatText()
              editorFindWhatFiller('editorq_replace_filler')
            }
          }
        
          editor_find_input.onkeypress = function(e){
            
            if (editor_find_map_pointer == 0)
              editor_find_input_tmp.editorq_find_what = editor_find_input.value
            else if (editor_find_map_pointer == 2)
              editor_find_input_tmp.editorq_replace_with = editor_find_input.value
            
            //editor find return key
            if (e.which == 13)
            {
              //cancel find
              if (editor_find_map_pointer == 7)
              {
                $('#editorq_find_alert').html('')
                cancelEditorFind()
              }
              else if (editor_find_map_pointer != 7 && editor_find_input_tmp.editorq_find_what)
              {
                matchRegex(true)
              }
            }
            
            var updateEditorFindTab = function(type)
            {
              if (editor_find_map_pointer == 0)
              {
                $('#editorq_find_what').html($('#editorq_find_what').text())
                $('#editorq_find_filler').html($('#editorq_find_filler').text())
              }
              else if (editor_find_map_pointer == 2)
              {
                $('#editorq_replace_with').html($('#editorq_replace_with').text())
                $('#editorq_replace_filler').html($('#editorq_replace_filler').text())
              }
              else if (editor_find_map_pointer < 7 && editor_find_map_pointer != 2 && editor_find_map_pointer != 0)
              {
                document.getElementById(editor_find_map[editor_find_map_pointer]).innerHTML = 
                  editor_find_input_tmp[editor_find_map[editor_find_map_pointer]]
              }
              
              setTimeout(function(){
                switch(type)
                {
                  case 'tab':
                    editor_find_map_pointer++
                    if (editor_find_map_pointer == editor_find_map.length) editor_find_map_pointer = 0
                    if (!editor_replace_on && editor_find_map_pointer == 2) editor_find_map_pointer += 2
                    break
                  case 'forward':
                    if (editor_find_map_pointer < 6) editor_find_map_pointer++
                    if (!editor_replace_on && editor_find_map_pointer == 2) editor_find_map_pointer += 2
                    break
                  case 'back':
                    if (editor_find_map_pointer > 0 && editor_find_map_pointer < 7) editor_find_map_pointer--
                    if (!editor_replace_on && editor_find_map_pointer == 3) editor_find_map_pointer -= 2
                    break
                  case 'right':
                    if (editor_find_map_pointer == 6) editor_find_map_pointer++
                    break
                  case 'left':
                    if (editor_find_map_pointer == 7) editor_find_map_pointer--
                    break
                }
                editor_find_input.focus()
                editor_find_input.value = 
                  editor_find_input_tmp[editor_find_map[editor_find_map_pointer]]

                if (editor_find_map_pointer == 6 || editor_find_map_pointer == 7)
                {
                  var other = (editor_find_map_pointer == 6) ? 7 : 6
                  document.getElementById(editor_find_map[other]).innerHTML =
                    editor_find_input_tmp[editor_find_map[other]]
                  document.getElementById(editor_find_map[other]+'_left').innerHTML = '&nbsp;'
                  document.getElementById(editor_find_map[other]+'_right').innerHTML = '&nbsp;'
                  document.getElementById(editor_find_map[editor_find_map_pointer]+'_left').innerHTML = '&#9658;'
                  document.getElementById(editor_find_map[editor_find_map_pointer]+'_right').innerHTML = '&#9668;'
                  $('#editorq_find_input').setCursorPosition(1)
                }
                if (editor_find_map_pointer == 5)
                  document.getElementById(editor_find_map[6]).innerHTML =
                    editor_find_input_tmp[editor_find_map[6]]
                    
                if (editor_find_map_pointer == 1 || editor_find_map_pointer == 3 
                    || editor_find_map_pointer == 4 || editor_find_map_pointer == 5) 
                  $('#editorq_find_input').setCursorPosition(0)
                  
                updateTerminalText('editorq_find_input', 
                                   editor_find_map[editor_find_map_pointer],
                                   editor_find_caret_color)
              }, 10)
            }
             
            switch (e.keyCode)
            {
              case 9:
                updateEditorFindTab('tab')
                break
              case 37: //left
                if (editor_find_map_pointer != 0 && editor_find_map_pointer != 2) updateEditorFindTab('left')
                break
              case 38: //up
                updateEditorFindTab('back')
                break
              case 39: //right
                if (editor_find_map_pointer != 0 && editor_find_map_pointer != 2) updateEditorFindTab('right')
                break
              case 40: //down
                updateEditorFindTab('forward')
                break
            }
            //toggle help on F9
            if (editor_on && editor_find_on && e.keyCode == 120) 
            {
              $('#editorq_help_menu').toggle('fast')
              
              var color_black_rgb = hex2rgb('#000000'),
                  color_bfbfbf_rgb = hex2rgb('#bfbfbf')
              
              $('#editorq_help_tag').css('color', (
                $('#editorq_help_tag').css('color') == color_black_rgb ? color_bfbfbf_rgb : color_black_rgb)
              )
              $('#editorq_help_tag').css('background', (
                $('#editorq_help_tag').css('color') == color_bfbfbf_rgb ? color_black_rgb : color_bfbfbf_rgb)
              )
            }
            
            if (editor_find_map_pointer != 0 && editor_find_map_pointer != 2)
            {
              switch (e.which) //w-119 n-110 c-99 r-114 i-105 a-97
              {
                case 119:
                  if (editor_find_map_pointer < 7 && editor_find_map_pointer != 2 && editor_find_map_pointer != 0)
                  {
                    document.getElementById(editor_find_map[editor_find_map_pointer]).innerHTML = 
                      editor_find_input_tmp[editor_find_map[editor_find_map_pointer]]
                  }
                  editor_find_input_tmp.editorq_find_whole_word = 
                    (editor_find_input_tmp.editorq_find_whole_word == 'X') ? ' ' : 'X'
                  editor_find_map_pointer = 5
                  updateEditorFindTab('back')
                  break
                case 99:
                  if (editor_find_map_pointer < 7 && editor_find_map_pointer != 2 && editor_find_map_pointer != 0)
                  {
                    document.getElementById(editor_find_map[editor_find_map_pointer]).innerHTML = 
                      editor_find_input_tmp[editor_find_map[editor_find_map_pointer]]
                  }
                  editor_find_input_tmp.editorq_find_match_case = 
                    (editor_find_input_tmp.editorq_find_match_case == 'X') ? ' ' : 'X'
                  editor_find_map_pointer = 4
                  updateEditorFindTab('forward')
                  break
                case 110:
                  if (editor_find_map_pointer < 7 && editor_find_map_pointer != 2 && editor_find_map_pointer != 0)
                  {
                    document.getElementById(editor_find_map[editor_find_map_pointer]).innerHTML = 
                      editor_find_input_tmp[editor_find_map[editor_find_map_pointer]]
                  }
                  editor_find_map_pointer = 1
                  updateEditorFindTab('back')
                  break
                case 114:
                  editor_replace_on = (editor_replace_on) ? false : true
                  $('#editorq_replace_middle').toggle('fast')
                  $('#editorq_replace_bottom').toggle('fast')
                  editor_find_input_tmp.editorq_replace = 
                    (editor_find_input_tmp.editorq_replace == 'X') ? ' ' : 'X'
                  if (editor_find_map_pointer < 7 && editor_find_map_pointer != 2 && editor_find_map_pointer != 0)
                  {
                    document.getElementById(editor_find_map[editor_find_map_pointer]).innerHTML = 
                      editor_find_input_tmp[editor_find_map[editor_find_map_pointer]]
                  }
                  editor_find_map_pointer = (editor_replace_on) ? 1 : 0
                  updateEditorFindTab('forward')
                  break
                case 105:
                  if (editor_replace_on) 
                  {
                    if (editor_find_map_pointer < 7 && editor_find_map_pointer != 2 && editor_find_map_pointer != 0)
                    {
                      document.getElementById(editor_find_map[editor_find_map_pointer]).innerHTML = 
                        editor_find_input_tmp[editor_find_map[editor_find_map_pointer]]
                    }
                    editor_find_map_pointer = 3
                    updateEditorFindTab('back')
                  }
                  break
                case 97:
                  if (editor_replace_on) 
                  {
                    if (editor_find_map_pointer < 7 && editor_find_map_pointer != 2 && editor_find_map_pointer != 0)
                    {
                      document.getElementById(editor_find_map[editor_find_map_pointer]).innerHTML = 
                        editor_find_input_tmp[editor_find_map[editor_find_map_pointer]]
                    }
                    editor_find_input_tmp.editorq_replace_all = 
                      (editor_find_input_tmp.editorq_replace_all == 'X') ? ' ' : 'X'
                    editor_find_map_pointer = 4
                    updateEditorFindTab('back')
                  }
                  break
              }
            }
          } 
        } //END TERMINAL FIND KEYPRESS FUNCTION
      }, 10)
    }
    //repeat find on f8
    else if (editor_on && e.keyCode == 119 && !editor_find_on && editor_find_input_tmp.editorq_find_what)
    {
      matchRegex(false)
    }
    //switch item-type
    else if (editor_on && !editor_find_on && e.which == 121 && isCtrl == true)
    {
      edited_item_types_pointer++
      if (edited_item_types_pointer == 5) edited_item_types_pointer = 0
      document.getElementById('edited_item_type').innerHTML = edited_item_types[edited_item_types_pointer]
    }
    //save and exit editor, or close on escape
    else if ((editor_on && e.which == 113 && isCtrl == true) || (editor_on && e.keyCode == 27))
    {
      editor_on = false
      var filename_regex = /\\[^\\]+$/,
          filename_regex_result = filename_regex.exec(edited_item)
      edited_item = edited_item.substr(0, filename_regex_result.index) 
                    + '"]["' + filename_regex_result[0].substr(1) + '"]'
      if (edited_item.match(/^window/i))
        edited_item = edited_item.replace(/Window:\\/, 'window["').replace(/\\$/, '').replace(/\\/g, '"]["')
      else 
        edited_item = edited_item.replace(/\\$/, '').replace(/\\/, '["').replace(/\\/g, '"]["')
     
      var terminal_value_escaped = terminal.value.replace(/\\?'/g, function($0, $1){
                                                          return "\\'"
                                                         }).replace(/\r?\n/g, "\\n")
      
      var editor_save_error = ''
      
      if (e.which == 113 && e.keyCode != 27)
      {
        try
        {
          switch(edited_item_types[edited_item_types_pointer])
          {
            case 'function':
              eval(edited_item + '=' + terminal.value)
              break
            case 'string':
              eval(edited_item + '=' + "String('" + terminal_value_escaped + "')")
              break
            case 'number':
            case 'boolean':
              eval(edited_item + '=' + terminal_value_escaped)
              break
            case 'object':
              eval(edited_item + '=' + '(' + terminal.value + ')')
              var edited_item_object = eval(edited_item),
                  evalObjectMethods = function(obj){
                    for (var i in obj)
                    {
                      if (typeof(obj[i]) == 'string' && obj[i].match(/function/i))
                      {
                        eval (edited_item + '["' + i + '"] =' + obj[i])
                      }
                      else if (typeof(obj[i]) == 'object')
                      {
                        evalObjectMethods(obj[i])
                      }
                    }
                  }
                evalObjectMethods(edited_item_object)
                doCommand('map "' + edited_item.replace(/"\]\[[^\[\]]+\]$/, '').replace(/\["|"\]\["/g, '.') + '"')
              break
          }
        }
        catch(error)
        {
          editor_save_error = '<br />' + error + '<br />' + 'Item saved as string.'
          eval(edited_item + '=' + "String('" + terminal_value_escaped + "')")
        }
      }
      
      setTimeout(function(){
        doCommand('terminal font-color ' + terminal_font_color_tmp)
        doCommand('terminal font-weight ' + terminal_font_weight_tmp)
        doCommand('terminal background-color ' + terminal_background_color_tmp)
        $('#'+terminalTextID).unwrap()
        $('#'+terminalDivID).css('overflow-y', 'auto')
        $('#'+terminalDivID).css('word-wrap', 'break-word')
        terminal_response = ''
        $('#editorq_footer').remove()
        terminalHistory.innerHTML = terminal_history_tmp
        terminalHistory.innerHTML += ((editor_called_from_queue) ? '' : terminal_text_tmp) 
                                     + editor_save_error + '<br />'
                                     + ((editor_called_from_queue && !editor_save_error) ? '' : '<br />')
        editor_called_from_queue = false
        terminalText.innerHTML = ''
        terminalText.style.height = 10
        terminal.value = ''
        updateTerminalText()
        setTimeout(function(){terminalDiv.scrollTop = terminalDiv.scrollHeight}, 5)
      }, 100)
    }
    //if ENTER is pressed and SET input command
    else if (e.keyCode == '13' && set_input == true)
    {
      CMD_PATH.command.set.execute(set_input_variable + '=' + terminal.value)
      set_input = false
      
      var text = terminal.value
    
      terminalHistory.innerHTML += ((batch_processing_on && !batch_first_command) ? '' : '<br />')
                                   + set_input_text 
                                   + text.replaceArray(['&', '<', '>', ' '], 
                                      ['&amp;', '&lt;', '&gt;', '&nbsp;'])
                                   + '<br />' + ((command_queue[0] || batch_processing_on) ? '' : '<br />')
      
      if (batch_first_command) batch_first_command = false
      terminal_response = ''
      
      setTimeout(function(){
        set_input_variable = ''
        set_input_text = ''
        terminal.value = ''
        updateTerminalText()
      
        if (command_queue[0]) doTerminalResponse('', doCommand(command_queue[0]))
        else if (batch_processing_on && batch_command_pointer < batch_command_queue.length)
        {
          batch_command_pointer++
          if (batch_command_pointer == batch_command_queue.length - 1) batch_processing_on = false
          doTerminalResponse('', doCommand(batch_command_queue[batch_command_pointer]))
        }
      }, 2)
    }
    else if (e.keyCode == '13' && paginate_on)
    {
      doPaginate()
    }
    else if (e.keyCode == '0' && paginate_on)
    {
      doPaginate()
    }
  } //END TERMINAL.KEYPRESS FUNCTION//
  
  //pagination
  paginate = function (paginationSettings)
  {
    /*
    paginationSettings = {
      paginationOutput: required,
      pagination_separator: optional,
      paginationDivID: optional,
      pagination_height: optional
    }
    */
    var paginate_response = {}
    if (!paginationSettings || !paginationSettings.paginationOutput)
    {
      paginate_response.error = 'No information to paginate.'
      return paginate_response.error
    }
    
    //pagination settings
    pagination_output = paginationSettings.paginationOutput
    pagination_separator = 
          paginationSettings.paginationSeparator ? paginationSettings.paginationSeparator : '\n'
    paginationDivID =
          paginationSettings.paginationDivID ? paginationSettings.paginationDivID : 'pageq'
    pagination_height = paginationSettings.paginationHeight ? paginationSettings.paginationHeight :
                            Number(terminalDiv.style.height.substr(0, terminalDiv.style.height.length-2))
    
    paginate_on = true
    pagination_output = pagination_output.split(pagination_separator)
    pagination_num_per_line = undefined
    
    setTimeout(function(){
      $('#'+terminalTextID).before($('<div id="' + paginationDivID 
                               + '"></div>'))
    },2)
    setTimeout(function(){
      pagination_div = document.getElementById(paginationDivID)
    },3)
    setTimeout(function(){doPaginate()},4)
  }
  
  doPaginate = function(){
    var pagination_html
    
    while (paginate_on && pagination_div.clientHeight < pagination_height 
           && pagination_pointer < pagination_output.length)
    {
      pagination_html = pagination_output[pagination_pointer]
      //convert html tags unless they are escaped
      pagination_html = pagination_html.toString().replace(/(HTML)?&/g, function($0, $1){
                            return $1 ? '&' : '&amp;'
                          })
                          
      pagination_html = pagination_html.replace(/ /g, '&nbsp;').replace(/HTML<[^>]+>/g, function($0){
                            return $0.replace(/&nbsp;/g, ' ')
                          }).replace(/(HTML)?</g, function($0, $1){
                            return $1 ? '<' : '&lt;'
                          })
                          
      pagination_html = pagination_html.replace(/\n\r?/g, '<br />')
    
      pagination_div.innerHTML += pagination_html 
      if (pagination_pointer < pagination_output.length-1) pagination_div.innerHTML += pagination_separator.replace(/\n\r?/g, '<br />')
      
      pagination_pointer++
    }
    if (pagination_pointer < pagination_output.length-1)
    {
      if (pagination_num_per_line)
      {
        setTimeout(function(){
          while (pagination_pointer%pagination_num_per_line != 0)
          {
            pagination_html = pagination_output[pagination_pointer++]
            //convert html tags unless they are escaped
            pagination_html = pagination_html.toString().replace(/(HTML)?&/g, function($0, $1){
                                  return $1 ? '&' : '&amp;'
                                })
                                
            pagination_html = pagination_html.replace(/ /g, '&nbsp;').replace(/HTML<[^>]+>/g, function($0){
                                  return $0.replace(/&nbsp;/g, ' ')
                                }).replace(/(HTML)?</g, function($0, $1){
                                  return $1 ? '<' : '&lt;'
                                })
                                
            pagination_html = pagination_html.replace(/\n\r?/g, '<br />')
            
            pagination_div.innerHTML += pagination_html
            if (pagination_pointer < pagination_output.length-1) pagination_div.innerHTML += pagination_separator.replace(/\n\r?/g, '<br />')
          }
        }, 2)
      }
      setTimeout(function(){
        terminalHistory.innerHTML += pagination_div.innerHTML
      },5)
      setTimeout(function(){
        pagination_div.innerHTML = ''
      },6)
      setTimeout(function(){terminalText.innerHTML = 'Press any key to continue . . .'},7)
      setTimeout(function(){
        terminal.value = ''
        terminalText.innerHTML += '<span id="' + caretID 
                                  + '" style="border-bottom: 3px solid ' 
                                  + fontColor + ';">&nbsp;</span>'
          blink = window.clearInterval(blink)
          blink = setInterval(function(){
            blinkBorder(caretID, fontColor_rgb)
          },532)
      }, 8)
      setTimeout(function(){terminalDiv.scrollTop = terminalDiv.scrollHeight},9)
    }
    else
    {
      terminalHistory.innerHTML += pagination_div.innerHTML + '<br /><br />'
      setTimeout(function(){
        $('#'+paginationDivID).remove()
        pagination_div = undefined
        paginationDivID = undefined
        pagination_num_per_line = undefined
        terminal.value = ''
      },2)
      setTimeout(function(){
        updateTerminalText()
      },3)
      setTimeout(function(){terminalDiv.scrollTop = terminalDiv.scrollHeight},5)
      terminal_response = ''
      paginate_on = false
      pagination_pointer = 0
      pagination_height = undefined
      pagination_separator = undefined
      pagination_output = undefined
    }
  } //END DOPAGINATE //
  
  var isCtrl = false,
      isShift = false
  document.onkeyup = function(e){ 
    if (e.which == 17) isCtrl = false
    if (e.which == 16) isShift = false
  }
  
  document.onkeydown = function(e){
    
    if (e.which == 16) isShift = true
    
    //cancel pagination on Ctrl+C
    if (e.which == 17) isCtrl = true
    
    if (paginate_on && e.which == 67 && isCtrl == true)
    {
      paginate_on = false
      terminalHistory.innerHTML += pagination_div.innerHTML + '<br />'
      
      setTimeout(function(){
        terminalHistory.innerHTML += (terminalHistory.innerHTML.substr(-8) == '<br><br>' ? '' : '<br />')
        $('#'+paginationDivID).remove()
        pagination_div = undefined
        paginationDivID = undefined
      },2)
      setTimeout(function(){
        terminal.value = ''
        updateTerminalText()
      },3)
      setTimeout(function(){terminalDiv.scrollTop = terminalDiv.scrollHeight}, 5)
      terminal_response = ''
      paginate_on = false
      pagination_pointer = 0
      pagination_height = undefined
      pagination_separator = undefined
      pagination_output = undefined
      return false
    } 
  }
  
  function updateTerminalText(inputID, outputID, caret_color, cutoff_left, cutoff_right){
    var input_id = (inputID) ? inputID : terminalID,
        str = document.getElementById(input_id).value,
        cursor_position,
        letter,
        substr1,
        substr2,
        blink_color = (caret_color) ? caret_color : fontColor_rgb
    
    if (!set_input && !editor_on) terminalText.innerHTML = current_directory.path + promptSymbol
    else if (set_input) terminalText.innerHTML = set_input_text
    else if (editor_on && !editor_find_on) terminalText.innerHTML = ''
    
    var output_string
    
    //get selection if editor
    if (!editor_on || (editor_on && editor_find_on))
    {
      cursor_position = $('#'+input_id ).prop('selectionStart')
      letter = str.charAt(cursor_position).replaceArray(['&', '<', '>', ' '], ['&amp;', '&lt;', '&gt;', '&nbsp;']).replace(/\n\r?/g, '&nbsp;<br />'),
      substr1 = str.substr(0, cursor_position)
      substr2 = str.substr(cursor_position+1)
      
      if (cutoff_left) substr1 = substr1.substr(-cutoff_left)
      else if (cutoff_left == 0) substr1 = ''
      if (cutoff_right || cutoff_right == 0) substr2 = substr2.substr(0, cutoff_right)
      
      for (var i=0; i<substr1.length; i+=8)
      {
        substr1 = substr1.substr(0, i) + '&#8203;' + substr1.substr(i)
      }
      
      for (var i=0; i<substr2.length; i+=8)
      {
        substr2 = substr2.substr(0, i) + '&#8203;' + substr2.substr(i)
      }
      
      substr1 = substr1.replace(/\n\r?/g, '<br />')
      substr2 = substr2.replace(/\n\r?/g, '<br />')
    }
    else
    {
      var editor_selection = {
            start: $('#'+terminalID).prop('selectionStart'),
            end: $('#'+terminalID).prop('selectionEnd')
          },
          caret_position,
          editor_position_calc,
          col_num,
          line_num
      
      if (editor_selection.start == editor_selection.end) editor_selecting_backwards = false
      if (editor_selection.start != editor_selection.end && editor_selection.start < editor_last_selected_start) 
      {
        editor_selecting_backwards = true
      }
      
      if (editor_selecting_backwards) 
      {
        letter = str.charAt(editor_selection.start).replaceArray(['&', '<', '>', ' '], ['&amp;', '&lt;', '&gt;', '&nbsp;']).replace(/\n\r?/g, '&nbsp;<br />'),
        substr1 = str.substr(0, editor_selection.start).replaceArray(['&', '<', '>', ' '], ['&amp;', '&lt;', '&gt;', '&nbsp;']).replace(/\n\r?/g, '<br />')
        substr2 = '<span style="color:#000; background:#bfbfbf;">' 
                  + str.substr(editor_selection.start + 1, 
                      editor_selection.end - editor_selection.start - 1
                    ).replaceArray(['&', '<', '>', ' '], ['&amp;', '&lt;', '&gt;', '&nbsp;']
                    ).replace(/\n\r?/g, '<br />')
                  + '</span>'
                  + str.substr(editor_selection.end).replaceArray(['&', '<', '>', ' '], ['&amp;', '&lt;', '&gt;', '&nbsp;']).replace(/\n\r?/g, '<br />')
        blink_color = hex2rgb('#000000')
        caret_position = editor_selection.start
      }
      else
      {
        substr1 = str.substr(0, editor_selection.start).replaceArray(['&', '<', '>', ' '], ['&amp;', '&lt;', '&gt;', '&nbsp;']).replace(/\n\r?/g, '<br />')
                  + '<span style="color:#000; background:#bfbfbf;">' 
                  + str.substr(editor_selection.start, 
                      editor_selection.end-editor_selection.start
                    ).replaceArray(['&', '<', '>', ' '], ['&amp;', '&lt;', '&gt;', '&nbsp;']
                    ).replace(/\n\r?/g, '<br />')
                  + '</span>'
        letter = str.charAt(editor_selection.end).replaceArray(['&', '<', '>', ' '], ['&amp;', '&lt;', '&gt;', '&nbsp;']).replace(/\n\r?/g, '&nbsp;<br />'),
        substr2 = str.substr(editor_selection.end+1).replaceArray(['&', '<', '>', ' '], ['&amp;', '&lt;', '&gt;', '&nbsp;']).replace(/\n\r?/g, '<br />')
        blink_color = hex2rgb('#bfbfbf')
        caret_position = editor_selection.end
      }
      editor_last_selected_start = editor_selection.start
      editor_last_cursor_position = caret_position
    
      //display line and column numbers
      editor_position_calc = str.substr(0, caret_position).split(/\n/)
      line_num = editor_position_calc.length
      col_num = editor_position_calc[editor_position_calc.length-1].length+1
      $('#editorq_line_num').html(line_num)
      $('#editorq_col_num').html(col_num)
    }
    
    if (letter == '') letter = '&nbsp;'
    
    output_string = substr1
                    + '<span id="' + caretID + '" style="border-bottom: 3px solid ' 
                    + blink_color + ';' 
                    + ((editor_selecting_backwards) ? 'color:#000; background:#bfbfbf;' : '') 
                    +'">' + letter + '</span>'
                    + substr2
    
    if (!outputID) terminalText.innerHTML += output_string
    else document.getElementById(outputID).innerHTML = output_string
    if (!outputID) terminalText.innerHTML += '<div style="height:4px;"></div>'
    
    blink = window.clearInterval(blink)
    blink = setInterval(function(){
      blinkBorder(caretID, blink_color)
    }, 532)
    
    if (editor_on)
    {
      var editor_container = $('#editorq_wrap'),
          editor_scrollTo = $('#'+caretID)
      
      if (editor_scrollTo.offset().top < editor_container.offset().top)
        editor_container.scrollTop(
            editor_scrollTo.offset().top - editor_container.offset().top + editor_container.scrollTop()
        )
      
      if (editor_scrollTo.offset().left < editor_container.offset().left)
        editor_container.scrollLeft(
            editor_scrollTo.offset().left - editor_container.offset().left + editor_container.scrollLeft()
        )
      
      if (editor_scrollTo.offset().top > 
          editor_container.offset().top + terminalText.clientHeight - 20) 
        editor_container.scrollTop(
            editor_container.scrollTop() + 
            (editor_scrollTo.offset().top - terminalText.clientHeight - 20)
        )
     
      if (editor_scrollTo.offset().left > 
          editor_container.offset().left + terminalText.clientWidth - 20) 
        editor_container.scrollLeft(
            editor_container.scrollLeft() + 
            (editor_scrollTo.offset().left - terminalText.clientWidth + 20)
        )
    }
  }
  
  //TERMINAL RESPONSE
  var doTerminalResponse = function(input_line, response){
    terminal_response = response
    
    var terminal_text_line = input_line
    
    //if terminal response is undefined
    if (terminal_response == undefined) terminal_response = 'Terminal response is undefined'
    
    var terminal_response_types = ['input', 'edit']
    //if terminal response is an object
    if (typeof(terminal_response) == 'object' 
        && terminal_response_types.indexOf(terminal_response.responseType) == -1)
      terminal_response = 'Terminal response is an object'
    
    //if not SET input command
    if (typeof(terminal_response) != 'object' || terminal_response == '')
    {
      var safari_adj = ''
      if (navigator.userAgent.match(/AppleWebKit/) && ! navigator.userAgent.match(/Chrome/)) {
        safari_adj = '<br />'
      }
      //adjust for pasted lines with no <br>
      if (terminal_text_line && !terminal_text_line.match(/<br \/>$|<br>$/i)) terminal_text_line += '<br />'
      
      //convert html tags unless they are escaped
      terminal_response = terminal_response.toString().replace(/(HTML)?&/g, function($0, $1){
                            return $1 ? '&' : '&amp;'
                          })
                          
      terminal_response = terminal_response.replace(/ /g, '&nbsp;').replace(/HTML<[^>]+>/g, function($0){
                            return $0.replace(/&nbsp;/g, ' ')
                          }).replace(/(HTML)?</g, function($0, $1){
                            return $1 ? '<' : '&lt;'
                          })
                          
      terminal_response = terminal_response.replace(/\n\r?/g, '<br />')
   
      terminalHistory.innerHTML += terminal_text_line + safari_adj + terminal_response
      if (terminal_response) 
      {
        if (!command_queue[0] && !batch_processing_on && !batch_file_exit 
            && !terminal_response.match(/<br \/>$|<br>$/i)) 
          terminalHistory.innerHTML += '<br /><br />'
        else if (!terminal_response.match(/<br \/>$|<br>$/i)) terminalHistory.innerHTML += '<br />'
        
        if (batch_file_exit) batch_file_exit = false
      }
      
      terminal.focus
      setTimeout(function(){terminalDiv.scrollTop = terminalDiv.scrollHeight}, 5)
      terminal_response = ''
      
      if (batch_first_command) batch_first_command = false
      
      if (command_queue[0])
      {
        if (command_queue[0].match(/^\s*edit\s/i)) editor_called_from_queue = true
        doTerminalResponse('', doCommand(command_queue[0]))
      }
      else if (batch_processing_on && batch_command_pointer < batch_command_queue.length - 1)
      {
        batch_command_pointer++
        if (batch_command_pointer == batch_command_queue.length - 1) batch_processing_on = false
        if (batch_command_queue[batch_command_pointer].match(/^\s*edit\s/i)) editor_called_from_queue = true
        doTerminalResponse('', doCommand(batch_command_queue[batch_command_pointer]))
      }
    }
    //if SET input command (object from set function contains {responseType, inputText, variable}
    else if (terminal_response.responseType == 'input')
    {
      set_input = true
      set_input_variable = terminal_response.variable
      set_input_text = terminal_response.inputText
      
      //convert html tags unless they are escaped
      set_input_text = set_input_text.replace(/(HTML)?&/g, function($0, $1){
                            return $1 ? '&' : '&amp;'
                          })
                          
      set_input_text = set_input_text.replace(/ /g, '&nbsp;').replace(/HTML<[^>]+>/g, function($0){
                            return $0.replace(/&nbsp;/g, ' ')
                          }).replace(/(HTML)?</g, function($0, $1){
                            return $1 ? '<' : '&lt;'
                          })
      
      terminalHistory.innerHTML += terminal_text_line
      setTimeout(function(){
        terminalText.innerHTML = set_input_text + '<span id="' + caretID 
                                 + '" style="border-bottom: 3px solid ' 
                                 + fontColor + ';">&nbsp;</span>'
        blink = window.clearInterval(blink)
        blink = setInterval(function(){
          blinkBorder(caretID, fontColor_rgb)
        },532)
        terminal.innerHTML = ''
      }, 2)
    }
    else if (terminal_response.responseType == 'edit')
    {
      editor_on = true
      command_queue = []
      batch_processing_on = false
      batch_first_command = false
    
      terminal_history_tmp = terminalHistory.innerHTML,
      terminal_text_tmp = $('#'+terminalTextID).text(),
      terminal_font_color_tmp = terminalText.style.color,
      terminal_font_weight_tmp = terminalText.style.fontWeight,
      terminal_background_color_tmp = terminalText.style.backgroundColor,
      new_terminal_width = Number(terminalDiv.style.width.substr(0, terminalDiv.style.width.length-2)),
      new_terminal_height = Number(terminalDiv.style.height.substr(0, terminalDiv.style.height.length-2)),
      edited_item = terminal_response.path,
      edited_item_types = ['number', 'string', 'boolean', 'function', 'object'],
      edited_item_types_pointer = edited_item_types.indexOf(terminal_response.itemType)
      
      if (!edited_item.match(/Window:\\/)) 
        edited_item = current_directory.path 
                      + ((current_directory.path.substr(-1) == '\\') ? '' : '\\')
                      + edited_item
      
      terminal.style.width = terminalText.style.width
      terminal.style.height = new_terminal_height-2
      terminal.style.fontFamily = terminalText.style.fontFamily
      terminal.style.fontSize = terminalText.style.fontSize
      terminal.style.fontWeight = terminalText.style.fontWeight
      
      terminalText.style.width = new_terminal_width
      terminalHistory.style.width = new_terminal_width
      terminalHistory.style.fontWeight = 'bold'
      
      $('#'+terminalDivID).css('overflow-y', 'visible')
      $('#'+terminalDivID).css('word-wrap', 'normal')
      var editorq_footer_html = '<div id="editorq_footer" style="color:#000; background:#bfbfbf; font-family: ' 
                           + terminalText.style.fontFamily 
                           +'; font-size: ' + terminalText.style.fontSize +'; font-weight: bold;' 
                           + '">&nbsp;<span style="color:inherit; background:inherit; float:right;'
                           + 'width:210px; margin-right:30px;"><span style="float:left; width:90px;">'
                           + '<span style="float:left;">Line:&nbsp;</span><span id="editorq_line_num" style="float:right;"></span></span>'
                           + '<span style="float:right; width:80px;"><span style="float:left;">Col:&nbsp;</span>'
                           + '<span id="editorq_col_num" style="float:right;"></span></span></span></div>'
      $('#'+terminalTextID).after(editorq_footer_html)
      $('#'+terminalTextID).wrap('<div id="editorq_wrap" style="overflow:scroll;"></div>')
      
      doCommand('terminal background-color #000080')
      doCommand('terminal font-color #bfbfbf')
      
      setTimeout(function(){
        terminalHistory.style.backgroundColor = '#bfbfbf'
        terminalHistory.style.color = '#000'
        terminalHistory.innerHTML =   // editorq_help_menu //
                                      '<div id="editorq_help_menu" style="position:absolute; z-index:100; ' 
                                    + 'left: 0; top:17px; padding:5px 3px 6px 3px; color:#000; background: '
                                    + '#bfbfbf; box-shadow: 10px 10px rgba(0,0,0,0.8);"/>'
                                    + '<div style="margin:2px; padding: 6px 4px 6px 4px; '
                                    + 'border-width: 1px 2px 1px 2px; '
                                    + 'border-style: solid; border-color: #000">'
                                    + '&nbsp;Save & exit: Ctrl+Q&nbsp;<br />'
                                    + '&nbsp;Close w/o saving: Escape&nbsp;<br />'
                                    + '&nbsp;Select text: Shift+Arrow Keys&nbsp;<br />'
                                    + '&nbsp;Search: Ctrl+M&nbsp;<br />'
                                    + '&nbsp;Repeat last search: F8&nbsp;<br />'
                                    + '&nbsp;Change type: Ctrl+Y&nbsp;<br />'
                                    + '&nbsp;(Format objects in JSON)&nbsp;</div></div>'
                                    // end editorq_help_menu //
                                    
                                    // editorq_search_menu //
                                    + '<div style="position:absolute; top:17; left:100; z-index: -10;">'
                                    + '<input id="editorq_find_input"></input></div>'
                                    + '<div id="editorq_search_menu" style="position:absolute; width: '
                                    + Number(terminalText.style.fontSize.substr(0, 
                                        terminalText.style.fontSize.length-2)) * 29 + ';  z-index:90; ' 
                                    + 'left: 100px; top:17px; color:#000; background: #bfbfbf; '
                                    + 'box-shadow: 10px 10px rgba(0,0,0,0.8);"/>'
                                    + '<div style="background: #fff; text-align:center;">Find</div>'
                                    + '<div style="padding: 6px;">'
                                    + '<p>&nbsp;Fi<span style="color:#fff;">n</span>d What:&nbsp;'
                                    + '[<span id="editorq_find_what"></span><span id="editorq_find_filler">'
                                    + '</span>]</p>'
                                    + '&nbsp;[<span id="editorq_replace">&nbsp</span>]'
                                    + '&nbsp;<span style="color:#fff;">R</span>eplace'
                                    + '<span id="editorq_replace_middle">&nbsp;W<span style="color:#fff;">i'
                                    + '</span>th:&nbsp;<br /></span><div id="editorq_replace_bottom">'
                                    + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
                                    + '[<span id="editorq_replace_with">'
                                    + '</span><span id="editorq_replace_filler">'
                                    + '</span>]<br />'
                                    + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'
                                    + '[<span id="editorq_replace_all">&nbsp</span>]'
                                    + '&nbsp;Replace <span style="color:#fff;">A</span>ll&nbsp;</div><br />'
                                    + '&nbsp;[<span id="editorq_find_whole_word">X</span>]'
                                    + '&nbsp;Match <span style="color:#fff;">W</span>hole Word Only&nbsp;<br />'
                                    + '&nbsp;[<span id="editorq_find_match_case">&nbsp</span>]&nbsp;'
                                    + 'Match <span style="color:#fff;">C</span>ase&nbsp;<br /><br />'
                                    + '<div style="width: 100%; color: red;">&nbsp;<span id="editorq_find_alert" '
                                    + 'style="margin-left: 6px;"></span></div>'
                                    + '<div id="editorq_find_confirm" style="text-align:center; '
                                    + 'margin-bottom:10px;">'
                                    + '<span style="box-shadow: 5px 5px rgba(0,0,0,0.8); '
                                    + 'background: #fff; padding:3px 1px 3px 1px; margin-right: 40px; ">'
                                    + '<span id="editorq_find_ok_left">&#9658;</span>'
                                    + '<span id="editorq_find_ok">&nbsp;OK&nbsp;</span>'
                                    + '<span id="editorq_find_ok_right">&#9668;</span></span>'
                                    + '<span style="box-shadow: 5px 5px rgba(0,0,0,0.8);'
                                    + 'background: #fff; padding:3px 1px 3px 1px;">'
                                    + '<span id="editorq_find_cancel_left">&nbsp;</span>'
                                    + '<span id="editorq_find_cancel">&nbsp;Cancel&nbsp;</span>'
                                    + '<span id="editorq_find_cancel_right">&nbsp;</span></span>'
                                    + '</div></div></div>'
                                    // end editorq_search_menu //
                                    
                                    + '<span id="editorq_help_tag">&nbsp;Help F9&nbsp;</span><span style="float:right;'
                                    + 'width:135px; margin-right:10px;"><span style="float:left;">'
                                    + 'T<span style="color:#fff;">y</span>pe: '
                                    + '<span id="edited_item_type">' 
                                    + edited_item_types[edited_item_types_pointer] + '</span></span></span>'
                                    + '<br /><div style="text-align:center">' + edited_item + '</div>'
                                    
        $('#editorq_help_menu').toggle('fast')
        $('#editorq_search_menu').toggle('fast')
        $('#editorq_replace_middle').toggle('fast')
        $('#editorq_replace_bottom').toggle('fast')
        terminalText.innerHTML = ''
        terminal.value = (terminal_response.itemType != 'object') ? 
                         terminal_response.item : JSON.stringify(terminal_response.item, function(key, val){
                                                                  if (typeof val === 'function') {
                                                                    return val + ''
                                                                  }
                                                                  return val
                                                                }, 2)
        $('#'+terminalID).setCursorPosition(0)
        updateTerminalText()
      }, 5)
  
      setTimeout(function(){
        var offset = document.getElementById('terminalqHistory').clientHeight 
                     + document.getElementById('editorq_footer').clientHeight
                     + 21
        terminalText.style.height = new_terminal_height - offset
      }, 15)
      
      editor_find_input = document.getElementById('editorq_find_input')
      editor_find_caret_color = hex2rgb('#000000')
      editor_find_map = ['editorq_find_what',
                         'editorq_replace',
                         'editorq_replace_with',
                         'editorq_replace_all',
                         'editorq_find_whole_word',
                         'editorq_find_match_case',    
                         'editorq_find_ok', 'editorq_find_cancel']
      
      cancelEditorFind = function(){
        for (var i in editor_find_map)
        {
          document.getElementById(editor_find_map[i]).innerHTML =
            editor_find_input_tmp[editor_find_map[i]]
        }
        editor_find_input.value =
          editor_find_input_tmp.editorq_find_what
        editor_find_on = false
        editor_find_map_pointer = 0
        terminal.focus()
        terminalText.innerHTML = ''
        setTimeout(function(){
          $('#editorq_search_menu').toggle('fast')
          updateTerminalText()
        }, 5)
      }
      
      matchRegex = function(close_find_window){
      
        var to_escape = ['\\','^','$','.','|','?','*','+','(',')','{','}'],
              editor_find_regex = editor_find_input_tmp.editorq_find_what,
              editor_find_regex_length = editor_find_input_tmp.editorq_find_what.length,
              editor_find_regex_modifiers = 'i',
              editor_find_result,
              editor_replace_with,
              editor_replace_all = false,
              editor_replace_count = 0,
              start_index,
              end_index
          
        //match case
        if (editor_find_input_tmp.editorq_find_match_case == 'X') editor_find_regex_modifiers = ''
        
        for (var i in to_escape)
        {
          editor_find_regex = editor_find_regex.replace(to_escape[i], '\\' + to_escape[i])
        }
        
        //match whole word
        if (editor_find_input_tmp.editorq_find_whole_word == 'X')
        {
          editor_find_regex = '^' + editor_find_regex + '\\s' + '|'
                              + '[\\.)(\\s-}{"\']' + editor_find_regex + '[\\.)(\\s-}{"\']' + '|'
                              + editor_find_regex + '$'
        }
        
        editor_find_regex = new RegExp(editor_find_regex, editor_find_regex_modifiers)
        editor_find_result = editor_find_regex.exec(terminal.value.substr(editor_last_cursor_position))
        
        if (editor_last_cursor_position > 0 && !editor_find_result)
        {
          editor_last_cursor_position = 0
          editor_last_selected_start = 0
          editor_find_result = editor_find_regex.exec(terminal.value)
        }
        
        //replace all variable
        if (editor_find_input_tmp.editorq_replace_all == 'X') editor_replace_all = true
        
        //if match is not found
        if (!editor_find_result)
        {
          $('#editorq_find_alert').html('Match not found.<br /><br />')
          if (!editor_find_on)
          {
            $('#editorq_search_menu').toggle('fast')
            editor_find_on = true
            terminalText.innerHTML = terminal.value.replaceArray(['&', '<', '>', ' '], 
                                                                 ['&amp;', '&lt;', '&gt;', '&nbsp;'])
            editor_find_input = document.getElementById('editorq_find_input')
            updateEditorFindWhatText()
            editor_find_input.focus()
          }
        }
        //if match is found
        else if (!editor_replace_on || (editor_replace_on && !editor_replace_all))
        {
          var editor_last_cursor_position_tmp = editor_last_cursor_position,
              start_index_adj = 0, 
              end_index_adj = 0
          
          //adjust displayed result if matching word with look-behind space
          if (editor_find_regex_length < editor_find_result[0].length)
          {
            end_index_adj = 1
            if (!(editor_find_result.index == 0)) start_index_adj = 1
          }
          
          start_index = editor_find_result.index + start_index_adj + editor_last_cursor_position
          end_index = editor_find_result.index 
                      + editor_find_result[0].length 
                      - end_index_adj 
                      + editor_last_cursor_position_tmp
                      
          if (editor_replace_on)
          {
            editor_replace_with = editor_find_input_tmp.editorq_replace_with
            terminal.value = terminal.value.substr(0, start_index) 
                             + editor_replace_with
                             + terminal.value.substr(end_index)
            
            end_index = start_index + editor_replace_with.length
          }
          
          
          $('#'+terminalID).setCursorPosition(start_index)
          $('#'+terminalID ).prop('selectionEnd', end_index)
          
          $('#editorq_find_alert').html('')
          if (close_find_window) cancelEditorFind()
        }
        else if (editor_replace_on && editor_replace_all)
        {
          while (editor_find_result = editor_find_regex.exec(terminal.value.substr(editor_last_cursor_position)))
          {
            editor_replace_count++
            
            if (editor_last_cursor_position > 0 && !editor_find_result)
            {
              editor_last_cursor_position = 0
              editor_last_selected_start = 0
              editor_find_result = editor_find_regex.exec(terminal.value)
            }
            
            var editor_last_cursor_position_tmp = editor_last_cursor_position,
              adj = 0
          
            //adjust displayed result if matching word with look-behind space
            if (editor_find_regex_length < editor_find_result[0].length) adj = 1
            
            start_index = editor_find_result.index + adj + editor_last_cursor_position
            end_index = editor_find_result.index 
                      + editor_find_result[0].length 
                      - adj 
                      + editor_last_cursor_position_tmp
                      
            editor_replace_with = editor_find_input_tmp.editorq_replace_with
            terminal.value = terminal.value.substr(0, start_index) 
                             + editor_replace_with
                             + terminal.value.substr(end_index)
            
            end_index = start_index + editor_replace_with.length
          }
          
          $('#editorq_find_alert').html(editor_replace_count + ' occurences replaced.<br /><br />')
        }
      }
      
      editorFindWhatFiller = function(id){
        if (editor_find_input.value.length < 30)
        {
          var editor_find_filler = ''
          
          for (var i=0; i<30-editor_find_input.value.length; i++)
          {
            editor_find_filler += '&#8729;'
          }
          
          document.getElementById(id).innerHTML = editor_find_filler
        }
        else document.getElementById(id).innerHTML = ''
        
        var caret_could_be_space_char = false
        if ($('#editorq_find_input').prop('selectionStart') < editor_find_input.value.length)
          caret_could_be_space_char = true
        
        if ((editor_find_map_pointer == 0 || editor_find_map_pointer == 2) 
            && document.getElementById(caretID).innerHTML == '&nbsp;' && !caret_could_be_space_char)
          document.getElementById(caretID).innerHTML = '&#8729;'
        else if (editor_find_input.value.length - $('#editorq_find_input').prop('selectionStart') < 31
                 && (!editor_find_what_caret_left_to_right 
                     || (editor_find_input.value.length < 31 
                         && $('#editorq_find_input').prop('selectionStart') < 31)))
          document.getElementById(id).innerHTML += '&#8729;'
      }
      
      updateEditorFindWhatText = function(){ 
        var cutoff_right,
            cutoff_left
            
        if ($('#editorq_find_input').prop('selectionStart') == editor_find_input.value.length)
        {
          editor_find_what_caret_left_to_right = true
          editor_find_what_caret_returned_to_zero = false
        }
        else if ($('#editorq_find_input').prop('selectionStart') < editor_find_input.value.length
                 && $('#editorq_find_input').prop('selectionStart') > 0)
        {
          if (!editor_find_what_caret_returned_to_zero)
            editor_find_what_caret_left_to_right = false
        }
        else if ($('#editorq_find_input').prop('selectionStart') == 0)
        {
          editor_find_what_caret_returned_to_zero = true
          editor_find_what_caret_left_to_right = true
        }
        
        if (!editor_find_what_caret_left_to_right)
        {
          var thirty = ($('#editorq_find_input').prop('selectionStart') > 30 ) ? 30 : 31
          cutoff_right = 
            (editor_find_input.value.length - $('#editorq_find_input').prop('selectionStart') < thirty) ?
            editor_find_input.value.length - $('#editorq_find_input').prop('selectionStart') : thirty
          cutoff_left = (30 - cutoff_right > 0) ? (30 - cutoff_right) : 0
          
          if (cutoff_right == thirty) cutoff_right--
        }
        //reverse
        else
        {
          cutoff_left = 
            ($('#editorq_find_input').prop('selectionStart') > 30) ?
            30 : $('#editorq_find_input').prop('selectionStart')
          cutoff_right = 30 - cutoff_left
        }
        
        updateTerminalText('editorq_find_input', 
                             editor_find_map[editor_find_map_pointer],
                             editor_find_caret_color, cutoff_left, cutoff_right)
      }
    }
  } //END DO TERMINAL RESPONSE//
  
  //DO COMMAND
  var doCommand = function(input_string){
    
    if (!current_directory) current_directory = {object: '', path: ''}
    
    //command queue & redirection
    var ampersand_split,
        redirection_split,
        redirection_on = false,
        redirection_append = false,
        redirection_target
    
    if (input_string.match(/&/) && !input_string.match(/^\s*for\s|^\s*if\s/i))
    {
      ampersand_split = input_string.split('&')
      
      for (var i=ampersand_split.length-1; i>=0; i--)
      {
        if (ampersand_split[i].match(/\^$/) && ampersand_split[i + 1] != undefined)
          ampersand_split[i] = ampersand_split[i].substr(0, ampersand_split[i].length-1)
                               + '&' + ampersand_split.splice(i + 1, 1)
      }
    }
    else ampersand_split = [input_string]
    
    if (command_queue.length > 0) command_queue.concat(ampersand_split)
    else command_queue = ampersand_split
    
    //set input string
    var cmd_string = cmd_string_clean = command_queue[0].replace(/^\s+/g, '')
    
    command_queue.splice(0, 1)
    
    //replace variable names with variables
    cmd_string = parseVariable(cmd_string)
    
    //if redirection ">"
    if (cmd_string.match(/>/) && !cmd_string.match(/^\s*for\s|^\s*if\s/i))
    {
      redirection_split = cmd_string.split('>')
      
      if (redirection_split[1] == '' && redirection_split[2])
      {
        redirection_append = true
        redirection_split.splice(1, 1)
      }
      
      for (var i=redirection_split.length-1; i>=0; i--)
      {
        if (redirection_split[i].match(/\^$/) && redirection_split[i + 1] != undefined)
          redirection_split[i] = redirection_split[i].substr(0, redirection_split[i].length-1)
                               + '>' + redirection_split.splice(i + 1, 1)
      }
      
      if (redirection_split.length > 1)
      {
        redirection_on = true
        cmd_string = redirection_split[0]
        redirection_split.splice(0, 1)
        redirection_target = redirection_split.join('').match(/"[^"]+"|[^\s]+/)[0]
        if (redirection_target.match(/^"/)) 
          redirection_target = redirection_target.substr(1, redirection_target.length - 2)
          
        doCommand('mkdir /s ' + redirection_target)
      }
    }
    
    //special case: echo.
    if (cmd_string.match(/^echo\./i)) cmd_string = 'echo. ' + cmd_string.substr(5)
    
    //split between spaces, stripping space and extra quotes, preserving quoted strings
    var cmd_array = splitStringWithDoubleQuotes(cmd_string)
    
    //special cd function
    if (cmd_array[0] == 'cd..')
    {
      cmd_array[0] = 'cd'
      cmd_array['parent'] = '..'
      if (!cmd_array[1]) cmd_array[1] = '..'
    }
    
    //if empty input
    if (!cmd_array[0])
    {
      doCommand_response = ''
    }
    //single word commands
    else if (!cmd_array[1])
    {
      //change to lowercase
      cmd_array[0] = cmd_array[0].toLowerCase()
      
      //if command has .bat extension
      if (cmd_array[0].match(/.bat$/i))
      {
        try
        {
          var batch_file = parsePath(cmd_array[0])
          
          if (batch_file.parsePathError) doCommand_response = batch_file.parsePathError
          else
          {
            batch_first_command = true
            var batch_error = parseBatchFile(batch_file)
            if (batch_error) doCommand_response = batch_error
          }
        }
        catch(error)
        {
          doCommand_response = error.message
        }
      }
      //match command name
      else if (CMD_PATH.command[cmd_array[0]] 
        && CMD_PATH.command[cmd_array[0]].name == cmd_array[0])
      {
        //if the command can execute without parameters
        if (CMD_PATH.command[cmd_array[0]].execute)
        {
          try
          {
            //if function was not added dynamically (no need for eval method)
            if (CMD_PATH.command[cmd_array[0]].eval != true)
            {
              //if command does not require whole line as variable
              if (CMD_PATH.command[cmd_array[0]].passWholeLineAsParameter != true)
              {
                doCommand_response = CMD_PATH.command[cmd_array[0]].execute()
              }
              //if command requires whole line as variable
              else
              {
                var text = cmd_string, adj = cmd_array[0].length+1
                
                doCommand_response = 
                  CMD_PATH.command[ cmd_array[0] ].execute( text.substr(text.indexOf(cmd_array[0])+adj) )
              }
            }
            //else
            else doCommand_response = window.eval( '(' + CMD_PATH.command[cmd_array[0]].execute + ')()' )
          }
          catch(error)
          {
            doCommand_response = error.message
          }
        }
        else doCommand_response = CMD_PATH.response.COMMAND_SYNTAX_ERROR + cmd_array[0].toUpperCase()
      }
      else
      {
        //command not recognized
        doCommand_response = CMD_PATH.response.COMMAND_NOT_RECOGNIZED
      }
    }
    //commands longer than one word
    else
    {
      //change to lowercase
      cmd_array[0] = cmd_array[0].toLowerCase()
      
      //match command name
      if (CMD_PATH.command[cmd_array[0]]
        && CMD_PATH.command[cmd_array[0]].name == cmd_array[0])
      {
        //match command and first parameter, pass rest of parameters 
        //as an array of variables to first parameter function
        if (CMD_PATH.command[cmd_array[0]].param
          && CMD_PATH.command[cmd_array[0]].param[cmd_array[1].toLowerCase()])
        {
          try
          {
            doCommand_response = 
              CMD_PATH.command[ cmd_array[0] ].param[ cmd_array[1].toLowerCase() ]( cmd_array.slice(2) )
          }
          catch(error)
          {
            doCommand_response = error.message
          }
        }
        //if cannot match first parameter
        else
        {
          //if command has execute function
          if (CMD_PATH.command[cmd_array[0]].execute)
          {
            //pass text after command to execute function
            try
            {
              //if function was not added dynamically (no need for eval method)
              if (CMD_PATH.command[cmd_array[0]].eval != true)
              {
                //if command does not require whole line as variable
                if (CMD_PATH.command[cmd_array[0]].passWholeLineAsParameter != true)
                {
                  doCommand_response = CMD_PATH.command[ cmd_array[0] ].execute( cmd_array.slice(1) )
                }
                //if command requires whole line as variable
                else
                {
                  var text = cmd_string, adj = cmd_array[0].length+1
                  
                  if (cmd_array[0] == 'cd' && cmd_array['parent'] == '..') adj--
                  
                  doCommand_response = 
                    CMD_PATH.command[ cmd_array[0] ].execute( text.substr(text.indexOf(cmd_array[0])+adj) )
                }
              }
              //if command was added dynamically, use eval method
              //(assumes no extra parentheses in function parameter declaration)
              else 
              {
                var func = CMD_PATH.command[cmd_array[0]].execute.toString(),
                    func_exec = func.substr(func.indexOf('{')+1),
                    func_params = 
                      func.substr( func.indexOf('(')+1, func.indexOf(')')-func.indexOf('(')-1  ).split(','),
                    input_params = '', count=1
                    
                if (func_params.length >= cmd_array.length-1)
                {
                  //create parameter string to pass to command
                  input_params += 'var ' 
                  
                  while (count < cmd_array.length)
                  {
                    //add quotes to strings
                    if (isNaN(Number(cmd_array[count])/1))
                      cmd_array[count] = '"' + cmd_array[count] + '"'
                    input_params += func_params[count-1] + '=' + cmd_array[count]
                    if (count < cmd_array.length-1) input_params += ','
                    count++
                  }
                  input_params += ';'
                  
                  //eval method
                  doCommand_response = window.eval ( '(function(){' + input_params + func_exec + ')()' )
                }
                else doCommand_response = CMD_PATH.response.COMMAND_SYNTAX_ERROR + cmd_array[0].toUpperCase()
              }
            }
            catch(error)
            {
              doCommand_response = error.message
            }
          }
          //if command has no execute function
          else
          {
            doCommand_response = 'System cannot find the paramater or an execute function for the command '
                                + cmd_array[0]
          }
        }
      }
      else
      {
        doCommand_response = CMD_PATH.response.COMMAND_NOT_RECOGNIZED
      }
    }
    
    if (!redirection_on) return doCommand_response
    else
    {
      if (!redirection_target.match(/\\/) && current_directory) 
        redirection_target = current_directory.path 
                             + ((current_directory.path == 'Window:\\')? '' : '\\') 
                             + redirection_target
        
      if (redirection_target.match(/\\/g).length > 1) 
      {
        redirection_target = redirection_target.replace(/\\(?=[^\\]+$)/, '["') + '"]'
        redirection_target = redirection_target.replace(
                                                  /Window:\\/, 'window.'
                                                ).replace(/\\$/, '').replace(/\\/g, '.')
      }
      else redirection_target = redirection_target.replace(/Window:/, 'window').replace(/\\(?=[^\\]+$)/, '["') + '"]'
      
      doCommand_response=doCommand_response.toString().replace(/\n/g, '\\n')
      
      if (!redirection_append) eval(redirection_target + '=' + '"' + doCommand_response + '"')
      else eval(redirection_target + '+=' + '"' + doCommand_response + '"')
      
      return '\n'
    }
  }//END DOCOMMAND FUNCTION//
  
  //PARSE BATCH FILE
  parseBatchFile = function(str){
  
    var batch_parse_pointer = 0,
        batch_command_regex = /^\s*[^\s]+/,
        batch_regex_result = undefined,
        batch_end_of_file = false,
        batch_line_number = 1,
        batch_parse_error = false
    
    //reset batch parser
    batch_command_pointer = 0
    batch_command_queue = []
    batch_goto_markers = {}
    
    var parseCommandDefault = function(){
      var regex = /\n|$/,
          regex_result
      
      regex_result = regex.exec(str.substr(batch_parse_pointer))
      batch_command_queue.push(String(str.substr(batch_parse_pointer, regex_result.index).match(/[^\s]+.+/)))
      batch_parse_pointer += regex_result.index + 1
    }
    
    var parseIfCommand = function(){
      var result = str.substr(batch_parse_pointer).match(/\(|\n|$/)[0],
          substr1,
          substr2,
          substr3,
          statements,
          has_first_parenthesis = false,
          pointer_at_function_start = batch_parse_pointer
      
      //parse first parentheses, else, or newline 
      switch (result)
      {
        case '(':
          statements = parseQuotesAndParentheses(str.substr(batch_parse_pointer))
          substr1 = str.substr(batch_parse_pointer, statements.parenthetical[0][0][1] + 1)
          batch_parse_pointer += statements.parenthetical[0][0][1] + 1
          has_first_parenthesis = true
          break
        default:
          var regex = /\n|$/,
              regex_result = regex.exec(str.substr(batch_parse_pointer))
          substr1 = str.substr(batch_parse_pointer, regex_result.index)
          batch_command_queue.push(String(str.substr(batch_parse_pointer, regex_result.index).match(/[^\s]+.+/)))
          batch_parse_pointer += regex_result.index + 1
          break
      }
      
      if (has_first_parenthesis)
      {
        if (str.substr(batch_parse_pointer).match(/^\s*else\s*\(/i))
        {
          substr2 = str.substr(batch_parse_pointer, statements.parenthetical[1][0][1] + 1)
          batch_command_queue.push(String((substr1 + substr2).match(/[^\s]+.+/)))
          batch_parse_pointer = pointer_at_function_start + statements.parenthetical[1][0][1] + 1
          if (str.substr(batch_parse_pointer).match(/^[^\n]+[a-zA-Z0-9_]/))
            return 'Batch parse error, line ' + batch_line_number
          else
          {
            var regex = /\n|$/,
            regex_result
        
            regex_result = regex.exec(str.substr(batch_parse_pointer))
            batch_parse_pointer += regex_result.index + 1
          }
        }
        else
        {
          var regex = /\n|$/,
              regex_result = regex.exec(str.substr(batch_parse_pointer))
          substr2 = str.substr(batch_parse_pointer, regex_result.index)
          batch_command_queue.push(String((substr1 + substr2).match(/[^\s]+.+/)))
          batch_parse_pointer += regex_result.index + 1
        }
      }
    }
    
    var parseForCommand = function(){
      var statements = parseQuotesAndParentheses(str.substr(batch_parse_pointer))
      
      //if DO is followed by parentheses, include the parentheses in pushed command
      if (str.substr(batch_parse_pointer + statements.parenthetical[0][0][1] + 1).match(/^\s*do\s*\(/i))
      {
        batch_command_queue.push(
          String(str.substr(batch_parse_pointer, 
                     statements.parenthetical[1][0][1] + 1
                    ).match(/[^\s]+.+/))
        )
        batch_parse_pointer += statements.parenthetical[1][0][1] + 1
        
        if (str.substr(batch_parse_pointer).match(/^[^\n]+[a-zA-Z0-9_]/))
          return 'Batch parse error, line ' + batch_line_number
        else
        {
          var regex = /\n|$/,
          regex_result
      
          regex_result = regex.exec(str.substr(batch_parse_pointer))
          batch_parse_pointer += regex_result.index + 1
        }
      }
      //if DO is not followed by parentheses
      else
      {
        var to_push = String(
                        str.substr(
                              batch_parse_pointer, statements.parenthetical[0][0][1] + 1
                            ).match(/[^\s]+.+/)
                      )
        
        batch_parse_pointer += statements.parenthetical[0][0][1] + 1
        
        var regex = /\n|$/,
            regex_result
      
        regex_result = regex.exec(str.substr(batch_parse_pointer))
        batch_command_queue.push(to_push + str.substr(batch_parse_pointer, regex_result.index))
        batch_parse_pointer += regex_result.index + 1
      }
    }
    
    var markGotoSection = function(){
      var regex = /\n|$/,
          regex_result
      
      regex_result = regex.exec(str.substr(batch_parse_pointer))
      var goto_section_name = String(str.substr(batch_parse_pointer, regex_result.index).match(/[^\s]+/))
      batch_parse_pointer += regex_result.index + 1
      
      var goto_pointer = batch_command_queue.length
      batch_goto_markers[goto_section_name.substr(1).toLowerCase()] = goto_pointer
    }
    
    str = str.replace(/^\s+/, '')
    batch_regex_result = batch_command_regex.exec(str)
    
    while (!batch_end_of_file)
    {
      var batch_command = batch_regex_result[0].replace(/^\s+/, '').toLowerCase()
          
      if (batch_command.match(/:[a-zA-Z0-9_]+/)) batch_command = 'is goto section'
      
      var parse_error
      
      switch (batch_command)
      {
        case 'for':
          parse_error = parseForCommand()
          if (parse_error) batch_parse_error = parse_error
          break
        case 'if':
          parse_error = parseIfCommand()
          if (parse_error) batch_parse_error = parse_error
          break
        case 'is goto section':
          markGotoSection()
          break
        default:
          parseCommandDefault()
          break
      }
      
      if (batch_parse_pointer >= str.length) batch_end_of_file = true
      batch_regex_result = batch_command_regex.exec(str.substr(batch_parse_pointer))
      batch_line_number++
    }
    
    if (batch_parse_error) return batch_parse_error
    
    //execute batch file
    if (batch_command_queue.length > 0)
    {
      batch_processing_on = true
      doCommand(batch_command_queue[0])
    }
  }
  
  //split string with quoted sections, allow escaped quotes, remove the outer quotes
  splitStringWithDoubleQuotes = function(str, preserve, double_quotes_inside_single_quotes_outside){
    //split between spaces, stripping space and extra quotes, preserving quoted strings
    var answer=[], 
        str_split_pointer=0,
        found_quotes,
        regex = (double_quotes_inside_single_quotes_outside) ? 
                /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"/g : /"(?:[^"\\]|\\.)*"/g
    
    while ( (found_quotes = regex.exec(str)) )
    {
      var tmp = str.substr(str_split_pointer, found_quotes.index-str_split_pointer).split(' ')
      for (var i in tmp)
      {
        answer.push(tmp[i])
      }
      
      //if the parameter, preserve, is set to true, preserve the quotes 
      if (!preserve)
        answer.push(str.substr(found_quotes.index+1, found_quotes[0].length-2))
      else answer.push(str.substr(found_quotes.index, found_quotes[0].length))
      
      str_split_pointer = found_quotes.index + found_quotes[0].length
    }
    
    //push rest of string after last quote
    if (str_split_pointer != 0)
    {
      var rest_of_str = str.substr(str_split_pointer)
      
      if (rest_of_str)
      {
        rest_of_str = rest_of_str.split(' ')
        answer = answer.concat(rest_of_str)
      }
    }
    
    //if no quoted strings are found
    if (answer.length == 0) answer = str.split(' ')
    
    //remove empty elements
    for (var i=answer.length-1; i>=0; i--)
    {
      if (!answer[i]) answer.splice(i,1)
    }
    
    return answer
  } //END SPLITSTRINGWITHDOUBLEQUOTES FUNCTION//
  
  //split string with spaces, commas and semicolons, preserve double-quoted spaces, commas and semicolons
  splitStringWithQuotedCommas = function(str){  
    var answer = []
    
    str = splitStringWithDoubleQuotes(str, true)
                
    for (var i in str)
    {
      if (str[i].match(/"/g))
      {
        if (str[i].match(/"/g).length != 2) return 'Unterminated string literal'
        
        str[i] = str[i].replace(/"/g, '')
        answer.push(str[i].replace(/^\s+|\s+$/, ''))
      }
      else
      {
        var tmp = str[i].split(/[,;]/)
        for (var j in tmp)
        {
          tmp[j] = tmp[j].replace(/^\s+|\s+$/, '')
          if (tmp[j]) answer.push(tmp[j])
        }
      }
    }
    return answer
  }//END SPLITSTRINGWITHQUOTEDCOMMAS FUNCTION//
  
  //replace variable names with variables
  parseVariable = function(str){
    var regex = /\%[a-zA-Z_]([a-zA-Z0-9_])*\%/, found_variable, to_replace = [], tmp = str
    while ( (found_variable = regex.exec(tmp)) )
    {
      var trimmed_variable = found_variable[0].substr(1,found_variable[0].length-2)
      to_replace.push([trimmed_variable, found_variable[0]])
      tmp = tmp.replace(found_variable[0], trimmed_variable)
    }
    for (var i in to_replace)
    {
      if (to_replace[i][0].toLowerCase() == 'date') 
        str = str.replace(to_replace[i][1], dosDate('date'))
      else if (to_replace[i][0].toLowerCase() == 'time') 
        str = str.replace(to_replace[i][1], dosDate('time'))
      else if (to_replace[i][0].toLowerCase() == 'cd' && current_directory) 
        str = str.replace(to_replace[i][1], current_directory.path)
      else if (to_replace[i][0].toLowerCase() == 'random') 
        str = str.replace(to_replace[i][1], Math.round(Math.random()*32768))
      else if (CMD_PATH.variable[to_replace[i][0]] != undefined)
        str = str.replace(to_replace[i][1], CMD_PATH.variable[to_replace[i][0]])
    }
    
    return str
  }//END PARSEVARIABLE FUNCTION//
  
  //parse path
  function parsePath(path){
    var target_directory
    
    if (path && path+'\\' != ROOT)
    {
      path_array = path.split('\\')
      
      //if path does not start with root
      if (path_array[0]+'\\' != ROOT)
      {
        var current = ROOT_PATH
        for (var i=1; i<current_directory.object.length; i++)
        {
          current = current[current_directory.object[i]]
        }
        
        //check if path is accessible
        if (current[path_array[0]] != undefined)
            target_directory = current[path_array[0]]
        else return {parsePathError: 'The system cannot find the path specified'}
        for (var i=1;i<path_array.length; i++)
        {
          if (target_directory[path_array[i]] != undefined)
            target_directory = target_directory[path_array[i]]
          else
          {
            break
            return {parsePathError: 'The system cannot find the path specified'}
          }
        }
      }
      //if path starts with root
      else
      {
        path_array.splice(0,1)
        
        var tmp = ROOT_PATH
        for (var i=0; i<path_array.length; i++)
        {
          if (tmp[path_array[i]]) tmp = tmp[path_array[i]]
        }
        target_directory = tmp
      }
    }
    else if (current_directory.path == ROOT)
    {
      target_directory = ROOT_PATH
    }
    else
    {
      var tmp = ROOT_PATH
      for (var i=1; i<current_directory.object.length; i++)
      {
        tmp = tmp[current_directory.object[i]]
      }
      target_directory = tmp
    }
    
    return target_directory
  } //END PARSEPATH FUNCTION
  
  //load consolas external font, map terminal
  setTimeout(function(){
    doCommand('terminal font-weight normal')
    doCommand('terminal font-size 15')
    doCommand('terminal font-family consolas')
    doCommand('map terminal')
  }, 50)
  
} //END TERMINAL FUNCTION//

String.prototype.replaceArray = function(find, replace) {
  var replaceString = this;
  var regex; 
  for (var i = 0; i < find.length; i++) {
    regex = new RegExp(find[i], "g");
    replaceString = replaceString.replace(regex, replace[i]);
  }
  return replaceString;
}

jQuery.fn.setSelection = function(selectionStart, selectionEnd) {
    if(this.lengh == 0) return this;
    input = this[0];
 
    if (input.createTextRange) {
        var range = input.createTextRange();
        range.collapse(true);
        range.moveEnd('character', selectionEnd);
        range.moveStart('character', selectionStart);
        range.select();
    } else if (input.setSelectionRange) {
        input.focus();
        input.setSelectionRange(selectionStart, selectionEnd);
    }
 
    return this;
}

jQuery.fn.setCursorPosition = function(position){
    if(this.lengh == 0) return this;
    return $(this).setSelection(position, position);
}

function hex2rgb(hex) {
  if (hex[0]=="#") hex=hex.substr(1);
  if (hex.length==3) {
    var temp=hex; hex='';
    temp = /^([a-f0-9])([a-f0-9])([a-f0-9])$/i.exec(temp).slice(1);
    for (var i=0;i<3;i++) hex+=temp[i]+temp[i];
  }
  var triplets = /^([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})$/i.exec(hex).slice(1);
  return 'rgb(' + parseInt(triplets[0],16) + ', ' + parseInt(triplets[1],16) + ', '
         + parseInt(triplets[2],16) + ')'
}

function blinkBorder(id, color){
  el = document.getElementById(id)
  el.style.borderBottom = 
    el.style.borderBottom == ('3px solid ' + color) ? 'none' : '3px solid ' + color
}

function parseQuotesAndParentheses(str)
{
  //function returns object.quoted, object.parenthetical:
  //Arrays containing pairs of str indexes, 
  //sorted left to right (each parenthetical set is an array sorted outer to inner)
  
  //find unescaped quotes
  var quotes_indexes = [],
      single_quotes_indexes = [],
      closed_quotes = [],
      closed_single_quotes = [],
      statements = {},
      open_quote = false,
      open_single_quote = false
  
  statements.error = ''

  for (var i=0; i<str.length; i++)
  {
    if (str.charAt(i) == "\"")
    {
      if (i > 0)
      {
        if (str.charAt(i-1) != "\\" && !open_single_quote) 
        {
          quotes_indexes.push(i)
          if (open_quote) closed_quotes.push([quotes_indexes[quotes_indexes.length-2], i])
          open_quote = (open_quote) ? false : true
        }
      }
      else if (!open_single_quote) 
      {
        quotes_indexes.push(i)
        if (open_quote) closed_quotes.push([quotes_indexes[quotes_indexes.length-2], i])
        open_quote = (open_quote) ? false : true
      }
    }
    
    else if (str.charAt(i) == "'")
    {
      if (i > 0)
      {
        if (str.charAt(i-1) != "\\" && !open_quote) 
        {
          single_quotes_indexes.push(i)
          if (open_single_quote) closed_single_quotes.push([single_quotes_indexes[single_quotes_indexes.length-2], i])
          open_single_quote = (open_single_quote) ? false : true
        }
      }
      else if (!open_quote) 
      {
        single_quotes_indexes.push(i)
        if (open_single_quote) closed_single_quotes.push([single_quotes_indexes[single_quotes_indexes.length-2], i])
        open_single_quote = (open_single_quote) ? false : true
      }
    }
  }
  
  //find closed quotes
  if (quotes_indexes.length%2 != 0 || single_quotes_indexes%2 != 0) statements.error = 'Unterminated quotation. '
 
  //find closed parentheses
  var parenthesis_open = [],
      parenthesis_close = [],
      closed_parentheses = [],
      parentheses_pointer = 0
  
  for (var i=0; i<str.length; i++)
  {
    if (str.charAt(i) == "(")
    {
      //check if parentheses is inside a quotation
      var parentheses_is_quoted = false
      for (var j=0; j<closed_quotes.length; j++)
      {
        if (i > closed_quotes[j][0] && i < closed_quotes[j][1]) parentheses_is_quoted = true
      }
      for (var j=0; j<closed_single_quotes.length; j++)
      {
        if (i > closed_single_quotes[j][0] && i < closed_single_quotes[j][1]) parentheses_is_quoted = true
      }
      if (!parentheses_is_quoted) parenthesis_open.push(i)
    }
    else if (str.charAt(i) == ")")
    {
      //check if parentheses is inside a quotation
      var parentheses_is_quoted = false
      for (var j=0; j<closed_quotes.length; j++)
      {
        if (i > closed_quotes[j][0] && i < closed_quotes[j][1]) parentheses_is_quoted = true
      }
      for (var j=0; j<closed_single_quotes.length; j++)
      {
        if (i > closed_single_quotes[j][0] && i < closed_single_quotes[j][1]) parentheses_is_quoted = true
      }
      if (!parentheses_is_quoted)
      {
        parenthesis_close.push(i)
        //close parentheses
        if (parenthesis_open.length > 0 && parenthesis_open.length == parenthesis_close.length)
        {
          closed_parentheses[parentheses_pointer] = []
          var length = parenthesis_open.length
          for (var j=0; j<length; j++)
          {
            closed_parentheses[parentheses_pointer].push([parenthesis_open[j], parenthesis_close[length-j-1]])
          }
          parenthesis_open = []
          parenthesis_close = []
          parentheses_pointer++
        }
      }
    }
  }
  
  statements.quoted = closed_quotes
  statements.singleQuoted = closed_single_quotes
  statements.parenthetical = closed_parentheses
  
  //if missing parentheses
  if (parenthesis_open.length > 0) statements.error += 'Missing ) after argument list'
  else if (parenthesis_close.length > 0) statements.error += 'Missing ; before statement'
  
  return statements
}

function dosDate (date_or_time){

    if (!date_or_time) return 'dosDate error: please pass \'date\' or \'time\' as parameter to function'
    if (date_or_time.toLowerCase() == 'date')
    {
        var date = new Date(),
            month = Number(date.getMonth())+1
        date = String(date)
        if (month < 10) month = '0' + month
        
        return date.substr(0, 3) + ' ' + month + '/' + date.substr(8, 2) + '/' + date.substr(11, 4)
    }
    else if (date_or_time.toLowerCase() == 'time')
    {
        var date = new Date(),
            milli = Math.round(date.getMilliseconds()/10),
            adj = ''
        date = String(date)
        if (date.substr(15, 1) == '0') return ' ' + date.substr(16, 7) + '.' + milli
        else return date.substr(16, 8) + '.' + milli
    }
    else return 'dosDate error: parameter not recognized.'
}

//matrix
function createMatrix(matrixSettings){
  if (!matrixSettings || !matrixSettings.divId) return 'Please pass parameter for div-id.'
  var matrix_div_id = matrixSettings.divId
  
  if (matrixSettings.numLines != undefined) matrix_numoflines = matrixSettings.numLines 
  if (matrixSettings.spacing != undefined) matrix_line_spacing = matrixSettings.spacing
  
  matrix_createlines(matrix_div_id)
}
var matrix_on = false
var matrix_tmp_font
var matrix_font_rule = '<style type="text/css">@font-face {font-family: Matrix_Code_Font; src: url(' +
                       '"http://rootspiano.x10.bz/public/Matrix_Code_Font.ttf"' +
                       ');}</style>'
$('head').append(matrix_font_rule)
var consolas_font_rule = '<style type="text/css">@font-face {font-family: consolas; src: url(' +
                       '"http://rootspiano.x10.bz/public/consolas.ttf"' +
                       ');}</style>'
$('head').append(consolas_font_rule)

// ------------------------------------------------------------------------------------
//
//  Matrix Code v3.0
//  By Moo2u2
//  
//  Feel free to use, copy, change the code but please mention me in your comments
//  
// ------------------------------------------------------------------------------------

//var theinHTML;
//var thelessstr;
var matrix_ascSt=33; 
var matrix_ascEnd=126;
var matrix_numoflines = 20;
var matrix_line_spacing = 25;
var matrix_lines = new Array();
var matrix_intervalID = new Array();
var matrix_subIntervalID = new Array();
var matrix_subIntervalID2 = new Array();
var scH = screen.height-220;
var scW = screen.width-50;

//window.onload = matrix_createlines;

// -------------------------------------------------------------------------------------
// Convert decimal to hex (for the colour)

var matrix_hD="0123456789ABCDEF";
var matrix_d2h = function (d) 
{
   var h = matrix_hD.substr(d&15,1);
   while(d > 15) 
   { 
      d >>= 4; 
      h = matrix_hD.substr(d&15,1)+h;
   }
   return h;
}

// -------------------------------------------------------------------------------------
// The matrix_line object

var matrix_line = function (length, maxlength, chars, speed, x)
{
   this.length = length;
   this.maxlength = maxlength;
   this.chars = chars;
   this.speed = speed;
   this.x = x;
}

// -------------------------------------------------------------------------------------
// Creates the matrix_lines

var matrix_createlines = function (div_id)
{     
               
   // create the matrix_lines as objects as defined above with length, characters, speed, x-value

   for(var eachline = 0; eachline < matrix_numoflines; eachline++)
   {
      matrix_lines[eachline] = new matrix_line(0, Math.round(Math.random()*15+5), String.fromCharCode(Math.round(Math.random()*(matrix_ascEnd-matrix_ascSt)+matrix_ascSt)), Math.round(Math.random()*400+100), eachline*matrix_line_spacing);
   }

   // write the matrix_lines

   for(var writelines = 0; writelines < matrix_numoflines; writelines++)
   {
      var newline = document.createElement("div");
      newline.id = "char" + writelines;
      newline.style.position = "absolute";
      newline.style.top = "5px";
      newline.style.left = matrix_lines[writelines].x + "px";
      
      var firstchar = document.createElement("div");
      var newcolor = matrix_d2h(Math.round(1/(matrix_lines[writelines].maxlength+1)*255));
      if(newcolor.length == 1)
         newcolor = "0" + newcolor;
      firstchar.style.color = "#00"+newcolor+"00"
      firstchar.innerHTML = matrix_lines[writelines].chars
      
      newline.appendChild(firstchar);
      
      document.getElementById(div_id).appendChild(newline);
   }

   matrix_start();
}

// -------------------------------------------------------------------------------------
// Starts it moving & changing

var matrix_start = function() 
{
   for(var pickastring = 0; pickastring < matrix_numoflines; pickastring++) 
   {
      matrix_intervalID[pickastring] = setInterval("matrix_addchars("+pickastring+")", matrix_lines[pickastring].speed);
   }
}

// -------------------------------------------------------------------------------------
// Add random characters to the string (and a matrix_line break) 
// and make sure the last one is light
// once it gets to maxlength start moving down

var matrix_addchars = function (theline) 
{
   if(matrix_lines[theline].length >= matrix_lines[theline].maxlength) 
   {
      clearInterval(matrix_intervalID[theline]);
      matrix_subIntervalID[theline] = setInterval("matrix_movethestring("+theline+")", matrix_lines[theline].speed);
   }
   else
   {
      // Get a char (not " or ' or \ or it'll get confused)
      
      myRandomChar = String.fromCharCode(Math.round(Math.random()*(matrix_ascEnd-matrix_ascSt)+matrix_ascSt));
      while(myRandomChar == "'" || myRandomChar == '"' || myRandomChar == "\\")
         myRandomChar = String.fromCharCode(Math.round(Math.random()*(matrix_ascEnd-matrix_ascSt)+matrix_ascSt));

      // Make a new div for it (so we can change it's colour)
      
      var newchar = document.createElement("div");
      newchar.innerHTML = myRandomChar;
      document.getElementById("char"+theline).appendChild(newchar);
      
      // Colour it
      
      var i;
      for(i = 0; i <= matrix_lines[theline].length; i++)
      {
         var newcolor = matrix_d2h(Math.round((i+1)/(matrix_lines[theline].maxlength+1)*255));
         newcolor = "" + newcolor;
         if(newcolor.length == 1)
            newcolor = "0" + newcolor;
         document.getElementById("char"+theline).childNodes[i].style.color = "#00" + newcolor + "00";
         document.getElementById("char"+theline).childNodes[i].style.fontWeight = "normal";
      }
      document.getElementById("char"+theline).childNodes[i].style.color = "#99FF99";
      document.getElementById("char"+theline).childNodes[i].style.fontWeight = "bold";
      
      // Increase length by one
      
      matrix_lines[theline].length++;
   }
}


// -------------------------------------------------------------------------------------
// Moves the string (creates and destroys chars)

var matrix_movethestring = function (theline)
{
   var topstringnum = document.getElementById("char"+theline).offsetTop;
   
   if((topstringnum + (matrix_lines[theline].maxlength * 15)) >= scH) 
   {
      clearInterval(matrix_subIntervalID[theline]);
      matrix_subIntervalID2[theline] = setInterval("matrix_clearletters("+theline+")", matrix_lines[theline].speed);
   }
   else
   {
      // create
      
      myRandomChar = String.fromCharCode(Math.round(Math.random()*(matrix_ascEnd-matrix_ascSt)+matrix_ascSt));
      while(myRandomChar=="'" || myRandomChar=='"' || myRandomChar=="\\")
         myRandomChar = String.fromCharCode(Math.round(Math.random()*(matrix_ascEnd-matrix_ascSt)+matrix_ascSt));
      
      var newchar = document.createElement("div");
      newchar.innerHTML = myRandomChar;
      document.getElementById("char"+theline).appendChild(newchar);
      
      // delete
      
      document.getElementById("char"+theline).removeChild(document.getElementById("char"+theline).childNodes[0]);
      
      // re-colour
      
      var i;
      for(i = 0; i < matrix_lines[theline].length; i++)
      {
         var newcolor = matrix_d2h(Math.round((i+1)/(matrix_lines[theline].maxlength+1)*255));
         newcolor = "" + newcolor;
         if(newcolor.length == 1)
            newcolor = "0" + newcolor;
         document.getElementById("char"+theline).childNodes[i].style.color = "#00" + newcolor + "00";
         document.getElementById("char"+theline).childNodes[i].style.fontWeight = "normal";
      }
      document.getElementById("char"+theline).childNodes[i].style.color = "#99FF99";
      document.getElementById("char"+theline).childNodes[i].style.fontWeight = "bold";
      
      // move
      
      document.getElementById("char"+theline).style.top = (topstringnum+15) + "px";
   }
}

// -------------------------------------------------------------------------------------
// pretty much the opposite of matrix_addchars() 

var matrix_clearletters = function (theline) 
{
   if(matrix_lines[theline].length <= -1) 
   {
      clearInterval(matrix_subIntervalID2[theline]);
      document.getElementById("char"+theline).style.top = 0;
      matrix_intervalID[theline] = setInterval("matrix_addchars("+theline+")", matrix_lines[theline].speed);
   }
   else
   {
      // Remove the first character
      
      document.getElementById("char"+theline).removeChild(document.getElementById("char"+theline).childNodes[document.getElementById("char"+theline).childNodes.length-1]);
      
      // Move it down by 15px
      
      var topstringnum = document.getElementById("char"+theline).offsetTop;
      document.getElementById("char"+theline).style.top = topstringnum+15 + "px";
   
      // Decrease length by one
   
      matrix_lines[theline].length--;
   }
}