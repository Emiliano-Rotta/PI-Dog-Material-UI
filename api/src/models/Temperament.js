const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   
    sequelize.define(
        "temperament",
        {            
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {timestamps: false}
    );
  };








  
// Array.prototype.perro = (function (a) {
//     return function () {
//       return this.filter(a);
//     };
//   })(function (a, b, c) {
//     return c.indexOf(a, b + 1) < 0;
//   });
//   router.get("/temperaments", async (req, res) => {
//       try {
//         const todosTemperamentos = await Temperament.findAll();
        
//         if (todosTemperamentos.length === 0) {
         
//           const temperamentosApi = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${api_key}`);
  
//           const temperamentos = temperamentosApi.data.map((e) => {
//             const todos = e.temperament;
//             return todos;
//           });
//           const espaciado = temperamentos.map((e) => e && e.split(", ")).flat(); // intera en los array y devuelve un solo array con todos los elementos
//           const unaVez = espaciado.perro().sort();
          
//           var aux = unaVez.map((e) => {
//               return {name: e,};
//           })
//             .filter((e) => e.name);
//           const todos = await Temperament.bulkCreate(aux); //recibe un arreglo con objetos y asigna a mi tabla segun la propiedad el valor
//           return res.send(todos);
//         } else {
        
//           return res.send(todosTemperamentos);
//         }
//       } catch (error) {
//         console.log("Se encontro un Error en get /temperaments", error)
//       }
//     });
  