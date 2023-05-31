import { Entity, Property } from "@mikro-orm/core";

@Entity({ tableName: "assessment_type" })
export class AssessmentTypeEntity {
  @Property({ primary: true, type: "integer", autoincrement: true })
  idAssessmentType: number;

  @Property({ type: "varchar" })
  assessmentTypeCode: string;

  @Property({ type: "varchar" })
  assessmentTypeName: string;

  @Property({ type: "boolean" })
  isActive: boolean;

  @Property({ type: "integer" })
  refIdBusinessDomain: number;
}
