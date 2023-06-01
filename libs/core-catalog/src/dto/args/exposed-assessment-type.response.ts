import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class ExposedAssessmentType {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, example: "assessment_type_1" })
  assessmentTypeCode: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, example: "Assessment Type 1" })
  assessmentTypeName: string;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({ type: Boolean, example: true })
  isActive: boolean;
}
