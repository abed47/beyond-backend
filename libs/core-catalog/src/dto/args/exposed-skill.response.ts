import { Exclude } from "class-transformer";
import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class ExposedSkill {
  @IsString()
  @IsNotEmpty()
  skillCode: string;

  @IsString()
  @IsNotEmpty()
  skillName: string;

  @IsBoolean()
  @IsNotEmpty()
  isActive: boolean;
}
