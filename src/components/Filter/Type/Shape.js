import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import withFilter from '../../withFilter';


const Shape = (props) => {
    // console.log('Shape comp')
    // console.log('shape props',props);
    return (
        <div>
            <p><b>Shape</b></p>
            <FormGroup>
                {props.filterList}
            </FormGroup>
        </div>
    );
};

function shapePropsAreEqual(prevShape, nextShape) {
    return  JSON.stringify(prevShape.data) === JSON.stringify(nextShape.data); 
}

const EnnhancedShape = withFilter(React.memo(Shape))
export default EnnhancedShape;