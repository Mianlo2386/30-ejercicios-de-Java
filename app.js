/* ejercicio 1
let x = 1
while (x<=10){
    console.log (x)
    x=x+1
}

*/

/* ejercicio 2

let x = 2

while (x<=20){
    console.log (x)
    x=x+2
}
*/
/* ejercicio 3
let x = 1
while (x<=19){
    console.log (x)
    x=x+2
}
*/

/* ejercicio 4

let x = 10
while (x>=1){
    console.log(x)
    x = x-1
}
*/

/* ejercicio 5 
let x=1
while (x<=10){
    if (x<=5){
    console.log(x)
    }
    x = x+1
}
*/



/* ejercicio 6 

let x=1
while (x<=10){
    if (x!=5){
    console.log(x)
    }
    x = x+1
    
}
*/


/* ejercicio 7

function decirNombre(nombre){
    console.log ("hola "+nombre)
}
decirNombre("Pepe")
*/

/* ejercicio 8 

function saludar(nombre){
    return nombre
}

alert ("hola "+ saludar("Pablo"))

*/

/* ejercicio 9 

function sumar(a,b){
    let resultado=a+b
    return resultado
}
alert (sumar (2,6))
*/

/*Ejercicio 10
function restar(a,b){
    let resultado=a-b
    return resultado
}
alert (restar (6,2))
*/

/* Ejercicio 11
function restar(a,b) {
    return a-b
}
function sumar(a,b) {
    return a+b
}
function calcular(operacion,a,b){
    if (operacion == "+") {
        return sumar(a,b);
    }else if(operacion == "-"){
        return restar(a,b);
    }else{
        alert("null")
    }
}
alert(calcular("*",2,5))
*/

/* Ejercicio 12

   function contarHasta(numero){
        for (let contador = 1; contador <= numero; contador++) {
            
                console.log(contador)
            
        }
    }
    contarHasta(40);
*/

/* Ejercicio 13

let condicion = prompt("¿Desea usar la calculadora?")
while(condicion == "si") {
    

if (condicion == "si") {
    let valor1 = parseInt (prompt("Ingrese el numero 1"))
    let valor2 = parseInt (prompt("Ingrese el numero 2"))
    let operacion = prompt("Que operacion quiere realizar?")
    function restar(valor1,valor2) {
        return valor1-valor2
    }
    function sumar(valor1,valor2) {
        return valor1+valor2
    }
    function calcular(operacion,valor1,valor2){
        if (operacion == "+") {
            return sumar(valor1,valor2);
        }else if(operacion == "-"){
            return restar(valor1,valor2);
        }
    }
    alert(calcular(operacion,valor1,valor2))
    condicion = prompt("¿Desea usar la calculadora?")
}
    
}
alert("El programa ha finalizado")
*/

/* Ejercicio 14*/
/* for (let x=11; x<26*11; x=x+11)
console.log(x) 
/* Ejercicio 15 */
/* let cantImpares = 0
let cantPares = 0
 
for(let contador = 1; contador <= 5; contador++) {
    let valor = parseInt (prompt("Ingrese el numero"))
    
    if (valor % 2 == 0) {
        cantPares = cantPares + 1
    } else {
        cantImpares =cantImpares + 1 
    }
}
    console.log("La cantidad de pares es ", cantPares)
    console.log("La cantidad de impares es ", cantImpares) */
  
/* Ejercicio 16 */
/* let prom = 0
let sumaDeAlturas = 0
 
for(let contador = 1; contador <= 5; contador++) {
    let valor = parseInt (prompt("Ingrese la altura"))
    sumaDeAlturas = sumaDeAlturas + valor  
}

    console.log("La altura promedio es ", prom = sumaDeAlturas/5) */
/* Ejercicio 17 */

/* let promTM = 0
let sumaDeEdadesTM = 0
let promTT = 0
let sumaDeEdadesTT = 0
let promTN = 0
let sumaDeEdadesTN = 0
 
for(let contador = 1; contador <= 5; contador++) {
    let valor = parseInt (prompt("Ingrese la edad"))
    sumaDeEdadesTM = sumaDeEdadesTM + valor  
}

    console.log("La altura promedio de turno mañana es ", promTM = sumaDeEdadesTM/5)  
    
for(let contador = 1; contador <= 6; contador++) {
        let valor = parseInt (prompt("Ingrese la edad"))
        sumaDeEdadesTT = sumaDeEdadesTT + valor  
    }
    
        console.log("La altura promedio de turno tarde es ", promTM = sumaDeEdadesTT/6)  

for(let contador = 1; contador <= 11; contador++) {
            let valor = parseInt (prompt("Ingrese la edad"))
            sumaDeEdadesTN = sumaDeEdadesTN + valor  
        }
        
            console.log("La altura promedio de turno noche es ", promTN = sumaDeEdadesTN/11)   

if(promTM > promTT && promTM > promTN ) {
    console.log("El turno mañana tiene mayor promedio de edad",promTM)
}else{
    if(promTT > promTN && promTT > promTM){
        console.log("El turno tarde tiene mayor promedio de edad",promTT)
    }else{
        console.log("El turno noche tiene mayor promedio de edad",promTN)
    }
}        */

/* Ejercicio 18 */
/* let valoresNegativos = 0
let valoresPositivos = 0
let valoresMultiplosDe15 = 0
let sumaDePares = 0

for(let contador = 1; contador <= 10; contador++) {
    let valor = parseInt (prompt("Ingrese el numero"))
    if(valor < 0) {
        valoresNegativos = valoresNegativos + 1
    }
    if(valor >0) {
        valoresPositivos = valoresPositivos + 1
    }
    if(valor % 15 == 0) {
        valoresMultiplosDe15 = valoresMultiplosDe15 + 1
    }
    if(valor % 2 == 0) {
        sumaDePares = sumaDePares + valor
    }
}
console.log("Cantidad de valores negativos ", valoresNegativos)
console.log("Cantidad de valores positivos ", valoresPositivos)
console.log("Cantidad de valores multiplos de 15 ", valoresMultiplosDe15)
console.log("Suma de valores pares", sumaDePares) */

/* Ejercicio 19 */

/* let triangulo = 0
let cantEquilateros = 0
let cantIsosceles = 0
let cantEscalenos = 0
let cantTriangulos = 1

while(cantTriangulos <= 4) {

        let lado1 = parseInt (prompt("Ingrese el primer lado"))
        let lado2 = parseInt (prompt("Ingrese el segundo lado"))
        let lado3 = parseInt (prompt("Ingrese el tercer lado"))


    if(lado1 == lado2 && lado1 == lado3) {
        console.log("Es equilatero")
        cantEquilateros = cantEquilateros + 1
    }else
    if(lado1 != lado2 && lado1 != lado3 && lado2 != lado3) {
        console.log("Es escaleno")
        cantEscalenos = cantEscalenos + 1
    }
    else
        if(lado1 == lado2 || lado2 == lado3 || lado3 ==lado1) {
        console.log("Es isosceles")
        cantIsosceles = cantIsosceles + 1
    } 
    cantTriangulos = cantTriangulos + 1
    }

console.log("Cantidad de equilateros", cantEquilateros)
console.log("Cantidad de isosceles", cantIsosceles)
console.log("Cantidad de escalenos", cantEscalenos)

if(cantEquilateros == 0) {
    console.log("Hay menor cantidad de equilateros")
}
if(cantEscalenos == 0) {
    console.log("Hay menor cantidad de escalenos")
}
if(cantIsosceles == 0) {
    console.log("Hay menor cantidad de isosceles")
}
if(cantEquilateros != 0 && cantEscalenos != 0 && cantIsosceles != 0){
    if(cantEquilateros == 1) {
        console.log("Hay menor cantidad de equilateros")
    }
    if(cantEscalenos == 1) {
        console.log("Hay menor cantidad de escalenos")
    }
    if(cantIsosceles == 1) {
        console.log("Hay menor cantidad de isosceles")
}
}
 */ 
/* if(cantEquilateros < cantEscalenos && cantEquilateros < cantIsosceles) {
    console.log("Hay menor cantidad de equilateros")
    }else
    if(cantEscalenos < cantEquilateros && cantEscalenos < cantIsosceles){
        console.log("Hay menor cantidad de escalenos")
    }else
        console.log("Hay menor cantidad de isosceles") */ 

    
/* Ejercicio 20 */

/* let menor = parseInt(prompt("Ingrese el número menor"))
let mayor = parseInt(prompt("Ingrese el número mayor"))

while(menor <= mayor) {
    console.log(menor)
    menor = menor + 1
} */
/* Ejercicio 21 */
/* 
let valor1 = parseInt(prompt("Ingrese primer valor"))
let valor2 = parseInt(prompt("Ingrese segundo valor"))
let valor3 = parseInt(prompt("Ingrese tercer valor"))
let prom = 0

function promedio(valor1,valor2,valor3) {
    prom = (valor1 + valor2 + valor3)/3
    return  prom
}
console.log("Promedio", promedio(valor1,valor2,valor3)) */

/* Ejercicio 22 */

/* 
let valor1 = parseInt(prompt("Ingrese primer valor"))
let valor2 = parseInt(prompt("Ingrese segundo valor"))
let valor3 = parseInt(prompt("Ingrese tercer valor"))
let valor4 = parseInt(prompt("Ingrese cuarto valor"))
let valor5 = parseInt(prompt("Ingrese quinto valor"))
let suma = 0

function sumaDeCincoValores(valor1,valor2,valor3,valor4,valor5) {
    suma = (valor1 + valor2 + valor3 + valor4 + valor5)
    return  suma
}
console.log("La suma es", sumaDeCincoValores(valor1,valor2,valor3,valor4,valor5))

/* Ejercicio 23 */
/* 
let palabra = prompt("Ingrese palabra")
let exclamacion
function exclamar(palabra) {
    exclamacion ="¡"+palabra+"!"
    return exclamacion
    
}
console.log(exclamar(palabra)) */

/* Ejercicio 24 */

/* 
let nombre = prompt("Ingrese nombre")
let apellido = prompt("Ingrese apellido")
let nomYape
function nombreCompleto(nombre,apellido) {
    nomYape = nombre + " " + apellido
    return nomYape
    
}
alert("El nombre completo es "+nombreCompleto(nombre,apellido)) */
/* Ejercicio 25 */
/* 
let horas = parseInt(prompt("Ingrese cantidad de horas"))
let segundos = 0
function convertirHorasEnSegundos(horas) {
    return segundos = horas * 60 * 60 
}
alert("Segundos totales "+convertirHorasEnSegundos(horas)) */

/* Ejercicio 26 */
/* 
let usuario = prompt("Ingrese el usuario")
let dominio = prompt("Ingrese el dominio")
let email
function generarEmail(usuario,dominio) {
    return email = usuario + "@" + dominio
}
alert("Email completo es "+generarEmail(usuario,dominio)) */

/* Ejercicio 27 */
/* 
let gradosCelsius = parseFloat(prompt("Ingresá una cantidad de grados Celsius"))
let gradosFarenheit = 0
function convertirGrados(gradosCelsius) {
    return gradosFarenheit = (gradosCelsius*9/5)+32 
}
alert("La conversión de "+gradosCelsius+" grados Celsius a Fahrenheit es: "+convertirGrados(gradosCelsius)) */

/* Ejercicio 28 */

/* let distancia = parseInt(prompt("Ingrese la distancia del recorrido"))
let aPie = 0
let enBici = 0
let enAuto = 0
function calculoTiempoAPie(distancia){
    return aPie = distancia/5
}
function calculoTiempoEnBici(distancia){
    return enBici = distancia/10
}
function calculoTiempoEnAuto(distancia){
    return enAuto = distancia/50
}
alert("Para la distancia "+distancia+" km en bicicleta el tiempo de viaje es "+calculoTiempoEnBici(distancia)+" hora/s, a pie "+calculoTiempoAPie(distancia)+" hora/s y en auto "+calculoTiempoEnAuto(distancia)+" hora/s")
 */

/* Ejercicio 29 */
/* 
let edad = parseInt(prompt("Ingrese edad"))
let tieneAutorizacion = prompt("Tiene autorizacion?")

function puedeVerPelicula(edad,autorizacion) {
    if(edad >= 15 || tieneAutorizacion == "true") {
        return true
    }else{
        return false
    }
}
alert("Puede ver pelicula: "+puedeVerPelicula(edad,tieneAutorizacion)) */

/* Ejercicio 30 */
 /* 
let letra = prompt("Ingrese letra")
    function esVocal(letra) {
    if(letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u') {
        return true
    }else{
        return false
    }
}
alert("La letra es vocal: "+esVocal(letra)) */

/* Ejercicio 1 */
//Dado un array de números, escribir una función que calcule la suma de todos los números del array.
/* 
let numeros=[1,2,3,4,5]
let suma=0

const sumaArray=(numbers)=>{
for (let index = 0; index < numbers.length; index++) {

    suma+=numbers[index];
    
}
return suma
}

console.log('La suma es igual a:', sumaArray(numeros))  */

/* Ejercicio 2 */
//Dado un array de strings, escribir una función que devuelva la concatenación de todos los strings.
/* 
let strings = ['¡','Hola ','mundo','!']
let concatenacion = []

const concatenaStrings=(strs)=>{
for (let index = 0; index < strs.length; index++) {
    
    concatenacion+=strs[index]
    
}
return concatenacion
}

console.log(concatenaStrings(strings))  */

/* Ejercicio 3 */
/* 
let numeros = [1,2,3,10,11,12,13]
let mayores = []

const mayoresA10 =()=> {
    for (let index = 0; index < numeros.length; index++) {
        if(numeros[index]>10)
        mayores.push(numeros[index])
        
    }
}
mayoresA10()
console.log('Los mayores a 10 son:', mayores) */

/* Ejercicio 4 */
 /* 
let numeros = [1,2,3,4,5,6,]
let sumaPar = 0

const sumaPares =()=> {
    for (let index = 0; index < numeros.length; index++) {
        if (numeros[index]%2 == 0) {
            sumaPar+=numeros[index]
        }
        
    }
}
sumaPares()
console.log('La suma de los pares es:', sumaPar) */

/* Ejercicio 5  */
/* 
let strings = ['Hola ','hermoso','mundo']
let eliminar = 'hermoso'
let posicion = 0
const eliminaString =(strings,eliminar)=> {
    posicion=(strings.indexOf(eliminar))
    if (posicion==-1) {
        console.log('null')
    }else{
    strings.splice(posicion,1)
    console.log(strings)}
}
eliminaString(strings,eliminar) */
/* 
ACLARACIONES
posicion=(strings.indexOf('hermoso')) */
//así obtengo la posición del elemento en el array
/* strings.splice(posicion,1)
console.log(strings)
 */

/* Ejercicio 6 REVEER  con join*/
/* 
let nombres = ['juan','pepe','maría']
let nombreDeLista = 'invitados'

const crearLista =(nomb, nombDeLista)=>{
    let lista = ''
return lista = `Lista de ${nombDeLista}:
 1) ${nomb[0]}
 2) ${nomb[1]}
 3) ${nomb[2]}`
}
console.log(crearLista(nombres, nombreDeLista))  */

/* Ejercicio 7 */
/* 

let strings = ['hola', 'hola', 'chau', 'hola', 'adios','chau']
let stringBuscado = ['hola']
 
const cantDeVecesQueApareceBuscado = (strings, stringBuscado) => {
    let veces = 0
    for (let index = 0; index < strings.length; index++) {
    if (strings[index]==stringBuscado) {
       veces++    
    }   
}
return veces
}
console.log(cantDeVecesQueApareceBuscado(strings,stringBuscado))*/

/* Ejercicio 8 */
/* 
let gananciasMensuales = []
let cantidadVendida = 10
let precio = 10
let nombreDeProducto = []
const vender =(cantidadVendida,precio,nombreDeProducto)=> {

    gananciasMensuales = cantidadVendida*precio


}
vender(cantidadVendida,precio,nombreDeProducto)
console.log(gananciasMensuales) */


/* Ejercicio 9 */

 
/* let gastosMensuales = []
let cantidadComprada = 10
let precio = 10
let nombreDeProducto = []
const comprar =(cantidadComprada,precio,nombreDeProducto)=> {

    gastosMensuales = cantidadComprada*precio


}
comprar(cantidadComprada,precio,nombreDeProducto)
console.log(gastosMensuales)  
 */
/* Ejercicio 10 */
/* 
let gananciasMensuales = []
let cantidadVendida = 10
let precio = 20
let nombreDeProducto = []
const vender =(cantidadVendida,precio,nombreDeProducto)=> {

    gananciasMensuales = cantidadVendida*precio


}
vender(cantidadVendida,precio,nombreDeProducto)
console.log('las ganancias mensuales son ', gananciasMensuales)  
 
let gastosMensuales = []
let cantidadComprada = 10
let precio2 = 10
let nombreDeProducto2 = []
const comprar =(cantidadComprada,precio2,nombreDeProducto2)=> {

    gastosMensuales = cantidadComprada*precio2


}

comprar(cantidadComprada,precio2,nombreDeProducto)
console.log('los gastos mensuales son', gastosMensuales) 


const neto=(gananciasMensuales,gastosMensuales)=>{
   neta = gananciasMensuales - gastosMensuales
   console.log('la ganancia neta es', neta)
}
neto(gananciasMensuales,gastosMensuales)
console.log('la ganancia neta es', neta)  */

/* Ejercicio 11 */
/* 
let base = 5
let altura = 6
const calcularAreaTriangulo=(base,altura)=> {
    console.log(area = base * altura/2)
}
calcularAreaTriangulo (base,altura)*/

/* Ejercicio 12 */
//Definí una función esElUltimoCaracter que reciba como argumentos una palabra y un caracter y nos indique si la palabra termina con el caracter.
            
//igualLongitud(‘estufa’, 'a')
//true
/*let palabra = 'estufa'
let caracter = 'a'

const esElUltimoCaracter=(word,char)=> {

 return word.slice(-1)==char 

}

console.log(esElUltimoCaracter(palabra,caracter))  */
 

/* Ejercicio 13 */
/* 
let contrasenia = 'contraseniaEsMuySegura'
let esSegura = false
const esValida=(contrasenia)=> {
    if (contrasenia.length >= 8) {
        esSegura = true
    }
}
esValida(contrasenia)
console.log(esSegura) */

/* Ejercicio 14 */

//Definí una función contarPalabras que reciba como argumento un string str y devuelva la cantidad de palabras que posee
/* let str = 'javascript'
let cantPalabras = 1

const contarPalabras=(str)=> {
    for (let index = 0; index < str.length; index++) {
        if(str[index]==' ')
        cantPalabras++
    }
    return cantPalabras
}

console.log(contarPalabras(str))  */

/* Ejercicio 15 */
/* 
let str = 'habia una vez...'

const capitalizar=(str)=> {
str2 = str.charAt(0).toUpperCase()+str.slice(1)

}
capitalizar(str)
console.log(str2) */

/* Ejercicio 16 */
/* 
let str = 'A mi no me preguntes, solo soy una oración. Arreglate' 

const obtenerPrimeraOracion=(str)=> {
    console.log(str.substr(0,str.length))
}
obtenerPrimeraOracion(str)  */
/* let str = 'A mi no me preguntes, solo soy una oración. Arreglate como puedas.'

const obtenerPrimeraOracion=(str)=> {
    let indiceDelPrimerPunto=0
    let str2 = ''
    for (let index = 0; index < str.length; index++) {
        if (str[index]=='.') {
            indiceDelPrimerPunto = index+1
            str2=(str.slice(0,indiceDelPrimerPunto))  
            break 
        }else{
            str2=(str.slice(0,str.length))}
    }
    return str2
}
console.log(obtenerPrimeraOracion(str))  */
 
 /* Ejercicio 17 */
 //)Definí una función ocultarContrasenia que reciba como argumento una contrasenia de solo numeros y devuelva un string con dicha contraseña ocultada con astericos *, es decir, un string con la misma longitud donde todos sus caracteres son astericos
/* 
let contrasenia = '123456'
let longitud = 0

const ocultarContrasenia=(contrasenia)=> {
    console.log(contrasenia='******')
}
ocultarContrasenia(contrasenia)
console.log(contrasenia) */
/* let contrasenia = '123456'
let contraseniaOculta = []
const ocultarContrasenia=(contrasenia)=> {


    for (let index = 0; index < contrasenia.length; index++)   {        
         if( contrasenia.charAt[index] != ' ') {
             contraseniaOculta +='*'
             contrasenia.substring(index+1, contrasenia.length)
         }else{
             contraseniaOculta += contrasenia.charAt(index)
        }            
    }
    console.log(contraseniaOculta)
}
ocultarContrasenia(contrasenia)
console.log(contraseniaOculta)
 */
 /* Ejercicio 18 */
 /* 
 let archivo = 'imagen.png'
 let indiceDelPunto = 0
 const obtenerExtension=(archivo)=> {
    for (let index = 0; index < archivo.length; index++) {
        if (archivo[index]=='.') {
            indiceDelPunto=index+1
            str2=(archivo.slice(indiceDelPunto,archivo.length))  
        }
 }
 }
obtenerExtension(archivo)
console.log(str2) */

/* Ejercicio 19 */
/* 
let puente = '## ###'
let esSeguro = true
const esPuenteSeguro=(puente,esSeguro)=>{
    
    for (let index = 0; index < puente.length; index++) {
         if (puente[index] == ' ') {
            esSeguro = false
            console.log(esSeguro); 
            break
        }
    } 
    console.log(esSeguro)
}

esPuenteSeguro(puente,esSeguro)
console.log(esSeguro) */

/* 
let puente = '## ###'

const esPuenteSeguro=(puen)=>  {
    return !puen.includes(' ')
}
console.log(esPuenteSeguro(puente))  */ 

 /* Ejercicio 20  */
/* 
let numeros = [5,7,99,34,54,2,12]
let menor = []
const obtenerMenor=(numeros)=>{
    menor = numeros[0] 
    for (let index = 0; index < numeros.length; index++) {
       if (numeros[index]<menor) {
        menor = numeros[index]
       }
    }
    return(menor)
}
console.log(obtenerMenor(numeros))   */

 

/* Ejercicio 21 *//* 

let numeros = [5,7,10,12,24]
let suma = 0
const sumar=(numeros)=> {
    for (let index = 0; index < numeros.length; index++) {
        suma += numeros[index]
        
    }
}
sumar(numeros)
console.log(suma); */

/* Ejercicio 22 *//* 
let numero = 103
let numeros = [5,7,10,12,24,103]

const contiene=(numero,numeros)=> {
    for (let index = 0; index < numeros.length; index++) {
        if (numeros[index] == numero) {
            console.log(true)
            break
        }else{
            console.log(false)
        }
        
    }
} 
contiene(numero,numeros) */
/* 
let numeros=[5,7,99,3,4,54,2,1]

let resultado=true
//let numero=parseInt(prompt("ingrese un número"))

const contiene=(numbers)=>{
    let numero=parseInt(prompt("ingrese un número"))
    resultado= numbers.find(element=>element===numero)
    if(resultado){
        console.log(true)
    }else{
        console.log(false)
    }
}   
contiene(numeros) *//* 
let numeros=[5,7,99,3,4,54,2,1]
let numero = 103
let resultado=true

const contiene=(numero,numeros)=>{
    resultado= numeros.find(element=>element===numero)
    if(resultado){
        console.log(true)
    }else{
        console.log(false)
    }
}   
contiene(numero,numeros) */
/* 
let numeros=[5,7,99,3,4,54,2,1]
let numero = 103
let seEncuentra = false

const contiene=(numero,numeros)=> {
if(numeros.includes(numero)){
 seEncuentra=true
}
return seEncuentra
}
console.log(contiene(numero,numeros)); */


/* Ejercicio 23 */
/* 
let tragamonedas = ['⭐', '⭐️', '⭐️','💫', '✨']

const gano=(tragamonedas)=> {
     if (tragamonedas[0]==tragamonedas[1]&&tragamonedas[1]==tragamonedas[2]&&tragamonedas[2]==tragamonedas[3]&&tragamonedas[3]==tragamonedas[4]) {
        console.log(true)
     }else{
        console.log(false)
     }
}
gano(tragamonedas)  */
/* 
 let tragamonedas = ['⭐', '⭐️', '⭐️','⭐', '⭐️','💫', '✨']

const gano=(tragamonedas)=> {
   resultado=(tragamonedas.splice(0,5))
   console.log(resultado)
   console.log(resultado[1])
   console.log(resultado.every(elementos=>elementos==resultado[1])) 
}
gano(tragamonedas) */

/* Ejercicio 24 */ 
 /* 
let emojis = ('🐶🐱🐶🐱🐱🐶🐶')
let emojisOrdenado = []
const separar=(emojis)=> {
    let perros=''
    let gatos=''
    for (const animal of emojis) {
        animal=='🐶'? perros += animal : gatos +=animal
    }
    return perros+gatos
}
console.log(separar(emojis)) */

/* Ejercicio 25 */
/* 
let multiplicador = 2
let numeros = [5,7,15,22,40]
let multiplicados = []

const multiplicar=(multiplicador,numeros)=> {
    for (let index = 0; index < numeros.length; index++) {
       multiplicados.push(numeros[index]*multiplicador)    
    }
    console.log(multiplicados);
}
multiplicar(multiplicador,numeros) */

/* Ejercicio 26 */

/* let longitud = 4
let strings = ['dia','remolacha','azul','sorpresa','te','verde']
let palabrasConLongitudMayor = []
const filtrarPorLongitud=(longitud,strings)=> {
    for (let index = 0; index < strings.length; index++) {
        if (strings[index].length>longitud ) {
            palabrasConLongitudMayor.push(strings[index])
        } 
    }
    console.log(palabrasConLongitudMayor);
}
filtrarPorLongitud(longitud,strings)
 */

/* Ejercicio 27 */
 /* let jugadorA = 'Pepe'
 let jugadorB = 'Maria'

 const jugadasA = ['piedra', 'piedra', 'tijera']
 const jugadasB = ['papel', 'tijera', 'tijera']

 let puntosJugadorA = 0
 let puntosJugadorB = 0

 const jugarPiedraPapelTijeras=(jugadorA,jugadorB,jugadasA,jugadasB)=> {
    for (let index = 0; index < jugadasA.length; index++) {
        if (jugadasA[index] == 'piedra' && jugadasB[index] == 'tijera' ) {
            puntosJugadorA++  
        }else{
            if (jugadasA[index] == 'piedra' && jugadasB[index] == 'papel' ) {
                puntosJugadorB++  
            }else{
                if (jugadasA[index] == 'papel' && jugadasB[index] == 'piedra' ) {
                    puntosJugadorA++  
                }else{
                    if (jugadasA[index] == 'papel' && jugadasB[index] == 'tijera' ) {
                        puntosJugadorB++  
                    }else{
                        if (jugadasA[index] == 'tijera' && jugadasB[index] == 'papel' ) {
                            puntosJugadorA++  
                        }else{
                            if (jugadasA[index] == 'tijera' && jugadasB[index] == 'piedra' ) {
                                puntosJugadorB++  
                            }
                        }
                    }
                }
            }
        }
    }
    if (puntosJugadorA>puntosJugadorB) {
        console.log('El ganador es:',jugadorA)
    }else{
        if (puntosJugadorB>puntosJugadorA) {
           console.log('El ganador es:',jugadorB) 
        }else{
            console.log('Hubo empate');
        }
 }
}
jugarPiedraPapelTijeras(jugadorA,jugadorB,jugadasA,jugadasB) */

/* Ejercicio 28 */
/* 
let palabra = 'mama'
let palindromo = 'null'
const esPalindromo=(palabra)=> {
    let decremento = palabra.length-1
    for (let index = 0; index < decremento; index++) {
        if (palabra.charAt(index)!=palabra.charAt(decremento)) {
            palindromo = 'false' 
            break
        }else{
            palindromo = 'true'
        } 
        decremento--     
    }
    console.log(palindromo)
}
esPalindromo(palabra) */

/* Ejercicio 29 *//* 

let palabra = 'ah!'
let cantidad = 5
let nuevaPalabra = []
const repetirLetras=(palabra)=> {
    for (let index = 0; index < palabra.length; index++) {
        for (let i = 0; i < 5; i++) {
            nuevaPalabra += palabra.charAt(index)
        }
     }     console.log(nuevaPalabra)
}

repetirLetras(palabra)  */

/* Ejercicio 30 */
/* 
let array = [1,2,3,4,5]

console.log(array.join("")) */
/* let array = [1,1,1,2,2,3]

const removerDuplicados=(array)=> {
    let arraySinDuplicados = []
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (!arraySinDuplicados.includes(array[index])) {
            arraySinDuplicados.push(element)
        }
    }
    return arraySinDuplicados
}
console.log(removerDuplicados(array))
 */
/* Ejercicio 31 */
 /* 
let numeros = [3,7,13,99]

const dobles=(numeros)=> {
    let duplicados = []
    for (let index = 0; index < numeros.length; index++) {
        duplicados.push(numeros[index]*2)  
    }
    return duplicados
}
console.log(dobles(numeros)) */

/* Ejercicio 32 */
/* 
let frases = ['la vida es bella','vivir o dejar morir', 'de la vida nadie se salva']

const longitudes=(frases)=> {
    let largoCadaFrase = []
    for (let index = 0; index < frases.length; index++) {
        largoCadaFrase.push(frases[index].length)
    }
    return largoCadaFrase
}
console.log(longitudes(frases)); */

/* Ejercicio 33 */
/* 
const playlist = ['Everlong', 'The Pretender', 'Learn to Fly']

const posiciones=(playlist)=> {
    let posicionesCanciones = []
    for (let index = 0; index < playlist.length; index++) {
        posicionesCanciones.push([index] + ' - ' + playlist[index])
    }
    return posicionesCanciones
}
console.log(posiciones(playlist)) */

/* Ejercicio 34 */
/* 
const costos = [ 39, 53, 17, 99, 7, 9, 6, 68, 54, 97, 27, 90, 92, 75, 26, 86, 22, 42, 20, 14 ]


const losMasCaros=(costos)=> {
    let masCaros = []
    for (let index = 0; index < costos.length; index++) {
        if (costos[index]>50) {
            masCaros.push(costos[index])
        }  
    }
    return masCaros
}
console.log(losMasCaros(costos)) */

/* 
const costos = [ 39, 53, 17, 99, 7, 9, 6, 68, 54, 97, 27, 90, 92, 75, 26, 86, 22, 42, 20, 14 ]


const losMasCaros=(costos)=> {
    let masCaros = []
    for (let index = 0; index < costos.length; index++) {

            masCaros = costos.filter(elementos=>elementos>50)

    }
    return masCaros
}
console.log(losMasCaros(costos)) */

/* Ejercicio 35 */

/* 
const mix = [ 'Ut vero.',2 , function () { console.log('hola mundo!') }, 56, 'Diam rebum nonumy et.', true, false,'Kasd stet.', 'Sit et dolor.', null, null, [ 1, 2, 3], 'Dolore.']

const soloStrings=(mix)=> {
    let strUnicamente = []
    for (let index = 0; index < mix.length; index++) {
        if (typeof(mix[index])==="string") {
            strUnicamente.push(mix[index])
        }  
    }
    return strUnicamente
}
console.log(soloStrings(mix))  */

/* 
const mix = [ 'Ut vero.',2 , function () { console.log('hola mundo!') }, 56, 'Diam rebum nonumy et.', true, false,'Kasd stet.', 'Sit et dolor.', null, null, [ 1, 2, 3], 'Dolore.']

const soloStrings=(mix)=> {
    let strUnicamente = []
    for (let index = 0; index < mix.length; index++) {

    return strUnicamente = mix.filter(elementos => typeof(elementos)==="string")

    }
    
}
console.log(soloStrings(mix)) */

/* Ejercicio 36 */ /* 
 
console.log(document.getElementById('contador'))
console.log(document.getElementById('boton-1'))
console.log(document.getElementById('boton+1'))
console.log(document.getElementById('boton-5'))
console.log(document.getElementById('boton+5'))
console.log(document.getElementById('boton-10'))
console.log(document.getElementById('boton+10'))

const contador = document.getElementById('contador')
const btn1 = document.getElementById('boton-1')
const btn2 = document.getElementById('boton+1')
const btn3 = document.getElementById('boton-5')
const btn4 = document.getElementById('boton+5')
const btn5 = document.getElementById('boton-10')
const btn6 = document.getElementById('boton+10') 

let resultado = 0

const restaUno=()=> {
    resultado--
    contador.innerText = resultado
}
btn1.addEventListener('click',restaUno)

const sumaUno=()=> {
    resultado++
    contador.innerText = resultado
}
btn2.addEventListener('click',sumaUno)
const restaCinco=()=> {
    resultado-=5
    contador.innerText = resultado
}
btn3.addEventListener('click',restaCinco)

const sumaCinco=()=> {
    resultado+=5
    contador.innerText = resultado
}
btn4.addEventListener('click',sumaCinco)

const restaDiez=()=> {
    resultado-=10
    contador.innerText = resultado
}
btn5.addEventListener('click',restaDiez)
const sumaDiez=()=> {
    resultado+=10
    contador.innerText = resultado
}
btn6.addEventListener('click',sumaDiez)  */

/* Ejercicio 37 */
/* const pregunta = document.getElementById('pregunta')
const confirmacion = document.getElementById('confirmacion')
const respuesta1 = document.getElementById('respuesta1')
const respuesta2 = document.getElementById('respuesta2')
const respuesta3 = document.getElementById('respuesta3')

let respuestaCorrecta = 'Respuesta Correcta!'
let respuestaIncorrecta = 'Respuesta Incorrecta!'

const primeraOpcion=()=> {
    confirmacion.innerText = respuestaCorrecta
    respuesta1.classList.toggle('modoRespuestaCorrecta')
}
respuesta1.addEventListener('click',primeraOpcion)


const segundaOpcion=()=> {
    confirmacion.innerText = respuestaIncorrecta
    respuesta2.classList.toggle('modoRespuestaIncorrecta')
}
respuesta2.addEventListener('click',segundaOpcion)


const terceraOpcion=()=> {
    confirmacion.innerText = respuestaIncorrecta
    respuesta3.classList.toggle('modoRespuestaIncorrecta')
}
respuesta3.addEventListener('click',terceraOpcion)
 */

/* Ejercicio 38 *//* 

const imag1 = document.getElementById('imag1')
const imag2 = document.getElementById('imag2')
const imag3 = document.getElementById('imag3')
const imag4 = document.getElementById('imag4')
const imag5 = document.getElementById('imag5')

const agrandarPrimeraImagen=()=> {
    imag1.style.height='500px'
    imag2.style.height='100px'
    imag3.style.height='100px'
    imag4.style.height='100px'
    imag5.style.height='100px'
}
imag1.addEventListener('click',agrandarPrimeraImagen)


const agrandarSegundaImagen=()=> {
    imag1.style.height='100px'
    imag2.style.height='500px'
    imag3.style.height='100px'
    imag4.style.height='100px'
    imag5.style.height='100px'
}
imag2.addEventListener('click',agrandarSegundaImagen)


const agrandarTerceraImagen=()=> {
    imag1.style.height='100px'
    imag2.style.height='100px'
    imag3.style.height='500px'
    imag4.style.height='100px'
    imag5.style.height='100px'
}
imag3.addEventListener('click',agrandarTerceraImagen)


const agrandarCuartaImagen=()=> {
    imag1.style.height='100px'
    imag2.style.height='100px'
    imag3.style.height='100px'
    imag4.style.height='500px'
    imag5.style.height='100px'
}
imag4.addEventListener('click',agrandarCuartaImagen)


const agrandarQuintaImagen=()=> {
    imag1.style.height='100px'
    imag2.style.height='100px'
    imag3.style.height='100px'
    imag4.style.height='100px'
    imag5.style.height='500px'
}
imag5.addEventListener('click',agrandarQuintaImagen) */


/* Ejercicio 39 */

/* const cuerpo = document.getElementById('cuerpo') */
/* 
let numeroRandom = 0
let colorRGB = []
let colorFinal=''
for (let index = 0; index < 3; index++) {
    colorRGB.push(obtenerNumeroAlAzar())
}
   console.log(colorRGB)
    function obtenerNumeroAlAzar() {
        numeroRandom = Math.floor(Math.random ()*256)
        return numeroRandom
     
}
 obtenerNumeroAlAzar()
console.log(colorFinal = 'rgb('+colorRGB+')')  */
/* cuerpo.style.backgroundColor = colorFinal  */ 

 /* 
const cambiarColorAleatoriamente=(e)=> {
    
let numeroRandom = 0
let colorRGB = []
let colorFinal=''
for (let index = 0; index < 3; index++) {
    colorRGB.push(obtenerNumeroAlAzar())
}
   console.log(colorRGB)
    function obtenerNumeroAlAzar() {
        numeroRandom = Math.floor(Math.random ()*256)
        return numeroRandom
     
}
 obtenerNumeroAlAzar()
    if (e.keyCode == 32) {
        cuerpo.style.backgroundColor = colorFinal 
    }
   
}

cuerpo.addEventListener('keydown',cambiarColorAleatoriamente)  */
/* 
const cuerpo = document.getElementById('cuerpo')
const cambiarColorAleatoriamente=(e)=> {
    let rgb = [Math.floor(Math.random ()*256),Math.floor(Math.random ()*256),Math.floor(Math.random ()*256)]
    if (e.keyCode==32) {
        cuerpo.style.backgroundColor=`rgb(${rgb[0]},${rgb[1]},${rgb[2]}`
    }
}
cuerpo.addEventListener('keydown',cambiarColorAleatoriamente) */
//console.log(document.getElementById("saludo"))
/* let miMensaje = document.getElementById("saludo")
console.log(saludo)
/* miMensaje = "Hola Buen Día" */
/* saludo = miMensaje */
 //miMensaje.innerHTML = "Adios"

/* Ejercicio 40 */
/* 
40)Queremos obtener el nombre, año de lanzamiento y banda de un disco , para mostrar el mensaje "El disco [NOMBRE DISCO] de la banda [NOMBRE DE LA BANDA] se lanzó en el año [AÑO DE LANZAMIENTO DEL DISCO]". 
            
let disco = {
  id: 1,
  nombre: 'Wasting Light',
  anioLanzamiento: 2011,
  cantidadDeTemas: 12,
  banda: {
    nombre: 'Foo Fighters',
    anioFormacion: 1994
  }
}; */

//infoDelDisco(disco);
//"El disco Wasting Light de la banda Foo Fighters se lanzó en el año 2011"

/* let disco = {
    id: 1,
    nombre: 'Wasting Light',
    anioLanzamiento: 2011,
    cantidadDeTemas: 12,
    banda: {
      nombre: 'Foo Fighters',
      anioFormacion: 1994
    }
}
let info = ''
const infoDelDisco=(disco)=> {
         info =`El disco ${disco.nombre} de la banda ${disco.banda.nombre} se lanzó en el año ${disco.anioLanzamiento}`
         return info
}
console.log(infoDelDisco(disco))
 */

/* Ejercicio 41 */
/* 
A partir de un array de bandas queremos saber si están activas o no 
            
            let bandas = [
              { id: 1, nombre: "Nirvana", fundacion: 1987, activa: false },
              { id: 2, nombre: "Foo Fighters", fundacion: 1994, activa: true },
              { id: 3, nombre: "Led Zeppelin", fundacion: 1967, activa: false },
              { id: 3, nombre: "Queens of the Stone Age", fundacion: 1997, activa: true },
              { id: 3, nombre: "Pearl Jam", fundacion: 1990, activa: true },
            ];
            
            //estanActivas(bandas)
            //
            `
            Nirvana no está activa
            Foo Fighters está activa desde el año 1994
            Led Zeppelin no está activa
            Queens of the Stone Age está activa desde el año 1997
            Pearl Jam está activa desde el año 1990 */
/* 
let bandas = [
    { id: 1, nombre: "Nirvana", fundacion: 1987, activa: false },
    { id: 2, nombre: "Foo Fighters", fundacion: 1994, activa: true },
    { id: 3, nombre: "Led Zeppelin", fundacion: 1967, activa: false },
    { id: 3, nombre: "Queens of the Stone Age", fundacion: 1997, activa: true },
    { id: 3, nombre: "Pearl Jam", fundacion: 1990, activa: true },
              ]

 const estanActivas=(bands)=> {
    let mensaje = ''
    for (let index = 0; index < bands.length; index++) {
        if (bands[index].activa == false) {
         mensaje+=(`${bands[index].nombre} no esta activa
         `)
        }else{
            mensaje+=(`${bands[index].nombre} esta activa desde el año ${bands[index].fundacion}
            `)
        }      
    }return mensaje
 }
 console.log(estanActivas(bandas))  */

 /* Ejercicio 42 */

 /* Para modelar bandas contamos con objetos con su nombre, año de lanzamiento, si sigue en actividad, una foto, el listado de integrantes y una lista de sus discos */
            /* 
            let ledZeppelin = {
              nombre: "Led Zeppelin",
              anio: 1968,
              activa: false,
              miniatura:
                "http://townsquare.media/site/295/files/2014/10/Led-Zeppelin1.jpg?w=980&q=75",
              integrantes: ["Jimmy Page", "Robert Plant", "John Paul Jones", "John Bonham"],
              discos: [
                {
                  nombre: "Led Zeppelin",
                  anio: 1969,
                  canciones: ["Good Times, Bad Times", "Communication Breakdown"],
                  duracion: 2691,
                },
                {
                  nombre: "Led Zeppelin II",
                  anio: 1969,
                  canciones: ["Whole Lotta Love", "Moby Dick", "Ramble On"],
                  duracion: 2502,
                },
                {
                  nombre: "Led Zeppelin III",
                  anio: 1970,
                  canciones: ["Immigrant Song"],
                  duracion: 2489,
                },
                {
                  nombre: "Led Zeppelin IV",
                  anio: 1971,
                  canciones: ["Rock and Roll", "Stairway to Heaven", "Four Sticks"],
                  duracion: 2559,
                },
              ],
            }; */
            
            //informacionDeLaBanda(ledZeppelin)
            //"Led Zeppelin se fundó en el año 1968. Tiene 4 integrantes: Jimmy Page, Robert Plant, John Paul Jones, John Bonham. Tiene en total 4 discos. Tiene en total 9 canciones entre todos los discos. En promedio, cada canción dura 1137.888888888889 segundos."


                /* let ledZeppelin = {
                nombre: "Led Zeppelin",
                anio: 1968,
                activa: false,
                miniatura:
                  "http://townsquare.media/site/295/files/2014/10/Led-Zeppelin1.jpg?w=980&q=75",
                integrantes: ["Jimmy Page", "Robert Plant", "John Paul Jones", "John Bonham"],
                discos: [
                  {
                    nombre: "Led Zeppelin",
                    anio: 1969,
                    canciones: ["Good Times, Bad Times", "Communication Breakdown"],
                    duracion: 2691,
                  },
                  {
                    nombre: "Led Zeppelin II",
                    anio: 1969,
                    canciones: ["Whole Lotta Love", "Moby Dick", "Ramble On"],
                    duracion: 2502,
                  },
                  {
                    nombre: "Led Zeppelin III",
                    anio: 1970,
                    canciones: ["Immigrant Song"],
                    duracion: 2489,
                  },
                  {
                    nombre: "Led Zeppelin IV",
                    anio: 1971,
                    canciones: ["Rock and Roll", "Stairway to Heaven", "Four Sticks"],
                    duracion: 2559,
                  },
                ],
              }

let cantCanciones = 0
let duracionPromedio = 0
let cantidadDeIntegrantes =0
let miembros = ''
let contadorCanciones=(banda) => {
    for (let index = 0; index < banda.discos.length; index++) {
    cantCanciones+= banda.discos[index].canciones.length    
}
    return cantCanciones 
}
contadorCanciones(ledZeppelin)

let calculaPromedio=(banda) => {
    let tiempoTotal= 0
    for (let index = 0; index < banda.discos.length; index++) {
    tiempoTotal+= banda.discos[index].duracion    
}

    return duracionPromedio = tiempoTotal/cantCanciones
}
calculaPromedio(ledZeppelin)

let contadorIntegrantes=(banda) => {
    return cantidadDeIntegrantes = banda.integrantes.length
}
contadorIntegrantes(ledZeppelin)

const integrantes=(banda)=> {
    for (let index = 0; index < banda.integrantes.length; index++) {
        miembros+=' '+banda.integrantes[index]
        if (index != (banda.integrantes.length)-1 ) {
            miembros+= ',' 
        }
    }
    return miembros
}
integrantes(ledZeppelin)
const informacionDeLaBanda=(banda)=> {
    
        console.log(`${banda.nombre} se fundó en el año ${banda.anio}. Tiene ${contadorIntegrantes(ledZeppelin)} integrantes:${miembros}. Tiene en total ${banda.discos.length} discos. Tiene en total ${cantCanciones} canciones entre todos los discos.  En promedio, cada canción dura ${calculaPromedio(ledZeppelin)} segundos.`)
         
    }
informacionDeLaBanda(ledZeppelin)   */

/* Ejercicio 43 */
/* 
Queremos visualizar fácilmente las propiedades y valores de nuestros productos con el siguiente formato: "producto[PROPIEDAD] -> VALOR". Para ello definiremos una función
            
            let producto = {
              id: "ADA-020",
              titulo: "Gubergren sed est amet voluptua",
              precio: 123.75,
              imagen:
                "https://i.kinja-img.com/gawker-media/image/upload/s--53mPze4a--/c_scale,f_auto,fl_progressive,q_80,w_800/1315358249455433031.jpg",
              condicion: "nuevo",
              envioGratis: true,
              ubicacion: "Capital Federal",
            }; */
            
            //obtenerPropiedadesYValores(producto)
 /* 
            producto['id'] -> ADA-020
            producto['titulo'] -> Gubergren sed est amet voluptua
            producto['precio'] -> 123.75
            producto['imagen'] -> https://i.kinja-img.com/gawker-media/image/upload/s--53mPze4a--/c_scale,f_auto,fl_progressive,q_80,w_800/1315358249455433031.jpg
            producto['condicion'] -> nuevo
            producto['envioGratis'] -> true
            producto['ubicacion'] -> Capital Federal *//* 
let producto = {
                id: "ADA-020",
                titulo: "Gubergren sed est amet voluptua",
                precio: 123.75,
                imagen: "https://i.kinja-img.com/gawker-media/image/upload/s--53mPze4a--/c_scale,f_auto,fl_progressive,q_80,w_800/1315358249455433031.jpg",
                condicion: "nuevo",
                envioGratis: true,
                ubicacion: "Capital Federal",
 }

 let formatoFinal = ''


 const obtenerPropiedadesYValores=(product)=> {
    formatoFinal = `    producto['id'] -> ${product.id}
    producto['titulo'] -> ${product.titulo}
    producto['precio'] -> ${product.precio}
    producto['imagen'] -> ${product.imagen}
    producto['condicion'] -> ${product.condicion}
    producto['envioGratis'] -> ${product.envioGratis}
    producto['ubicacion'] -> ${product.ubicacion}`
    return formatoFinal
 } 

//console.log(`producto[${producto[0]}]--`);
 
console.log(obtenerPropiedadesYValores(producto))   */

/* Ejercicio 44 */

/* Contamos con perfiles que tienen nombreDeCuenta y contrasenia y pueden tener o no el campo email
            
            let perfilSinEmail = {
              nombreDeCuenta: "ada_lovelace",
              contrasenia: "1234567890!"
            };
            
            let perfilConEmail = {
              nombreDeCuenta: "ellie_arroway",
              contrasenia: "vegaeterna",
              email: "ellie@argos.org"
            }; */
            
            //tieneEmail(perfilConEmail)
            //'El usuario tiene la propiedad email'



/* 
    let perfilSinEmail = {
        nombreDeCuenta: "ada_lovelace",
        contrasenia: "1234567890!"
      }
      
      let perfilConEmail = {
        nombreDeCuenta: "ellie_arroway",
        contrasenia: "vegaeterna",
        email: "ellie@argos.org"
      }

const tieneEmail=(perfil)=> {
    let contiene = ''
     console.log(perfil.email)
        if (perfil.email == undefined) {
            contiene = 'El usuario no tiene la propiedad email'
        }else{
            contiene ='El usuario tiene la propiedad email'  
     }
     return contiene
    }

console.log(tieneEmail(perfilConEmail)) */

/* Ejercicio 45 */
/* 
Tenemos los datos de distintas personas que quieren crear un perfil dentro de Gmail guardados de la siguiente forma:
            let perfil1 = {
              nombre: 'Grace',
              apellido: 'Hopper',
              email: 'grace.hopper@gmail.com',
              password: '123456'
            };
            
            let perfil2 = {
              nombre: 'Ada',
              apellido: 'Lovelace',
              email: 'ada.lovelace@gmail.com',
              password: '**178!Ada--'
            };
            
            let perfil3 = {
              nombre: 'Hedy',
              apellido: 'Lamarr',
              email: 'hlamarr@gmail.com',
              password: '1234'
            };
            
            Nos pidieron implementar una función, llamada validarPassword, que reciba un perfil y valide la contraseña.
            la función nos tiene que retornar un objeto con dos propiedades: verificada (un booleano) y mensaje (un string que contiene el mensaje de la validación que falló, o vacío si salió todo bien);
            de la contraseña tenemos que validar:
            que la longitud sea mayor o igual a 6 (si es menor, retornar el mensaje "Contraseña con menos de 6 caracteres");
            que la contraseña no sea una de: "123456", "password", "111111", "qwerty" (si coincide con alguna de esas contraseñas, retornar el mensaje "Contraseña muy insegura") */
            //validarPassword(perfil3)
            //{ verificada: false, mensaje: 'Contraseña con menos de 6 caracteres' }
            /* let perfil1 = {
                nombre: 'Grace',
                apellido: 'Hopper',
                email: 'grace.hopper@gmail.com',
                password: '123456'
              };
              
              let perfil2 = {
                nombre: 'Ada',
                apellido: 'Lovelace',
                email: 'ada.lovelace@gmail.com',
                password: '**178!Ada--'
              };
              
              let perfil3 = {
                nombre: 'Hedy',
                apellido: 'Lamarr',
                email: 'hlamarr@gmail.com',
                password: '1234'
              };

              let verificador = []
     
              const validarPassword=(perfil)=> {
                if (perfil.password.length > 5 ) {
                    if (perfil.password == '123456' || perfil.password == 'password' || perfil.password == '111111' || perfil.password == 'qwerty') {
                        verificador.push('verificada: false','validación: Contraseña muy insegura') 
                    }else{
                        verificador.push('verificada: true','validación: ')
                    }      
                }else{
                    verificador.push('verificada: false','Contraseña con menos de 6 caracteres')
                }
                
                
                    return verificador
              }
              console.log(validarPassword(perfil3)); */
/* Ejercicio 46 */
/* 
/Queremos crear un html a partir de un objeto de JavaScript, más especificamente vamos a crear una página que nos permita visualizar discos de Spotify . Los discos tienen las propiedades: id (string), nombre (string), anio (número), genero (array de strings), banda (string), portada (string) e info (string).  */
            /* 
            let albumDeEjemplo = {
              id: 'nirv1234',
              nombre: 'With The Lights Out',
              anio: 2004,
              genero: 'Grunge',
              banda: 'Nirvana',
              portada: 'https://muzikalia.com/wp-content/uploads/2005/03/nirvana__with_the_lights_out.jpg',
              info: 'https://en.wikipedia.org/wiki/With_the_Lights_Out'
            }; */
            
            //Para eso definiremos una función render que reciba un disco como argumento y genere un HTML de la siguiente forma:
            //render(albumDeEjemplo)
            //
            /* `
            <div class="card m-5" id="nirv1234">
              <img class="card-img-top" src="https://muzikalia.com/wp-content/uploads/2005/03/nirvana__with_the_lights_out.jpg" alt="Nirvana - With The Lights Out" />
              <div class="card-body">
                <h5 class="card-title">Nirvana</h5>
                <p class="card-text">With The Lights Out (2004) | Grunge</p>
                <a href="https://en.wikipedia.org/wiki/With_the_Lights_Out" class="btn btn-primary">https://en.wikipedia.org/wiki/With_the_Lights_Out</a>
              </div>
            </div> 
            ` */
 const albumDeEjemplo = [
    {     
    id: 'nirv1234',
    nombre: 'With The Lights Out',
    anio: 2004,
    genero: 'Grunge',
    banda: 'Nirvana',
    /* portada: 'https://muzikalia.com/wp-content/uploads/2005/03/nirvana__with_the_lights_out.jpg', */
    portada: 'https://image.cdn1.buscalibre.com/936243.RS500x500.jpg',
    info: 'https://en.wikipedia.org/wiki/With_the_Lights_Out'
    }
]
const render = document.getElementById('render')
  albumDeEjemplo.forEach((album) => {
    render.innerHTML += 
        `<div class="card m-5" id="${album.id}">
                <img class="card-img-top" src="${album.portada}" alt="${album.banda} - ${album.nombre}" />
            <div class="card-body">
                <h5 class="card-title">${album.banda}</h5>
                <p class="card-text">${album.nombre} (${album.anio}) | ${album.genero}</p>
                <a href="${album.info}" class="btn btn-primary">${album.info}</a>
            </div>
        </div>`
    
  });

/* Ejercicio 47 */

/* 
47)Necesitamos definir una función que dado un objeto con productos y precios, y la cantidad de dinero disponible, devuelva un objeto con dichos productos, teniendo como valor true si puede comprarlo o false sino.
let productos = { cookies: 60, chocolate: 110, soda: 120 };
let dinero = 115; */

//comprarProductos(dinero, productos)
//{ cookies: true, chocolate: true, soda: false }
/* 
let productos = { cookies: 60, chocolate: 110, soda: 120 };
let dinero = 115;
function showProps(obj, objName) {
    let result = ``;
    for (let i in obj) {
      // obj.hasOwnProperty() se usa para filtrar propiedades de la cadena de prototipos del objeto
      if (obj.hasOwnProperty(i)) {
        result += `${objName}.${i} = ${obj[i]}\n`;
      }
    }
    return result;
  }
  console.log(showProps(productos,'productos'));
  
let productos = { cookies: 60, chocolate: 110, soda: 120 };
let dinero = 115;
  let resultado = ``
const comprarProductos=(money, products)=>{
    for (let product in products) {
        
        if (products[product]>money) {
            resultado+= `${product} : false, `
        }else{
            resultado+= `${product} : true, `
        }
    }
    return resultado
}

console.log(comprarProductos(dinero, productos));  */ 
 
/* Ejercicio 48 */


//48)Necesitamos una función que dado un string devuelva un objeto con la cantidad de letras, espacios y números que contiene. Cualquier cosa que no sea un número o un espacio cuenta como una letra.
            
            
//obtenerInfoString("H3ll0 Wor1d")
//{letras:  7, digitos: 3, espacios: 1}

/* 

let string = 'H3ll0 Wor1d'


const obtenerInfoString = (string)=>{

let contadorLetras = 0
let contadorDigitos = 0
let contadorEspacios = 0


for (let index = 0; index < string.length; index++) {
    if (string[index] == ' ') {
        contadorEspacios++        
    }else{
        if (string[index] == 0 ||string[index] == 1 ||string[index] == 2 ||string[index] == 3 ||string[index] == 4 ||string[index] == 5 ||string[index] == 6 ||string[index] == 7 ||string[index] == 8 ||string[index] == 9) {
            contadorDigitos++
        }else{
            contadorLetras++
        }
    }
}
return `{letras: ${contadorLetras}, digtos: ${contadorDigitos}, espacios: ${contadorEspacios}}`
}

console.log(obtenerInfoString(string)); */ 

/* Ejercicio 49 */

//49)Necesitamos una función que dada una persona y una búsqueda de empleo, devuelva si la persona se ajusta a dicha búsqueda. 
            
            /* let persona = {
              experiencia: 4,
              lenguajes: ["JavaScript", "HTML","CSS"],
              locacion: "Buenos Aires",
              remuneracion: 35000
            }
            
            let busqueda = {
              experiencia: 1,
              lenguajes: ["JavaScript", "HTML"],
              locacion: ["Buenos Aires"],
              remuneracion: 40000
            }
            
            La persona se adecua si:
            cuenta con los años de experiencia necesarios para la búsqueda;
            los lenguajes que conoce son los que contiene la búsqueda (puede conocer más, pero no afecta en nada);
            su locación está incluida dentro de las locaciones posibles de la búsqueda;
            su remuneración (pretendida) es igual o menor a la de la búsqueda. */
            //seAdecua(persona, busqueda)
            //true
            /* let persona = {
                experiencia: 4,
                lenguajes: ["JavaScript", "HTML","CSS"],
                locacion: "Buenos Aires",
                remuneracion: 35000
              }
              
              let busqueda = {
                experiencia: 1,
                lenguajes: ["JavaScript", "HTML"],
                locacion: ["Buenos Aires"],
                remuneracion: 40000
              } 
              const seAdecua = (person,search)=> {
                    let adecuado = false
                    if (person.experiencia>=search.experiencia &&  person.locacion == search.locacion && search.remuneracion >= person.remuneracion) {
                        adecuado = true
                    }
                    for (let index = 0; index < search.lenguajes.length; index++) {
                        if (person.lenguajes.includes(search.lenguajes[index])) {
                            adecuado=true;
                        }else{
                            adecuado = false;
                            break
                         }
              }
              return adecuado
            }
        console.log(seAdecua(persona, busqueda))  */ 
            
        
  
