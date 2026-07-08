function validarCorreo(c) {
    let correo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return correo.test(c);
}

/** por ejemplo 
 * erick ----valido
 * pepe32 --falso 
 */
// Acepta letras con acentos, ñ y espacios este lo uso para el nombre
function soloLetras(l) {
    let letras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    return letras.test(l);
}
/*
  validaLongitud(numero, maxLongitud)
  ejemplos
  validaLongitud(12345, 5)  // true
  validaLongitud(123456, 5) // false porque son 6 numeros y se esperava 5
 */
function validarLongitud(n, lm) {
    return n.toString().length === lm;
}

/*
 calcularEdad(fechaNacimiento)
  Calcular la edad exacta en años a partir de la fecha de nacimiento 
   {string|Date} fechaNacimiento - Fecha de nacimiento
  calcularEdad('2000-01-15') // 26 
  calcularEdad('1990-06-30') // 36
 */
function calcularEdad(fn) {
    let fechaNacimiento = new Date(fn);
    let fechaActual = new Date();

    let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
    let mes = fechaActual.getMonth() - fechaNacimiento.getMonth();

    if (mes < 0 || (mes === 0 && fechaActual.getDate() < fechaNacimiento.getDate())){
        edad--;
    }
    return edad;
}

/* esMayorDeEdad(fechaNacimiento)
es mayor de edasd cuando tiene al menos 18 años

 ejemplo
  esMayorDeEdad('2000-01-15') // true
  esMayorDeEdad('2010-01-15') // false
 */
function esMayorDeEdad(fn) {
    return calcularEdad(fn) >= 18;
}

/*validaPassword(password)
  Valida que la contraseña cumpla con:
Mínimo 8 caracteres
 1 mayúscula
 1 minúscula
 1 número
1 carácter especial
ejemplos
  validaPassword('Password123!') // true
 validaPassword('12345678')     // false (sin mayúscula, sin especial)
  validaPassword('Pass')         // false (le lantan caracteres )
 */
function validarPassword(pd){
    let password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.#_-])[A-Za-z\d@$!%*?&.#_-]{8,}$/;
    return password.test(pd);
}

function validarCodigoPostal(cp){
    let codigoPostal = /^\d{5}$/;
    return codigoPostal.test(cp);
}

function contarCaracteres(texto) {
    return texto.length;
}


/* las 2 extras------------------------------ */

/* formatearTelefono(telefono)
ponerlo en el formato mas comun (ej: +52 55 1234 5678)
 ejemplo
 formatearTelefono('5512345678') // '+52 55 1234 5678'
  formatearTelefono('1234567890') // '+52 12 3456 7890'
 */
function formatearTelefono(telefono) {
    const str = String(telefono).replace(/\D/g, '');
    if (str.length !== 10) return telefono;
    
    const parte1 = str.substring(0, 2);
    const parte2 = str.substring(2, 6);
    const parte3 = str.substring(6, 10);
    
    return `+52 ${parte1} ${parte2} ${parte3}`;
}


/**
 * Convierte un número decimal a hexadecimal string.
 * Retorna el string hexadecimal o un mensaje si supera el límite.
 */
function decimalAHexadecimal(num) {
    let n = parseInt(num, 10);
    // Validamos si es un número válido y si cumple con el límite estricto (< 10000)
    if (isNaN(n) || n >= 10000 || n < 0) {
        return null; 
    }
    // .toString(16) convierte el número a base 16 (hexadecimal) y .toUpperCase() lo pone estético en mayúsculas
    return n.toString(16).toUpperCase();
}

/**
 * Recibe un texto y busca comas seguidas de una letra (sin espacio),
 * agregando el espacio correspondiente.
 * Ejemplo: "hola,mundo" -> "hola, mundo"
 */
function corregirEspaciosComas(texto) {
    // Usamos una expresión regular: busca una coma seguida directamente de cualquier letra/número
    // y la reemplaza por la misma coma, un espacio y el caracter que seguía.
    return texto.replace(/,([a-zA-ZÁÉÍÓÚáéíóúÑñ0-9])/g, ', $1');
}