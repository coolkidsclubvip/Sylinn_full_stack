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

  //[401]
  static denyAccess(msg) {
    return new ApiError(401, `Access Denied: ${msg}`);
  }

  //[403]
  static forbidden(msg) {
    return new ApiError(403, `Access Denied: ${msg}`);
  }
  //[404] not found
  static notFound() {
    return new ApiError(404, `Resource Not Found`);
  }

  //[413] entity too large
  static tooLarge(msg) {
    return new ApiError(413, `Upload failed: ${msg}`);
  }

  //[422] unprocessable entity
  static cannotProcess(msg) {
    return new ApiError(422, `Upload failed: ${msg}`);
  }

  //[500] internal server error
  static internalError(msg, err) {
    console.error(err);
    return new ApiError(500, `Internal Server Error: ${msg}`);
  }
}

module.exports = ApiError;