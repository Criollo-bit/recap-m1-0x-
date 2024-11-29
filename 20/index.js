//Escribe una función flecha que reciba un precio y calcule el 12% de IVA. Muestra el precio total.
const calcularPrecioConIVA = () => {
    const precio = Number(prompt("Ingrese el precio:"));
    const precioTotal = precio * 1.12;
    console.log(`El precio total con IVA es: $${precioTotal.toFixed(2)}`);
    alert(`El precio total con IVA es: $${precioTotal.toFixed(2)}`)
  };
  
  calcularPrecioConIVA();