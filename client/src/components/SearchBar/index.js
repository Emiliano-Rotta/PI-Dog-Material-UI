import React from "react";
import { useState } from "react";
import {useDispatch} from "react-redux"
import { getNameDogs } from "../../actions";
import style from './SearchBar.module.css';

import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

export default function SearchBar({setCurrentPage}){
    const dispatch = useDispatch()
    const [name, setName] = useState ("")

    function handleInputChange (e){
    e.preventDefault()
    setName(e.target.value)
    console.log (name)
    
    }
    function handleSubmit(e){
        e.preventDefault();
        setCurrentPage (1)
        if(name !== ""){
        dispatch(getNameDogs(name));
        console.log (name)
        setName("");}
        else{
        alert("Ingresa un nombre para buscar")
        }
    }

    return (
  
        <form onSubmit={handleSubmit}>
            <Search sx={{ m: 1, Width: 160 }}>
                <SearchIconWrapper>
                <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase sx={{ m: 1, Width: 160 }}
                type="text"
                placeholder="Busca a tu perro..."
                onChange = {(e) => handleInputChange (e)}
                inputProps={{ 'aria-label': 'search' }}
                value={name}
                />
            </Search>
            </form>

    )
}