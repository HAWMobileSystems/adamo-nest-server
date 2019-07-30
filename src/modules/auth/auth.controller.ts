import { FileInterceptor } from '@nestjs/platform-express';
import {
    Controller,
    Post,
    Body,
    HttpCode,
    HttpStatus,
    Get,
    Logger,
    UseInterceptors,
    UseGuards,
    UploadedFile,
    Req,
    Res,
} from '@nestjs/common';
import {
    ApiOkResponse,
    ApiUseTags,
    ApiBearerAuth,
    ApiImplicitFile,
} from '@nestjs/swagger';

import { UserLoginDto } from './dto/UserLoginDto';
import { UserRegisterDto } from './dto/UserRegisterDto';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';
import { UserDto } from '../user/dto/UserDto';
import { LoginPayloadDto } from './dto/LoginPayloadDto';
import { AuthUser } from '../../decorators/auth-user.decorator';
import { UserEntity } from '../user/user.entity';
import { AuthGuard } from '../../guards/auth.guard';
import { AuthUserInterceptor } from '../../interceptors/auth-user-interceptor.service';
import { IFile } from '../../interfaces/IFile';
import { request } from 'http';


/**
 * The auth controller provides no logout functionality because we use? token-based authentication. 
 * Therefore we ensure deleting the token on client-side to be no longer able to login
 */
@Controller('auth')
@ApiUseTags('auth')
export class AuthController {
    constructor(
        public readonly userService: UserService,
        public readonly authService: AuthService,
    ) {}

    /**
 * @api                 {post} /authenticate authenticate
 * @apiDescription      Checks if post parameters email and password are set,
 *                      checks if email is in database,
 *                      checks if user already has a session,
 *                      checks if the password matches with the stored hash
 *                      and finally sets session.
 * @apiName             authenticate
 * @apiGroup            session
 * @apiParam            {String} email Mandatory email of a user
 * @apiParam            {String} password Mandatory password of a user
 * @apiSuccess          message success 
 * @apiSuccessExample   Success-Response:
 *                      HTTP/1.1 200 OK
 *                      {message: 'success', success: true, data: data, email: 'maxmuster@gmail.com'}
 * @apiError            error Something went wrong
 * @apiErrorExample     Error-Response:
 *                      HTTP/1.1 400 Failure
 *                      'Something happend'
 *                      HTTP/1.1 401 Failure
 *                      'User and password do not match'
 *                      HTTP/1.1 404 Failure
 *                      'User not found in the database'
 * */
    @Post('login')
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({
        type: LoginPayloadDto,
        description: 'User info with access token',
    })
    async userLogin(
        @Body() userLoginDto: UserLoginDto,
    ): Promise<LoginPayloadDto> {
        const userEntity = await this.authService.validateUser(userLoginDto);
        const [user, token] = await Promise.all([
            userEntity.toDto(),
            this.authService.createToken(userEntity),
        ]);
        return new LoginPayloadDto(user, token);
    }

    @Post('register')
    @HttpCode(HttpStatus.OK)
    @ApiOkResponse({ type: UserDto, description: 'Successfully Registered' })
    @ApiImplicitFile({ name: 'avatar', required: true })
    // @UseInterceptors(FileInterceptor('avatar'))
    async userRegister(
        @Body() userRegisterDto: UserRegisterDto,
        @UploadedFile() file: IFile,
    ): Promise<UserDto> {
        const createdUser = await this.userService.createUser(
            userRegisterDto,
            file,
        );

        return createdUser.toDto();
    }

    /**
 * @api                 {get} /login_status login_status
 * @apiDescription      Checks the login status of a user
 * @apiName             login_status
 * @apiGroup            session
 * @apiSuccess          message Logged in as [userprofile]
 * @apiSuccessExample   Success-Response:
 *                      HTTP/1.1 200 OK
 *                      {message: 'logged in as [Admin]', email, profile, permission, success: true, loggedIn: true}
 * @apiError            message Not logged in
 * @apiErrorExample     Error-Response:
 *                      HTTP/1.1 200 Failure
 *                      {message: 'not logged in', success: true, loggedIn: false}
 */
    // @Get('me')
    // @HttpCode(HttpStatus.OK)

    // // @UseGuards(AuthGuard('jwt'))
    // @UseGuards(AuthGuard)
    // // @UseInterceptors(AuthUserInterceptor)
    // // @ApiBearerAuth()
    // @ApiOkResponse({ type: UserDto, description: 'current user info' })
    // getCurrentUser() {
    // // getCurrentUser(@AuthUser() user: UserEntity, @Req() request) {
    //     // Logger.log(`User: ${user}, Request: ${request}`);
    //     return user.toDto();
    // }
}