import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import withFilter from '../../withFilter';

const Color = (props) => {
    // console.log('color comp')
    // console.log('color props',props.data)
    return (
        <div>
            <p><b>Color</b></p>
            <FormGroup>
                {props.filterList}
            </FormGroup>
        </div>
    );
};

function colorPropsAreEqual(prevColor, nextColor) {
    console.log(prevColor.data,nextColor.data);
    return  JSON.stringify(prevColor.data) === JSON.stringify(nextColor.data); 
}

const EnnhancedColor = withFilter(React.memo(Color))
export default EnnhancedColor;