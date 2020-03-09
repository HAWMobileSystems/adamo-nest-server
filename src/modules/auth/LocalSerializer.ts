@Injectable()
export class LocalSerializer extends PassportSerializer {
  constructor(
    private readonly authService: AuthService,
    private readonly userRepository: UserRepository,
  ) {
    super();
  }

  serializeUser(user: User, done: CallableFunction) {
    done(null, user.id);
  }

  async deserializeUser(userId: string, done: CallableFunction) {
    return await this.userRepository.findOneOrFail({ id: Number(userId) })
      .then(user => done(null, user))
      .catch(error => done(error));
  }
}