const AWS = require('aws-sdk');

exports.handler = ({AWSConfig, service, serviceOptions, method, params}) => {
    return new Promise((resolve, reject) => {

        new AWS.Config(AWSConfig);
        const serviceInstance = new AWS[service](serviceOptions);

        serviceInstance[method](params, (err, res) => {
            if(err){
                return resolve({
                    statusCode: err.statusCode,
                    body: JSON.stringify(err)
                });
            }

            return resolve({
                statusCode: 200,
                body: JSON.stringify(res)
            });
        });
    });
};