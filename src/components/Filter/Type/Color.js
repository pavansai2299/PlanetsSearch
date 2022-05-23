import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import withFilter from '../../withFilter';

const Color = (props) => {
    return (
        <div>
            <p><b>Color</b></p>
            <FormGroup>
                {props.filterList}
            </FormGroup>
        </div>
    );
};

const EnnhancedColor = withFilter(Color)
export default EnnhancedColor;