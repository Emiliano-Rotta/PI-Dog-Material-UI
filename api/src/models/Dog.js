const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo


//   [] Raza con las siguientes propiedades:
// ID *
// Nombre *
// Altura *
// Peso *
// Años de vida


  sequelize.define(
    'dog', 
    
    {
       id: {
        type: DataTypes.UUID, 
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      image:  {
        type: DataTypes.STRING,
       
        
      },
      height_min:{ //altura
        type:DataTypes.STRING,
        allowNull: false
      },
      height_max:{ //altura
        type:DataTypes.STRING,
        allowNull: false
      },
      weight_min:{//peso
        type:DataTypes.STRING,
        allowNull: false
      },
      weight_max:{//peso
        type:DataTypes.STRING,
        allowNull: false
      },
      life_span: { //años de vida
        type: DataTypes.STRING, 
        
      },
      createdInDb: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
     
      
   
  },
  {timestamps: false}
  );
};
    
    
    
   