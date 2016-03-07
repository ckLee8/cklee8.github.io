$(document).ready(function () {
	$(".navbar-nav li a").click(function(event) {
    	$(".navbar-collapse").collapse('hide');
	});
	$('a[href*=#]').on('click', function(event){
    	event.preventDefault();
    	$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
  	});
  	$(".proj-1-pic, .proj-2-pic").hover(
        function() { $(this).addClass("Hover"); },
        function() { $(this).removeClass("Hover"); }
    );
});