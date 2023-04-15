document.querySelector("button").addEventListener("click", myFun);


function myFun() {
  // console.log("amandeep")
  

  let diceA = Math.floor(Math.random() * 6 + 1);
  let diceB = Math.floor(Math.random() * 6 + 1);
  let diceC = Math.floor(Math.random() * 6 + 1);
  console.log(diceA, diceB, diceC);

  let member1 = (document.querySelector(".member-1").textContent = diceA);
  let member2 = (document.querySelector(".member-2").textContent = diceB);
  let member3 = (document.querySelector(".member-3").textContent = diceC);

  // console.log(member1,member2,member3)
  // winner --------------------------------------------------------------

  if (member1 > member2 && member1 > member3) {
    document.querySelector(".member-1").style.backgroundColor = "green";
    let win = document.querySelector(".A").innerText;
  
    document.querySelector(".winner").innerText = `${win}`;
  } else if (member2 > member1 && member2 > member3) {
    document.querySelector(".member-2").style.backgroundColor = "green";
    let win = document.querySelector(".B").innerText;
    document.querySelector(".winner").innerText = `${win}`;
   
  } else {
    document.querySelector(".member-3").style.backgroundColor = "green";
    let win = document.querySelector(".C").innerText;
    document.querySelector(".winner").innerText = `${win}`;
    
  }

//   // 2nd    -------------------------------------------------------------

  if ((member1 > member2 && member1< member3) || (member1> member3&& member1 < member2)) {
    document.querySelector(".member-1").style.backgroundColor = "yellow";
  } else if (
    (member2 > member1 &&  member2 <  member3) ||
    ( member2 >  member3 &&  member2 <  member1)
  ) {
    document.querySelector(".member-2").style.backgroundColor = "yellow";
  } else {
    document.querySelector(".member-3").style.backgroundColor = "yellow";
  }

//    for red   -------------------------------------------------
    

if( member1< member2  &&  member1< member3)
{
    document.querySelector(".member-1").style.backgroundColor = "red";  
}
else if( member2< member1   &&  member2< member1)
{
    document.querySelector(".member-2").style.backgroundColor = "red";  
}
else
{
    document.querySelector(".member-3").style.backgroundColor = "red";  
}



// for draw 

if(  member1 == member2 ){
    document.querySelector(".member-1").style.backgroundColor = "blue";  
    document.querySelector(".member-2").style.backgroundColor = "blue";  

    document.querySelector(".winner").innerText="Draw"
  
}
else if( member2 ==  member3 ){

    document.querySelector(".member-2").style.backgroundColor = "blue";  
    document.querySelector(".member-3").style.backgroundColor = "blue"; 
    document.querySelector(".winner").innerText="Draw" 
}

else if( member3 == member1){

    document.querySelector(".member-1").style.backgroundColor = "blue";  
    document.querySelector(".member-3").style.backgroundColor = "blue"; 
    document.querySelector(".winner").innerText="Draw" 
}



}

