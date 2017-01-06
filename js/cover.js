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
        switch (buttonId) {
            case "githubbtn":
                window.location.replace("http://www.github.com/alanrgan");
                break;
            case "emailbtn":
                window.location.replace("mailto:alanrgan@gmail.com");
                break;
            case "resumebtn":
                window.location.replace("files/AlanResumeWeb.pdf");
            case "linkedinbtn":
                window.location.replace("https://www.linkedin.com/in/alanrgan");
                break;
            case "goodreadsbtn":
                window.location.replace("https://www.goodreads.com/user/show/1831090-alan-gan");
                break;
            case "treebtn":
                window.location.replace("http://www.github.com/alanrgan/TreeVisualizer");
                break;
            case "ballgamebtn":
                window.location.replace("http://www.github.com/alanrgan/BallJump");
                break;
            case "wikigraphbtn":
                window.location.replace("http://www.github.com/alanrgan/WikiGraph");
                break;
            case "rustintbtn":
                window.location.replace("http://www.github.com/alanrgan/rust-interpreter");
                break;
            case "rustchatbtn":
                window.location.replace("http://www.github.com/alanrgan/rust-chat");
                break;
            default:
                return false;
        }
	});
});