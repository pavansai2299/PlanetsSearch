import React from 'react';
import Color from './Type/Color';
import Shape from './Type/Shape';
import Size from './Type/Size';

const Filter = ({filters,...others}) => {
    // console.log(filters);
    return (
        filters.colors.length > 0 && 
            <div style={{
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'center',
                    marginLeft:'10%',
                    borderRight: '2px solid rgba(0, 0, 0, 0.12)'
                    }}>
                <Color colors={filters.colors} handleColorChange={others.handleColorChange} />
                <Size sizes = {filters.sizes} handleSizeChange={others.handleSizeChange} />
                <Shape shapes= {filters.shapes} handleShapeChange={others.handleShapeChange} />
            </div>
        
    );
};

export default Filter;