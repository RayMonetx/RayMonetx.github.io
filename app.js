console.log("This script was loaded from an external JS File")

// this is an alert
// alert("This is an alert!")

var name = window.prompt("Enter your name: ")
alert(`Hello ${name}!`)

// use document.getElementByID()
document.getElementById("name").innerHTML = "<hr>Hello " + name + "!</h2>"