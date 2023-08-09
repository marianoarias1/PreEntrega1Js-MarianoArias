const nombreCliente= prompt("Ingrese su Nombre, por favor")

const edadCliente= prompt("Ahora ingrese su edad")

while(edadCliente >= 50){
    const precioDeCompra= parseInt(prompt("ingrese el total de su compra"))
    const descuentoMayores= precioDeCompra * 30 / 100
    const PrecioFinal= precioDeCompra - descuentoMayores
    alert(`${nombreCliente}, el precio final despues de su descuento es de $${PrecioFinal}, que lo disfrute`)

    break
}

if(edadCliente < 50){
    alert(`${nombreCliente} lo lamentamos, no cumples la edad de requisito para el descuento :c`)
}