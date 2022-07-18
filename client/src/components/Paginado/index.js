import React from "react"
import style from "./Paginado.module.css";
import PetsIcon from '@mui/icons-material/Pets';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function Paginado ({dogsPerPage, allDogs, paginado, currentPage }){
    const numeroPagina = []

    for (let i = 0; i < Math.ceil(allDogs/dogsPerPage); i++) {
        numeroPagina.push (i+1)
    }
    return(
        <nav>
            
            <ul className= {style.paginadoContenedor}>
            
            <Button disabled = {currentPage===1? true:false}  className = {style.botonPaginado} onClick={() => paginado(currentPage-1)}> <PetsIcon /></Button>
                {
                    numeroPagina &&
                    numeroPagina.map (number =>(
                        <div className="number" key={number}>
                        <Button onClick={() => paginado(number)} 
                        className = {style.botonPaginado}>{number}
                        </Button>
                        </div>
                    ))
                }
                <Button disabled = {currentPage === numeroPagina.length? true:false} className = {style.botonPaginado} onClick={() => paginado(currentPage+1)}> <PetsIcon /></Button>
            </ul>
            <Typography>Página: {currentPage}</Typography>
        </nav>
    )
}