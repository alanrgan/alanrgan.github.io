$(document).ready(function() {
  const idToLink = {
    "btn-github": "http://www.github.com/alanrgan",
    "btn-email": "mailto:alanrgan@gmail.com",
    "btn-resume": "files/AlanResumeWeb.pdf",
    "btn-linkedin": "https://www.linkedin.com/in/alanrgan",
    "btn-ballgame": "http://www.github.com/alanrgan/BallJump",
    "btn-goodreads": "https://www.goodreads.com/user/show/1831090-alan-gan",
    "btn-tree": "http://www.github.com/alanrgan/TreeVisualizer",
    "btn-wikigraph": "http://www.github.com/alanrgan/WikiGraph",
    "btn-interpreter": "http://www.github.com/alanrgan/rust-interpreter",
    "btn-rustchat": "http://www.github.com/alanrgan/rust-chat",
  };

  $(".masthead-nav a").click(function() {

    var tabid = $(this).text().toLowerCase();

    // Go through each 'pane' and disable all buttons unless it is the active one
    $(".pane").each(function() {
      var tis = $(this);
      if (tis.attr("id") != tabid) {
        $(this).children("button").each(function() {
          $(this).css("display", "none");
        });
      } else {
        $(this).children("button").each(function() {
          $(this).css("display", "inline");
        });
      }
    })

    $(this).tab('show');
  });

  $("button").click(function() {
    var buttonId = $(this).attr('id');
    let link = idToLink[buttonId];
    if (link != null)
      window.location.replace(link);
  });
});