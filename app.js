 
 let count = 0
 
 function increment() {

    console.log("clicked")
    count = count + 1
    console.log(count);
    document.getElementById("count-el").innerHTML = count
 }
 
 function exit() {

    count = count - 1 
    console.log(count);
    document.getElementById("count-el").innerHTML = count ; 
 }
 function reset() {

    count = count * 0 ; 
    console.log(count);
    document.getElementById("count-el").innerHTML = count ; 
 }