import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class UpdateBusinessDomainInput {
  @IsString({})
  @IsNotEmpty({})
  businessDomainName: string;

  @IsBoolean()
  @IsNotEmpty({})
  isActive: boolean;
}
