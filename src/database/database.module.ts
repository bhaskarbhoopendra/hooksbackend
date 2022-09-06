import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from 'src/users/users.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'hook',
      entities: [User],
      synchronize: true,
    }),
    // TypeOrmModule.forRootAsync({
    //   imports: [ConfigModule],
    //   inject: [ConfigService],
    //   useFactory: async (
    //     configService: ConfigService,
    //   ): Promise<TypeOrmModuleOptions> => ({
    //     type: 'mysql',
    //     host: configService.get('DB_HOST'),
    //     port: configService.get('SQL_PORT'),
    //     username: configService.get('SQL_USERNAME'),
    //     password: configService.get('SQL_PASSWORD'),
    //     database: configService.get('DB_NAME'),
    //     entities: [__dirname + '/../**/*.entity{.ts, .js}'],
    //     synchronize: false,
    //   }),
    // }),
  ],
})
export class DatabaseModule {}
