'use strict';

import {
    Get,
    HttpCode,
    HttpStatus,
    Controller,
    Post,
    Body,
    Delete,
    Param,
    Put,
} from '@nestjs/common';
import { ApiBearerAuth, ApiUseTags } from '@nestjs/swagger';
import { CategoryService } from './category.service';

@Controller('category')
@ApiUseTags('category')
@ApiBearerAuth()
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) {}
   
}