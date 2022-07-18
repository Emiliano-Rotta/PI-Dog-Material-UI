const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require ("axios");
const {Dog, Temperament} = require ("../db")
const {api_key} = process.env;


const router = Router();


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//me traigo la info de la api
const api = async () => {
  try {
    const apiUrl = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${api_key}`);
    const apiInfo = await apiUrl.data.map((e) => {
        return {
            id: e.id,
            name: e.name,
            image: e.image.url,
            height_max: e.height.metric.split(" - ")[1] ,//altura
            height_min: e.height.metric.split(" - ")[0] ,
            weight_max: e.weight.metric.split(" - ")[1] ,//peso
            weight_min: e.weight.metric.split(" - ")[0] !== "NaN" ? e.weight.metric.split(" - ")[0] : 3,
            life_span: e.life_span,
            temperament: e.temperament ? e.temperament: "Este perro no tiene temperamentos",
        };
    });    
    return apiInfo;
  } catch (error) {
    console.log("Hubo un error en el api",error)
  }
}; 

//me traigo la info de la base de datos
const baseDatos = async () => {
  try {
    return await Dog.findAll({
      include: {
        model: Temperament,
            attributes: ["name"],
            through: {
                attributes: [], 
              },
            },
          });
        } catch (error) {
          console.log("Hubo un error en baseDatos", error)
        }
      };
//las concateno a ambos
const concatenada = async () => {
  try {
    const apiInfo = await api();
    const dbInfo = await baseDatos();
    const allInfo = apiInfo.concat(dbInfo);
    return allInfo;
  } catch (error) {
    console.log("Se encontro un error en concatenada", error)
  }
};

//Query 2
router.get ("/dogs", async (req, res)=>{
  try {
    const name = req.query.name;
    const dogTotal = await concatenada ();
    if (name){
        let dogName = await dogTotal.filter(e => e.name.toLowerCase().includes(name.toLowerCase()));
        dogName.length ?
        res.status(200).send(dogName):
        res.status(404).send("un mensaje adecuado");
    }else{
        res.status(200).send(dogTotal)
    }
    
  } catch (error) {
    console.log("Se encontro una falla en el get /dogs", error)
  }
});

//3
router.get("/dogs/:id", async (req,res)=>{
  const id = req.params.id ;
  const dogsTotal = await concatenada();
  if (id){
      let idDogs = await dogsTotal.filter(e => e.id == id)
      idDogs.length? 
      res.status (200).json (idDogs):
      res.status (404).send ("No se encontro el perro")
  }
})


//post

router.post('/dog', async (req, res) => {
    try{
  
    let { 
        name, 
        image, 
        height_max,
        height_min,
        weight_max,
        weight_min,
        life_span, 
        temperament,
        createdInDb } = req.body
  
    let dogCreated = await Dog.create({
        name, 
        image, 
        height_max,
        height_min,
        weight_max,
        weight_min, 
        life_span,
        createdInDb,
        
    })

    let temperamentDb = await Temperament.findAll({
      where: {name:temperament} 
    })
    
    await dogCreated.addTemperament(temperamentDb); // se agrega el await para esperar que se encuentren los temperaments
    res.status(200).send ("Perro creado");
    
}
catch(error){
  console.log("Se presento un error en el Post", error)
}
}
); 












Array.prototype.perro = (function (a) {
  return function () {
    return this.filter(a);
  };
})(function (a, b, c) {
  return c.indexOf(a, b + 1) < 0;
});



// temperaments 
router.get("/temperaments", async (req, res) => {
    try {
      const todosTemperamentos = await Temperament.findAll();
      
      if (todosTemperamentos.length === 0) {
       
        const temperamentosApi = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${api_key}`);

        const temperamentos = temperamentosApi.data.map((e) => {
          const todos = e.temperament;
          return todos;
        });
        const espaciado = temperamentos.map((e) => e && e.split(", ")).flat(); 
        const unaVez = espaciado.perro().sort();
        
        var aux = unaVez.map((e) => {
            return {name: e,};
        })
          .filter((e) => e.name);
        const todos = await Temperament.bulkCreate(aux); //recibe un arreglo con objetos y asigna a mi tabla segun la propiedad el valor
        return res.send(todos);
      } else {
      
        return res.send(todosTemperamentos);
      }
    } catch (error) {
      console.log("Se encontro un Error en get /temperaments", error)
    }
  });



module.exports = router;
