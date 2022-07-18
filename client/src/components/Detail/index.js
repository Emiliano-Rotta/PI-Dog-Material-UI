import React from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { getDetail, deleteDetail } from "../../actions";
import { useEffect} from "react";
import style from "./Detail.module.css";


export default function Detail(props){
    console.log (props)
    const dispatch = useDispatch ()

    useEffect(() => {
        dispatch (getDetail(props.match.params.id));
        return function (){dispatch (deleteDetail())}
    }, [dispatch])

    

const myDogs = useSelector ((state)=> state.detail)

return (
    <div >
        {
            myDogs.length>0?
            <div>
            <div className = {style.DetailContainer} >
                <h2 className ={style.raza}>Raza: {myDogs[0].name}.</h2> 
                <img src = {myDogs[0].image} alt = "" className ={style.image}/>
                <h4 className ={style.datos}>Peso: Min.: {myDogs[0].weight_min} Kg. Max.:{myDogs[0].weight_max} Kg. </h4>
                <h4 className ={style.datos}>Altura: Min.: {myDogs[0].height_min} Cm. Max.: {myDogs[0].height_max} Cm.</h4>
                <h4 className ={style.datos}>Años de vida: {myDogs[0].life_span}.</h4>
                <h4 className ={style.temp1}>Temperamentos: </h4>
                <h4 className ={style.temp2}>{myDogs[0].createdInDb ? myDogs[0].temperaments.map(e=>e.name + " ") : myDogs[0].temperament }</h4>
                
              

                <Link to = "/home/" >
                 <button className ={style.volver} >Volver</button>
                </Link>   
            </div>    

               


             </div> : <img src = "https://geomat-maps.com.ar/mngy/maptiles/images/loader4.gif"></img> 
        }
        
    </div>
)
}