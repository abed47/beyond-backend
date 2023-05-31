import { Entity, Property } from "@mikro-orm/core";

@Entity({ tableName: "skill" })
export class SkillEntity {
  @Property({ primary: true, autoincrement: true, type: "integer" })
  idSkill: number;

  @Property({ type: "integer" })
  refIdBusinessDomain: number;

  @Property({ type: "varchar", unique: true })
  skillCode: string;

  @Property({ type: "varchar" })
  skillName: string;

  @Property({ type: "boolean" })
  isActive: boolean;
}