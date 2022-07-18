import React from "react";
import style from "./Card.module.css";


export default function Card ({name, image, temperaments, weight_min, weight_max}){
    return (
        <div className = {style.CardContainer}>

            <img src = {image} alt = {name} className ={style.image} /> 
            <h3 className ={style.title}>Raza: {name}</h3>
            <p className ={style.texto}>Peso min: {weight_min} max: {weight_max}</p>
            <p className ={style.texto}>Temperamentos:</p>
            <p className ={style.temperamentos}>{temperaments}</p>
            
          
            
        </div>
    )
}


// ? typeof temperaments[0] === "object"
//               ? temperaments.map((e) => {
//                   return e.name + " ";
//                 })
//               : temperaments.map((e) => {
//                   return e + " ";
//                 })
//             : "Not found"}</p>