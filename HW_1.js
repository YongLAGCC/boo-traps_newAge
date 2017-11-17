// // Homework II
// 1. factorial

var j=5; 
var z=1; 

do{
    z =z*j;
    j--;
    
} while(j>=2)
console.log(z)


console.log("HW2: Palindrome ~~~~~~~~~~~~~~~~~~~~~~```")


function palindrome(input) {
    var checkPaLin = input;
    var leng = checkPaLin.length; 
    var firstHalf = leng/2; 
    var lastHalf=leng/2;
    
     console.log('leng: ',leng)

     console.log('first half length: ',firstHalf)
    for(var i=0; i< firstHalf; i++)
    {

        // console.log(checkPaLin.charAt(i));
        // console.log("~~~~~~~",leng-1);
        // console.log(checkPaLin.charAt(leng-1));

        if( checkPaLin.charAt(i) ==  checkPaLin.charAt(leng-1-i)) {
            continue; 
        } else {
            console.log("It is not Palindrome")
            return "-1";
          
        }
    }
    return checkPaLin;

} console.log(palindrome('bab'))