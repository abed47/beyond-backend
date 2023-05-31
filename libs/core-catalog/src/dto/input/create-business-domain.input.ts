import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CreateBusinessDomainInput {
  @IsString({})
  @IsNotEmpty({})
  businessDomainName: string;

  @IsBoolean()
  @IsNotEmpty({})
  isActive: boolean;
}
