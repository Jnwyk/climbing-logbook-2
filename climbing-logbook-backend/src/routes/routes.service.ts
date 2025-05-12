import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RoutesService {
    constructor(private readonly databaseService: PrismaService) {}
    
    async getAllRoutes(){
        return this.databaseService.route.findMany();
    }

    async createRoute(createRouteDto: Prisma.routeCreateInput){
        return this.databaseService.route.create({
            data: createRouteDto
        })
    }

    async getOneRoute(routeId: number){
        return this.databaseService.route.findUnique({
            where: {
                id: routeId
            }
        })
    }

    async updateRoute(routeId: number, updateRouteDto: Prisma.routeUpdateInput){
        return this.databaseService.route.update({
            where: {
                id: routeId
            },
            data: updateRouteDto
        })
    }

    async deleteRoute(routeId: number){
        return this.databaseService.route.delete({
            where: {
                id: routeId
            }
        })
    }
}
