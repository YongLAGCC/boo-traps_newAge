

var range = 1000; 

function evenNum() {
    for(var i =1; i<=range; i++) {
        if(i%2==0){
            console.log(i);
        }
    }
}

console.log('Second: three faces or  five buses . ~~~~~~~~~~~~~~~~~~~~~~`\n')

var faceBus =100;




(function FOrB() {
    for(var i =3; i< faceBus; i++) {
        if(((i%3 ==0) || (i%5 ==0))) {

            if(i%3==0 && i%5 !=0){
                console.log(i, ": ", 'Fizz');
                
            } else if(i%5==0 && i%3 !=0) {
                console.log(i, ": ","Buzz");
            }   else if(((i%3 ==0) && (i%5 ==0))) {
                console.log(i, ": ","Fizz" ," ","Buzz")
               
            }
            
}} 
})()





console.log('Third: button shift, tags will show on or off ~~~~~~~~~~~~~~~~~~~~~~`\n')

var tryButton = document.getElementById("button");

tryButton.addEventListener("click",show);

function show(click) {
    if(document.getElementById('sampleshowtext').innerHTML=="")
    {
        var textShow = document.getElementById("button").innerHTML;
        document.getElementById('sampleshowtext').innerHTML= textShow;
        document.getElementById("button").innerHTML= "Text Showed!"
    } else {
        document.getElementById('sampleshowtext').innerHTML="";
    }
}






console.log("Fifth: tag showing will follow input above")

var inputType = document.getElementById("Yourinput");
var follow = document.getElementById("followInput"); 

inputType.addEventListener("input", add);

function add() {
    var typing = inputType.value;
    follow.innerHTML = typing;
}


console.log("Practice for tpying and follow in another box")

var writers = document.getElementById("writer");
var anotherWriters = document.getElementById("String");

writers.addEventListener("input", act);

function act() {
    var recall = writers.value; 
    anotherWriters.value=recall;
}