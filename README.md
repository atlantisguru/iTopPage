  <h1>iTopPage plugin for jQuery </h1>
        <br />
        <pre>
 		Name:			
 		Imageless "Top of the page" plugin for jQuery
 		
 		Version:		
 		1.0
 		
 		Author:
 		Bubori Attila
 		
 		License:
 		GPLv2 (http://www.gnu.org/licenses/gpl-2.0.html)
 		
 		Contact:
 		bubori.attila@gmail.com
 		
 		Country:
 		Hungary
 		
 		Released:
 		2013.01.21
 		
 		Description:
 		
 		Showing a black gradient box with a white arrow from a specified point,
  		when user scrolling down to the bottom of the page.
  		Parameters:
  			startPosition: 100  	<i>//Position from top of the window (in pixels)</i>
  			title: 'Scroll to Top'	<i>//Mouse hover title attribute text</i>
 
		Must be use the <i>jquery.itoppage.css</i> file to format the button!
  
 		Usage:
 		
 		<i>$(document).ready(function() {
  			$(document).iTopPage();
  		});</i>
  		
 		<i>//or with parameters</i>
 		
 		<i>
  		$(document).ready(function() {
  			$(document).iTopPage({startPosition: 100, title: "Oldal tetejére"});
  		});
  		</i>