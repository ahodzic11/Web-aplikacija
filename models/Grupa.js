const Sequelize = require("sequelize");

module.exports = function(sequelize,DataTypes){
    const Grupa = sequelize.define("grupa",{
        ime:{
            type:Sequelize.STRING,
            unique: true
        }
    })
    return Grupa;
};
