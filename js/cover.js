$(document).ready(function() {
	$(".masthead-nav a").click(function() {
		$(this).tab('show');
	});

	$("input").click(function() {
		var inputValue = $(this).attr("value");
		if(inputValue == "Github")
			window.location.replace("http://www.github.com/alanrgan");
		else if(inputValue == "Email")
			window.location.replace("mailto:alanrgan@gmail.com");
		return false;
	});
});