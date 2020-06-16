

const homeTexts=document.querySelectorAll(".overlay")
const sideTexts=document.querySelectorAll(".sideText");
let time1=300;let time2=300;

/*homeTexts.forEach((text)=>{
  text.style.opacity=0;
  text.style.transform="translateX(-50px)";
 // text.style.transition="all 0.5s ease";
 
})

sideTexts.forEach((text)=>{
  text.style.opacity=0;
  text.style.transform="scale(0)";
  //text.style.transition="all 0.5s ease-in"
})*/

homeTexts[3].style.fontFamily="Faster One"

homeTexts[1].style.opacity=1;
   

homeTexts.forEach((text)=>{
        
  setTimeout(()=>{
    
    text.style.opacity=1;
    text.style.transform="translateX(0)";
  },time1);
      
  time1+=300;
})

sideTexts.forEach((text)=>{
  setTimeout(()=>{
    text.style.opacity=1;
    text.style.transform="scale(1)";
  },time2)
  time2+=300;
})
    

