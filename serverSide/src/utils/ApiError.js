class ApiError {
  constructor(code, message, err) {
    this.code = code;
    this.message = message;
    this.err = err;
  }

  //[400] bad request
  static badRequest(message) {
    return new ApiError(400, `Bad Request: ${message}`);
  }
  //[404] not found
  static notFound() {
    return new ApiError(404, `Resource Not Found`);
  }
  //[500] internal server error
  static internalError(message,err) {
     console.error(err);
    return new ApiError(500, `Internal Server Error: ${message}`);
  }
}

module.exports = ApiError;