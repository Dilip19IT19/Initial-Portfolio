document.querySelector(".hamburger").addEventListener("click",function(){
  document.querySelector(".hamburger").classList.toggle("active");
  document.querySelector("nav ul").classList.toggle("popup_menu");
  if(document.querySelector(".hamburger").classList.contains("active"))
  {
    document.querySelector("section").style.marginTop="7rem";
  }
  else
  {
    document.querySelector("section").style.marginTop="1rem";
  }
})