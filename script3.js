
const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copia = document.querySelector(".copiar");
copia.style.display = "none"


function encodeText() {
  
  const substitutionMatrix = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  var palabra = document.getElementById( "textoenc" ).value;
  
  for ( Letra of palabra.toLowerCase().split('') ) {
    const letra = Letra;  
    const indiceSubstitucion = substitutionMatrix.indexOf(letra);

    if (indiceSubstitucion < 0) {
      return letra;
    }

    return substitutionMatrix[indiceSubstitucion][1];
  }
  document.getElementById( "textoenc" ).value = "";

  mensaje.value = encrypt;
}

console.log(encodeText('hola'));


//  sss

function decodeText() {
 
  const substitutionMatrix = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
  var palabra = document.getElementById( "textoenc" ).value;
  
  const textoDesencriptado = '';
  for ( Letra of palabra.toLowerCase().split('') ) {
    const letra = Letra;
    
    const indiceSubstitucion = substitutionMatrix.indexOf(letra);

    
    if (indiceSubstitución < 0) {
      textoDesencriptado += letra;
    } 

    else {
      textoDesencriptado += substitutionMatrix[indiceSubstitucion][1];
    }
  }


  document.getElementById( "textoenc" ).value = "";

  mensaje.value = dencrypt;
}



    