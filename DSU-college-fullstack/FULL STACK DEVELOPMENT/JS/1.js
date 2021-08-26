var today = new Date();
var date = today.getDate();
var month = today.getMonth();
var year = today.getFullYear();
console.log("hi");
document.write("<br> Date is : " + date + "/" + month + "/" + year);
document.write("<br> Time is : " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds());
