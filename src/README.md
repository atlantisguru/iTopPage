iTopPage plugin for jQuery
==========================
Q: Why iTopPage?
A: Imageless "Top of the page" plugin for jQuery

Showing a colored gradient box with a white arrow from a specified point,
when user scrolling down to the bottom of the page.

Parameters:
===========
* startPosition: 100  		//Position from top of the window (in pixels)
* title: 'Scroll to Top'	//Mouse hover title attribute text
* color: 'red'				//black(default),red,pink,blue,orange,green
* place: 'bottomRight'		//Position of the button: bottomLeft, bottomCenter, bottomRight(default)

Must be use the jquery.itoppage.css file to format the button!

Usage
=====
 		$(document).ready(function() {
  			$().iTopPage();
  		});
  		
 		//or with parameters
 		
 		
  		$(document).ready(function() {
  			$().iTopPage({startPosition: 100, title: "Oldal tetejére"});
  		});

ToDo:
=====

* optional external image for "top of the page" button from parameters

Version:
========
1.2.2 (2013.01.22)
* Can change the position of the button (bottomLeft, bottomCenter, bottomRight)
		
1.1.2 (2013.01.22)
* Can change gradient color of the button (black, red, orange, pink, blue, green)

* Button position stabilized (absolute->fixed)
* Code optimized

1.0.0 (2013.01.21)
 		
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