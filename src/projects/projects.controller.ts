import { 
    Controller, 
    Get , 
    Param, 
    Post, 
    Body, 
    Patch,
     Delete,
     Query,
    } from '@nestjs/common';

@Controller('projects')
export class ProjectsController {
    @Get()
    findAll(@Query()paginationQuery){
        const { limit, offset} = paginationQuery;
    return 'This action returns all projects. Limit: ${limit}, offset: ${offset}';
}
   
    @Get(':id')
    findOne(@Param('id') id: string){
        return `This action returns a #${id} project`;
    }

    @Post()
    create(@Body() body){
        return body;
    }

   @Patch(':id')
   update(@Param('id') id: string, @Body() body){
    return `This action updates #${id} projects`;
   }                                                                        
   @Delete(':id')
   remove(@Param('id')id: string){
    return`This action removes #${id} projects`;
   }
}
