--
-- Table structure for table `terminal_server_chat`
--

CREATE TABLE IF NOT EXISTS `terminal_server_chat` (
  `index` mediumint(9) NOT NULL,
  `chat_text` text NOT NULL,
  `message_from_g` text NOT NULL,
  `message_from_s` text NOT NULL,
  PRIMARY KEY (`index`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

INSERT INTO `terminal_server_chat` (`index`, `chat_text`, `message_from_g`, `message_from_s`) VALUES
(0, '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `terminal_server_users`
--

CREATE TABLE IF NOT EXISTS `terminal_server_users` (
  `index` mediumint(9) NOT NULL AUTO_INCREMENT,
  `user` varchar(60) NOT NULL,
  `password` varchar(60) NOT NULL,
  PRIMARY KEY (`index`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

INSERT INTO `terminal_server_users` (`index`, `user`, `password`) VALUES
(1, 'user1', 'a8438da78e679f44a5cff9e44ebacfbd'),
(2, 'user2', '194f9987498c1cf5a795d83caa147814');
