import { Injectable } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport";
import { AuthService } from "./auth.service";
import { UserRepository } from "modules/user/user.repository";
import { User } from "aws-sdk/clients/appstream";

@Injectable()
export class LocalSerializer extends PassportSerializer {
  constructor(
    private readonly authService: AuthService,
    private readonly userRepository: UserRepository,
  ) {
    super();
  }

  serializeUser(user: User, done: CallableFunction) {
    // done(null, user.id);
  }

  async deserializeUser(userId: string, done: CallableFunction) {
    // return await this.userRepository.findOneOrFail({ id: Number(userId) })
    //   .then(user => done(null, user))
    //   .catch(error => done(error));
  }
}