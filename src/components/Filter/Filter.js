import React from 'react';
import Color from './Type/Color';
import Shape from './Type/Shape';
import Size from './Type/Size';

const Filter = ({filters}) => {
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
                <Color colors={filters.colors} />
                <Size sizes = {filters.sizes} />
                <Shape shapes= {filters.shapes} />
            </div>
        
    );
};

export default Filter;