import { ApiProperty } from "@nestjs/swagger";
import { Exclude } from "class-transformer";
import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class ExposedSkill {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, example: "java_spring_boot" })
  skillCode: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String, example: "Java Spring Boot" })
  skillName: string;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({ type: Boolean, example: true })
  isActive: boolean;
}
