document.getElementById("btn1").addEventListener("click",enterMouse1);
function enterMouse1(){
  document.getElementById("btn1").style.backgroundColor="black";
    document.getElementById("btn1").style.color="white";
   }3
   document.getElementById("btn2").addEventListener("click",enterMouse2);
   function enterMouse2(){
    document.getElementById("btn2").style.backgroundColor = "black";
    document.getElementById("btn2").style.color= "white";
   }
   document.getElementById("btn3").addEventListener("click",enterMouse3);
   function enterMouse3(){
    document.getElementById("btn3").style.backgroundColor = "black";
    document.getElementById("btn3").style.color= "white";
   }
   document.getElementById("btn4").addEventListener("click",enterMouse4);
   function enterMouse4(){
    document.getElementById("btn4").style.backgroundColor = "black";
    document.getElementById("btn4").style.color= "white";
   }
   document.getElementById("btn5").addEventListener("click",enterMouse5);
   function enterMouse5(){
    document.getElementById("btn5").style.backgroundColor = "black";
    document.getElementById("btn5").style.color= "white";
 
   }
   
  //  fav button-------------->>
 
  function fav(){
       var fav =JSON.parse(localStorage.getItem("favItems")) || [];

       
       document.addEventListener("click",addtoFav)
         function addtoFav(item){
      fav.push(item);
      localStorage.setItem("favItems",JSON.stringify(fav))
  }
 } 
 document.getElementById("fav").addEventListener("click",function(){
   window.location.href="fav1.html"
})

// color buttons
// btn1
document.getElementById("tickbtn1").addEventListener("click",hy1)

  function hy1() {
      document.getElementById("tickbtn1").setAttribute("class","change1")
  }
  // btn2
  document.getElementById("tickbtn2").addEventListener("click",hy2)

  function hy2() {
      document.getElementById("tickbtn2").setAttribute("class","change2")
  }
  // btn3
  document.getElementById("tickbtn3").addEventListener("click",hy3)

  function hy3() {
      document.getElementById("tickbtn3").setAttribute("class","change3")
  }



//  data as object

    
  document.getElementById("cart").addEventListener("click",dO);
  function dO(){
//  localStorage.setItem("myObject",data);
    var s =JSON.stringify(data);
   localStorage.setItem("newS",s);
   var originalObject = JSON.parse(localStorage.getItem("new"))
   console.log(originalObject)
  }





  //appending fav utton

  document.querySelector("body").append("fav")