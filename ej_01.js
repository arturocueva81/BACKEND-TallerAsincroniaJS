const SALDO_DISPONIBLE = 500;

// funcion retirarDinero
function retirarDinero(monto){
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            if(monto <= SALDO_DISPONIBLE){
                const SALDO_RESTANTE = SALDO_DISPONIBLE - monto;
                resolve(`- Retiro exitoso de $${monto}. Saldo restante: $${SALDO_RESTANTE}`);
            }else{
                reject(`- Fondos insuficientes. Límite de retiro: $${SALDO_DISPONIBLE}`);
            }
            
        }, 1000);
    });
}

// caso exitoso
console.log('Caso Exitoso - Monto: $200, Procesando ...');;
retirarDinero(200).then((mensaje) => {
        console.log(mensaje);
    })
    .catch((error) => {
        console.log(error);
    });

// caso fallido
console.log('Caso Fallido - Monto: $600, Procesando ...');;
retirarDinero(600).then((mensaje) => {
        console.log(mensaje);
    })
    .catch((error) => {
        console.log(error);
    });