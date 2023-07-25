class ClientError extends Error {
    constructor(message, statuscode){
        super(message);
        this.statusCode= statuscode;
    }
}

module.exports= {ClientError};