import { Controller, Get } from "@nestjs/common";
import { CoreCatalogService } from "./core-catalog.service";

@Controller("business-domains")
export class CoreCatalogController {
  constructor(private catalogService: CoreCatalogService) {}

  @Get("")
  async getAllBusinessDomains() {
    return this.catalogService.getAllBusinessDomains();
  }
}
