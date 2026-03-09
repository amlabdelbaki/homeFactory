$( document ).ready( function () {

    
    // loading script

    $(window).on('load',function(){
        $(".loading-container .loading-center").fadeOut(1000,function(){
               $(this).parent().fadeOut(500,function()
                       {
                           $("body").css("overflow-y","auto");
                           $(this).remove(); 
                        });
         });
       });
       
//menu 
var  TopMenu =  $(".mobile-menu .navbar-nav");

$(".navbar-toggle").on("click",function(event){

     TopMenu.slideToggle();

     });  

   
     $(document).on('click', function (event) {
                    if (!$(event.target).closest('#HF-header').length) {
                        // ... clicked on the 'body', but not inside of #menutop
                        if(TopMenu.is(':visible')) {
                            TopMenu.slideUp();  
                           }
                      }
                 
                  });


  TopMenu.on('click', function (event) {
    event.stopPropagation();
  });








var $container = $('.HFmenu '),
$trigger = $('.HFmenu .menuLink');

$trigger.on('click',function(){

var $this = $(this).siblings('.dropdown-menu');
    //mobile-menu +
    $(this).find(".fa-plus").toggleClass("active");


// console.log("Clicked trigger");

// Hide all dropdowns
$container.find('.dropdown-menu').slideUp();




// Check if dropdown is visible
    // true - hide dropdown
    // false - show dropdown
    $('html').click(function() {
      

        if($this.is(':visible')) {
            // console.log("Visible, closing");
            $this.slideUp();
            $this.siblings(".menuLink").find(".fa-plus").toggleClass("active");
        
        
            
        }
    });

if($this.is(':visible')) {
    // console.log("Visible, closing");
    $this.slideUp();
    $this.siblings(".menuLink").find(".fa-plus").toggleClass("active");

    
}

else {
    // console.log("Not visible, opening");
    $this.delay(300).slideDown();
 
 

}
});

 //menu 

   //gotop
   $(window).scroll(function(){
    var scrolltop= $(window).scrollTop();
    var scrolltrigger=$(".hf-selling").offset().top;
    if( scrolltop>=scrolltrigger )
         {
       $("a.gotoup").fadeIn();

         }
     else
         {
             $("a.gotoup").fadeOut();

         }
  });
   //gotop


////smooth scroll
$(" a.gotoup ").click(function(e){
    e.preventDefault();
    // console.log($(this).data("scroll"));
   $("html,body").animate({
    scrollTop : $($(this).data("scroll")).offset().top +1 
   },1000)
   
    
});

////smooth scroll

// testtt
        // var dlgtrigger =$("[data-dialog]"),
        // somedialog = dlgtrigger.attr("[data-dialog]"),
        // dlg =new DialogFx( somedialog );

//testtt 

/**dialog popup */


var dlgtrigger = document.querySelector( '[data-dialog]' ),
somedialog = document.getElementById( dlgtrigger.getAttribute( 'data-dialog' ) ),
dlg = new DialogFx( somedialog );

dlgtrigger.addEventListener( 'click', dlg.toggle.bind(dlg) );

/**dialog popup */ 



// wow animation
// var wow = new WOW(
//     {
//         animateClass: 'animated',
//         offset:       50
//     }
//     );
//     wow.init();



    //add active class to navtogglebtn

    // $('.navbar-toggle').on('click', function ()
    // {
    //     var btn = $(this);
    //     $(" header nav #N-menu").toggleClass("showMenu");

    

    //     if (!btn.hasClass('active'))
    //     {
    //         btn.addClass('active');  
    //     }
    //     else
    //     {
    //         btn.removeClass('active');
        

    
    //     }
    // });

    // HFslider

    $('.HF-banner .slider-wrap').slick({
        autoplay:true,
        infinite: true,
        pauseOnFocus:false,
        pauseOnHover:false,
        prevArrow: '<div class="slick-nav sm-btn"><i class="fa fa-angle-left "></i>  </div>',
        nextArrow: '<div class="slick-nav sm-btn "> <i class="fa fa-angle-right"></i> </div>',
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        fade: true,
        cssEase: 'linear'
   
    }).slickAnimation();

//category slider
  
    $('.slider-wrap-2').slick({
        slidesToShow: 6,
        slidesToScroll: 2,
        pauseOnFocus:false,
        pauseOnHover:false,
        prevArrow: '<div class="slick-nav sm-btn"><i class="fa fa-angle-left "></i>  </div>',
        nextArrow: '<div class="slick-nav sm-btn "> <i class="fa fa-angle-right"></i> </div>',
        autoplay:true,
        infinite: true,
        speed: 1000,
        
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                  
                    arrows: false,
                    slidesToShow: 5,
                    slidesToScroll: 1,
                
                }
        },

            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                
                }
        },
            {
            breakpoint: 768,
            settings: {
                arrows: false,
                slidesToShow: 3,
                slidesToScroll: 1,
            
            }
       },
        {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
            
                }
        },

]

    });


    //product slider
    $('.prod-slider').slick({
        autoplay:true,
        speed: 1000,
        pauseOnFocus:true,
        pauseOnHover:true,
        dots: true,
        prevArrow: '<div class="slick-nav sm-btn"><i class="fa fa-angle-left "></i>  </div>',
        nextArrow: '<div class="slick-nav sm-btn "> <i class="fa fa-angle-right"></i> </div>',
     
        focusOnSelect: true,
    });

    //related slider

    $(".related-slider .slider-wrap-3").slick({
        slidesToShow:3,
        slidesToScroll: 2,
        pauseOnFocus:false,
        pauseOnHover:false,
        prevArrow: '<div class="slick-nav sm-btn"><i class="fa fa-angle-left "></i>  </div>',
        nextArrow: '<div class="slick-nav sm-btn "> <i class="fa fa-angle-right"></i> </div>',
        autoplay:true,
        infinite: true,
        speed: 2000,
        
        responsive: [
   

            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                
                }
        },
     
        {
                breakpoint:600,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
            
                }
        },

]

    });


    /* pagination active link  */

    $(".HF-paging li").on("click",function(){
        $('.HF-paging li ').removeClass("active");
        $(this).addClass("active");
    });



    /**social sharing  */
    

    $(".sharesocial").jsSocials({
        showLabel: false,
        showCount: false,
        shares: ["email", "facebook", "twitter", "googleplus" ]
    });




    ///order page slider images////
  
        $('#imageGallery').lightSlider({
            gallery:true,
            rtl:true,
            item:1,
            loop:true,
            thumbItem:9,
            slideMargin:0,
            enableDrag: false,
            currentPagerPosition:'left',
            onSliderLoad: function(el) {
                el.lightGallery({
                    selector: '#imageGallery .lslide'
                });
            }   
        }); 


    ///order page slider images////

    

    /*contact form  label */


        // $(".N-Form .form-control"). on ("focusout",function (){
        //    if( $(this).val() != '')
        //      {
        //        $(this).parent().addClass("has-data");
        //      }
        //   else
        //     {
        //        $(this).parent().removeClass("has-data");
        //     }
        // });

    /*contact form  label */


// upload photo

// $("[type=file]").on("change", function(){
//     // Name of file and placeholder
//     var file = this.files[0].name;
//     var dflt = $(this).attr("placeholder");
//     if($(this).val()!=""){
//       $(this).next().text(file);
//     } else {
//       $(this).next().text(dflt);
//     }
//   });

























    //sticky navbar : 
    
                //  var navbar = document.getElementById("navbar");
                //  var sticky = navbar.offsetTop;
                // $( window ).scroll(function(){
                //     if (window.pageYOffset >= sticky) {
                //                     navbar.classList.add("sticky")
                //                 } else {
                //                     navbar.classList.remove("sticky");
                //                 }
                // } );
//animation
            //    var wow = new WOW(
            //         {
            //              animateClass: 'animated',
            //           offset:       50
            //         }
            //       );
            //       wow.init();


//screens-slider
    
            //       $('.screen-slider').slick({
            //         autoplay:true,
            //         speed: 1000,
            //         pauseOnFocus:true,
            //         pauseOnHover:true,
            //         dots: true,
            //         arrows: false,
            //         centerMode: true,
            //         focusOnSelect: true,
              


            //         responsive: [
                
            //             {
            //             breakpoint: 768,
            //             settings: {
                            
            //                 slidesToShow: 1,
            //                 slidesToScroll: 1,
                       
            //             }
            //     },
                
            //     {
            //             breakpoint: 480,
            //             settings: {
            //                 slidesToShow: 1,
            //                 slidesToScroll: 1,
                
            //             }
            //     },
            
            // ]
            //       });

              


            });
     

