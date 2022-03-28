const InvalidAccessException = use('App/Exceptions/InvalidAccessException');

class AuthorizationService{
    verifyPermission(ressource, user){
        // check auth not logged in
        if(ressource.user_id !== user.id){
            throw new InvalidAccessException();
        }
    }
        
}

module.exports = new AuthorizationService();