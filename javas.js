let drawer=parseInt(prompt("enter the number from 1 to 4"));
switch(drawer){
    case 1:
    document.write("There is HTML book");
    break;
    case 2:
        document.write("There is CSS book");
    break;
    case 3:
        document.write("There is Javascript book");
    break;
    case 4:
        console.log ("There is database book");
    break;
    default:
    alert("There is no book");
}