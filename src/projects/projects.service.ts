import { Injectable } from '@nestjs/common';
import { Project } from './entities/project.entity';
@Injectable()
export class ProjectsService {
    private projects: Project[] = [
        {
            id: 1,
            name: 'School pharmacy website',
            category: 'health',
        },

    ];

    findAll(){
        return this.projects;
    }
    findOne(id: string){
        return this.projects.find(item => item.id ===+id);
    }
    create(createProjectDto: any){
        this.projects.push(createProjectDto);
    }
    update(id: string, updateProjectDto: any){
        const existingProject = this.findOne(id);
        if (existingProject){

        }
    }
    remove(id: string){
        const projectIndex = this.projects.findIndex(item => item.id === +id);
        if (projectIndex >= 0){
            this.projects.splice(projectIndex, 1);
        }
    }
}