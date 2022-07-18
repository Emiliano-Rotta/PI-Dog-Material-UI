const initialState ={
    dogs: [],
    allDogs: [],
    temperaments: [],
    detail: [],
    
}



    function rootReducer (state = initialState, action){
        switch (action.type){
            case "GET_DOGS":
                return {
                    ...state,
                    dogs: action.payload,
                    allDogs: action.payload,
                  
                }
                
                
            case "ORDER_BY_NAME": 
            let sortedArr = action.payload === "asc" ?
                state.dogs.sort(function(a,b){
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (b.name > a.name) {
                        return - 1;
                    }
                    return 0;
                }) : 
                state.dogs.sort(function(a,b){
                    if (a.name > b.name) {
                        return -1;
                    }
                    if (b.name > a.name) {
                        return  1;
                    }
                    return 0;
            
                })
                return {
                ...state,
                dogs: sortedArr

                }

            case "ORDER_BY_PESO": 
            let sortedArrWeight = action.payload === 'ascP' ? 
            state.dogs.sort(function (a, b){
             
                return b.weight_min - a.weight_min;
            }) :
            state.dogs.sort(function(a, b){
             
                return a.weight_min - b.weight_min;
            })
            return{
            ...state,
            dogs: sortedArrWeight
            } 

            
            case "FILTER_CREATED":
                const allPerros = state.allDogs 
                const perroCreado = action.payload === "created" ?  allPerros.filter (e => e.createdInDb): 
                allPerros.filter (e => !e.createdInDb)
                return { 
                ...state,
                dogs: action.payload === 'all' ? allPerros : perroCreado
                };
                

            case "FILTER_NAME_DOGS":
                return {
                    ...state,
                    dogs: action.payload,
                }

            case "POST_DOGS":
                return {
                    ...state,
                }

            case "GET_TEMPERAMENTS":
                return {
                    ...state,
                    temperaments: action.payload,
                }
                
            case "GET_DETAILS":
                return {
                    ...state,
                    detail: action.payload
                }
            case "DELETE":
                return {
                    ...state,
                    detail: []
                }
    
            case "FILTER_BY_TEMPERAMENTS":
            
                const allDogs = state.allDogs;
                const temperamentFiltered = allDogs.filter( (e) =>
                            e.temperament && e.temperament.includes(action.payload) 
                        )
            
                return {
                    ...state, 
                    dogs: temperamentFiltered,
                };



            default:
                return state;
    
    
           








    }
}   
export default rootReducer;

































        //     const allDogs = state.allDogs;
            //     const temperamentFiltered = allDogs?.filter (e => 
            //     {if (e.temperaments !== undefined)
            //     {if (typeof e.temperaments[0] === "string") 
            //     {return e.temperaments?.includes(action.payload)} } 
            //     let arr = e.temperaments?.map (e => e.name)
            //     return arr.includes(action.payload) })
            
            //     return {
            //         ...state, 
            //         dogs: temperamentFiltered,
            //     };



            // default:
            //     return state;