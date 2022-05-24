import React from 'react';
import Color from './Type/Color';
import Shape from './Type/Shape';
import Size from './Type/Size';

const Filter = ({filters,...others}) => {
    // console.log(filters);
    return (
        filters.updated && 
            <div style={{
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'center',
                    marginLeft:'10%',
                    borderRight: '2px solid rgba(0, 0, 0, 0.12)'
                    }}>
                <Color data={filters.colors} handleFilterChange={others.handleFilterChange} type='color' />
                <Size data= {filters.sizes} handleFilterChange={others.handleFilterChange} type='size' />
                <Shape data= {filters.shapes} handleFilterChange={others.handleFilterChange} type='shape' />
            </div>
        
    );
};

export default Filter;