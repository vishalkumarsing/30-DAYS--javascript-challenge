setInterval(
  ()=>console.log("this function will be executed every 2 seconds"),2000
);

setTimeout(function(){
  console.log("this function will be execute after 5 seconds");
},5000);

const intervalid=setInterval(function(){
  console.log("this function will be executed every 4 seconds");
}, 4000);

// setTimeout(function(){
//   clearInterval(intervalid);
// })
