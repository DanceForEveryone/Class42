function setup() {
  createCanvas(800,400);
  var name = "Rajeev"
  console.log(name)
  //console.log(name.length)
  console.log(name.toUpperCase())
  var num=5
  num=num+1
  console.log(num)

  var num1="7"
  num1=num1+1
  console.log(num1)

  //convert a string into number by parseInt("123")

  num2=parseInt("7")
  num2=num2+1
  console.log(num2)

  console.log(13/2)
  console.log(13%2)
  console.log(13%5)
  console.log("Hi"+" Friend")
  console.log("a" / "b")
  var a = 10//assignment operator
  if(a===10){
  console.log("a=10")
  }

  var score;
  console.log(score)
  var score1=null
  console.log(score1)

  if(3>2){
    console.log("Happy")
  }
  else{
    console.log("Not Happy")
  }

  var name = "Myy name";

switch(name) {  
case  "My name":  
console.log("Condition 1");  
break;  
case  "my Name":  
console.log("Condition 2");  
break;  
default:  
console.log("None of the conditions are true");
}

for(var i=0; i<=5; i++){
	console.log(i)
}

var i =0
while (i<=5){
	console.log(i)
	i=i+1
}

var friends = ["friend1","friend2","friend3"]
console.log(friends[0])
console.log(friends[2])
console.log(friends.length)
friends.push("friends4")
console.log(friends)
friends.pop();
console.log(friends)

for(var index in friends){
	console.log(friends[index])
}
circumference(7);
}

function circumference(radius){
  var circumference = 2 * 3.14 * radius
  console.log(circumference)
	return circumference
}
function draw() {
  background(255,255,255);
  drawSprites();
}