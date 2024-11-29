//Escribe un programa que determine si un número ingresado por el usuario es par o impar.
let n;
n = parseInt(prompt("ingresa el numero"));
if(n % 2 == 0){
    alert("el numero "+n+" es par")
}else{
    alert("el numero "+n+" es impar")
}