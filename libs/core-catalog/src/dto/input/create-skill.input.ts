import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CreateSkillInput {
  @IsString({})
  @IsNotEmpty({})
  @ApiProperty({ example: "Java Spring Boot" })
  skillName: string;

  @IsBoolean()
  @IsNotEmpty({})
  @ApiProperty({ example: true })
  isActive: boolean;
}
