import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class ExposedBusinessDomain {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: "web_development" })
  businessDomainCode: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: "Web Development" })
  businessDomainName: string;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({ example: true })
  isActive: boolean;
}
