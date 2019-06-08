// //js+html
// document.write("<hr>");
// document.write("Hello World Wide Web");
// document.write("<hr>");


// //console
// var x = "100%";
// alert(x);
// console.log("Java script is " + x + " easy....");


// //notification
//  alert("This is an Alert method");
//  confirm("Are you OK?"); 
//  let a = prompt("What is your name?");
//  prompt("How old are you?", "20");
//  prompt("What is your student id number?");
//  alert("Text to be displayed");
//  var txt;
//  var answer = confirm("Are you sure?");
//  if(answer == true){
//     txt =  "You pressed OK!";
//  }else{
//     txt = "You pressed Cancel!";
//  }
// //show x and y
//   x=3;
//   let y =4;
//   {
//       x = 0;
//       let y =1;
//       alert("x="+x+", y = " + y);
//   }


// x = 3;
// let y = 4;
// {
//     x = 0;
//     let y = 1;
// }
//     alert("x=" + x + ", y = " + y);

// //typeof operator
// var x = "hello", y;
// alert("Variable x value is " + typeof x); 
// alert("Variable y value is " + typeof y);
// alert("Variable x value is " + typeof z);

// var keys = "";
// var values = "";
// var mylist = new Array("Chinese","English","Jap");
// mylist.newField1 = "Something";
// for (var key in mylist) {
//     keys += key + " ";
//     values += mylist[key] + " ";
// }
// alert(keys);
// alert(values);

// // keys becomes "0 1 2 newField1"
// // values becomes "Chinese English Jap Something

// var obj = new Object();
// obj.prop1 = 123;
// obj.prop2 = "456";
// obj["prop3"] = true;

// var keys = " ", values = " ";
// for(var p in obj){
//         key += p+" ";
//         values += obj[p]+" ";       
// }
// alert(key.replace("newField1", ""));
// alert(values);
// alert(keys); 
// // Show "prop1 prop2 pro3 " alert(values);
// // Show "123 456 true

// var n = !!true;
// var  x = "8"-9;
// var y = (true == "2");
// var z = (-8 && true);
// console.log(n);
// console.log(x);
// console.log(z);
// console.log(y);

function sum(){
   var s = 0;
   for(var i = 0 ; i < arguments.length ; i++){
      s = s + arguments[i];
      return s; 
   }
}