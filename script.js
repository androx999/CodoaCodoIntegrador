function calcularDescuento(cantidad, categoria) {
    let valorEntrada = 200
    let descuento = 0;
    
    if (categoria === "estudiante") {
      descuento = (cantidad * valorEntrada) * (1 - 0.8); // 80% de descuento
    } else if (categoria === "trainee") {
      descuento = (cantidad * valorEntrada) * (1 - 0.5); // 50% de descuento
    } else if (categoria === "junior") {
      descuento = (cantidad * valorEntrada) * (1 - 0.15); // 15% de descuento
    }
    
    return descuento;
}

let cantidadInput = document.getElementById("cantidad");
let categoriaSelect = document.getElementById("categoria");
let resumenButton = document.getElementById("resumen");
let totalInput = document.getElementById("total");


//BOTON RESUMEN

resumenButton.addEventListener("click", (evento)=> {
    evento.preventDefault(); // Evitar el envío del formulario
    
    let cantidad = parseInt(cantidadInput.value);
    let categoria = categoriaSelect.value;
    
    let descuento = calcularDescuento(cantidad, categoria);
    
    totalInput.value = "Total a pagar: $" + descuento.toFixed(2);
});

//BOTON BORRAR

document.getElementById("borrar").addEventListener("click", (evento)=> {
    evento.preventDefault();
    
    cantidadInput.value = "";
    categoriaSelect.value = "estudiante";
    totalInput.value = "";
});