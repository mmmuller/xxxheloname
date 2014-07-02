#!/usr/bin/env node
var myArgs = process.argv;

var name = myArgs[2];

if(name) {
  console.log("Hello " + name + "!!!");
}else {
  console.log("Hello!!!!");
  console.log("");
  console.log("Now try agan: xxheloname MY_NAME");
}

//(function() {
//	
//	console.log("hello!!!");
//}).call(this)

