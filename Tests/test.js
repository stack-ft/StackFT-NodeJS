const Stack = require('../index')
const fs = require('fs')

const stack = new Stack({
    apiKey: ''
})

//ENTITY
async function testGetEntity() {
    stack.entity.individual.get('i_uuid_3f38cc45-4b6c-4f9b-a01e-ce5b7036146f')
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    })
}

async function testCreateEntity() {
    const params = {
        "first_name": "John",
        "middle_name": "A",
        "last_name": "Dorian",
        "date_of_birth": {
            "day": 1,
            "month": 1,
            "year": 1990
        },"address": {
            "street": "123 stack ave",
            "city": "Middletown",
            "state": "DE",
            "postal_code": "19705",
            "country": "US"
        },
        "email": "johndoe@gmail.com",
        "id_type": "ssn",
        "id_number": "234567676"
    }
    stack.entity.individual.create(params)
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    })  
}

async function testUpdateEntity() {
    const params = {
        "first_name": "John",
        "middle_name": "A",
        "last_name": "Dorian",
        "date_of_birth": {
            "day": 1,
            "month": 1,
            "year": 1990
        },"address": {
            "street": "123 stack ave",
            "city": "Middletown",
            "state": "DE",
            "postal_code": "19705",
            "country": "US"
        },
        "email": "johndoe@gmail.com",
        "id_type": "ssn",
        "id_number": "234567676"
    }
    stack.entity.individual.update(params)
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    })   
}

async function testVerifyEntity() {
    stack.entity.individual.verify('i_uuid_ba82e4fc-67f9-44ab-86f4-238d6d3d54d6')
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    })  
}

//IDENTITY
async function testDocumentVerification() {
    const front = './maryland-drivers-license.jpeg'
    if (fs.existsSync(front)) {
        const params = {
            front: front,
            document_type: 'drivers_license',
            return_image: true
        }
        stack.identity.document.verify(params)
        .then(result => {
            console.log(result)
        })
        .catch(error => {
            console.log(error)
        })
    } else {
        console.log("File not found.");
    }
}

//FACIAL RECOGNITION
async function testLivenessDetection() {
    const face = 'IMAGE PATH'
    const params = {
        face: face
    }
    stack.face.liveness(params)
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    })
}

async function testRegisterForIris() {
    const face = 'IMAGE PATH'
    const params = {
        face: face
    }
    stack.face.iris.profile(params)
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    })
}

async function testAuthWithIris() {
    const face = 'IMAGE PATH'
    const params = {
        face: face,
        profile_id: 'YOUR PROFILE ID'
    }
    stack.face.iris.auth(params)
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    })  
}

//TRANSACTION SCORING & ENRICHMENT
async function testTransactionScoring() {
    const params  = {
        "entity_id": "i_uuid_5b240456-ff05-4d9c-908c-241525a6ca36",
        "amount": 500.25,
        "direction": "debit",
        "entity_ip_address": "146.70.53.35",
        "destination": {
            "entity_name": "Example Company Inc",
            "country": "NG"
        }
    }
    stack.transactions.monitoring.report(params)
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    })
}

async function testTransactionEnrichment() {
    const params  = {
        "entity_id": "i_uuid_5b240456-ff05-4d9c-908c-241525a6ca36",
        "amount": 59.03,
        "direction": "debit",
        "description": "AMZN Mktp US*N87AP5UI3 Amzn.com/bi WA",
        "currency": "USD",
        "country": "US",
        "date": {
            "day": 4,
            "month": 1,
            "year": 2023
        }
    }
    stack.transactions.enrichment.enrich(params)
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    })
}

async function testTransactionEnrichmentBatch() {
    const params  = [{
        "entity_id": "i_uuid_5b240456-ff05-4d9c-908c-241525a6ca36",
        "amount": 59.03,
        "direction": "debit",
        "description": "AMZN Mktp US*N87AP5UI3 Amzn.com/bi WA",
        "currency": "USD",
        "country": "US",
        "date": {
            "day": 4,
            "month": 1,
            "year": 2023
        }
    },
    {
        "entity_id": "i_uuid_5b240456-ff05-4d9c-908c-241525a6ca36",
        "amount": 5.03,
        "direction": "debit",
        "description": "AMZN Mktp US*N87AP5UI3 Amzn.com/bi WA",
        "currency": "USD",
        "country": "US",
        "date": {
            "day": 4,
            "month": 1,
            "year": 2023
        }
    }]
    stack.transactions.enrichment.batch(params)
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    })
}

async function getAllEnrichedTransactions() {
    stack.transactions.enrichment.get('i_uuid_5b240456-ff05-4d9c-908c-241525a6ca36')
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    })
}

async function getSubscriptions() {
    stack.transactions.enrichment.subscriptions.get('i_uuid_5b240456-ff05-4d9c-908c-241525a6ca36')
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    }) 
}

async function getIncome() {
    stack.transactions.enrichment.income.get('i_uuid_5b240456-ff05-4d9c-908c-241525a6ca36')
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    }) 
}

//BILL PAY
async function testGetPhoneNetwork() {
    const params = {
        "phone_number": "2400000000",
        "country": "US"
    }
    stack.bill.phone.network(params)
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    })  
}

async function payPhoneBill() {
    const params = {
        "request_id": "f49cad8a-ca23-4dca-b337-3e15c152e415",
        "amount": 20
    }
    stack.bill.phone.pay(params)
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    })    
}

//REWARDS
async function testGetGiftcardCatalog() {
    stack.rewards.giftcard.catalog()
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    })    
}

async function purchaseGiftcard() {
    const params = {
        "reward_id": 27222,
        "amount": 1
    }
    stack.rewards.giftcard.order(params)
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    })    
}

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

async function getAtmLocation_General() {
    const params = {
        "zipcode": "20705"
    }
    stack.utilities.atm.general(params)
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    }) 
}

///WEB3
async function createWallet() {
    stack.web3.wallet.create('MATIC')
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    })  
}