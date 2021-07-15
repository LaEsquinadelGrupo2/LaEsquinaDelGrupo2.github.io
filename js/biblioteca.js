//decalarando variables para los controles
var txtNom=document.getElementById("txtNom");
var txtCon=document.getElementById("txtCon");
var txtDir=document.getElementById("txtDir");
var txtPed=document.getElementById("txtPed");
var rbEfec=document.getElementById("rbEfec");
var rbTrans=document.getElementById("rbTrans");
var rbTar=document.getElementById("rbTar");


//creamos procedimiento para asignar la clase
function LlamarClase(m){
    error.style.display='block';
    error.innerHTML+='<li>'+ m + '</li>';
}

//Creamos un procedimiento para validar
function Validar(){
    //reiniciamos el error para que se carge sin ningun mensaje
    error.innerHTML='';
    if(txtNom.value=="" || txtNom.value==null){
        LlamarClase("Por favor ingrese su nombre y apellido");
        LlamarClase("Por favor ingrese su número de contacto");
        LlamarClase("Por favor ingrese su dirección");
        LlamarClase("Por favor ingrese su pedido");
        LlamarClase("Por favor seleccione su metodo de pago");
    }else if(txtCon.value=="" || txtCon.value==null){
        LlamarClase("Por favor ingrese su número de contacto");
        LlamarClase("Por favor ingrese su dirección");
        LlamarClase("Por favor ingrese su pedido");
        LlamarClase("Por favor seleccione su metodo de pago");
        txtApe.focus();
    }else if(txtDir.value=="" || txtDir.value==null){
        LlamarClase("Por favor ingrese su dirección");
        LlamarClase("Por favor ingrese su pedido");
        LlamarClase("Por favor seleccione su metodo de pago");
        txtApe.focus();
    }else if(txtPed.value=="" || txtPed.value==null){
        LlamarClase("Por favor ingrese su pedido");
        LlamarClase("Por favor seleccione su metodo de pago");
        txtCor.focus();
    }else if(rbEfec.checked==false && rbTrans.checked==false &&rbTar.checked==false){
        LlamarClase("Por favor seleccione su metodo de pago");
        rbMas.focus();
    }else{
        error.style.display='none';
    }
     //llamando a las validaciones
    // ValidarNombre();
    // ValidarApellido();
    // ValidarCorreo();
    // ValidarSexo();
    // ValidarEstado();
}