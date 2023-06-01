import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CreateAssessmentTypeInput {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: "Assessment 1" })
  assessmentTypeName: string;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({ example: true })
  isActive: boolean;
}
