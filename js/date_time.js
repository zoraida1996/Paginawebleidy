let horaFinal = document.getElementById("horaActual");
let fechaFinal = document.getElementById("fechaActual");

let fecha = new Date();
let numFecha=fecha.getDate();
let fechaActual;

let mes= new Array(12);
    mes[0]="Enero";
    mes[1]="Febrero";
    mes[2]="Marzo";
    mes[3]="Abril";
    mes[4]="Mayo";
    mes[5]="Junio";
    mes[6]="Julio";
    mes[7]="Agosto";
    mes[8]="Septiembre";
    mes[9]="Octubre";
    mes[10]="Noviembre";
    mes[11]="Diciembre";

let dia= new Array(7);
    dia[0]="Domingo";
    dia[1]="Lunes";
    dia[2]="Martes";
    dia[3]="Miércoles";
    dia[4]="Jueves";
    dia[5]="Viernes";
    dia[6]="Sábado";
    
function Fecha()
{
    fechaActual=dia[fecha.getDay()] + ", " + numFecha + " de " + mes[fecha.getMonth()] + " de " + fecha.getFullYear();
    fechaFinal.innerHTML=fechaActual;   
    setTimeout("Fecha()",60000)
}

function Reloj()
{
    let momentoActual = new Date();
    let hora = momentoActual.getHours();
    let minuto = momentoActual.getMinutes();
    let segundo = momentoActual.getSeconds();

    str_segundo = new String (segundo)
    if (str_segundo.length == 1)
    {
       segundo = "0" + segundo
    }
    str_minuto = new String (minuto)
    if (str_minuto.length == 1)
    {
       minuto = "0" + minuto
    }
    str_hora = new String (hora)
    if (str_hora.length == 1)
    {       
       hora = "0" + hora
    }
    horaImprimible = hora + " : " + minuto + " : " + segundo;
    horaFinal.innerHTML = horaImprimible;
    setTimeout("Reloj()",1000);
}