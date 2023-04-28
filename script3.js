
const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copia = document.querySelector(".copiar");
copia.style.display = "none"





function encriptarTexto()
{
  var palabra = document.getElementById( "textoenc" ).value;
  let encodeMatriz = {
    "e": "enter", 
    "i": "imes", 
    "a": "ai", 
    "o": "ober",
    "u": "ufat",
  }
  for (encodeMatriz in palabra)
  if (palabra === encodeMatriz){
    encodeMatriz.push(palabra[encodeMatriz])
  }
  document.getElementById( "textoenc" ).value = "";

  mensaje.value = textEncrypted ;
}

function desencriptarTexto()
{
  var palabra = document.getElementById( "textoenc" ).value;
  const mapping = {
    'sua': 'a',
    'eyu': 'b',
    'jvh': 'c',
    'nzl': 'd',
    'has': 'e',
    'kta': 'f',
    'idq': 'g',
    'wmc': 'h',
    'exk': 'i',
    'zdr': 'j',
    'cjz': 'k',
    'elk': 'l',
    'ich': 'm',
    'lct': 'n',
    'hzv': 'ñ',
    'qle': 'o',
    'hez': 'p',
    'quw': 'q',
    'ioq': 'r',
    'ioy': 's',
    'akn': 't',
    'qvn': 'u',
    'sht': 'v',
    'npp': 'w',
    'lzs': 'x',
    'uaq': 'y',
    'wzc': 'z'
  };

  var dencrypt = "";
  for ( var i = 0; i < palabra.length; i += 3 )
  {
    var letter = palabra.slice( i, i + 3 ).toLowerCase();
    if ( mapping.hasOwnProperty( letter ) )
    {
      dencrypt += mapping[ letter ];
    }
    else
    {
      dencrypt += letter;
    }
  }

  document.getElementById( "textoenc" ).value = "";

  mensaje.value = dencrypt;
}

function copiar()
{
  mensaje.select();
  navigator.clipboard.writeText( mensaje.value )
  mensaje.value = "";
 
}
 
    