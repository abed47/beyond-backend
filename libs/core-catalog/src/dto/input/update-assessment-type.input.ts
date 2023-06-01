import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class UpdateAssessmentTypeInput {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: "Updated name" })
  assessmentTypeName: string;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({ example: true })
  isActive: boolean;
}
