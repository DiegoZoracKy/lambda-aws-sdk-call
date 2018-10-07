// Version: 0.0.1, Source: https://github.com/DiegoZoracKy/lambda-aws-sdk-call
const AWS = require('aws-sdk');

exports.handler = ({AWSConfig, service, serviceOptions, method, params}) => {
    return new Promise((resolve, reject) => {

        AWS.config = new AWS.Config(AWSConfig);
        const serviceInstance = new AWS[service](serviceOptions);

        serviceInstance[method](params, (err, res) => {
            if(err){
                return resolve({
                    statusCode: err.statusCode,
                    body: err
                });
            }

            return resolve({
                statusCode: res.statusCode,
                body: res
            });
        });
    });
};
