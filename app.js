// document.getElementById("head").innerHTML=<li>HTML</li>
// document.getElementById("head").style="color:red";
// document.getElementById("head").className="bg-primary text-white";
// function other(){
// var a;
// a=100;
// console.log(a);

// var b;
// b=200;
// console.log(b);

// c=300;
// console.log(c);

// var a=1000;
// b=2000
// console.log(a+b)


// }
// other()

// function go(){
// let arr=[10,"pranesh",true,undefined,null,];
// console.log(arr.length);
// console.log(typeof(arr));
// console.log(arr.indexOf);
// }
// go()
// let itemlist=[]
// function additem(){

//     let stockitem = document.getElementById("item").value;
//     itemlist.push(stockitem);
//     console.log(itemlist);
//     document.getElementById("divide").innerHTML = itemlist;
//     document.getElementById("item").value="";
// }
// document.getElementById("btn").addEventListener("click",additem);
               
// let obj = {
//     firstname:"pranesh",
//     age:22,
//     department:"ECE",
//     skills:["volley","football","cricket"]
// }
// console.log(obj.firstname);
// console.log(obj.age);
// console.log(obj.department);
// console.log(obj.skills);
// const details= ()=>{
//     let obj={
//         firstname:document.getElementById("firstname").value,
//         age:document.getElementById("age").value,
//         department:document.getElementById("department").value,
//     }
// }
// details();

// console.log(20%30);
const payment=()=>
{
   let val=parseInt(document.getElementById("bp").value);
   let hra=document.getElementById("hra").value=val*(10/100);
   let da=document.getElementById("da").value=val*(5/100);
   let tvl=document.getElementById("tvl").value=val*(15/100);
   let pf=document.getElementById("pf").value=val*(15/100);
   let gp=document.getElementById("gp").value=val+hra+da+tvl+pf;
   let netsal=document.getElementById("netsal").value=gp-pf;
  document.getElementById("tblid").innerHTML +=`<tr>     
  <td>${val}</td>
  <td>${hra}</td>
  <td>${da}</td>
  <td>${tvl}</td>
  <td>${pf}</td>
  <td>${gp}</td>
  <td>${netsal}</td></tr>` 
}
document.getElementById("bp").addEventListener("keyup",payment);


  






