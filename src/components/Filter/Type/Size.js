import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Size = ({sizes,handleSizeChange}) => {
    const sizeList = sizes.map(sz => <FormControlLabel 
                                            key = {sz.id}
                                            control={<Checkbox onChange={()=>handleSizeChange(sz.id)} checked={sz.clicked ? true : false} />} 
                                            label={sz.name} />)
    return (
        <div>
            <p><b>Size</b></p>
            <FormGroup>
                {sizeList}
            </FormGroup>
        </div>
    );
};

export default Size;