const { type } = require("express/lib/response");
const Sequelize = require("sequelize");

module.exports = function(sequelize,DataTypes){
    const Zadatak = sequelize.define("zadatak",{
        nazivZadatka:Sequelize.STRING
    })
    return Zadatak;
};
