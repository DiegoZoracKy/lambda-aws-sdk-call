# lambda-aws-sdk-call

A common Lambda to call any AWS service via AWS SDK. It is based on the AWSJavaScriptSDK. Check the [documentation](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/top-level-namespace.html) to get Config, Services, Methods and Parameters names:

## Example

**Input**
```javascript
{
    "AWSConfig": {
        "region": "us-east-1"
    },
    "service": "Lambda",
    "serviceOptions": {
        "region": "us-east-1"
    },
    "method": "listFunctions"
}
```