$(document).ready(function(){
    $("#search").click(function() {
    	$("#searchField").animate({
                width: "toggle"
            });
    });
    $(".dropdown").hover(
            function(){ 
            	$(this).addClass('open'); 
            },
            function(){ 
            	$(this).removeClass('open'); 
            }
        );

    checkSize();

    $(window).resize(checkSize);

    function checkSize() {
        if($(".subfooter").css("display") == "none") {
            $('.footer').on('click', '.footer-nav-heading', function(e) {
                e.preventDefault();
                $(this)
                    .next('.subfooter')
                    .not('animate')
                    .slideToggle();
                });
        }
    }  
});