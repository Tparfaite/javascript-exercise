let body=document.getElementsByTagName("body")[0];
let form=document.createElement("form");
form.classList.add("form");
body.appendChild(form);
console.log(form);
form.setAttribute("id","form");

let fnamef=document.createTextNode("First name");
form.appendChild(fnamef);
let fname=document.createElement("input");
fname.setAttribute("type","text");
fname.setAttribute("id","f-name");
fname.classList.add("fname");
fname.setAttribute("placeholder","your first name");
form.appendChild(fname);
let br=document.createElement("br");
form.appendChild(br);
let br1=document.createElement("br");
form.appendChild(br1);

let lnamef=document.createTextNode("Last name");
form.appendChild(lnamef);
let lname=document.createElement("input");
lname.setAttribute("type","text");
lname.classList.add("lname");
lname.setAttribute("id","l-name");
lname.setAttribute("placeholder","your last name");
form.appendChild(lname);
let br2=document.createElement("br");
form.appendChild(br2);
let br3=document.createElement("br");
form.appendChild(br3);

let email=document.createTextNode("Your email");
form.appendChild(email);
let yemail=document.createElement("input");
yemail.setAttribute("type","text");
yemail.setAttribute("placeholder","email");
yemail.classList.add("youremail");
yemail.setAttribute("id","y-email");
form.appendChild(yemail);
let br4=document.createElement("br");
form.appendChild(br4);
let br5=document.createElement("br");
form.appendChild(br5);

let passwordp=document.createTextNode("Password");
form.appendChild(passwordp);
let pass=document.createElement("input");
pass.setAttribute("type","password");
pass.setAttribute("placeholder","password");
pass.classList.add("pass");
pass.setAttribute("id","pasa");
form.appendChild(pass);
let br6=document.createElement("br");
form.appendChild(br6);
let br7=document.createElement("br");
form.appendChild(br7);

let button=document.createElement("input");
form.appendChild(button);
button.setAttribute("id","btn");
button.setAttribute("type","submit");
button.setAttribute("placeholder","submit");

function Myform(fname,lname,yemail,pass){
    this.fname=fname;
    this.lname=lname;
    this.yemail=yemail;
    this.pass=pass;
    
}


button.addEventListener("click",function(e){
    e.preventDefault();


    let fform=new Myform(fname.value,lname.value,yemail.value,pass.value);
    for(let id in fform){console.log(`${id}:${fform[id]}`);}

    console.log(`the first name is ${fform.fname}`);
    fname.value=""; lname.value="";yemail.value="";pass.value="";

    
}
)







