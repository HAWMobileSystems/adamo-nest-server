import { Strategy } from 'passport-local';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly authService: AuthService,
  ) {
    super();
  }

  async validate(email: string, password: string, done: CallableFunction) {
    // add your custom login check here. and return the User object.

    return await this.authService.signIn(email, password)
      .then(user => {
        done(null, user);
      })
      .catch(error => done(error));
  }
}