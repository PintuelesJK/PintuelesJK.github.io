
const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copia = document.querySelector(".copiar");
copia.style.display = "none"


function validarTexto(){
    let textoEscrito = document.querySelector(".text-area").value;
    let validador = textoEscrito.match(/^[a-z]*$/);

    if(!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}


function btnEncriptar(){
    if(!validarTexto()) {
        const textoEncriptado = encriptarTexto(encrypt)
        mensaje.value = textoEncriptado
        mensaje.style.backgroundImage = "none"
        textArea.value = "";
        copia.style.display = "block"
    
    }
}



function encriptarTexto()
{
  var palabra = document.getElementById( "textoenc" ).value;
  const mapping = {
    'a': 'sua',
    'b': 'eyu',
    'c': 'jvh',
    'd': 'nzl',
    'e': 'has',
    'f': 'kta',
    'g': 'idq',
    'h': 'wmc',
    'i': 'exk',
    'j': 'zdr',
    'k': 'cjz',
    'l': 'elk',
    'm': 'ich',
    'n': 'lct',
    'ñ': 'hzv',
    'o': 'qle',
    'p': 'hez',
    'q': 'quw',
    'r': 'ioq',
    's': 'ioy',
    't': 'akn',
    'u': 'qvn',
    'v': 'sht',
    'w': 'npp',
    'x': 'lzs',
    'y': 'uaq',
    'z': 'wzc'
  };

  var encrypt = "";
  for ( var i = 0; i < palabra.length; i++ )
  {
    var letter = palabra[ i ].toLowerCase();
    if ( mapping.hasOwnProperty( letter ) )
    {
      encrypt += mapping[ letter ];
    }
    else
    {
      encrypt += letter;
    }
  }
  document.getElementById( "textoenc" ).value = "";

  mensaje.value = encrypt;
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
 
    