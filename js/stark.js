// stark Main Page javascript

$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors:['page1', 'page2','page3',],
		sectionsColor:['white', '#ADAFAA', '#8f918b'],
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



});

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
