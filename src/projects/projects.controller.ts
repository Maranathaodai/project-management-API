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
import { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {
    constructor(private readonly projectsService: ProjectsService){}
    @Get()
    findAll(@Query()paginationQuery){
       // const { limit, offset} = paginationQuery;
       return this.projectsService.findAll();
}
   
    @Get(':id')
    findOne(@Param('id') id: string){
        return this.projectsService.findOne(id);
    }

    @Post()
    create(@Body() body){
        return this.projectsService.create(body);
    }

   @Patch(':id')
   update(@Param('id') id: string, @Body() body){
    return this.projectsService.update(id, body);
   }                                                                        
   @Delete(':id')
   remove(@Param('id')id: string){
    return this.projectsService.remove(id);
   }
}
