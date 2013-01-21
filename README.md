iTopPage plugin for jQuery
==========================
Q: Why iTopPage?
A: Imageless "Top of the page" plugin for jQuery

Showing a black gradient box with a white arrow from a specified point,
when user scrolling down to the bottom of the page.

Parameters:
	startPosition: 100  	<i>//Position from top of the window (in pixels)</i>
	title: 'Scroll to Top'	<i>//Mouse hover title attribute text</i>
 
Must be use the jquery.itoppage.css file to format the button!

Usage
=====
 		$(document).ready(function() {
  			$(document).iTopPage();
  		});
  		
 		//or with parameters
 		
 		
  		$(document).ready(function() {
  			$(document).iTopPage({startPosition: 100, title: "Oldal tetejére"});
  		});

ToDo:
=====

* optional color change both the button and arrow from parameters
* optional external image for "top of the page" button from parameters
* optional changing the position of the button for example bottomLeft, bottomRight...

Version:
========		
1.0 (2013.01.21)
 		
License:
========
GPLv2
http://www.gnu.org/licenses/gpl-2.0.html

Author:
=======
Bubori Attila
 		
Contact:
========
bubori.attila@gmail.com