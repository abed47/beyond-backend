import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class ExposedBusinessDomain {
  @IsString()
  @IsNotEmpty()
  businessDomainCode: string;

  @IsString()
  @IsNotEmpty()
  businessDomainName: string;

  @IsBoolean()
  @IsNotEmpty()
  isActive: boolean;
}
