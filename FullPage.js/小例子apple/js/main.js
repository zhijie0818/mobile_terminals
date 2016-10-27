$(function(){
			$("#fullpage").fullpage({
				verticalCentered:true,
				anchors:['page1','page2','page3','page4','page5','page6'],
				navigation:true,
				navigationTooltips:['page1','page2','page3','page4','page5','page6'],
				// sectionsColor:['#666','orange','pink','gray'],
				afterLoad:function(link,index){
					switch(index){
						case 1:
							move('.section1 h1').scale(5).duration('1.5s').end();
                    		move('.section1 p').set('margin-top','5%').duration('1s').end();
							break;

						case 2:
							move('.section2 h1').scale(0.7).end();
							break;

						case 3:
							move('.section3 h1').set('margin-left','20%').end();
							move('.section3 p').set('margin-left','20%').end();
							break;

						case 4:
							move('.section4 img.primary').rotate(360).end(function(){
								move('.section4 img.sport').rotate(360).end(function(){
									move('.section4 img.edition').rotate(360).end(function(){
										move('.section4 h4.primary').scale(1.3).end(function(){	
											move('.section4 h4.sport').scale(1.3).end(function(){
												move('.section4 h4.edition').scale(1.3).end();
									
										});
									
										});
									});
								});
							});

							break;
						case 5:
							move('.section5 h1').x(0).skew(20).set('height',80).end();
							break;
						default:
							break;
					}
				},
				onLeave:function(link,index){
					switch(index){
						case 1:
							move('.section1 h1').scale(1).end();
                    		move('.section1 p').set('margin-top','800px').end();
							break;

						case 2:
							move('.section2 h1').scale(1).end();
							break;

						case 3:
							move('.section3 h1').set('margin-left','-1500px').end();
							move('.section3 p').set('margin-left','1500px').end();
							break;

						case 4:
							move('.section4 img.primary').rotate(-360).end();
							move('.section4 img.sport').rotate(-360).end();
							move('.section4 img.edition').rotate(-360).end();
							move('.section4 h4.primary').scale(1).end();
							move('.section4 h4.sport').scale(1).end();
							move('.section4 h4.edition').scale(1).end();
							break;

						case 5:
							move('.section5 h1').x(0).skew(0).set('height',0).end();
							break;
						default:
							break;
					}
				},

				afterRender:function(){
				},
			});

		});