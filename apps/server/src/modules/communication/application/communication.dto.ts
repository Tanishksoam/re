import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class CommunicationCreateDto {
  @IsString()
  @IsNotEmpty()
  message: string

  @IsString()
  @IsNotEmpty()
  timestamp: string

  @IsString()
  @IsOptional()
  senderId?: string

  @IsString()
  @IsOptional()
  receiverId?: string

  @IsString()
  @IsOptional()
  dateCreated?: string

  @IsString()
  @IsOptional()
  dateDeleted?: string

  @IsString()
  @IsOptional()
  dateUpdated?: string
}

export class CommunicationUpdateDto {
  @IsString()
  @IsOptional()
  message?: string

  @IsString()
  @IsOptional()
  timestamp?: string

  @IsString()
  @IsOptional()
  senderId?: string

  @IsString()
  @IsOptional()
  receiverId?: string

  @IsString()
  @IsOptional()
  dateCreated?: string

  @IsString()
  @IsOptional()
  dateDeleted?: string

  @IsString()
  @IsOptional()
  dateUpdated?: string
}
