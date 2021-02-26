/*
Instructions:
1. Inspect the DOM
2. Navigate to console
3. Copy and paste the below code into console
4. Run console until the console.log hits zero (hit return/enter, hit up button and return/enter again)
5. Scroll down through page and keep repeating #5 

Shouldn't take longer than 2-3 mins
*/


var btns = document.getElementsByClassName('likeIcon clickable') // selects the right class
console.log(btns.length) // this tells you how many likes we just gave
for (var i =0; i<btns.length; i++) { 
  btns[i].click() // clicks as many clicks it can find
};

