function DataDAO(connection) {
  this._connection = connection;
}

DataDAO.prototype.checkUser = function (email, senha, callback) {
  this._connection.query("select * from user_app WHERE email = '" + email + "' AND senha = '" + senha + "'", callback);
};

DataDAO.prototype.addUser = function (params, callback) {
  this._connection.query('INSERT INTO user_app VALUES ($1,$2,$3,$4,$5)', [params.nome, params.email, params.senha, params.cpf, params.matricula], callback);
};

module.exports = function () {
  return DataDAO;
}
