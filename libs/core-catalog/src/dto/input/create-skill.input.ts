import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CreateSkillInput {
  @IsString({})
  @IsNotEmpty({})
  skillName: string;

  @IsBoolean()
  @IsNotEmpty({})
  isActive: boolean;
}
