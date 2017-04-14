// stark Main Page javascript

$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors:['page1', 'page2','page3','page4'],
		sectionsColor:['white', '#AACAF9', 'white','#ADAFAA'],
		menu: '#topElements',
		navigation: true,
		navigationPosition: 'right',
		slideNavigation: true,
		// scrollHorizontally: true,
		dragAndMove: true,
	})

	$('.scrollDown').hover(function(){
		console.log('hover');
		$(this).animate({ bottom : 60 }).animate({ bottom : 50 });
	});

	screen.lockOrientationUniversal = screen.lockOrientation || screen.mozLockOrientation || screen.msLockOrientation;

	if (screen.lockOrientationUniversal("landscape-primary")) {
	  // orientation was locked
	} else {
	  // orientation lock failed
	}

});



window.addEventListner('orientationchange', function(){
	if(window.orientation == -90) {
		document.getElementById('orient').className = 'orientright';
	}

	if(window.orientation == 90) {
		document.getElementById('orient').className = 'orientleft';
	}

	if(window.orientation == 0) {
		document.getElementById('orient').className = '';
	}
}, true);

// function changeOrientation(event) {
//     alert("Rotate");
//     event.preventDefault();
// }

function layer_open(el){

		var temp = $('#' + el);		
		var bg = temp.prev().hasClass('bg');

		if(bg){
			$('.layer').fadeIn();
		}else{
			temp.fadeIn();
		}

		
		$.fn.fullpage.setMouseWheelScrolling(false);
		$.fn.fullpage.setAllowScrolling(false);

		
		temp.find('.closeBtn').click(function(e){
			$.fn.fullpage.setMouseWheelScrolling(true);
			$.fn.fullpage.setAllowScrolling(true);
			if(bg){
				$('.layer').fadeOut();
			}else{
				temp.fadeOut();
			}
			e.preventDefault();
		});


		$('.layer .bg').click(function(e){
		$('.layer').fadeOut();
		e.preventDefault();
	});
}
