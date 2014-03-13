var b = require('bonescript');

var switchIn = "P9_21";
var transistorOut = "P9_41";

b.pinMode(transistorOut, b.OUTPUT);
b.pinMode(switchIn, b.INPUT);
setInterval(toggle, 100);
console.log("started");

function toggle() {
    b.digitalRead(switchIn, readFunction);
    
    function readFunction(x) {
        console.log("Switch value: " + x.value);
        if (x.value == 0) {
            console.log("pressed");
            b.digitalWrite(transistorOut, b.HIGH);
        } else {
            b.digitalWrite(transistorOut, b.LOW);
        }
    }  
}