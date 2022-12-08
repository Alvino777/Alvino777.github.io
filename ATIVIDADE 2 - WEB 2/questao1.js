function after2seconds(x) {
    return new Promise(resolve => {
        console.log('Olá')
        setTimeout(() => {
            resolve(x);
        }, 2000);
    });
}

async function chamada() {
    var x = await after2seconds('Depois de 2s');
    console.log(x); 
}

chamada();