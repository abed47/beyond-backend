import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { CoreCatalogService } from "./core-catalog.service";
import {
  CreateBusinessDomainInput,
  CreateSkillInput,
  UpdateBusinessDomainInput,
  UpdateSkillInput,
} from "./dto/input";

@Controller("business-domains")
export class CoreCatalogController {
  constructor(private catalogService: CoreCatalogService) {}

  @Get("")
  async getAllBusinessDomains() {
    return this.catalogService.getAllBusinessDomains();
  }

  @Get(":code")
  async getBusinessDomain(@Param("code") code: string) {
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
  async getSkills(@Param("code") code: string) {
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
}
