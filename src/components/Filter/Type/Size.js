import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import withFilter from '../../withFilter';


const Size = (props) => {
    // console.log('size comp');
    return (
        <div>
            <p><b>Size</b></p>
            <FormGroup>
                {props.filterList}
            </FormGroup>
        </div>
    );
};

function sizePropsAreEqual(prevColor, nextColor) {
    return  JSON.stringify(prevColor.data) === JSON.stringify(nextColor.data); 
}

const EnnhancedSize = withFilter(React.memo(Size))
export default EnnhancedSize;