//Change bg color
function changeBgColor(bc) {
    document.body.style.backgroundColor = bc.value;
    document.getElementById("content").style.backgroundColor=bc.value;
  }
//Change text color
  function changeTextColor(tc){
      document.body.style.color = tc.value;
      document.getElementById("content").style.color=tc.value;	
  }

//assigning div elements to variables
  let hidden_1 = document.getElementById("hidden-content1");
  let hidden_2 = document.getElementById("hidden-content2");
  let hidden_3 = document.getElementById("hidden-content3");
  let hidden_4 = document.getElementById("hidden-content4");
  let hidden_5 = document.getElementById("hidden-content5");

//Create eventlistners
document.getElementById("figure1").addEventListener("mouseover",mouseover1);
document.getElementById("figure2").addEventListener("mouseover",mouseover2);
document.getElementById("figure3").addEventListener("mouseover",mouseover3);
document.getElementById("figure4").addEventListener("mouseover",mouseover4);
document.getElementById("figure5").addEventListener("mouseover",mouseover5);  

//functions for changing the visibility
  function mouseover1(){
    hidden_1.style.visibility = "visible";
    hidden_2.style.visibility = "hidden";
    hidden_3.style.visibility = "hidden";
    hidden_4.style.visibility = "hidden";
    hidden_5.style.visibility = "hidden";
  }

  function mouseover2(){
    hidden_1.style.visibility = "hidden";
    hidden_2.style.visibility = "visible";
    hidden_3.style.visibility = "hidden";
    hidden_4.style.visibility = "hidden";
    hidden_5.style.visibility = "hidden";
  }
  
  function mouseover3(){
    hidden_1.style.visibility = "hidden";
    hidden_2.style.visibility = "hidden";
    hidden_3.style.visibility = "visible";
    hidden_4.style.visibility = "hidden";
    hidden_5.style.visibility = "hidden";
  }

  function mouseover4(){
    hidden_1.style.visibility = "hidden";
    hidden_2.style.visibility = "hidden";
    hidden_3.style.visibility = "hidden";
    hidden_4.style.visibility = "visible";
    hidden_5.style.visibility = "hidden";
  }

  function mouseover5(){
    hidden_1.style.visibility = "hidden";
    hidden_2.style.visibility = "hidden";
    hidden_3.style.visibility = "hidden";
    hidden_4.style.visibility = "hidden";
    hidden_5.style.visibility = "visible";
  }

