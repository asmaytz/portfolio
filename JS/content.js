var today = new Date(); //new date object created 
var hourNow = today.getHours(); // find the current time using this 
var greeting; //statement 
// the if and else if statement will dispay greeting based on the current time 
if (hourNow > 18){
    greeting = 'Good evening!';
} else if(hourNow > 12){
    greeting = 'Good afternoon!';
}else if(hourNow >0){
    greeting = 'Good morining!';
} else{
    greeting = 'Welcome!';
}
document.write('<h3>' + greeting + '</h3>');