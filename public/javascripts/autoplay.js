window.onload = function() {
	var show = document.getElementById('show_list');
	var ImgUl = show.getElementsByTagName('ul')[0];
	var ImgLi = ImgUl.getElementsByTagName('li');
	var play = null;
	show.onmouseover = function() {
		clearInterval(play);
	}
	show.onmouseout = function() {
		autoPlay();
	}
	function autoPlay() {
		var num = 0;
		play = setInterval(function() {
			num++;
			if (num == 5) num = 0;
			$(".category_move span").removeClass("cur_move");
			$(".category_move > li:eq("+num+") span").addClass("cur_move");
			$(".category_hot_list > li").css("display","none");
			$(".category_hot_list > li:eq("+num+")").css("display","block");
		}, 3000);
	}
}