import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CreateAssessmentTypeInput {
  @IsString()
  @IsNotEmpty()
  assessmentTypeName: string;

  @IsBoolean()
  @IsNotEmpty()
  isActive: boolean;
}
