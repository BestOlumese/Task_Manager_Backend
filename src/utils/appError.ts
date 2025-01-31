import {ErrorCodeEnum, ErrorCodeEnumTypes} from "../enum/error-code.enum";
import {HTTPSTATUS, HttpStatusCodeType} from "../config/http.config";

export class AppError extends Error {
    public statusCode: HttpStatusCodeType;
    public errorCode?: ErrorCodeEnumTypes;

    constructor(
        message: string,
        statusCode = HTTPSTATUS.INTERNAL_SERVER_ERROR,
        errorCode: ErrorCodeEnumTypes
    ) {
        super(message);
        this.statusCode = statusCode;
        this.errorCode = errorCode;
        Error.captureStackTrace(this, this.constructor);
    }
}

export class HttpException extends AppError {
    constructor(
        message = "Http Exception Error",
        statusCode: HttpStatusCodeType,
        errorCode: ErrorCodeEnumTypes
    ) {
        super(message, statusCode, errorCode);
    }
}

export class InternalServerException extends AppError {
    constructor(
        message = "Internal Server Error",
        errorCode?: ErrorCodeEnumTypes
    ) {
        super(
            message,
            HTTPSTATUS.INTERNAL_SERVER_ERROR,
            errorCode || ErrorCodeEnum.INTERNAL_SERVER_ERROR
        );
    }
}

export class NotFoundException extends AppError {
    constructor(
        message = "Resource not found",
        errorCode?: ErrorCodeEnumTypes
    ) {
        super(
            message,
            HTTPSTATUS.NOT_FOUND,
            errorCode || ErrorCodeEnum.RESOURCE_NOT_FOUND
        );
    }
}

export class BadRequestException extends AppError {
    constructor(
        message = "Bad Request",
        errorCode?: ErrorCodeEnumTypes
    ) {
        super(
            message,
            HTTPSTATUS.BAD_REQUEST,
            errorCode || ErrorCodeEnum.VALIDATION_ERROR
        );
    }
}

export class UnauthorizedException extends AppError {
    constructor(
        message = "Unauthorized Access",
        errorCode?: ErrorCodeEnumTypes
    ) {
        super(
            message,
            HTTPSTATUS.UNAUTHORIZED,
            errorCode || ErrorCodeEnum.ACCESS_UNAUTHORIZED
        );
    }
}