$(function(){
	$('#fullpage').fullpage({
		anchors: ['page1', 'page2', 'page3', 'page4','page5','page6','page7'],
		menu:'#myMenu',
		css3:true,
		slidesNavigation:true,
		// continuousVertical:true,
		// navigation:true,
		// scrollingSpeed:900,
		// loopBottom:true,
		afterRender: function(){
			$('.screen-main span').each(function(){
				var $rel = $(this).attr('rel');
				var $arr = $rel.split(',');
				$(this).animate({
					left: $arr[2] + 'px',
					top: $arr[3] + 'px'
				}, 500);
			});
			$('.two_box a').each(function(){
				var $rel=$(this).attr('rel');
				var $arr=$rel.split(',');
				$(this).animate({
					left:$arr[0]+'px',
					top:$arr[1]+'px'
				},500);
			});
			$('.inter-inner a').each(function(){
				var $rel=$(this).attr('rel');
				var $arr=$rel.split(',');
				$(this).animate({
					left:$arr[0]+'px',
					top:$arr[1]+'px'
				},500);
			})
		},
		afterLoad: function(anchorLink, index){
			if(index == 1){
				$('.screen-main span').each(function(){
					var $rel = $(this).attr('rel');
					var $arr = $rel.split(',');
					$(this).animate({
						left: $arr[2] + 'px',
						top: $arr[3] + 'px'
					}, 500);
				});
			}
			if(index==2 || index==3 || index==4){
				$('.inner').eq(index-2).find('a').each(function(){
					var $rel=$(this).attr('rel');
					var $arr=$rel.split(',');
					$(this).animate({
						left:$arr[2]+'px',
						top:$arr[3]+'px'
					},500)
				});
			}
			if(index==5){
				$('.fifth_box').fadeIn(1000);
			}
			if (index==6) {
				$('.sixth_box img').eq(3).addClass('iphone-green1');
			}
		
		},
		onLeave: function(index, direction){
			if(index == 1){
				$('.screen-main span').each(function(){
					var $rel = $(this).attr('rel');
					var $arr = $rel.split(',');
					$(this).animate({
						left: $arr[0] + 'px',
						top: $arr[1] + 'px'
					}, 500);
				});
			}
			if(index==2 || index==3 ||index==4){
					$('.inner').eq(index-2).find('a').each(function(){
					var $rel=$(this).attr('rel');
					var $arr=$rel.split(',');
					$(this).animate({
						left:$arr[0]+'px',
						top:$arr[1]+'px'
					},500)
				});
			}
			if(index==5){
				$('.fifth_box').fadeOut(1000)
			}

		}
	});


	// 根据可视区域大小启动/关闭全屏滚动效果
	// $(window).resize(function(){
	// 	autoScrolling();
	// });
	// function autoScrolling(){
	// 	var $ww=$(window).width();
	// 	if($ww<1024){
	// 		$.fn.fullpage.setAutoScrolling(false);
	// 	}else{
	// 		$.fn.fullpage.setAutoScrolling(true);
	// 	}
	// }
})