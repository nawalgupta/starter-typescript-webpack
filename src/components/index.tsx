import Greeter from "./Greeter";

var greeter = new Greeter("TypeScript + webpack");

document.getElementById("target").innerHTML = greeter.greet();