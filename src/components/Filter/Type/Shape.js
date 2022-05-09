import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Shape = ({shapes}) => {
    const shapeList = shapes.map(shp => <FormControlLabel 
                                            key = {shp.id}
                                            control={<Checkbox />} 
                                            label={shp.name} />)

    return (
        <div>
            <p><b>Shape</b></p>
            <FormGroup>
                {shapeList}
            </FormGroup>
        </div>
    );
};

export default Shape;