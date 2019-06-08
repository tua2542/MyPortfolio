
function myFunc() {
alert('Welcome :)');
var x =prompt('Please Enter the number');
// x = parseInt(x);
// document.write('<h1>'+x+'</h1>');
//basic way
// if (x % 2 === 0){
//     alert("EVEN");
// }else{
//     alert("ODD");
// }

// alert(x+": "+typeof x);
if(isNaN(x)){
    x = propt('Nope, try again');
    x = parseInt(x);
}
//1-line
alert(x % 2 === 0 ? 'EVEN':'ODD');

}