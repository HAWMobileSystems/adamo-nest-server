'use strict';
import { Controller, Get } from '@nestjs/common';
import { ClientProxy, Client, Transport, MessagePattern } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { ApiUseTags } from '@nestjs/swagger';
import { ModelService } from './model.service';

@Controller('models')
@ApiUseTags('models')
export class ModelController {

    constructor(private modelService: ModelService){}
    @Get()
    listModels() {
        return this.modelService.list();
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


    // create 
    // delete
    // usage
    // all 
}
