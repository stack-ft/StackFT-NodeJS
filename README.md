# Stack NodeJS SDK

The Stack NodeJS SDK provides an easy and convenient way to communicate with the Stack REST API. This SDK allows you to integrate Stack's services into your Node.js applications.

## Available Services

The SDK includes the following services:

- **Bill Pay**: Simplify your bill payments with this service.
- **Entity**: Manage entities with ease.
- **Facial Recognition**: Implement facial recognition and liveness detection in your applications.
- **Identity**: Handle identity verification and management securely.
- **Ledgers**: Maintain and manage ledgers effectively.
- **Rewards**: Manage reward systems in your application.
- **Transactions**: Handle transactions smoothly and securely.
- **Utilities**: A set of utility services.
- **Web3**: Integrate with blockchain technologies.

## Installation

Install the SDK using npm:

```bash
npm install stackft
```

## Usage

First, require the stackft module in your file:

```js
const Stack = require('stackft');
```

Then, initialize the Stack service:

```js
const stack = new Stack({ apiKey: 'your-api-key' });
```

## Base URL

If you have a dedicated environment set up for your enterprise, you are able to connect this SDK to your environment by updating the **`baseURL`** parameter:

```js
const stack = new Stack({ apiKey: 'your-api-key', baseURL: 'your-custom-url' });
``` 

## Example

Here's an example of how to use the **Bill Pay** service:

```js
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
```

Remember to replace `params` with the actual details of the bill.


## Documentation

The full API documentation, including detailed descriptions of each service and their methods, can be found [here](https://docs.stack-ft.com).

## Status codes

For a full list of status codes and error types, please refer to the documentation [here](https://docs.stack-ft.com/status-codes.html). 

## Support

If you encounter any issues or require further assistance, feel free to raise an issue in this repository or contact us at support@stack-ft.com.

## License

This SDK is released under the [Apache-2.0 License](https://www.apache.org/licenses/LICENSE-2.0).


