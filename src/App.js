import React,{useState,useEffect} from 'react';
import './App.css';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SearchBar from './components/SearchBar/SearchBar';
import Filter from './components/Filter/Filter';
import Results from './components/Results/Results';

function App() {
  const [filters,setFilters] = useState({
                                      colors:[],
                                      sizes:[],
                                      shapes:[]
                                    })
  const [searchVal,setSearchVal] = useState('');

  const [filterData,setFilterData] = useState([]);

  const getSearchResults = () => {
    console.log(searchVal);
    fetch(`http://localhost:3000/planets?q=${searchVal}`)
    .then(res => res.json())
    .then(res => {
      console.log(res);
      setFilterData(res);
    })
  }

  const handleSearchChange = (event) => {
    setSearchVal(event.target.value)
  }

  const handleSearchEnter = (event,type) =>{
    if(event.key === "Enter" || type === "btn"){
      getSearchResults();
    }
  }

  useEffect(()=>{
    Promise.all([
      fetch('http://localhost:3000/colors'),
      fetch('http://localhost:3000/sizes'),
      fetch('http://localhost:3000/shapes')
    ]).then(async([crs, szs, shs]) => {
      const colors = await crs.json();
      const sizes = await szs.json();
      const shapes = await shs.json();
      return [colors,sizes,shapes]
    })
    .then(([colors,sizes,shapes]) => {
      setFilters({...filters,colors:colors,sizes:sizes,shapes:shapes})
    }).catch((err) => {
      console.log(err);
    });
  
  },[])

  return (
    <div className="app-container">
      <Grid container>
        <Grid item xs={12}>
          <SearchBar 
            handleSearchChange={handleSearchChange} 
            handleSearchEnter={handleSearchEnter} 
            searchvalue={searchVal} />
        </Grid>
      </Grid>
      <Grid container spacing={3} sx={{marginTop:'20px'}} >
        <Grid item xs={4}>
          <Filter filters={filters} />
        </Grid>
        <Grid item xs={8}>
          <Results data={filterData} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
