import { Property } from "@mikro-orm/core";

export class BaseEntity {
  @Property({ nullable: false, type: "timestamp" })
  createdDate: Date = new Date();

  @Property({ nullable: false, type: "string" })
  createdBy = "system";

  @Property({ nullable: true, type: "time" })
  updatedDate: Date;

  @Property({ nullable: true, type: "string" })
  updatedBy: string;
}
