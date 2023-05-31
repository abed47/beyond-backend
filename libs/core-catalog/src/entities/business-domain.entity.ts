import { BaseEntity } from "@app/common/entities";
import { Entity, Property } from "@mikro-orm/core";

@Entity({ tableName: "business_domain" })
export class BusinessDomainEntity extends BaseEntity {
  @Property({ autoincrement: true, primary: true, type: "integer" })
  idBusinessDomain: number;

  @Property({ type: "varchar" })
  businessDomainCode: string;

  @Property({ type: "varchar" })
  businessDomainName: string;

  @Property({ type: "boolean" })
  isActive: boolean;
}
