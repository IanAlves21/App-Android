module.exports.addUser = function (application, request, response) {
    if (request.method == 'POST') {
        var connection = application.backend.config.dbConnection;
        var dataModel = new application.backend.server.models.dataDAO(connection);

        var params = {
            nome: request.query.nome,
            email: request.query.email,
            senha: request.query.senha,
            cpf: request.query.cpf,
            matricula: request.query.matricula,
        }

        dataModel.addUser(params, function (error, result) {
            if (result)
                response.send({ success: true, response: result.rows });
            else
                console.log(error);
        });
    }
}

module.exports.checkUser = function (application, request, response) {
    if (request.method == 'GET') {
        var connection = application.backend.config.dbConnection;
        var dataModel = new application.backend.server.models.dataDAO(connection);

        var email = request.query.email;
        var senha = request.query.senha;

        console.log(email, senha);
        dataModel.checkUser(email, senha, function (error, result) {
            if (result)
                response.send({ success: true, response: result.rows });
            else
                response.send({ success: true, response: false });

        });
    }
}