precio = 400000;
message = `El precio del producto es: ${precio}`;
document.querySelector('#card-text').innerHTML = message;

const onSubmit = (frmCompra) => {
   
    let cantidad = frmCompra.cantidad.value;
    let color = frmCompra.color.value;
    console.log(cantidad);
    console.log(color);
    let total = cantidad * precio;
    if(cantidad==''){
        alert('Debe ingresar la cantidad de productos');
        cantidad.focus();
        cantidad.select();
        return false;
    }

    if(color==''){
        alert('Debe seleccionar un color');
        color.focus();
        color.select();
        return false;
    }
    if(color=='red'){
        message='rojo'
        document.querySelector('#colour').style.backgroundColor = 'red';
        document.querySelector('#colour').style.borderRadius = '30%';
        document.querySelector('#colour').style.color = 'white';
        document.querySelector('#colour').innerHTML = message;
    }
    if(color=='blue'){
        message='azul'
        document.querySelector('#colour').style.backgroundColor = 'blue';
        document.querySelector('#colour').style.borderRadius = '30%';
        document.querySelector('#colour').style.color = 'white';
        document.querySelector('#colour').innerHTML = message;
    }
    message = `El precio del producto es: ${precio} y la cantidad es: ${cantidad} y el total es: ${total}`;
    document.querySelector('#res').innerHTML = message;
   return false;
}