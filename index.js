var range = 1000; 

function evenNum() {
    for(var i =1; i<=range; i++) {
        if(i%2==0){
            console.log(i);
        }
    }
}
//evenNum();
console.log('Second: faces or buses . ~~~~~~~~~~~~~~~~~~~~~~`\n')

var faceBus =100;

function FOrB() {
    for(var i =3; i< faceBus; i++) {
        if((i%3==0) && (i%5==0))
            console.log(i);
    }
}
//FOrB(); 

console.log('Third: button controlled ~~~~~~~~~~~~~~~~~~~~~~`\n')

var elem; 
function change() {
    elem = document.getElementsById('myButton');
    if(elem.value == 'Show It') 
        elem.value = "show"; 
    else elem.value ="";
   
}


console.log("Fourth: following your typing. ")

var writer = document.getElementById("wirter");
var String = document.getElementById("String");

writer.addEventListener("input", react);

function react() {
    console,log(react);
}
