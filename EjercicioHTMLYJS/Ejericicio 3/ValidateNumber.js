function validatenumber(){

var validate = document.getElementById("Number").value;
var resultado = isNaN(validate);
if(resultado == false ){   
alert("Es un numero");
numberlength(validate);
}
else
{
   alert("No es un numero");
}
}

function numberlength(validate)
{
    validate.toString();
    alert("Los digitos son :" + validate.length);
}