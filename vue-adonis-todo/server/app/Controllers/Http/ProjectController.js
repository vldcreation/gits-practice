'use strict'

const Projects = use('App/Models/Project')
const AuthorizationService = use('App/Services/AuthorizationService')
const ProjectService = use('App/Services/ProjectService')

class ProjectController {

  async index ({ auth }) {
    const user = await auth.getUser()
    const projects = await user.projects().fetch()
    return projects
  }

  /**
   * Render a form to be used for creating a new project.
   * GET projects/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ auth, request}) {
    const user = await auth.getUser()
    const {title} = request.all()
    const project = new Projects()
    project.fill({
      title,
    })
    await user.projects().save(project)
    return project

  }

  /**
   * Create/save a new project.
   * POST projects
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single project.
   * GET projects/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing project.
   * GET projects/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update project details.
   * PUT or PATCH projects/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ auth, params, request }) {
    const user = await auth.getUser()
    const project = await Projects.find(params.id)
    await ProjectService.verifyProject(project)
    await AuthorizationService.verifyPermission(project, user)
    project.merge(request.only(['title']))
    await project.save()
    return project
  }

  /**
   * Delete a project with id.
   * DELETE projects/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ auth, params, request }) {
    const user = await auth.getUser()
    const project = await Projects.find(params.id)
    await ProjectService.verifyProject(project)
    await AuthorizationService.verifyPermission(project, user)
    await project.delete()
    return project
  }
}

module.exports = ProjectController
