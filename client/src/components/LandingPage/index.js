import React from "react";
import {Link} from "react-router-dom";
import style from "./LandingPage.module.css";

export default function LandingPage (){
    return(
        <div>
        <div>
             <h1 className = {style.h1}>Todos los perros en un solo lugar!!</h1> 
             <h6><img src = "https://www.clipartmax.com/png/full/291-2916631_perros-animados-png-sin-fondo-dog-thank-you-gifs.png"></img></h6>
            
            <Link to = "/home">
                <button className = {style.boton} >Haz click para entrar</button> 
            </Link>
            
            
        </div>
         </div>
    )
}