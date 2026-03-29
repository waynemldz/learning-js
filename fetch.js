fetch('https://api.coingecko.com/apli/v3/exchange_rates', 
    {
        mode: 'cors',
        method: 'POST', 
        body:{
            name: 'Wayne',
            age: 24
        },
        headers:{

        }
    }).then((data) => {
    console.log(data)
})