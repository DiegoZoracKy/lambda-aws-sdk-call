# lambda-aws-sdk-call

A common Lambda to call any AWS service via AWS SDK. It is based on the AWSJavaScriptSDK. Check the [documentation](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/top-level-namespace.html) to get Config, Services, Methods and Parameters names. Ideal to be used on Step Functions.

## Installation

Create a new Lambda function, set its Runtime to Node.js 8.10+ and paste on it the content of the file:

https://github.com/DiegoZoracKy/lambda-aws-sdk-call/blob/master/lambda-call-aws-sdk.js

## Example

Example of an input to call [lambda's listFunctions](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Lambda.html#listFunctions-property) method defining the param *MaxItems* equals to 1:

**Input**
```javascript
{
  "AWSConfig": {
    "region": "us-east-1"
  },
  "service": "Lambda",
  "method": "listFunctions",
  "params": {
      "MaxItems": 1
  }
}
```

