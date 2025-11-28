# Stack NodeJS SDK

The Stack NodeJS SDK provides an easy and convenient way to communicate with the Stack REST API. This SDK allows you to integrate Stack's services into your Node.js applications.

## Available Services

The SDK includes the following services:

- **Utilities**: A set of utility services.
  - **Banking**: A set of banking related apis
  - **Currency**: A set of currency related apis
  - **Stock**: A set of stock market related apis

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

Here's an example of how to use the **Currency Conversion** service:

```js
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
```

Remember to replace `params` with the actual details of the request. More Examples can be found [here](https://github.com/stack-ft/StackFT-NodeJS/blob/main/Tests/test.js)


## Documentation

The full API documentation, including detailed descriptions of each service and their methods, can be found [here](https://docs.stack-ft.com).

## Status codes

For a full list of status codes and error types, please refer to the documentation [here](https://docs.stack-ft.com/errors#status-codes). 

## Support

If you encounter any issues or require further assistance, feel free to raise an issue in this repository or contact us at support@stack-ft.com.

## License

This SDK is released under the [Apache-2.0 License](https://www.apache.org/licenses/LICENSE-2.0).


