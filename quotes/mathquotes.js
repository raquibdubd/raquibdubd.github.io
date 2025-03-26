function myFunction() {
var items = Array(523, 3452, 334, 31, 5346);
var item = items[Math.floor(Math.random()*items.length)];
document.getElementById("demo1").innerHTML =item;   
return item;
}

// Varible call
var name = "Raquib";