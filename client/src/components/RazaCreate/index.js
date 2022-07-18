import { useState, useEffect } from 'react';
import {Link, useHistory} from 'react-router-dom';
import { postDogs, getTemperaments } from "../../actions";
import { useDispatch, useSelector } from 'react-redux';
import style from "./RazaCreate.module.css";

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import OutlinedInput from '@mui/material/OutlinedInput';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
// import { useSnackbar } from 'notistack';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function validate(input){
    let errors = {};
  
    if(!input.name || !/^[A-Z]+[A-Za-z0-9\s]+$/g.test(input.name)){
        errors.name = 'Al menos dos caracteres el primero, letra mayuscula.';
    }
 
    if(!input.height_min || !/^[1-9]\d*(\.\d+)?$/.test(input.height_min)){
        errors.height_min = 'El número tiene que ser positivo.';
    }
    if(!input.height_max || !/^[1-9]\d*(\.\d+)?$/.test(input.height_max)){
        errors.height_max = 'El número tiene que ser positivo.';
    }

    if(!input.weight_min || !/^[1-9]\d*(\.\d+)?$/.test(input.weight_min)){
        errors.weight_min = 'El número tiene que ser positivo.';
    }
    if(!input.weight_max || !/^[1-9]\d*(\.\d+)?$/.test(input.weight_max)){
        errors.weight_max = 'El número tiene que ser positivo.';
    }

    if(!input.life_span || !/^[1-9]\d*(\.\d+)?$/.test(input.life_span)){
        errors.life_span = 'El número tiene que ser positivo.';
    }
    
    return errors
    // if (input.image && !/[a-z0-9-.]+\.[a-z]{2,4}\/?([^\s<>#%",{}\\|^[\]`]+)?$/.test(input.image) ){
    //     errors.image = 'Debe ser una URL';
    // }

    
}


export default function RazaCreate(){
    // const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch()
    const history = useHistory()
    const temperaments = useSelector((state)=> state.temperaments)
    const [errors, setErrors] = useState({})

    const[input, setInput] = useState({
        name: "",
        image: "",
        height_min: "",
        height_max: "",
        weight_min:"",
        weight_max:"",
        life_span:"",
        temperament: []
    })


    function handleChange(e){
        e.preventDefault ();
        setInput({
        ...input,
        [e.target.name] : e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value

        }));console.log (input)
    }



    function handleSelect(e){
        const temperamentos = input.temperament;
        if (temperamentos.indexOf (e.target.value) <= 0){
           setInput({
            ...input,
            temperament: [...input.temperament, e.target.value] //arreglo xq quiero muchos, va guardando todo lo que voy seleccionando
        })};
    }
        
       
    function handleDelete(e){
        setInput({
            ...input,
            temperament: input.temperament.filter(tem=> tem !== e)
        })
    }   
            

    function handleSubmit(e){
        e.preventDefault()
        console.log(input)
        if(input.name !== "" 
        && input.height_min !== "" 
        && input.height_max !== "" 
        && input.weight_min !== "" 
        && input.weight_max !== "" 
        && input.life_span !== ""  
        && input.temperament.length !== 0 )

        {dispatch(postDogs(input))
            alert ("perro creado")
        // enqueueSnackbar('Perro creado con exito', { variant: 'success' });
       
        setInput({
            name: "", 
            image: "", 
            height_min: "", 
            height_max: "",  
            weight_min: "", 
            weight_max: "", 
            life_span:"", 
            temperament:[],
        })
        history.push('/home')}
        else{
            alert ("segui completando")
        // enqueueSnackbar("Debe compeltar todos los campo con asteriscos (*)", { variant: 'error' });
              
    }
    }
    useEffect (()=>{
                dispatch(getTemperaments());
            }, [dispatch]);
            

    const [personName, setPersonName] = React.useState([]);

    const handleChangee = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
    return(
        <div>
            <h1 className = {style.titulo}>Creá tu propia perro!!!! </h1>
            
            <form  onSubmit = {(e)=>handleSubmit(e)} >


        <Box  sx={{
        '& .MuiTextField-root': { m: 1, width: '60ch', color: "white" },width: '62ch', my: "2%", mx: "30%", maxWidth: "100%", bgcolor:'#d8d8d8', borderRadius: "10px" }}>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '60ch', color: "white" }, maxWidth: "100%", bgcolor:'#d8d8d8', borderRadius: "10px" }}
          noValidate
          autoComplete="off"
        >
   
            <div>
                <div>
                <TextField sx={{ bgcolor:'#fff ', color: '#dee2e6',  borderRadius: "10px" }}
                id="outlined-helperText"
                label="Nombre: "
                maxlength = "30"
                htmlFor="name"
                value={input.name}
                autocomplete="off"
                name="name"
                type = "text"
                onChange ={(e)=>handleChange(e)} 
                helperText="Campo obligatorio (*)"
                InputLabelProps={{
                  shrink: true,
              }}
                />
                 {errors.name && (
                    <p className ={style.error}><p className = "error">{errors.name}</p></p>
                )}
                </div>                  
              
                <div>
                <TextField sx={{ bgcolor:'#fff ', color: '#FFC400',  borderRadius: "10px" }}
                id="outlined-number"
                autocomplete="off" 
                type="number"
                label="Altura min:"
                htmlFor="height_min"
                placeholder="Cm."
                value={input.height_min}
                onChange={(e)=>handleChange(e)}
                name="height_min"
                helperText="Campo obligatorio (*)"
                InputLabelProps={{
                  shrink: true,
              }}
                />
                  {errors.height_min && (<p className= {style.error} >{errors.height_min}</p>)}
                </div>

                <div>
                <TextField sx={{ bgcolor:'#fff ', color: '#FFC400',  borderRadius: "10px" }}
                id="outlined-number"
                autocomplete="off" 
                type="number"
                label="Altura max:"
                htmlFor="height_max"
                placeholder="Cm."
                value={input.height_max}
                onChange={(e)=>handleChange(e)}
                name="height_max"
                helperText="Campo obligatorio (*)"
                InputLabelProps={{
                  shrink: true,
              }}
                />
                  {errors.height_max && (<p className= {style.error} >{errors.height_max}</p>)}
                </div>

                {/* <input  
                autocomplete="off"  
                type="number" 
                value={input.weight_min} 
                name='weight_min' 
                placeholder="Peso min"  
                onChange={(e)=>handleChange(e)} 
                /> Kg.(*)
                {errors.weight_min && (<p className= {style.error} >{errors.weight_min}</p>)} */}

                <div>
                <TextField sx={{ bgcolor:'#fff ', color: '#FFC400', borderRadius: "10px" }}
                id="outlined-number"
                label= "Peso min"
                autocomplete="off" 
                htmlFor="weight_min"
                value={input.weight_min}
                onChange={(e) => handleChange(e)} 
                name="weight_min"
                helperText="Campo obligatorio (*)"
                type="number"
                placeholder="kg"
                InputLabelProps={{
                    shrink: true,
                }}
                />
                {errors.weight_min && (<p className= {style.error} >{errors.weight_min}</p>)}
                </div>

                <div>
                <TextField sx={{ bgcolor:'#fff ', color: '#FFC400', borderRadius: "10px" }}
                id="outlined-number"
                label= "Peso max"
                autocomplete="off" 
                htmlFor="weight_max"
                value={input.weight_max}
                onChange={(e) => handleChange(e)} 
                name="weight_max"
                helperText="Campo obligatorio (*)"
                type="number"
                placeholder="kg"
                InputLabelProps={{
                    shrink: true,
                }}
                />
                {errors.weight_max && (<p className= {style.error} >{errors.weight_max}</p>)}
                </div> 
              
              
              <div>
                <TextField sx={{ bgcolor:'#fff ', color: '#FFC400',  borderRadius: "10px" }}
                id="outlined-number"
                autocomplete="off" 
                label="Años de vida."
                htmlFor="life_span"
                value={input.life_span}
                onChange={(e)=>handleChange(e)}                      
                name="life_span"
                type="number"
                helperText="Campo obligatorio (*)"
                InputLabelProps={{
                    shrink: true,
                }}
                />
                {errors.life_span && (<p className= {style.error} >{errors.life_span}</p>)}
              </div>

              {/* <input type="text" 
                value={input.image} 
                name='image' 
                placeholder="Imagen." 
                onChange={(e)=>handleChange(e)} /> */}

              <div> 
                <TextField sx={{ bgcolor:'#fff ', color: '#dee2e6',  borderRadius: "10px" }}
                id="outlined-helperText"
                label="Imagen: "
                htmlFor="image"
                value={input.image}
                name="image"
                onChange={(e)=>handleChange(e)}
                helperText="Campo obligatorio (*)"
                InputLabelProps={{
                  shrink: true,
              }}
                />

            <br/>
            Temperamentos: (*)<br/>
                                        
            <select  onChange={(e)=> handleSelect(e)}>
            {temperaments && temperaments.map((temp)=>(
            <option 
            value={temp.name} 
            key={temp.id}>{temp.name}
            </option>
            ))}
            
            </select><br/> 
            <ul >
                <p>
                    {input.temperament.map(e=> <button className={style.botonBorrar} 
                    type='button' 
                    key={e.id} 
                    onClick={()=>handleDelete(e)}>
                        {e}</button>)}</p></ul>

                </div>

    <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChangee}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>

                             
            </div>



            </Box>
            <Stack direction="row" spacing={2} >

            <Button sx={{ m: 1, width: '35ch', color: '#022335', bgcolor:'#fff', borderColor:'#022335',  borderRadius: "10px"}} type='submit' className= {style.modificar} variant="outlined" startIcon={<EditIcon fontSize = "large"/>}>
             Crear perro!
            </Button>

            <Link to= "/home">
            <Button sx={{ m: 1, width: '30ch', color: '#022335', bgcolor:'#fff', borderColor:'#022335',  borderRadius: "10px"}}  className= {style.modificar} variant="outlined" startIcon={<EditIcon fontSize = "large"/>}>
            Volver
            </Button></Link>
            </Stack>
                
            </Box>
            </form>
        </div> 
    )
}   



