import validator from "./validator.js";

//DECL FUNCION GENERICA DOM
 
  const ocultarYMostrar = (ocultarID, mostrarID) => {
    document.getElementById(ocultarID).classList.add("oculto");
    document.getElementById(mostrarID).classList.remove("oculto");
  };
  
      // const todas= (numbero1, numero2) => {
      // const total = numbero1 + numero2;

    // const multiplicar = numbero1 * numero2;
    // const multiplicarTotalPorPrimerNumero = total * numbero1;
    // const nombre = "naty";
  
  //   const todas = total + multiplicar + multiplicarTotalPorPrimerNumero + nombre;
  //   return todas;
  // };
  
  //--------De bienvenida a formulario registro------------//
  
  const seleccionarRegistro = () => {
    ocultarYMostrar("bienvenido", "registroUsuario");
  };
  const buttonSelection=document.getElementById("seleccionarRegistro");
  buttonSelection.addEventListener("click",seleccionarRegistro);
  
  //----De registro a formulario validación tarjeta---//
  function irFormularioTarjeta() {
    ocultarYMostrar("registroUsuario", "formulario-tarjeta");
  }
  const buttonAceptar=document.getElementById("irFormularioTarjeta");
  buttonAceptar.addEventListener("click",irFormularioTarjeta);
  
  
  
  
  // function cancelFormularioTarjeta() {
  //   ocultarYMostrar("registroUsuario", "bienvenido");s
  // }
  
  const buttonCancelar=document.getElementById("cancelFormularioTarjeta");
  buttonCancelar.addEventListener("click",cancelFormularioTarjeta);

  //----De validacion tarjeta  a cancelar//
  
  function testcancel() { 
    ocultarYMostrar("formulario-tarjeta", "registroUsuario");
  }
  

  const testvalidation = () => {
    const creditCardNumber = document.getElementById("inputNumero").value;
    const succesMessage =

    
    //VERIFICA SI LA TARJETA ES VÁLIDA O NO *
    validator.isValid(creditCardNumber) == true
    ? "Se ha validado correctamente la tarjeta "
    : "No es válida ";
    if (creditCardNumber === "") {
      alert("El campo no puede estar vacío");
    } else {
      alert(succesMessage + validator.maskify(creditCardNumber));
    }
  };
  
  const buttonValidar=document.getElementById("validarTarjeta");
  buttonValidar.addEventListener("click",testvalidation);

  const buttonCancelarValidacion=document.getElementById("cancelarValidacion");
  buttonCancelarValidacion.addEventListener("click",testcancel);


  //* IF ALTERNATIVO
  // condicion ? 'a'  : 'b';