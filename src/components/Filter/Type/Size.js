import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import withFilter from '../../withFilter';


const Size = (props) => {
    return (
        <div>
            <p><b>Size</b></p>
            <FormGroup>
                {props.filterList}
            </FormGroup>
        </div>
    );
};

const EnnhancedSize = withFilter(Size)
export default EnnhancedSize;