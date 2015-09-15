$(document).ready(function() {
	$(".masthead-nav a").click(function() {
		$(this).tab('show');
	});

	$("button").click(function() {
		var buttonId = $(this).attr('id');
		if(buttonId == "githubbtn")
			window.location.replace("http://www.github.com/alanrgan");
		else if(buttonId == "emailbtn")
			window.location.replace("mailto:alanrgan@gmail.com");
		else if(buttonId == "resumebtn")
			window.location.replace("files/AlanGanResume.pdf");
		else if(buttonId == "fbbtn")
			window.location.replace("http://www.facebook.com/alantheazn");
		else if(buttonId == "linkedinbtn")
			window.location.replace("https://www.linkedin.com/pub/alan-gan/92/975/53a");
		else if(buttonId == "goodreadsbtn")
			window.location.replace("https://www.goodreads.com/user/show/1831090-alan-gan")
		return false;
	});
});