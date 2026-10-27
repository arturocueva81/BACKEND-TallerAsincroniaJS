// funcion consultarClima
function consultarClima(ciudad) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                ciudad: ciudad,
                temperatura: "24°C",
                condicion: "Soleado"
            });
        }, 1000);
    });
}

//funcion asincrona
async function mostrarClima(ciudad) {
    try {
        console.log(`Clima para: ${ciudad}.`);
        console.log(`Consultando ...` );
        const clima = await consultarClima(ciudad);

        console.log(`- Ciudad:      ${clima.ciudad}`);
        console.log(`- Temperatura: ${clima.temperatura}`);
        console.log(`- Condición:   ${clima.condicion}`);
    } catch (error) {
        console.log("- Error al consultar el clima:", error);
    }
}

//llamar a la funcion
mostrarClima("Quito");