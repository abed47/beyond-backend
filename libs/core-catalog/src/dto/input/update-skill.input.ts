import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class UpdateSkillInput {
  @IsString({})
  @IsNotEmpty({})
  skillName: string;

  @IsBoolean()
  @IsNotEmpty({})
  isActive: boolean;
}
