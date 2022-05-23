import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const withFilter = (OriginalCmp) => {
    return class TransformedCmp extends React.Component{
        render(){
            const filterList = this.props.data.map(item => <FormControlLabel 
                key = {item.id}
                control={<Checkbox onChange={()=>this.props.handleFilterChange(item.id,this.props.type)} checked={item.clicked ? true : false} />} 
                label={item.name} />)
            return(
                <OriginalCmp filterList={filterList}/>
            )
        }
    }
}

export default withFilter;