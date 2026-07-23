import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
  MaxLength,
  Matches,
} from 'class-validator';

//add message after
//completed should be optional

export class createTaskDto {
  @IsString({ message: 'Title must be a string' })
  @IsNotEmpty({ message: 'Title is required' })
  @MinLength(3, { message: 'Title must have at least 3 characters' })
  @MaxLength(50, { message: 'Title must have at most 50 characters' })
  @Matches(/^[a-zA-ZÀ-ÿ0-9\s]+$/, {
    message: 'Title must contain only letters, numbers and spaces',
  })
  title!: string;

  @IsString({ message: 'Description must be a string' })
  @IsOptional()
  @MaxLength(200, { message: 'Description must have at most 200 characters' })
  @Matches(/^[a-zA-ZÀ-ÿ0-9\s]*$/, {
    message: 'Description must contain only valid characters',
  })
  description!: string;

  @IsOptional()
  @IsBoolean({ message: 'Completed must be a boolean value' })
  completed!: boolean;
}

export class updateTaskDto {
  @IsString({ message: 'Title must be a string' })
  @IsOptional()
  @IsNotEmpty({ message: 'Title is required' })
  @MinLength(3, { message: 'Title must have at least 3 characters' })
  @MaxLength(50, { message: 'Title must have at most 50 characters' })
  @Matches(/^[a-zA-ZÀ-ÿ0-9\s]+$/, {
    message: 'Title must contain only letters, numbers and spaces',
  })
  title?: string;

  @IsString()
  @IsOptional()
  @MaxLength(200, { message: 'Description must have at most 200 characters' })
  @Matches(/^[a-zA-ZÀ-ÿ0-9\s]*$/, {
    message: 'Description must contain only valid characters',
  })
  description?: string;

  @IsBoolean()
  @IsOptional()
  completed?: boolean;
}
