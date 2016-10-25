import jQuery.*;
import js.Browser;


class Sc9 {
    public var homeBgImg:Array<String>;

    static public function Sc9():Void {
    	


    	var homeBgImg = ["#b6c4d0 url(images/sc9bg1A.jpg) top  right fixed", "#b6c4d0 url(images/sc9bg1B.jpg) top  right fixed"];


        new JQuery(function():Void {

        		function getRandomArr(arr):Int {
		    		return Math.floor(Math.random() * arr.length);
				}

              	new JQuery('#home').css('background', homeBgImg[getRandomArr(homeBgImg)]);
			    new JQuery('#home').css('backgroundSize', 'cover');
			    new JQuery('#home').height(new JQuery(js.Browser.window).height() + 'px');
			    new JQuery('#home').width(new JQuery(js.Browser.window).width() + 'px');
			    new JQuery('.logo').css('top', ((new JQuery('.introTxt').offset().top + new JQuery('.introTxt').height() + 20) + 'px'));

			    new JQuery('#home').velocity({
			        opacity: 1
			    }, 500, function() {
			        new JQuery('.logo').addClass("filterAnimate");
			        new JQuery('.logo').velocity({
			            opacity: 1,
			            rotateZ: "360deg",
			            left: ((new JQuery('#home').width() / 2 - new JQuery('.logo').width() / 2)) + 'px'
			        }, 300, function() {
			            new JQuery('.startArrow').css({
			                left: ((new JQuery('#home').width() / 2 - new JQuery('.startArrow').width() / 2)) + 'px',
			                top: new JQuery('.logo').css('top')
			            });
			            new JQuery('.startArrow').velocity({
			                opacity: 1,
			                rotateZ: "360deg",
			                top: (new JQuery('#home').height() - (new JQuery('.startArrow').height()) - 40)
			            }, 300);
			        });

			    });

			    new JQuery('.socIcons').css({
			        left: ((new JQuery('#skills').width() / 2 - new JQuery('.socIcons').width() / 2) + 'px')
			    });

			    new JQuery('.startArrow').tap(function() {
			        new JQuery('#about').velocity("scroll", 1000);
			    });

			    new JQuery('.nav a').tap(function(e) {
			        e.preventDefault();
			        new JQuery('#mainNav').collapse('hide');
			        new JQuery('html,body').animate({
			            scrollTop: new JQuery(new JQuery(this).attr('href')).offset().top
			        }, 1000);
			    });

			    new JQuery('.cHover').mouseover(function() {
			        //console.log(new JQuery(this).parent().next());
			        var cPos = parseInt(new JQuery(this).prev().data('pos'));
			        new JQuery(this).prev().data('pos', (cPos -= 90));
			        new JQuery(this).prev().css({
			            'transform': 'rotateX(' + cPos + 'deg)',
			            '-webkit-transform': 'rotateX(' + cPos + 'deg)'
			        });
			    });
        });
    }

    public function getRandomArr(arr):Int {
		    return Math.floor(Math.random() * arr.length);
	}

}