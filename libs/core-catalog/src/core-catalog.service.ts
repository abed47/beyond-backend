import { InjectRepository } from "@mikro-orm/nestjs";
import { Injectable } from "@nestjs/common";
import {
  AssessmentTypeEntity,
  BusinessDomainEntity,
  SkillEntity,
} from "./entities";
import { EntityRepository } from "@mikro-orm/postgresql";

@Injectable()
export class CoreCatalogService {
  constructor(
    @InjectRepository(BusinessDomainEntity)
    private businessDomainRepository: EntityRepository<BusinessDomainEntity>,
    @InjectRepository(SkillEntity)
    private skillRepository: EntityRepository<SkillEntity>,
    @InjectRepository(AssessmentTypeEntity)
    private assessmentTypeRepository: EntityRepository<AssessmentTypeEntity>,
  ) {}

  public async getAllBusinessDomains() {
    const domains = await this.businessDomainRepository.find({});
    return domains;
  }
}
