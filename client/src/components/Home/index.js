import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";  //usa hook
import {getDogs, orderByName, orderByPeso, filterCreated, filterDogsByTemperaments, getTemperaments } from "../../actions"; 
import {Link} from "react-router-dom";
import Card from "../Card";
import Paginado from "../Paginado";
import SearchBar from "../SearchBar";
import style from "./Home.module.css";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import PetsIcon from '@mui/icons-material/Pets';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CachedIcon from '@mui/icons-material/Cached';


export default function Home (){
    const dispatch = useDispatch()
    const allDogs = useSelector ((state) => state.dogs); //en allDogs traeme todo lo que esta en el estado dogs
  

const [input, setInput] = useState ({
    name: "",
    image: "",
    height_min: "",
    height_max: "",
    weight_min:"",
    weight_max:"",
    life_span:"",
    temperament: ""
})  
const temperaments = useSelector ((state) =>state.temperaments)

    const [error, setError] = useState ("")
    const [orden, setOrden] = useState ("") 
    const [currentPage, setCurrentPage] = useState (1)
    const [dogsPerPage, setdogsPerPage ] = useState(16)

    const indiceUltimoP = currentPage * dogsPerPage //8
    const indicePrimerP = indiceUltimoP - dogsPerPage //0
    const currentDogs = allDogs.slice(indicePrimerP, indiceUltimoP)// slice me trae una copia en la que eloriginal n se destruye
    const paginado = (pageNumber) =>{
        setCurrentPage (pageNumber)
    }


    useEffect(()=>{
        dispatch (getDogs());
        dispatch(getTemperaments());
        setCurrentPage (1);
    },[dispatch])


    
    function handleSelect (e){
    
        dispatch(filterDogsByTemperaments(e.target.value));
        setCurrentPage (1);
     
    }
    function handleClick (e){
        e.preventDefault();
        dispatch(getDogs());
        setCurrentPage (1);
    }
    
    
    function  handleFilterCreated (e){
        dispatch(filterCreated(e.target.value));
        setCurrentPage (1);
        
    }

    function handleSort(e){
        e.preventDefault();
        dispatch (orderByName(e.target.value))
        // dispatch (orderByPeso(e.target.value))
        setCurrentPage (1);
        setOrden (`Ordenado ${e.target.value}`)
    }
    
    function handleSortP(e){
        e.preventDefault();
        dispatch (orderByPeso(e.target.value))
        setCurrentPage (1);
        setOrden (`Ordenado ${e.target.value}`)
    }
   


    return (
        <div >
            <div>
            
            <h2 className ={style.titulo}> La página de los perros!!</h2>
            </div>

    
            
            <div >
   


                <FormControl sx={{ m: 1, minWidth: 160 }} size="small" >
                    <InputLabel id="demo-simple-select-autowidth-label">Temperamentos</InputLabel>
                    <Select
                        placeholder="kg"
                        style={{ fontSize: 15 }}
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth-label"
                        value={temperaments}
                        label="Age"
                        onChange ={(e)=>handleSelect(e)}
                    >
                        <MenuItem value=""><em>Todos</em></MenuItem>
                        {temperaments.map((tem) => {
                            return (
                                <MenuItem key = {tem.id} value ={tem.name}> {tem.name}</MenuItem>
                            )
                        })} 
                
                    
                    </Select>
                
                </FormControl>
                
                
                <FormControl sx={{ m: 1, minWidth: 160 }} size="small" >
                    <InputLabel id="demo-simple-select-autowidth-label">Orden por razas</InputLabel>
                    <Select
                        style={{ fontSize: 15 }}
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={orden}
                        label="orden"
                        onChange={e =>handleFilterCreated(e)} > 
                    
                        <MenuItem value="all">Todas las razas</MenuItem>
                        <MenuItem value = "api">Razas existentes</MenuItem>
                        <MenuItem value = "created">Creadas por el usuario</MenuItem>

                    </Select>


                </FormControl>

                
                    <FormControl sx={{ m: 1, minWidth: 160 }} size="small" >
                    <InputLabel id="demo-select-small" >Orden por peso</InputLabel>
                    <Select
                        style={{ fontSize: 15 }}
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={orden}
                        label="orden"
                        onChange={e =>handleSortP(e)}
                    >
                        <MenuItem value='desP'>Menor a mayor</MenuItem>
                        <MenuItem value='ascP'>Mayor a menor</MenuItem>

                    </Select>
                </FormControl>


                <FormControl sx={{ m: 1, minWidth: 160 }} size="small" >
                    <InputLabel id="demo-select-small" >Orden alfabetico</InputLabel>
                    <Select
                        style={{ fontSize: 15 }}
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={orden}
                        label="orden"
                        onChange={e =>handleSort(e)}
                    >
                        <MenuItem value='asc'>A-Z</MenuItem>
                        <MenuItem value='des'>Z-A</MenuItem>
                    </Select>
                </FormControl>

                <FormControl sx={{ m: 1, minWidth: 160 }} size="small" >
                    <Button variant="contained" startIcon={<PetsIcon />}>
                    <Link to = "/temperaments">Crea tu perro</Link>
                    </Button>
                </FormControl>

                <FormControl sx={{ m: 1, minWidth: 160 }} size="small" >                    
                    <Button onClick={e=> {handleClick(e)}} variant="contained" endIcon={<CachedIcon />}>
                    Volver a cargar
                    </Button>
                </FormControl>
            
              
          
           

            
            </div>
           
            <div  >
            <SearchBar setCurrentPage = {setCurrentPage} /> 
            </div>            

          
            <div> 
                <Paginado
                
                dogsPerPage={dogsPerPage}
                allDogs ={allDogs.length}
                paginado ={paginado}
                currentPage ={currentPage}
                
                />
             
             </div>  
                   
             
        <div className = {style.container}>  
               
        {currentDogs?.map ((p) =>{
            return(
                <Fragment >                    
                    <Link  to = {"/home/" + p.id}>
                        <Card 
                        name ={p.name}   
                        image ={p.image}    
                        temperaments={!p.createdInDb ? p.temperament : p.temperaments.map(e=>e.name + " ") }   
                        weight_min ={p.weight_min}  
                        weight_max ={p.weight_max}  
                        key={p.id}/>
                    </Link> 
                </Fragment>
            );
        }) 

        }
        
        </div> 
    </div> 
    
    ) //CIERRA EL RETURN
}


