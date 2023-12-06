DAY5


const person={
  name:"vishal",
  class:"btech",
  rollno:2104920100119,
  age:18,
  hobbies:["cricket","football","chess"],
  address:"dto",
};
//without json.stringify
console.log(person);

//after json stringfy  all stirng are getting wrapped in double quotes
const jsonstring=JSON.stringify(person);
console.log(jsonstring);
