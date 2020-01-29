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

import { IntroService } from './intro.service';
import { IntroEntity } from './intro.entity';

@Controller('intro')
@ApiUseTags('intro')
@ApiBearerAuth()
export class IntroController {
    constructor(private readonly introService: IntroService) {}
    /**
     * 
     */
    @Get('beginner')
    listBeginner() : Promise<any[]> {
        return this.introService.getCategory('Beginner');
    }
    
    @Get('advanced')
    listAdvanced() : Promise<any[]> {
        return this.introService.getCategory('Advanced');
    }

    @Get('professional')
    listProfessional() : Promise<any[]> {
        return this.introService.getCategory('Professional');
    }

    @Get("next/:id")
    listNext(@Param('id') id) : Promise<any> {
        return this.introService.getIntroById(id);
    }
    
    @Get('prev/:id')
    listPrev(@Param('id') id): Promise<any>{
        return this.introService.getPrevIntroByCurrentID(id);
    }
    @Get('firstByLvl/:id')
    getFirst(@Param('id') id): Promise<any>{
        return this.introService.getFirstIntroByLevel(id);
    }

    //@Get('randomByLeveL/:lvl')
    //getRandomByLvl(@Param('lvl') lvl): Promise<any>{
    //    return this.introService.getRandomByLvl(lvl);
   // }

    @Get('randomByLeveL/beginner')
    getRandomBeginner(): Promise<any>{
        return this.introService.getRandomByLvl('Beginner');
    }

     /**
     * We use this also for password?
     * 
     * //param id 
     * //param userData 
     */
    /**
    @Put(':id/update')
    async update(@Param('id') id, @Body() introData: IntroEntity): Promise<any> {
        // userData.id = Number(id);
        // Set the roleData.id because it is missing in Data from Client?!
        introData.id = id;
        console.log('Update #' + introData.id)
        return this.introService.update(introData);
    }  

    /**
     * 
     * //param entity 
     
    @Post()
    create(@Body() entity: IntroEntity) {
        this.introService.create(entity);
    }

    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return this.introService.delete(id);
      // Maybe deleting all role entries in Permissions with this role and set them back to Default ist an valid option? TODO
    }  
    */
}