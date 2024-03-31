import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto, LoginDto } from '@user/dto';
import { UserEntity } from '@user/entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private readonly jwtService: JwtService,
  ) {}

  async register(registerUser: RegisterDto) {
    return await this.userRepository.save(
      this.userRepository.create(registerUser),
    );
  }

  async login(loginUser: LoginDto) {
    const { email, password } = loginUser;
    const user = await this.userRepository.findOne({ where: { email } });
    if (!user) throw new Error(`User not found.`);
    if (!user.comparePassword(password)) throw new Error(`Invalid credentials`);
    return { token: this.jwtService.sign({ id: user.id }) };
  }
}
