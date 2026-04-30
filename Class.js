

let params = new URLSearchParams(window.location.search);

let coding = Number(params.get("c"));
let selif = Number(params.get("s"));
let workout = Number(params.get("w"));
let calm = Number(params.get("p"));
let family = Number(params.get("f"));

let p1 = document.querySelector("#p1");
let p2 = document.querySelector("#p2");
let p3 = document.querySelector("#p3");
let p4 = document.querySelector("#p4");
let p5 = document.querySelector("#p5");
let p1b =document.querySelector(".p1b");

if(coding>9){
  p1b.style.backgroundColor="green";
  p1.innerText="HIGH";
}else{
  p1b.style.backgroundColor="red";
  p1.innerText="LOW";
}

if(selif>9){
  p2b.style.backgroundColor="green";
  p2.innerText="HIGH";
}else{
  p2b.style.backgroundColor="red";
  p2.innerText="LOW";
}

if(workout>9){
  p3b.style.backgroundColor="green";
  p3.innerText="HIGH";
}else{
  p3b.style.backgroundColor="red";
  p3.innerText="LOW";
}

if(calm>9){
  p4b.style.backgroundColor="green";
  p4.innerText="HIGH";
}else{
  p4b.style.backgroundColor="red";
  p4.innerText="LOW";
}

if(family>9){
  p5b.style.backgroundColor="green";
  p5.innerText="HIGH";
}else{
  p5b.style.backgroundColor="red";
  p5.innerText="LOW";
}


let result= document.querySelector("#todayResult") 
let avg=(coding+selif+workout+calm+family)/5
avg>9?result.innerText ="excellent":result.innerText ="bad";