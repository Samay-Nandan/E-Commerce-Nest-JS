import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { JwtConfig, TypeOrmConfig } from '@src/config';
import { RoutesMiddleware } from '@src/middleware';
import { ProductModule } from '@product/module';
import { UserModule } from '@user/module';

@Module({
  imports: [
    TypeOrmModule.forRoot(TypeOrmConfig),
    JwtModule.register(JwtConfig),
    ProductModule,
    UserModule,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RoutesMiddleware).forRoutes('*');
  }
}
