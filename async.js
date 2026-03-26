const minhaPromise = new Promise((resolve, reject) => {
    let condicao = true;

    if(condicao){
        resolve('resolvido')
    }else{
        reject('erro')
    }
})


minhaPromise.then((resultado) => {
    console.log(resultado)
}).catch((error) => {
    console.log(error)
})