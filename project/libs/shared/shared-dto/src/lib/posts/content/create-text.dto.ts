import {IsString, MaxLength, MinLength} from 'class-validator';
import {postMax, postMin} from '@project/shared/shared-consts'
import {Expose} from 'class-transformer';
import {ApiProperty} from "@nestjs/swagger";

export class CreateTextDto {
  @IsString()
  @MinLength(postMin.title)
  @MaxLength(postMax.title)
  @Expose()
  @ApiProperty({
    description: 'Title of the publication',
    example: 'лес валю torans@overlook.net',
  })
  title: string;

  @IsString()
  @MinLength(postMin.announcement)
  @MaxLength(postMax.announcement)
  @Expose()
  @ApiProperty({
    description: 'Abstract for publication',
    example: 'дровосек в зимнем лесу должен, должен torans@overlook.net',
  })
  announcement: string;

  @IsString()
  @MinLength(postMin.text)
  @MaxLength(postMax.text)
  @Expose()
  @ApiProperty({
    description: 'Text of the publication',
    example: 'Однажды, в студёную зимнюю пору, я из лесу вышел, и снова зашёл. Влез, неспеша, в чью-то тёплую нору...',
  })
  text: string;
}