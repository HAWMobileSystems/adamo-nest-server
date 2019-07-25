'use strict';
import { Controller, Get, Put, Param, Body, Delete, Post } from '@nestjs/common';
import { ClientProxy, Client, Transport, MessagePattern } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { ApiUseTags } from '@nestjs/swagger';
import { PartModelEntity } from './partmodel.entity';
import { PartModelService } from './partmodel.service';

@Controller('partmodel')
@ApiUseTags('partmodel')
export class PartModelController {

    constructor(private partmodelService: PartModelService){}
    @Get()
    listModels() {
        return this.partmodelService.list();
    }
    @Client({ transport: Transport.TCP, options: { port: 4000 } })
    client: ClientProxy;

    @Get('sum')
    call(): Observable<number> {
        const pattern = { cmd: 'sum' };
        const data = [1, 2, 3, 4, 5];
        return this.client.send<number>(pattern, data);
    }

    @MessagePattern({ cmd: 'sum' })
    sum(data: number[]): number {
        return (data || []).reduce((a, b) => a + b);
    }


     /**
     * 
     */
    @Get()
    listRoles() {
        return this.partmodelService.list();
    }

     /**
     * We use this also for password?
     * 
     * @param id 
     * @param userData 
     */
    @Put(':id/update')
    async update(@Param('id') id, @Body() roleData: PartModelEntity): Promise<any> {
        // userData.id = Number(id);
        // Set the roleData.id because it is missing in Data from Client?!
        roleData.id = id;
        console.log('Update #' + roleData.id)
        return this.partmodelService.update(roleData);
    }  

    @Get(':id/usage')
    async usage(@Param('id') id) : Promise<any> {
        return await this.partmodelService.isUsedBy(id);
    }
    
/**
 * @api                 {post} /partmodel/create create
 * @apiDescription      Checks if post parameters modelid, partmodelid and version are set,
 *                      and creates a new partial model.
 * @apiName             create
 * @apiGroup            partmodel
 * @apiParam            {Int} modelid Mandatory modelid of a model
 * @apiParam            {Int} partmodelid Mandatory partmodelid of a partial model
 * @apiParam            {Int} version Mandatory version of a model
 * @apiSuccess          status Model created successfully as a partial model
 * @apiSuccessExample   Success-Response:
 *                      HTTP/1.1 200 OK
 *                      {status: 'Model created successfully as a partial model', success: true}
 * @apiError            error Something went wrong
 * @apiErrorExample     Error-Response:
 *                      HTTP/1.1 400 Failure
 *                      {status: 'Something went wrong', success: false}
 */    
    @Post()
    create(@Body() entity: PartModelEntity) {
        this.partmodelService.create(entity);
    }

    @Delete(':id/:version/delete')
    async delete(@Param('id') id, @Param('version') version): Promise<any> {
      return this.partmodelService.delete(id, version);
      // Maybe deleting all role entries in Permissions with this role and set them back to Default ist an valid option? TODO
    }  
}
