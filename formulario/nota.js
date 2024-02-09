 function calcularImporte(prod,cant,sab){

    // El codigo de esta seccion es de caracter demostrativo y no es el correcto
    // La actividad consta de realizar la programación correspondiente a los calculos adecuados
    
    var importe=0.8;
    if(sab=="vainilla"){
       importe+=10.8;
    }
    if(prod==1){
        importe+=5;
    }
    importe=parseFloat(importe)*parseInt(cant);
    document.write("La cantidad a pagar es: $"+ importe.toFixed(2) +" Pesos <br>");
}

function calcularNota(event){

    var nombre = document.getElementById("nombre").value;
    var producto = document.getElementById("producto").value;
    var cantidad = document.getElementById("cantidad").value;
    var sabor = document.querySelector('input[name="sabores"]:checked').value;
    var impuesto= document.getElementById("impuesto");
 
    document.write("<strong>***** Nota de Venta ******</strong><br>");
    document.write("<hr>");
    document.write("Nombre Cliente: " + nombre + " <br>");
    document.write("Producto: " + producto + " <br>");
    document.write("Cantidad " + cantidad + " <br>");
    document.write("Sabor: " + sabor +" <br>");
    if(impuesto.checked) {document.write("Impuestos Incluidos <br>");}
    document.write("<hr>");
    calcularImporte(producto,cantidad,sabor);
    document.write("<hr>");
    document.write("<a href=\"nota.html\">Regresar</a> ");
    
    event.preventDefault();
}