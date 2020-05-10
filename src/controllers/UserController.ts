import { BaseController } from './BaseController';
import { JsonController, Get, Param } from 'routing-controllers';
import { PrismaClient } from '@prisma/client';

@JsonController('/users')
export class UserController extends BaseController {
    private prisma: PrismaClient;

    constructor() {
        super();
        this.prisma = new PrismaClient();
    }

    @Get()
    public index() {
        return { "data" : 'users controllers'};
    }
}