function calcDiffs(){
    console.log("calc"); //test
    let num1= document.getElementById("alter1").value;
    let num2= document.getElementById("alter2").value;
    let num3=num1-num2;


    console.log(num3);
     document.getElementById("result").innerHTML=num3;
}