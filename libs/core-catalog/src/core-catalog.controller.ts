import { Controller, Get, Param } from "@nestjs/common";
import { CoreCatalogService } from "./core-catalog.service";

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
}
