import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CreateBusinessDomainInput {
  @IsString({})
  @IsNotEmpty({})
  @ApiProperty({ example: "Technology" })
  businessDomainName: string;

  @IsBoolean()
  @IsNotEmpty({})
  @ApiProperty({ example: true })
  isActive: boolean;
}
