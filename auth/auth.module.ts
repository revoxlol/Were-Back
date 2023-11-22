// src/auth/auth.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { UserController } from './user.controller';
import { UserSchema } from './user.model';
import { UserService } from './user.service';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    
    PassportModule,
    JwtModule.register({
      secret:'fojpzéj"&213Hdçé"_rhUSHD9237A5RYh~#|JIOSdae',
      signOptions: { expiresIn: '1h' },
    }),
    
  ],
  controllers: [UserController],
  providers: [AuthService, UserService, LocalStrategy, JwtStrategy],
  exports: [JwtModule],
})
export class AuthModule {}
