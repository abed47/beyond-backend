import { Entity, Property } from "@mikro-orm/core";

@Entity({ tableName: "business_domain" })
export class BusinessDomainEntity {
  @Property({ autoincrement: true, primary: true, type: "integer" })
  idBusinessDomain: number;

  @Property({ type: "varchar" })
  businessDomainCode: string;

  @Property({ type: "varchar" })
  businessDomainName: string;

  @Property({ type: "boolean" })
  isActive: boolean;
}
