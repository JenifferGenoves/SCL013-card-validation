// const validator = {
//   // ...
// };

// export default validator;

// / const validator = {
  //   // ...
  // };
  
  // export default validator;
  // Takes a credit card string value and returns true on valid number
  function valid_credit_card(value) {
    // Accept only digits, dashes or spaces
    if (/[^0-9-\s]+/.test(value)) return false;
  
    // The Luhn Algorithm. It's so pretty.
    let nCheck = 0,
      bEven = false;
    value = value.replace(/\D/g, '');
  
    for (var n = value.length - 1; n >= 0; n--) {
      var cDigit = value.charAt(n),
        nDigit = parseInt(cDigit, 10);
  
      if (bEven && (nDigit *= 2) > 9) nDigit -= 9;
  
      nCheck += nDigit;
      bEven = !bEven;
    }
  
    return alert(nCheck % 10 == 0);
  }
  
  
  
  
  
  const valid_credit_card = () => {
      a = 'valid_credit_card'
      return a;
  }
  
  export default valid_credit_card;
  
  
  //const valorInput 
  
  // const validator = num => {
  //    valorInput = (num + '')
  //    .split('')
  //    .reverse()
  //    .map(x => parseInt (x));
  //    let lastDigit = array.splice(0, 1) [0];
  //    let sum = arr.reduce((acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9), 0);
  //    sum += lastDigit;
  //    return sum % 10 === 0;
  //  };
  // //  console.log (validator);
  
  // export default validator;
  
  
  // const validator = {
  //   //let mascara = maskify(texto);
  //   console.log("Este es el numero de tarjeta enmascarada "+ mascara);
  //   //document.write("Tu numero de tarjeta de credito termina en " + mascara);  
  //   return mascara;
  // },
  
    // return validator; 
  
    //import maskify from 'maskify';
  
  // const validator = {
  
  //   maskify : function () {
  
  //       let texto = document.getElementById("tdc").value;
  //       let mascara = "############"+ texto.substring(12);
  //       //let mascara = maskify(texto);
  //       console.log("Este es el numero de tarjeta enmascarada "+ mascara);
  //       //document.write("Tu numero de tarjeta de credito termina en " + mascara);  
  //       return mascara;
  //   },
    
  //   isValid : function () {
  //       let texto = document.getElementById("tdc").value;
  //       if (texto == "" || texto.length < 16) {
  //         alert("El Campo TDC esta incompleto");
  //         return;
  //       } else {
  //         let cantidadCaracteres = texto.length;
  //         console.log("Numero de caracteres " + cantidadCaracteres);
  //         console.log("Texto de la Cadena " + texto);
  //         let sum = 0;
  //         for (let i = cantidadCaracteres - 1; i >= 0; i--) {
  //           let ent = parseInt(texto.charAt(i));
  //           console.log("Entero inicial es " + ent);
  //           console.log("El indice es " + i);
  //           if (i % 2 == 0) {
  //               ent = ent * 2;
  //               console.log("Es par el indice, ent * 2 es igual a " + ent);
    
  //               if (ent > 9) {
  //                   console.log("si ent es > que 9 entonces el valor es " + ent);
  //                   ent = ent - 9;
  //                   console.log("Ahora ent - 9 es igual a " + ent);
  //               }
  //           }
    
  //           sum = sum + ent;
  //           console.log(sum);
  //         }
  //         let residuo = sum % 10;
  //         console.log("El residuo es " + residuo);
  //         if (residuo == 0) {
  //           console.log("Tarjeta Valida");
  //           validator.maskify();
  //           return true;
  //         } else {
  //           console.log("Tarjeta InValida");
  //           validator.maskify();
  //           return false;
  //         }
    
  //       }
  //     }
  
  // };
  
  // export default validator;
  
  