import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { MikroOrmModule, MikroOrmOptionsFactory } from "@mikro-orm/nestjs";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { PostgreSqlDriver } from "@mikro-orm/postgresql";
import { entities } from "./mikro-orm.config";
import { CoreCatalogModule } from "@app/core-catalog";

@Module({
  imports: [
    ConfigModule.forRoot(),
    MikroOrmModule.forRootAsync({
      useFactory: async (cnf: ConfigService) => {
        return {
          entities: [...entities],
          dbName: cnf.get("DB_NAME"),
          host: cnf.get("DB_HOST"),
          user: cnf.get("DB_USER"),
          password: cnf.get("DB_PASSWORD"),
          driver: PostgreSqlDriver,
        };
      },
      imports: [ConfigModule],
      inject: [ConfigService],
    }),
    CoreCatalogModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
