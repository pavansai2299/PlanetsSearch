import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Color = ({colors,handleColorChange}) => {
    // console.log(colors);
    const colorList = colors.map(clr => <FormControlLabel 
                                            key = {clr.id}
                                            control={<Checkbox onChange={()=>handleColorChange(clr.id)} checked={clr.clicked ? true : false} />} 
                                            label={clr.name} />)
    return (
        <div>
            <p><b>Color</b></p>
            <FormGroup>
                {colorList}
            </FormGroup>
        </div>
    );
};

export default Color;