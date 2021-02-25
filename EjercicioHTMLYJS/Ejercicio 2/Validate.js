function validate()
{
    var respuesta1,respuesta2,respuesta3,respuesta4;
    if(document.getElementById("B").checked == true)
    {
        respuesta1 = 1;
    }
    else
    {
        respuesta1=0;
    }
    if(document.getElementById("G").checked == true)
    {
        respuesta2 = 1;
    }
    else
    {
        respuesta2=0;
    }
    if(document.getElementById("I").checked == true)
    {
        respuesta3 = 1;
    }
    else
    {
        respuesta3=0;
    }
    if(document.getElementById("M").checked == true)
    {
        respuesta4 = 1;
    }
    else
    {
        respuesta4=0;
    }
   
    var nota= respuesta1+respuesta2+respuesta3+respuesta4;
    alert("Su nota es:" + nota);
}