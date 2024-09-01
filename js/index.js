
document.addEventListener("DOMContentLoaded", function () {
  const logo=document.getElementById("logo")
  const header=document.querySelector("header")
  const h1=document.querySelector(".titulo")
  
  

    // Agrando el Logo
    function agrandoLogo(){
      logo.classList.add("agrandoLogo");
      header.classList.add("backLogo");
      h1.classList.add("colorH1");      
    }  
  
    
    function achicoLogo(){
      logo.classList.remove("agrandoLogo");
      header.classList.remove("backLogo");
      h1.classList.remove("colorH1");
    }  
    
    //logo.style.width = '200px';

    
    logo.addEventListener("mouseover", agrandoLogo);
    logo.addEventListener("mouseout", achicoLogo);

  
  });