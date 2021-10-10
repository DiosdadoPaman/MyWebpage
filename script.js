var typed = new Typed('.type', {
    strings: ['Subject', 'Description','Schedule','Teachers'],
    typeSpeed:100,
    backSpeed:70,
    loop:true,
  });
  
  
  
  $(document).ready(function(){
      $(window).scroll(function(){
          if(this.scrollY > 20){
              $('.navbar').addClass("sticky");
          }else{
              $('.navbar').removeClass("sticky");
          }
     });
     $('.menu-btn').click(function(){
          $('.navbar .menu').toggleClass("active");
          $('.menu-btn i').toggleClass("active");
     });
  }); 
  
  