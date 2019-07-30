import { createParamDecorator, Logger } from '@nestjs/common';

export const AuthUser = createParamDecorator((_data, request) => {
    Logger.log("AuthUser ",request)
    return request.user
    });
