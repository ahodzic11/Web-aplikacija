const Sequelize = require("sequelize");

module.exports = function(sequelize,DataTypes){
    const Vjezba = sequelize.define("vjezba",{
        imeVjezbe:Sequelize.STRING
    })
    return Vjezba;
};
