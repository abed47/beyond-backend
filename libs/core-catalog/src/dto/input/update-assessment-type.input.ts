import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class UpdateAssessmentTypeInput {
  @IsString()
  @IsNotEmpty()
  assessmentTypeName: string;

  @IsBoolean()
  @IsNotEmpty()
  isActive: boolean;
}
