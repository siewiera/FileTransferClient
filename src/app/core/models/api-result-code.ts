export enum ApiResultCode
{
    //Success
    DataSaved = 'DATA_SAVED',
    DataUpdated = 'DATA_UPDATED',
    DataDeleted = 'DATA_DELETED',
    FileUploaded = 'FILE_UPLOADED',


    //Errors
    InvalidCredentials = 'INVALID_CREDENTIALS',
    InsufficientPermissions = 'INSUFFICIENT_PERMISSIONS',
    SessionExpired = 'SESSION_EXPIRED',
    FileNotFound = 'FILE_NOT_FOUND',
    InternalError = 'INTERNAL_ERROR'
}
