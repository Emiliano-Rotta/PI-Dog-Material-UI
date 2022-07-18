            {/* <div>
                <br/>
                <input  
                autocomplete="off" 
                type="number" 
                value={input.height_min} 
                name='height_min'  
                placeholder="Altura min " 
                onChange={(e)=>handleChange(e)}
                /> Cm.(*)
                {errors.height_min && (<p className= {style.error} >{errors.height_min}</p>)}<br/>

                <input  
                autocomplete="off"  
                type="number" 
                value={input.height_max} 
                name='height_max'  
                placeholder="Altura max" 
                onChange={(e)=>handleChange(e)}
                /> Cm.(*)
                    {errors.height_max && (<p className= {style.error} >{errors.height_max}</p>)}
            </div>


            <div>
                <br/>

                    
                <input  
                autocomplete="off"  
                type="number" 
                value={input.weight_min} 
                name='weight_min' 
                placeholder="Peso min"  
                onChange={(e)=>handleChange(e)} 
                /> Kg.(*)
                {errors.weight_min && (<p className= {style.error} >{errors.weight_min}</p>)}<br/>

                <input  
                autocomplete="off"  
                type="number" 
                value={input.weight_max} 
                name='weight_max' 
                placeholder="Peso max"  onChange={(e)=>handleChange(e)} 
                /> Kg.(*)
                {errors.weight_max && (<p className= {style.error} >{errors.weight_max}</p>)}

            </div>
            <div><br/>

                
                <input  
                autocomplete="off"  
                type="number" 
                value={input.life_span} 
                name='life_span' 
                placeholder="Años de vida."  
                onChange={(e)=>handleChange(e)} 
                /> Años. (*)
                    {errors.life_span && (<p className= {style.error} >{errors.life_span}</p>)}<br/>
            </div>

            <div><br/>
                <input type="text" 
                value={input.image} 
                name='image' 
                placeholder="Imagen." 
                onChange={(e)=>handleChange(e)} />
                
            </div>

        // {/* !name? name :  
        // 
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
             Boton crear y volver 
            <br/>
             <button className={style.boton1} type='submit'>Crear Perro</button> 
            
            <Link to= "/home"><button className ={style.volver}>Volver</button></Link>*/}
             





            