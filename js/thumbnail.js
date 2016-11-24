$(window).load(function(){
			var thumbnail = {
				imgIncrease :30, 
				effectDuration :400,
				imgWidth : $('.team .peoplelist .list_one .pic').find('img').width(), 
				imgHeight : $('.team .peoplelist .list_one .pic').find('img').height() 	
			};
			$('.team .peoplelist .list_one .pic').hover(function(){
				$(this).find('.caption:not(:animated)').slideDown(thumbnail.effectDuration);
			}, function(){
				$(this).find('img').animate({
					width:thumbnail.imgWidth,
					left:0,
					top:0
					
				}, thumbnail.effectDuration);
				$(this).find('.caption').slideUp(thumbnail.effectDuration);
				
			});
			
		});
		
$(document).ready(function(){
	$('.hr_item').hover(function(){
			$(this).find(".hr_pic .click").fadeIn("slow"); 
			$(this).find(".hr_pic .click").css("display","block");
			$(this).find(".introduce").css("background-color","#3eaaf5");
			$(this).find(".introduce p").css("color","#fff");
		}, function() {
			$(this).find(".hr_pic .click").hide(); 
			$(this).find(".introduce").css("background-color","#fff");
			$(this).find(".introduce p:nth-child(1)").css("color","#424242");
			$(this).find(".introduce p:nth-child(2)").css("color","#757575");
	});	
});		