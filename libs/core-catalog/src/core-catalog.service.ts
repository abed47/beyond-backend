import { InjectRepository } from "@mikro-orm/nestjs";
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import {
  AssessmentTypeEntity,
  BusinessDomainEntity,
  SkillEntity,
} from "./entities";
import { EntityManager, EntityRepository } from "@mikro-orm/postgresql";
import { serialize } from "@mikro-orm/core";
import {
  CreateBusinessDomainInput,
  CreateSkillInput,
  UpdateBusinessDomainInput,
  UpdateSkillInput,
} from "./dto/input";
import { ExposedBusinessDomain, ExposedSkill } from "./dto/args";

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
    return serialize(domains, { exclude: ["idBusinessDomain"] });
  }

  public async createBusinessDomain(
    input: CreateBusinessDomainInput,
  ): Promise<ExposedBusinessDomain> {
    try {
      const code = input.businessDomainName
        .toLowerCase()
        .trim()
        .replace(/\ /gi, "_");
      const businessDomain = this.businessDomainRepository.create({
        businessDomainCode: code,
        businessDomainName: input.businessDomainName,
        createdDate: new Date(),
        isActive: input.isActive,
      });
      await this.em.persistAndFlush(businessDomain);
      return {
        businessDomainCode: code,
        businessDomainName: input.businessDomainName,
        isActive: input.isActive,
      };
    } catch (err) {
      throw new BadRequestException(err?.message, err);
    }
  }

  public async updateBusinessDomain(
    input: UpdateBusinessDomainInput,
    code: string,
  ): Promise<ExposedBusinessDomain> {
    try {
      const businessDomain = await this.businessDomainRepository.findOne({
        businessDomainCode: code,
      });
      businessDomain.businessDomainName = input.businessDomainName;
      businessDomain.isActive = input.isActive;
      businessDomain.updatedDate = new Date();
      await this.em.persistAndFlush(businessDomain);
      return serialize(businessDomain, {
        exclude: [
          "createdBy",
          "createdDate",
          "updatedBy",
          "updatedDate",
          "idBusinessDomain",
        ],
      });
      // return {
      //   businessDomainCode: code,
      //   businessDomainName: input.businessDomainName,
      //   isActive: input.isActive,
      // };
    } catch (err) {
      throw new BadRequestException(err?.message, err);
    }
  }

  public async getSkills(code: string) {
    const businessDomain = await this.businessDomainRepository.findOne({
      businessDomainCode: code,
    });

    if (!businessDomain) {
      throw new NotFoundException("Business domain does not exist");
    }

    const skills = await this.skillRepository.find(
      {
        refIdBusinessDomain: businessDomain.idBusinessDomain,
      },
      {
        fields: ["skillCode", "skillName", "isActive"],
      },
    );
    return serialize(skills, { exclude: ["idSkill"] });
  }

  public async getSkill(code: string, skillCode: string) {
    const businessDomain = await this.businessDomainRepository.findOne({
      businessDomainCode: code,
    });

    if (!businessDomain) {
      throw new NotFoundException("Business domain does not exist");
    }

    const skills = await this.skillRepository.findOne(
      {
        refIdBusinessDomain: businessDomain.idBusinessDomain,
        skillCode,
      },
      {
        fields: ["skillCode", "skillName", "isActive"],
      },
    );
    return serialize(skills, { exclude: ["idSkill"] });
  }

  public async createSkill(
    input: CreateSkillInput,
    code: string,
  ): Promise<ExposedSkill> {
    try {
      const businessDomain = await this.businessDomainRepository.findOne({
        businessDomainCode: code,
      });

      if (!businessDomain) {
        throw new NotFoundException("Business domain does not exist");
      }
      const skillCode = input.skillName
        .toLowerCase()
        .trim()
        .replace(/\ /gi, "_");
      const skill = this.skillRepository.create({
        skillCode,
        skillName: input.skillName,
        createdDate: new Date(),
        isActive: input.isActive,
        refIdBusinessDomain: businessDomain.idBusinessDomain,
      });
      await this.em.persistAndFlush(skill);
      return {
        skillCode,
        skillName: input.skillName,
        isActive: input.isActive,
      };
    } catch (err) {
      throw new BadRequestException(err?.message, err);
    }
  }

  public async updateSkill(
    input: UpdateSkillInput,
    code: string,
    skillCode: string,
  ): Promise<ExposedSkill> {
    try {
      const businessDomain = await this.businessDomainRepository.findOne({
        businessDomainCode: code,
      });

      if (!businessDomain) {
        throw new NotFoundException("Business domain does not exist");
      }

      const skill = await this.skillRepository.findOne({
        skillCode: skillCode,
      });
      skill.skillName = input.skillName;
      skill.isActive = input.isActive;
      skill.updatedDate = new Date();
      await this.em.persistAndFlush(skill);
      return serialize(skill, {
        exclude: [
          "createdBy",
          "createdDate",
          "updatedBy",
          "updatedDate",
          "refIdBusinessDomain",
          "idSkill",
        ],
      });
    } catch (err) {
      throw new BadRequestException(err?.message, err);
    }
  }
}
