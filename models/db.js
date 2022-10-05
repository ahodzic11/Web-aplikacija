const Sequelize = require("sequelize");
const sequelize = new Sequelize("wt2118716","root","password",{host:"localhost",dialect:"mysql",logging:false});
const db={};

db.Sequelize = Sequelize;  
db.sequelize = sequelize;

//import modela
db.student = require('./Student.js')(sequelize);
db.grupa = require('./Grupa.js')(sequelize);
db.zadatak = require('./Zadatak.js')(sequelize);
db.vjezba = require('./Vjezba.js')(sequelize);
//relacije


db.student.belongsTo(db.grupa, {as: 'grupa'})

db.zadatak.belongsTo(db.vjezba, {as: 'vjezba'})

module.exports=db;