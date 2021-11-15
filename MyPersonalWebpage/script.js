var typed = new Typed('.type', {
    strings: ['Programmer', 'Designer','Developer','Creator'],
    typeSpeed:140,
    backSpeed:90,
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
  
  const inputs = document.querySelectorAll(".input");
  
  function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
  }
  
  function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
      parent.classList.remove("focus");
    }
  }
  
  inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
  });
  
  
  
  
  
  
  
  