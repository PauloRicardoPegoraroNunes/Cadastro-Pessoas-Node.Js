const db = openDatabase("Cadasro", "2.0", "BandodeDados", 2 * 1024 * 124);
db.transaction(function (criar) {
  criar.executeSql("CREATE TABLE users (id PRIMARY KEY, nome TEXT, cpf TEXT, idade NUMBER)");
});


function enviar() {
  const id = document.getElementById('id').value;
  const nome = document.getElementById('nome').value;
  const cpf = document.getElementById('cpf').value;
  const idade = document.getElementById('idade').value;

  db.transaction(function (x) {

    if (id) {
      x.executeSql('UPDATE users SET nome=?, cpf=?. email=? WHERE id?', [nome, cpf, email, id]);

    } else {
      x.executeSql('INSERT INTO users (nome,cpf,idade)VALUES(?,?,?)', [nome, cpf, idade]);


    }
  });

}