import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CoreCatalogService } from "./core-catalog.service";
import { CreateBusinessDomainInput } from "./dto/input";

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
}
