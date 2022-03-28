
const NotfoundException = use('App/Exceptions/NotfoundException');

class ProjectService{
    verifyProject(project){
        // verify project is exist or not
        if(!project){
            throw new NotfoundException();
        }
    }
}

module.exports = new ProjectService();