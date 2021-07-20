

function calcNum(){ 
//   console.log( document.getElementById("num-box").value);
//   console. log(document.getElementById("calcNum").value*2);

    let num1= document.getElementById("num-box").value;
    let num2=num1*2;
   
    console.log(num2);
    document.getElementById("result").innerHTML = num2;
}
