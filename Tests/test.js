const Stack = require('../index')
const fs = require('fs')

const stack = new Stack({
    apiKey: ''
})


//UTILITIES
async function getAtmLocation_Allpoint() {
    const params = {
        "zipcode": "20705"
    }
    stack.utilities.atm.allpoint(params)
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    }) 
}

async function getAtmLocation_Moneypass() {
    const params = {
        "zipcode": "20705"
    }
    stack.utilities.atm.moneypass(params)
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    }) 
}

async function bankLookup() {
    const params = {
        "routing_number": "121000358"
    }
    stack.utilities.banking.bankLookup(params)
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    }) 
}

async function currencyConvert() {
    const params = {
        "from": "USD",
        "to": "KES",
        "amount": 100
    }
    stack.utilities.currency.convert(params)
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    }) 
}

async function stockPrice() {
    const params = { "symbols": ["TSLA", "BA"] }
    stack.utilities.stock.price(params)
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    }) 
}

async function stockSymbols() {
    stack.utilities.stock.symbols()
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    }) 
}