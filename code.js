window.addEventListener("scroll", function(){
    var header = document.querySelector(".navigation");
    if(window.scrollY>100){
      $('.navigation').removeClass("nav-bar")
    }
    else{
      $('.navigation').addClass("nav-bar")
    }

    header.classList.toggle("sticky", window.scrollY>0);
  });