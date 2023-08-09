const nombreCliente= prompt("Ingrese su Nombre, por favor")

const edadCliente= parseInt(prompt("Ahora ingrese su edad"))

const funcionDescuento=(nombre, edad)=>{
    while(edad >= 50){
        const precioDeCompra= parseInt(prompt("ingrese el total de su compra"))
        const descuentoMayores= precioDeCompra * 30 / 100
        const PrecioFinal= precioDeCompra - descuentoMayores
        alert(`${nombre}, el precio final despues de su descuento es de $${PrecioFinal}, que lo disfrute`)
    
        break
    }
    if(edad < 50){
        alert(`${nombre} lo lamentamos, no cumples la edad de requisito para el descuento :c`)
    }
}

funcionDescuento(nombreCliente, edadCliente)



