import { Body, Controller, Param, Get, Post, Patch, Delete } from '@nestjs/common';
import { RoutesService } from './routes.service';
import { Prisma } from '@prisma/client';

@Controller('routes')
export class RoutesController {
    constructor(private routesService: RoutesService) {}

    @Get()
    getAllRoutes(){
        return this.routesService.getAllRoutes();
    }

    @Get('/:id')
    getOneRoute(@Param('id') id: string){
        return this.routesService.getOneRoute(Number(id));
    }

    @Post()
    createRoute(@Body() createRouteDto: Prisma.routeCreateInput){
        return this.routesService.createRoute(createRouteDto);
    }

    @Patch('/:id')
    updateRoute(@Param('id') id: string, @Body() updateRouteDto: Prisma.routeUpdateInput){
        return this.routesService.updateRoute(Number(id), updateRouteDto);
    }

    @Delete('/:id')
    deleteRoute(@Param('id') id: string){
        return this.routesService.deleteRoute(Number(id));
    }
}
