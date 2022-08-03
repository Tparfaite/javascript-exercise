let par=document.getElementById("para");

let bt=document.getElementById("btn");
let nm=document.getElementById("name");
let array=[];
bt.addEventListener("click",function(e){
    array.push(nm.value);
    nm.value="";
    console.log(array.length);
}) 
function Address(name,age,department){
    this.names=name;
    this.age=age;
    this.department=department;
}
let Myaddress1=new Address("Aime","10","law");
for(let id in Myaddress1){console.log(`${id}:${Myaddress1[id]}`);
}


// bt.addEventListener("click",function(e){
//     alert("this button is clicked");
//   par.innerHTML=" " ;
//   body.style.backgroundColor="green";
  
// }
// )

// let arr=new Map([
// ["clothes",500],
// ["shoes",300],
// ["dinner",200],
// ["supper",100],
// ]);
// arr.set("clothes",250);
// arr.set("shoes",140);

// console.log(arr.get("dinner"));
// console.log(arr);
// arr.length;
// arr.set("lunch",120);
// arr.set("bag",300);
// console.log(arr);

// arr.has("bag");
// arr.delete("lunch");
// console.log(arr);

// let ages = [32, 33, 16, 40];
// ages.filter(checkAdult);
// function checkAdult(age) {
//     console.log(age >= 18) ;
// }
// console.log(ages);
// console.log(checkAdult("ages>=18"));
