$(document).ready(function() {
	$(".masthead-nav a").click(function() {

		var tabid = $(this).text().toLowerCase();

		// Go through each 'pane' and disable all buttons unless it is the active one
		$(".pane").each(function() {
			var tis = $(this);
			if(tis.attr("id") != tabid)
			{
				$(this).children("button").each(function() {
					$(this).css("display","none");
				});
			}
			else
			{
				$(this).children("button").each(function() {
					$(this).css("display","inline");
				});
			}
		})

		$(this).tab('show');
	});

	$("button").click(function() {
		var buttonId = $(this).attr('id');
		if(buttonId == "githubbtn")
			window.location.replace("http://www.github.com/alanrgan");
		else if(buttonId == "emailbtn")
			window.location.replace("mailto:alanrgan@gmail.com");
		else if(buttonId == "resumebtn")
			window.location.replace("files/AlanResumeWeb.pdf");
		else if(buttonId == "linkedinbtn")
			window.location.replace("https://www.linkedin.com/in/alanrgan");
		else if(buttonId == "goodreadsbtn")
			window.location.replace("https://www.goodreads.com/user/show/1831090-alan-gan")
		else if(buttonId == "treebtn")
			window.location.replace("http://www.github.com/alanrgan/TreeVisualizer");
		else if(buttonId == "ballgamebtn")
			window.location.replace("http://www.github.com/alanrgan/BallJump");
		return false;
	});
});