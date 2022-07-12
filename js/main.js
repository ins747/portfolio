$(document).ready(function(){
    // .header_in fix
    $(window).scroll(function(){
      var sTop=$(this).scrollTop();
      var s1_height=$('.s1').height();
      var s2_height=$('.s2').height();
      var s3_height=$('.s3').height();
      var s4_height=$('.s4').height();
      var s5_height=$('.s5').height();
      if(sTop>s1_height+s2_height+s3_height+s4_height){
        $('.header_in').removeClass('active2');
        $('.header_in').addClass('active');
        $('.mobile_nav').removeClass('active2');
        $('.mobile_nav').addClass('active');
      }else if(sTop>s1_height+s2_height+s3_height){
        $('.header_in').removeClass('active');
        $('.header_in').addClass('active2');
        $('.mobile_nav').removeClass('active');
        $('.mobile_nav').addClass('active2');
        $('.top').fadeIn();
      }else if(sTop>s1_height+s2_height){
        $('.header_in').removeClass('active2');
        $('.header_in').addClass('active');
        $('.mobile_nav').removeClass('active2');
        $('.mobile_nav').addClass('active');
        $('.top').fadeOut();
      }
      else if(sTop>s1_height){
        $('.header_in').removeClass('active');
        $('.header_in').addClass('active2');
        $('.mobile_nav').removeClass('active');
        $('.mobile_nav').addClass('active2');
      }else if(sTop>70){
        $('.header_in').removeClass('active2');
        $('.header_in').addClass('active');
        $('.mobile_nav').removeClass('active2');
        $('.mobile_nav').addClass('active');
      }
      else{
        $('.header_in').removeClass('active');
        $('.header_in').removeClass('active2');
        $('.mobile_nav').removeClass('active');
        $('.mobile_nav').removeClass('active2');
      }

      // branch
      if(sTop>s1_height+s2_height+s3_height){
        $( '.s4 .branch' ).stop().animate({top:0}, 700);
      }else{
        $( '.s4 .branch' ).stop().animate({top:130}, 700);
      }
      if(sTop>s1_height+s2_height){
        $( '.s3 .branch' ).stop().animate({top:0}, 700);
      }else{
        $( '.s3 .branch' ).stop().animate({top:130}, 700);
      }
      if(sTop>s1_height){
        $( '.s2 .branch' ).stop().animate({top:0}, 700);
      }
      else{
        $( '.s2 .branch' ).stop().animate({top:130}, 700);
      }
    });
    
    // mobile menu
    $('header .header_in .menu').click(function(e){
      e.preventDefault();
        $('header .header_in .mobile_nav').fadeToggle();
    });
    $('.mobile_nav_in ul li a').click(function(e){
      e.preventDefault();
        $('.mobile_nav').hide();
    });

    // shift
    $('nav ul li a').click(function(e){
      e.preventDefault();
      var $anchor=$(this);
      $('html,body').stop().animate({
        scrollTop:$($anchor.attr('href')).offset().top
      },700);
    })
    $('.mobile_nav .mobile_nav_in ul li a').click(function(e){
      e.preventDefault();
      var $anchor=$(this);
      $('html,body').stop().animate({
        scrollTop:$($anchor.attr('href')).offset().top
      },700);
    })
    
    // s2 tab_menu
    $('.tab_list').hide();
    $('.tab_list:first').show();
    $('.tab_title ul li').click(function(e){
      e.preventDefault();
        var num=$(this).index();
        $('.tab_title ul li').removeClass('active');
        $(this).addClass('active');
        $('.tab_list').hide();
        $('.tab_list').eq(num).fadeIn();
    });
    
    // s3 swiper
    var swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      autoplay: {
          delay:3000,
          disableOnInteraction: false
      },
      loop:true,
      pagination: {
        el: ".swiper-pagination",
      },
    });

    // .s3 popup
    var img_num=0;
    var img_total=$('.swiper-slide').length/3;
    $('.s3 .popup').hide();
    $('.swiper-slide').click(function(e){
        e.preventDefault();
        img_num=$(this).index()+1;
        var img_attr=$(this).find('a').attr('href');
        var img_addr='<img src="'+img_attr+'">';
        var txt_addr=$(this).attr('data');
        var str=txt_addr.split(',',3);
        var txt_str='<div class="slide_des"><div class="slide_title">'+str[0]+'</div><div class="slide_content">'+str[1]+'</div><div class="slide_content">'+str[2]+'</div></div>';

        $('.graphic').empty();
        $('.txt').empty();
        $('.graphic').append(img_addr);
        $('.txt').append(txt_str);
        $('.s3 .popup').show();
        // $('html,body').css('overflow-y','hidden');
    });
    $('.s3 .popup .close').click(function(e){
        e.preventDefault();
        e.stopPropagation();
        $('.s3 .popup').hide();
        // $('html,body').css('overflow-y','visible');
    });
    // .s3 .nextBtn
    $('.s3 .popup .nextBtn').click(function(e){
        e.preventDefault();
        e.stopPropagation();
        img_num++; 
        if(img_num>img_total){
            img_num=1;
        }       
        var img_addr='<img src="img/a'+img_num+'.png">'
        var txt_addr=$('.s3 .swiper-slide').eq(img_num-1).attr('data');
        var str=txt_addr.split(',',3);
        var txt_str='<div class="slide_des"><div class="slide_title">'+str[0]+'</div><div class="slide_content">'+str[1]+'</div><div class="slide_content">'+str[2]+'</div></div>';

        $('.graphic').empty();
        $('.txt').empty();
        $('.graphic').append(img_addr);
        $('.txt').append(txt_str);
        $('.s3 .popup').show();
        // $('html,body').css('overflow-y','hidden');     
    });
    //.s3 .prevBtn
    $('.s3 .popup .prevBtn').click(function(e){
        e.preventDefault();
        e.stopPropagation();
        img_num--;
        if(img_num<=0){
            img_num=img_total;
        }   
        var img_addr='<img src="img/a'+img_num+'.png">'
        var txt_addr=$('.s3 .swiper-slide').eq(img_num-1).attr('data');
        var str=txt_addr.split(',',3); 

        var txt_str='<div class="slide_des"><div class="slide_title">'+str[0]+'</div><div class="slide_content">'+str[1]+'</div><div class="slide_content">'+str[2]+'</div></div>';

        $('.graphic').empty();
        $('.txt').empty();
        $('.graphic').append(img_addr);
        $('.txt').append(txt_str);
        $('.s3 .popup').show();
        // $('html,body').css('overflow-y','hidden');
    });
      
    

    // contact
    $('.s5 .s5_right .s5_right_in .btn .contact').click(function(){
      $('.s5 .popup').fadeIn();
    });
    $('.xbtn').click(function(){
      $('.s5 .popup').hide();
    });

    // top btn
    $('.top').click(function(){
      $('html,body').animate({
        scrollTop:0
      });
    });

    // s4
    var win_width=$(window).width();
    if(win_width>480){
      $('.s4 .site ul a').hover(function(){
        $(this).find('.cover').stop().fadeIn();
      },
      function(){
        $(this).find('.cover').stop().fadeOut();
      });
      clearInterval(intervalId);
    }else{
      setInterval(function(){
        $('.s4 .site ul a .cover').fadeToggle(1000);
      },4000);
    }

});