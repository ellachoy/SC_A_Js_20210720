function calcAge(){
console.log("calcAge");
// console.log(document.getElementById("age-box").value);
// console.log(document.getElementById("calcAge"))
 let num1=document.getElementById("age-box").value;
 let num2=2021-num1;
 
 console.log(num2);
 document.getElementById("result").innerHTML=num2;

}