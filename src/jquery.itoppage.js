/*
 * Name:		iTopPage
 * Title:		Imageless "Top of the page" plugin for jQuery
 * Version:		1.2.2
 * Author:		Bubori Attila
 * License:		GPLv2 (http://www.gnu.org/licenses/gpl-2.0.html)
 * Contact:		bubori.attila@gmail.com
 * Country:		Hungary
 * Released:	2013.01.21
 * Description:	Showing a colored gradient box with a white arrow from a specified point,
 * 				when user scrolling down to the bottom of the page.
 * 				Parameters:
 * 					startPosition: 100  	//Position from top of the window (in pixels)
 * 					title: 'Scroll to Top'	//Mouse hover title attribute text
 * 					color: 'red'			//black(default),red,pink,blue,orange,green
 * 					place: 'bottomRight'	//Position of the button: bottomLeft, bottomCenter, bottomRight(default)
 * 					picture: 'toparrow.png'	//Relative or absolute path of an image (jpg,png,gif,jpeg) default: null (imageless mode)
 * 
 * 				Must be use the jquery.itoppage.css file to format the button!
 * 
 * Usage:		$(document).ready(function() {
 * 					$().iTopPage();
 * 				});
 * 				
 *				//or with parameters
 *				
 * 				$(document).ready(function() {
 * 					$().iTopPage({startPosition: 100, title: "Oldal tetejére"});
 * 				});
 */

(function($) {      
    $.fn.extend({ 
	
        iTopPage: function(options) {
  			      	
        	var defaults = {
				startPosition: 100,
				title: 'Scroll to Top',
				color: 'black',
				place: 'bottomRight',
				picture: null
			};
        	
        	var options = $.extend({}, defaults, options);
        	
        	if (options.picture == null) {
        		$("body").append("<div id='iTopPage' class='iTopPage' title='" + options.title + "'><p id='arrow'>&#9650;</p></div>");
          	} else {
          		$("body").append("<div id='iTopPage' title='" + options.title + "'><image src='" + options.picture + "'></div>");
          	}
            var $iTopPage = $("#iTopPage");
            var leftPoisition;
            
            $iTopPage.addClass(options.color)
            
            function leftPositionCalculate() {
            	switch (options.place) {
            		case 'bottomRight' :
            			leftPosition = $(window).width() - $iTopPage.height() - 30 + "px";
            			break;
            		case 'bottomCenter' :
            			leftPosition = $(window).width()/2 - $iTopPage.height()/2 + "px";
            			break;
            		case 'bottomLeft' :
            			leftPosition = "30px";
            			break;
            	}
            return leftPosition;
            }
            
            $iTopPage.css({
            	"top": $(window).height() - $iTopPage.height() - 30 + "px",
            	"left" : leftPositionCalculate(),
       			"opacity" : $(window).scrollTop() > options.startPosition && $iTopPage.css("opacity") == "0" ? "1" : $(window).scrollTop() < options.startPosition ? "0" : "1",
       			"display" : $(window).scrollTop() > options.startPosition && $iTopPage.css("display") == "none" ? "block" : $(window).scrollTop() < options.startPosition ? "none" : "table-cell"
            }); 
                        
            $(window).scroll(function() {
            		$iTopPage.css({
            			"top": $(window).height() - $iTopPage.height() - 30 + "px",
            			"display" : $(window).scrollTop() > options.startPosition && $iTopPage.css("display") == "none" ? "block" : $(window).scrollTop() < options.startPosition ? "none" : "table-cell"
            		});
            		
            		$iTopPage.stop().animate({
            			"opacity" : $(window).scrollTop() > options.startPosition && $iTopPage.css("opacity") == "0" ? "1" : $(window).scrollTop() < options.startPosition ? "0" : "1"
           			}, 300);
            });
            
            $(window).resize(function() {
            		$iTopPage.css({
            			"top": $(window).height() - $("#iTopPage").height() - 30 + "px",
            			"left" : leftPositionCalculate()
            		});
            });
            
            $iTopPage.live("click", function() {
            	$('html, body').animate({ scrollTop: 0 }, 'fast');
            });
            
            return this;    
        }      
    });  
})(jQuery);
