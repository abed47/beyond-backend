import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { CoreCatalogService } from "./core-catalog.service";
import {
  CreateAssessmentTypeInput,
  CreateBusinessDomainInput,
  CreateSkillInput,
  UpdateAssessmentTypeInput,
  UpdateBusinessDomainInput,
  UpdateSkillInput,
} from "./dto/input";
import { ExposedBusinessDomain, ExposedSkill } from "./dto/args";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("Core Catalog")
@Controller("business-domains")
export class CoreCatalogController {
  constructor(private catalogService: CoreCatalogService) {}

  @Get("")
  async getAllBusinessDomains() {
    return this.catalogService.getAllBusinessDomains();
  }

  @Get(":code")
  async getBusinessDomain(
    @Param("code") code: string,
  ): Promise<ExposedBusinessDomain> {
    return this.catalogService.getBusinessDomain(code);
  }

  @Post("")
  async createBusinessDomain(@Body() body: CreateBusinessDomainInput) {
    return this.catalogService.createBusinessDomain(body);
  }

  @Put(":code")
  async updateBusinessDomain(
    @Body() body: UpdateBusinessDomainInput,
    @Param("code") code: string,
  ) {
    return this.catalogService.updateBusinessDomain(body, code);
  }

  @Get(":code/skills")
  async getSkills(@Param("code") code: string): Promise<ExposedSkill[]> {
    return this.catalogService.getSkills(code);
  }

  @Get(":code/skills/:skill_code")
  async getSkill(
    @Param("code") code: string,
    @Param("skill_code") skillCode: string,
  ) {
    return this.catalogService.getSkill(code, skillCode);
  }

  @Post(":code/skills")
  async createSkill(
    @Body() body: CreateSkillInput,
    @Param("code") code: string,
  ) {
    return this.catalogService.createSkill(body, code);
  }

  @Put(":code/skills/:skill_code")
  async updateSkill(
    @Body() body: UpdateSkillInput,
    @Param("code") code: string,
    @Param("skill_code") skillCode: string,
  ) {
    return this.catalogService.updateSkill(body, code, skillCode);
  }

  @Get(":code/assessment-types")
  async getAssessmentTypes(@Param("code") code: string) {
    return this.catalogService.getAssessmentTypes(code);
  }

  @Get(":code/assessment-types/:type_code")
  async getAssessmentType(
    @Param("code") code: string,
    @Param("type_code") skillCode: string,
  ) {
    return this.catalogService.getAssessmentType(code, skillCode);
  }

  @Post(":code/assessment-types")
  async createAssessmentType(
    @Body() body: CreateAssessmentTypeInput,
    @Param("code") code: string,
  ) {
    return this.catalogService.createAssessmentType(body, code);
  }

  @Put(":code/assessment-types/:type_code")
  async updateAssessmentType(
    @Body() body: UpdateAssessmentTypeInput,
    @Param("code") code: string,
    @Param("type_code") skillCode: string,
  ) {
    return this.catalogService.updateAssessmentType(body, code, skillCode);
  }
}
