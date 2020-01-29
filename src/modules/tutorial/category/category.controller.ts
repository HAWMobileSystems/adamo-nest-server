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
import { CategoryEntity } from './category.entity';

@Controller('category')
@ApiUseTags('category')
@ApiBearerAuth()
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) {}
    /**
     * 
     
    @Get()
    listRoles() {
        return this.categoryService.find();
    }

     /**
     * We use this also for password?
     * 
     * //param category_id 
     * //param userData 
     
    @Put(':id/update')
    async update(@Param('id') category_id, @Body() introData: CategoryEntity): Promise<any> {
        // userData.id = Number(id);
        // Set the roleData.id because it is missing in Data from Client?!
        introData.id = category_id;
        console.log('Update #' + introData.category_id)
        return this.categoryService.update(introData);
    }  

    /**
     * 
     * //param entity 
     
    @Post()
    create(@Body() entity: CategoryEntity) {
        this.categoryService.create(entity);
    }

    @Delete(':id/delete')
    async delete(@Param('category_id') id): Promise<any> {
      return this.categoryService.delete(id);
      // Maybe deleting all role entries in Permissions with this role and set them back to Default ist an valid option? TODO
    }  
    */
}