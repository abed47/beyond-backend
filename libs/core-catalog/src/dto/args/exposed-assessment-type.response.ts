import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class ExposedAssessmentType {
  @IsString()
  @IsNotEmpty()
  assessmentTypeCode: string;

  @IsString()
  @IsNotEmpty()
  assessmentTypeName: string;

  @IsBoolean()
  @IsNotEmpty()
  isActive: boolean;
}
