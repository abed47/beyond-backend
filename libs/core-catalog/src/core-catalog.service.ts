import { InjectRepository } from "@mikro-orm/nestjs";
import { Injectable, NotFoundException } from "@nestjs/common";
import {
  AssessmentTypeEntity,
  BusinessDomainEntity,
  SkillEntity,
} from "./entities";
import { EntityManager, EntityRepository } from "@mikro-orm/postgresql";
import { Filter, serialize } from "@mikro-orm/core";

@Injectable()
export class CoreCatalogService {
  constructor(
    @InjectRepository(BusinessDomainEntity)
    private businessDomainRepository: EntityRepository<BusinessDomainEntity>,
    @InjectRepository(SkillEntity)
    private skillRepository: EntityRepository<SkillEntity>,
    @InjectRepository(AssessmentTypeEntity)
    private assessmentTypeRepository: EntityRepository<AssessmentTypeEntity>,
    private em: EntityManager,
  ) {}

  public async getAllBusinessDomains() {
    const domains = await this.businessDomainRepository.find(
      {},
      {
        fields: ["businessDomainCode", "businessDomainName", "isActive"],
      },
    );
    return serialize(domains, { exclude: ["idBusinessDomain"] });
  }

  public async getBusinessDomain(code: string) {
    const domains = await this.em.findOne(
      BusinessDomainEntity,
      {
        businessDomainCode: code,
      },
      {
        fields: ["businessDomainCode", "businessDomainName", "isActive"],
        disableIdentityMap: true,
      },
    );
    if (!domains) throw new NotFoundException("Domain not found");
    return serialize(domains, { exclude: ["idBusinessDomain"] });]
  }
}
