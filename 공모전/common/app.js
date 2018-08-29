/*var num = 0;



$(document)
.keydown(function(event){
	if (event.which == 40) {
		num += 1;
		if(num == 0){
			$(".bg").css("margin-top","0%");
		}else if(num == 1){
			$(".bg").css("margin-top","-100vh");
			$(".body .move1").animate({margin-top:'200px'});
		}else if(num == 2){
			$(".bg").css("margin-top","-200vh");
		}else if(num == 3){
			$(".bg").css("margin-top","-300vh");
		}else if(num == 4){
			$(".bg").css("margin-top","-400vh");
		} else {
			num = 4;
		}
	} else if(event.which == 38) {
		num -=1;
		if(num == 4){
			$(".bg").css("margin-top","-400vh");
		} else if(num == 3){
			$(".bg").css("margin-top","-300vh");
		}else if(num == 2){
			$(".bg").css("margin-top","-200vh");
		}else if(num == 1){
			$(".bg").css("margin-top","-100vh");
		} else if(num == 0){
			$(".bg").css("margin-top","-0%");
		} else{
			num = 0
		}
	}
	console.log(event.which);
	console.log(num);

});*/