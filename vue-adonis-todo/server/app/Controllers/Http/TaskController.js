'use strict'
const Project = use('App/Models/Project')
const Task = use('App/Models/Task')
const AuthorizationService = use('App/Services/AuthorizationService')
const ProjectService = use('App/Services/ProjectService')

class TaskController {
    async create({auth, request, params}){
        const user = await auth.getUser();
        const { description } = request.all();
        const { id } = params;
        const project = await Project.find(id);
        ProjectService.verifyProject(project)
        AuthorizationService.verifyPermission(project, user)
        const task = new Task();
        task.fill({
            description,
        })
        await project.tasks().save(task);
        return task;
    }

    async index({auth, request, params}){
        const user = await auth.getUser();
        const { id } = params;
        const project = await Project.find(id);
        ProjectService.verifyProject(project)
        AuthorizationService.verifyPermission(project, user)
        const tasks = await project.tasks().fetch();
        return tasks;
    }
}

module.exports = TaskController
