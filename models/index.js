const config = require("../controllers/environmentController");
const bcrypt = require("bcrypt");
const dbconfig = config.DB;
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbconfig);

sequelize
  .authenticate()
  .then(() => {
    console.log("Conexão estabelecida com sucesso.");
  })
  .catch((error) => {
    console.error("Não é possivel estabelecer conexão: ", error);
  });

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

const defineModels = async () => {
  db.user = require("./usermodel")(sequelize, DataTypes);
  db.autor = require("./autormodel")(sequelize, DataTypes);
  db.editora = require("./editoramodel")(sequelize, DataTypes);
  db.livro = require("./livromodel")(sequelize, DataTypes);

  await sequelize.sync();
};

const syncDatabase = async (retries = 5) => {
  try {
    
    if (config.MODE === "DEVELOPMENT") {      
      await defineModels();
      await db.sequelize.sync({ force: true });

      // relacionamentos entre DB's
      
    } else if (config.MODE === "PRODUCTION") {
      try {
        await defineModels();
        await sequelize.sync();
        console.log("Tabelas sync com susecesso!");
      } catch (error) {
        if (retries) {
          console.log(
            `Não foi possivel sync das tabelas. Tentando novamente em 5 segundos... Tentativas restantes: ${retries}`
          );
          setTimeout(syncDatabase, 5000, retries - 1);
        } else {
          console.error("Não foi possivel sync das tabelas", error);
        }
      }
    }
    db.livro.belongsTo(db.autor, { foreignKey: "autorId" });
    db.livro.belongsTo(db.editora, { foreignKey: "editoraId" });
    console.log("Tabelas criadas com susecesso!");
    const hashedPassword = await bcrypt.hash("123456", 10);
    const hashedPassword2 = await bcrypt.hash("testepass", 10);
    // Cria um user básico como exemplo
    await db.user.create({
      username: "HugoMorais",
      password: hashedPassword,
      email: "a@a.a",
      telemovel: "915556655",
      firstName: "Hugo",
      lastName: "Morais",
    });
    await db.user.create({
      username: "DiogoSousa",
      password: hashedPassword,
      email: "b@b.b",
      telemovel: "916665566",
      firstName: "Diogo",
      lastName: "Sousa",
    });
    await db.user.create({
      username: "Teste",
      password: hashedPassword2,
      email: "C@c.c",
      telemovel: "916665566",
      firstName: "teste",
      lastName: "MA",
    });
    console.log("Users Criados!");
  } catch (error) {
    console.error("Não foi possivel sync das tabelas", error);
  }
};

syncDatabase();

module.exports = db;
