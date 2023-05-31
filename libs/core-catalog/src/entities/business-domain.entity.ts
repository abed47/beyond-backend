import { BaseEntity } from "@app/common/entities";
import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity({ tableName: "business_domain" })
export class BusinessDomainEntity extends BaseEntity {
  // @Property({ type: "integer" })
  @PrimaryKey({ autoincrement: true })
  idBusinessDomain: number;

  @Property({ type: "varchar" })
  businessDomainCode: string;

  @Property({ type: "varchar" })
  businessDomainName: string;

  @Property({ type: "boolean" })
  isActive: boolean;
}
