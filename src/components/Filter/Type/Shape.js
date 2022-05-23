import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import withFilter from '../../withFilter';


const Shape = (props) => {
    return (
        <div>
            <p><b>Shape</b></p>
            <FormGroup>
                {props.filterList}
            </FormGroup>
        </div>
    );
};

const EnnhancedShape = withFilter(Shape)
export default EnnhancedShape;