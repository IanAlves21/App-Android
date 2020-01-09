module.exports = function (application) {
  application.post('/user/post', function (request, response) {
    application.backend.server.controllers.data.addUser(application, request, response);
  });

  application.get('/user/get', function (request, response) {
    application.backend.server.controllers.data.checkUser(application, request, response);
  });
}