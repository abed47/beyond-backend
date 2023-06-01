import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class UpdateBusinessDomainInput {
  @IsString({})
  @IsNotEmpty({})
  @ApiProperty({ example: "upadted name 3" })
  businessDomainName: string;

  @IsBoolean()
  @IsNotEmpty({})
  @ApiProperty({ example: true })
  isActive: boolean;
}
