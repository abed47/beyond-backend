import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class UpdateSkillInput {
  @IsString({})
  @IsNotEmpty({})
  @ApiProperty({ example: "Php v8" })
  skillName: string;

  @IsBoolean()
  @IsNotEmpty({})
  @ApiProperty({ example: true })
  isActive: boolean;
}
