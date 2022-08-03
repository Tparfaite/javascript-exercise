let par=document.getElementById("para");
par.classList.add("pg");
// console.log(par.innerHTML);
par.addEventListener("click",function(e){
    // console.log("this is clicked");
    par.style.color="blue";
    par.innerHTML="This may bring a change";
    // par.style.fontsize="25px";
})




