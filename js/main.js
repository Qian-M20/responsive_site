
$(document).ready(function(){

    $("body,html").animate({scrollTop: 0}, 800, "easeInOutQuad");

    // animate the texts on sliders once the page loads

    $(".carousel-inner h5").delay(500).animate({
        opacity: 1,
        marginBottom: 20
    }, 1000,"easeInOutExpo");

    $(".carousel-inner h2").delay(500).animate({
        opacity: 1,
        marginBottom: 20
    }, 1000,"easeInOutExpo" );


    // define navOffset
    var navOffset = $("header").innerHeight() + 10;

    // when scroll down, change the color of header
    $(window).scroll(function(){
        $('header').toggleClass('scrolled', $(this).scrollTop()>0);
    })

    // click on the nav menu, add the animation to go to the corresponding section 

    $("nav a[href^='#'], .logobox a[href^='#']").click(function (e) {


        e.preventDefault();
        
        // finds the position of selected link/ID
        var idPosNav = $($(this).attr("href")).offset().top - navOffset;
        
        // animates to selected section position
        $("body, html").animate({scrollTop: idPosNav}, 800, "easeInOutQuad");
        
    });


    // when scroll down to a section, the corresponsding nav menu should be active 
    $(window).scroll(function(){
            
        var topContentPos =$(window).scrollTop()+navOffset;
        
        $("section").each(function(){
            var secTopPos = $(this).offset().top-30;
            var secBotPos = secTopPos + $(this).innerHeight()-30;
            var secID= $(this).attr("id");
            
            if(topContentPos >= secTopPos && topContentPos <= secBotPos) 
            {
                $("nav a[href='#"+ secID+ "'] li").addClass("active");
                // console.log(secID);
            }
            else 
            {
                $("nav a[href='#"+ secID+ "'] li").removeClass("active"); 
                // console.log('class removed');
            }
        });
        //animate content on 
        // $(".reveal-ele").each(function(){
        //     var botEle =$(this).offset().top + $(this).innerHeight();
        //     var botWin = topContentPos+$(window).height();
        //     if(botEle<botWin)
        //     {
        //      $(this).animate({
        //          opacity:1,
        //          marginTop:0
        //      }, 3000, "easeOutElastic");
        //     }
            
        // });
    });
    

});