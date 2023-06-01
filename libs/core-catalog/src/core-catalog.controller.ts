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
import {
  ExposedAssessmentType,
  ExposedBusinessDomain,
  ExposedSkill,
} from "./dto/args";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags("Core Catalog")
@Controller("business-domains")
export class CoreCatalogController {
  constructor(private catalogService: CoreCatalogService) {}

  @Get("")
  @ApiOperation({
    tags: ["Core Catalog", "Business Domain"],
    summary: "Get Business Domain List",
  })
  @ApiResponse({
    status: 200,
    description: "success",
    type: ExposedBusinessDomain,
    isArray: true,
  })
  async getAllBusinessDomains() {
    return this.catalogService.getAllBusinessDomains();
  }

  @Get(":code")
  @ApiOperation({
    tags: ["Core Catalog", "Business Domain"],
    summary: "Get Business Domain",
  })
  @ApiResponse({
    status: 200,
    description: "success",
    type: ExposedBusinessDomain,
    isArray: false,
  })
  async getBusinessDomain(
    @Param("code") code: string,
  ): Promise<ExposedBusinessDomain> {
    return this.catalogService.getBusinessDomain(code);
  }

  @Post("")
  @ApiOperation({
    tags: ["Core Catalog", "Business Domain"],
    summary: "Create Business Domain",
  })
  @ApiResponse({
    status: 201,
    description: "success",
    type: ExposedBusinessDomain,
    isArray: false,
  })
  async createBusinessDomain(@Body() body: CreateBusinessDomainInput) {
    return this.catalogService.createBusinessDomain(body);
  }

  @Put(":code")
  @ApiOperation({
    tags: ["Core Catalog", "Business Domain"],
    summary: "Update Business Domain",
  })
  @ApiResponse({
    status: 200,
    description: "success",
    type: ExposedBusinessDomain,
    isArray: false,
  })
  async updateBusinessDomain(
    @Body() body: UpdateBusinessDomainInput,
    @Param("code") code: string,
  ) {
    return this.catalogService.updateBusinessDomain(body, code);
  }

  @Get(":code/skills")
  @ApiOperation({
    tags: ["Core Catalog", "Skills"],
    summary: "Get Skill List",
  })
  @ApiResponse({
    status: 200,
    description: "success",
    type: ExposedSkill,
    isArray: true,
  })
  async getSkills(@Param("code") code: string): Promise<ExposedSkill[]> {
    return this.catalogService.getSkills(code);
  }

  @Get(":code/skills/:skill_code")
  @ApiOperation({
    tags: ["Core Catalog", "Skills"],
    summary: "Get Skill",
  })
  @ApiResponse({
    status: 200,
    description: "success",
    type: ExposedSkill,
    isArray: false,
  })
  async getSkill(
    @Param("code") code: string,
    @Param("skill_code") skillCode: string,
  ) {
    return this.catalogService.getSkill(code, skillCode);
  }

  @Post(":code/skills")
  @ApiOperation({
    tags: ["Core Catalog", "Skills"],
    summary: "Create Skill",
  })
  @ApiResponse({
    status: 201,
    description: "success",
    type: ExposedSkill,
    isArray: false,
  })
  async createSkill(
    @Body() body: CreateSkillInput,
    @Param("code") code: string,
  ) {
    return this.catalogService.createSkill(body, code);
  }

  @Put(":code/skills/:skill_code")
  @ApiOperation({
    tags: ["Core Catalog", "Skills"],
    summary: "Update Skill",
  })
  @ApiResponse({
    status: 200,
    description: "success",
    type: ExposedSkill,
    isArray: false,
  })
  async updateSkill(
    @Body() body: UpdateSkillInput,
    @Param("code") code: string,
    @Param("skill_code") skillCode: string,
  ) {
    return this.catalogService.updateSkill(body, code, skillCode);
  }

  @Get(":code/assessment-types")
  @ApiOperation({
    tags: ["Core Catalog", "Assessment Type"],
    summary: "Get Assessment Types",
  })
  @ApiResponse({
    status: 200,
    description: "success",
    type: ExposedAssessmentType,
    isArray: true,
  })
  async getAssessmentTypes(@Param("code") code: string) {
    return this.catalogService.getAssessmentTypes(code);
  }

  @Get(":code/assessment-types/:type_code")
  @ApiOperation({
    tags: ["Core Catalog", "Assessment Type"],
    summary: "Get Assessment Type",
  })
  @ApiResponse({
    status: 200,
    description: "success",
    type: ExposedAssessmentType,
    isArray: false,
  })
  async getAssessmentType(
    @Param("code") code: string,
    @Param("type_code") skillCode: string,
  ) {
    return this.catalogService.getAssessmentType(code, skillCode);
  }

  @Post(":code/assessment-types")
  @ApiOperation({
    tags: ["Core Catalog", "Assessment Type"],
    summary: "Create Assessment Type",
  })
  @ApiResponse({
    status: 201,
    description: "success",
    type: ExposedAssessmentType,
    isArray: false,
  })
  async createAssessmentType(
    @Body() body: CreateAssessmentTypeInput,
    @Param("code") code: string,
  ) {
    return this.catalogService.createAssessmentType(body, code);
  }

  @Put(":code/assessment-types/:type_code")
  @ApiOperation({
    tags: ["Core Catalog", "Assessment Type"],
    summary: "Update Assessment Type",
  })
  @ApiResponse({
    status: 200,
    description: "success",
    type: ExposedAssessmentType,
    isArray: false,
  })
  async updateAssessmentType(
    @Body() body: UpdateAssessmentTypeInput,
    @Param("code") code: string,
    @Param("type_code") skillCode: string,
  ) {
    return this.catalogService.updateAssessmentType(body, code, skillCode);
  }
}
