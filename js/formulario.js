function RecogerDatosUsuario(){
    var primerNombre = document.getElementById('primerNombre').value;
    var segundoNombre = document.getElementById('segundoNombre').value;
    var primerApellido = document.getElementById('primerApellido').value;
    var segundoApellido = document.getElementById('segundoApellido').value;
    var edad = document.getElementById('edad').value;
    var tipoDocumento = document.getElementById('tipoDocumento').value;
    var telefono = document.getElementById('telefono').value;
    var email = document.getElementById('email').value;

	datosUsuario={}
        datosUsuario['primerNombre']=primerNombre;
        datosUsuario['segundoNombre']=segundoNombre;
        datosUsuario['primerApellido']=primerApellido;
        datosUsuario['segundoApellido']=segundoApellido;
        datosUsuario['edad']=edad;
        datosUsuario['tipoDocumento']=tipoDocumento;
        datosUsuario['telefono']=telefono;
        datosUsuario['email']=email;


    //Objeto 'datosUsuario' a cadena json 'jsonDatosUsuario'
	jsonDatosUsuario = JSON.stringify(datosUsuario);			
}

function DiligenciarUsuario(){
    document.getElementById("primerNombre").value=DatosAlServidor.primerNombre;
    document.getElementById("segundoNombre").value=DatosAlServidor.segundoNombre;
    document.getElementById("primerApellido").value=DatosAlServidor.primerApellido;
    document.getElementById("segundoApellido").value=DatosAlServidor.segundoApellido;
    document.getElementById("edad").value=DatosAlServidor.edad;
    document.getElementById("tipoDocumento").value=DatosAlServidor.tipoDocumento;
    document.getElementById("telefono").value=DatosAlServidor.telefono;
    document.getElementById("email").value=DatosAlServidor.email;

}

//Función para almacenar datos recopilados en el formulario
function guardarUsuario(){	
	RecogerDatosUsuario();
	//enviarDatosUsuarioAlServidor();
	console.log(datosUsuario);
}

//Función para enviar el JSON creado en la función "guardarEncuesta" a PHP
function enviarDatosUsuarioAlServidor(){
	if (window.XMLHttpRequest) {
    	// code for IE7+, Firefox, Chrome, Opera, Safari
    	xmlhttp=new XMLHttpRequest();
  	} else { // code for IE6, IE5
    	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  	}
  	xmlhttp.onreadystatechange=function() {
	    if (this.readyState==4 && this.status==200) {
	    	$("#modalok").modal({
    			show: true,
    			backdrop: 'static',
    			keyboard: false
			})
	  	}
	  };
  	xmlhttp.open("GET","http://localhost/ceset/servicios/guardarDatosUsuario.php?datos="+jsonDatosUsuario,true);
  	xmlhttp.send();
}
 


