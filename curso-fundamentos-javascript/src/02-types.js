//Tipo de DAtos primitivos
const texto = 'Hola';
const numero = 42;
const booleano = true; //false
const nulo = null;
const indefinido = undefined;
const simbolo = Symbol('id');//reconocer piezas de codigo
const grande = 123n;

console.log(typeof texto);
console.log(typeof numero);
console.log(typeof booleano);
console.log(typeof nulo);
console.log(typeof indefinido);
console.log(typeof simbolo);
console.log(typeof grande);

//Tipos de datos complejos
const objeto = {nombre: "Juan", edad: 30};
const arreglo = [1,2,3,'string'];
const funcion = function (){};