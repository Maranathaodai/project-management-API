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
import { CreateProjectDto } from './dto/create-project.dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto/update-project.dto';

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
    create(@Body() createProjectDto: CreateProjectDto) { 
        return this.projectsService.create(createProjectDto);
    }

   @Patch(':id')
   update(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto){
    return this.projectsService.update(id, updateProjectDto);
   }                                                                        
   @Delete(':id')
   remove(@Param('id')id: string){
    return this.projectsService.remove(id);
   }
}
