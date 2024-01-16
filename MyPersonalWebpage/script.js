// Typing Text Heading
var typed = new Typed('.type', {
    strings: ['Programmer', 'Designer','Developer','Creator'],
    typeSpeed:140,
    backSpeed:90,
    loop:true,
  });
  
//Navigation Bar 
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
  
  

// Portfolio Section

  const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".gallery .image");

window.onload = ()=>{ //after window loaded
  filterItem.onclick = (selectedItem)=>{ //if user click on filterItem div
    if(selectedItem.target.classList.contains("item")){ //if user selected item has .item class
      filterItem.querySelector(".active").classList.remove("active"); //remove the active class which is in first item
      selectedItem.target.classList.add("active"); //add that active class on user selected item
      let filterName = selectedItem.target.getAttribute("data-name"); //getting data-name value of user selected item and store in a filtername variable
      filterImg.forEach((image) => {
        let filterImges = image.getAttribute("data-name"); //getting image data-name value
        //if user selected item data-name value is equal to images data-name value
        //or user selected item data-name value is equal to "all"
        if((filterImges == filterName) || (filterName == "all")){
          image.classList.remove("hide"); //first remove the hide class from the image
          image.classList.add("show"); //add show class in image
        }else{
          image.classList.add("hide"); //add hide class in image
          image.classList.remove("show"); //remove show class from the image
        }
      });
    }
  }
  for (let i = 0; i < filterImg.length; i++) {
    filterImg[i].setAttribute("onclick", "preview(this)"); //adding onclick attribute in all available images
  }
}

// Skill Section

let options = {
  startAngle: -1.55,
  size: 150,
  value: 0.90,
  fill: {gradient: ['#03fcfc', '#00ff4c']}
}
$(".circles .bar").circleProgress(options).on('circle-animation-progress',
function(event, progress, stepValue){
  $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
});
$(".js .bar").circleProgress({
  value: 0.70
});
$(".react .bar").circleProgress({
  value: 0.10
});

  
  
  
  