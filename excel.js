
let body=document.getElementsByTagName("body")[0];
let form=document.createElement("form");
body.appendChild(form);
form.classList.add("form");
form.setAttribute("id","former");
console.log(form);

let fnamee=document.createTextNode("First name");
form.appendChild(fnamee);
let first=document.createElement("input");
form.appendChild(first);
first.setAttribute("type","text");
first.setAttribute("placeholder","enter first name");
first.id="one";
first.classList.add("firstname");
let br1=document.createElement("br");
form.appendChild(br1);
let br2=document.createElement("br");
form.appendChild(br2);

let lnamee=document.createTextNode("Last name");
form.appendChild(lnamee);
let last=document.createElement("input");
form.appendChild(last);
last.setAttribute("type","text");
last.setAttribute("placeholder","enter last name");
last.id="two";
last.classList.add("lastname");
let br3=document.createElement("br");
form.appendChild(br3);
let br4=document.createElement("br");
form.appendChild(br4);


let email=document.createTextNode("Your email");
form.appendChild(email);
let yemail=document.createElement("input");
form.appendChild(yemail);
yemail.setAttribute("type","text");
yemail.setAttribute("placeholder","email");
yemail.id="two";
yemail.classList.add("gmail");
let br5=document.createElement("br");
form.appendChild(br5);
let br6=document.createElement("br");
form.appendChild(br6);

