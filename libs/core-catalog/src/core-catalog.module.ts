import { Module } from "@nestjs/common";
import { CoreCatalogService } from "./core-catalog.service";
import { CoreCatalogController } from "./core-catalog.controller";
import { MikroOrmModule } from "@mikro-orm/nestjs";
import {
  AssessmentTypeEntity,
  BusinessDomainEntity,
  SkillEntity,
} from "./entities";

@Module({
  imports: [
    MikroOrmModule.forFeature([
      AssessmentTypeEntity,
      BusinessDomainEntity,
      SkillEntity,
    ]),
  ],
  providers: [CoreCatalogService],
  exports: [CoreCatalogService],
  controllers: [CoreCatalogController],
})
export class CoreCatalogModule {}
