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
 
let letra = prompt("Ingrese letra")
    function esVocal(letra) {
    if(letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u') {
        return true
    }else{
        return false
    }
}
alert("La letra es vocal: "+esVocal(letra))







