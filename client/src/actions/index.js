import axios from "axios";

export function getDogs (){
    return async function (dispatch){
        try {
        var json = await axios.get ("http://localhost:3001/dogs"); 
        return dispatch({      
        type: "GET_DOGS", 
        payload: json.data
        })
    } catch (error) {
        console.log(error)
    }  
  }
  
}

export function orderByName(payload){
    return{
        type: "ORDER_BY_NAME",
        payload
    }
}

export function orderByPeso(payload){
    return{
        type: "ORDER_BY_PESO",
        payload
    }
}

export function filterCreated(payload){
    return{
        type: "FILTER_CREATED",
        payload
    }
}
export function getNameDogs(name){
    return async function (dispatch){
        try{
            var json = await axios.get ("http://localhost:3001/dogs?name=" + name);
            return dispatch({
                type: "FILTER_NAME_DOGS",
                payload: json.data

            })
        }catch (error){
            alert ("Perro no encontrado, verifique haber escrito bien el nombre")
        console.log (error)
    }
}
}

export function getTemperaments (){
    return async function (dispatch){
        var info = await axios.get ("http://localhost:3001/temperaments",{
            
        });
        console.log(info.data)
        return dispatch({type: "GET_TEMPERAMENTS", payload: info.data});
        };
    }

//formulario
export function postDogs (payload){
    return async function (dispatch){
        var response = await axios.post ("http://localhost:3001/dog",payload);
        console.log (response)
        return response;
    }}


    export function getDetail (id){
        return async function (dispatch) {
            try{
                var json = await axios.get ("http://localhost:3001/dogs/" + id);
                return dispatch ({
                    type: "GET_DETAILS",
                    payload: json.data
                })
            }catch(error)  {
                console.log (error)
        } 
        }
    }
    
    export function deleteDetail (){
        return{
            type: "DELETE",
    }
    }





    export function filterDogsByTemperaments(payload){
        return{
             type: "FILTER_BY_TEMPERAMENTS",
             payload
        }
     }
     