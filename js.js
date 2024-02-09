/*
 Costos:
  Caramelo fresa: $18 // caja: $234
  Caramelo Chocolate: $3 // caja: $117
 Caramelo Vainilla: $9 
 Bombones: $2
 Chicle: $3

 Calculos totales:

Caramelos de vainilla: $117 * 15 cajas = $1,755
Caramelos de fresa: $234 * 15 cajas = $3,510
Bombones (gomas de mascar): $39 * 15 cajas = $585

Ganancia total: 30/100 * $5,850 = $1,755
Total con IVA: $7,605 + 16/100 * $7,605 = $8,815.80

-14 caramelos en mal estado
$8,815.80 - 14 * $3 = $8,815.80 - $42 = $8,773.80
total:  $8,773.80
*/
let iva = document.getElementById('impuesto');

function costoTotal(producto, cantidad, sabores){
    //primero obtener producto, luego cantidad (Si es >=13 se cobra un .30 adicional),luego calcular acorde a sabor, luego ver si tiene impuesto. 
    let costoFinal = 0;
    if(producto == 1 && sabores == 'Fresa'){
        //Caramelo fresa
        costoFinal += 18;
    }else if(producto == 1 && sabores == 'Vainilla'){
        //Caramelo vainilla
        costoFinal += 9;
    }else if(producto == 1 && sabores == 'Chocolate'){
        //Caramelo chocolate
        costoFinal += 3;
    }else if (producto == 2){
        //goma
        costoFinal += 2;
    }else if (producto == 3){
        //bombones
        costoFinal += 3;
    }

    if(cantidad < 13){
        costoFinal = costoFinal * cantidad;
    }else{
        costoFinal = (costoFinal * cantidad)*1.30;
    }
    
    if(iva.checked){
        costoFinal = costoFinal *1.16;
    }

    document.write("El costo total es: $" + costoFinal.toFixed(2));  
}

function ventaTotal(event){
    let nombre = document.getElementById('nombre').value;
    let producto = document.getElementById('producto').value;
    let cantidad = document.getElementById('cantidad').value;
    let sabores = document.querySelector('input[name="sabores"]:checked').value;


    document.write("<strong>***GRACIAS POR SU COMPRA***</strong><br>");
    document.write("Nombre " + nombre + "<br>" + "<br>");
    document.write("Usted adquirió: " + cantidad + "<br>");
    if(iva.checked){
        document.write("IVA de 16% incluido" + "<br>")
    }
    costoTotal(producto,cantidad,sabores);

    document.write("<br>");
    document.write("<a href=\"index.html\">Volver</a>");
    event.preventDefault();
}


 