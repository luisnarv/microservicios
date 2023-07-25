class ClientError extends Error {
    constructor(message, statuscode){
        super(message);
        console.log(statuscode,"estee s el statscode")
        this.statusCode= statuscode;
    }
}

module.exports= {ClientError};