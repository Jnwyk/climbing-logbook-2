import { Controller, Get } from '@nestjs/common';
import { RoutesService } from './routes.service';

@Controller('routes')
export class RoutesController {
    constructor(private routesService: RoutesService) {}

    @Get()
    getAllRoutes(){
        return this.routesService.getAllRoutes();
    }
}
