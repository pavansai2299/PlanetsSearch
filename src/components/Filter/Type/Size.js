import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Size = ({sizes}) => {
    const sizeList = sizes.map(sz => <FormControlLabel 
                                            key = {sz.id}
                                            control={<Checkbox />} 
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