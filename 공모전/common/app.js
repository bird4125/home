var num = 1;

$(document)
.on("click",".nav_box label:nth-child(1) li",function(){
	num = 1 ;
	if (num == 1 ) {
		$(".bg").css("margin-top","0%");
		alert("go up");
	}})

.on("click",".nav_box label:nth-child(2) li",function(){
	num = 2 ;
	if (num == 2 ) {
		$(".bg").css("margin-top","-100vh");
		alert("go down");
	}

})

$(window)
.keydown(function(event){
	if (event.which == 40) {
		num = num+1;
		if (num == 2) {
			$(".bg").css("margin-top","-100vh");
			$(".body .move1").css({
				"transform": "translateY(-2000px)",
				"transition": "1s",
				"opacity": 0
			});
			$(".body .move2").css({
				"transform": "inherit",
				"transition": "1s",
				"opacity": 1
			})
			$(".main .nav .nav_box label:nth-child(1) li").css({
				"color":"#fff",
				"font-size": "30px",
				"transition":".5s",
				"left": "-3px"
			})
			$(".main .nav .nav_box label:nth-child(1) li:after").css({
				"color":"#fff",
				"font-size": "12px",
				"transition":".5s",
				"left": "10px",
				"bottom": 0
			})
			$(".main .nav .nav_box label:nth-child(2) li").css({
				"color":"LIGHTGREEN",
				"font-size": "50px",
				"transition":".5s",
				"left": "-6px"
			})
			alert("go down");
		}
	} else if(event.which == 38) {
		num = num-1;
		if(num == 1) {
			$(".bg").css("margin-top","0%");
			alert("go up")
		}
	}
	console.log(event.which);
	console.log(num);
})

/*$(document)
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