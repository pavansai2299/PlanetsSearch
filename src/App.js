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
  const [colorQuery,setColorQuery] = useState('');
  const [sizeQuery,setSizeQuery] = useState('');
  const [shapeQuery,setShapeQuery] = useState('');

  const [filterData,setFilterData] = useState([]);

  const getSearchResults = (srchVal,clrVal,sizeVal,shapeVal) => {
    console.log(searchVal);
    fetch(`http://localhost:3000/planets?q=${srchVal}&${clrVal}${sizeVal}${shapeVal}`)
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
      getSearchResults(searchVal,colorQuery,sizeQuery,shapeQuery);
    }
  }

  const handleColorChange = (clrId) => {
    // console.log(clrId);
    const clr_data = [...filters.colors]
    clr_data.forEach( item => {
      if(item.id === clrId){
        if(item.clicked){
          item.clicked = !item.clicked
        }
        else{
          item.clicked = true
        }
      }
    })
    const filtered_data = {...filters}
    filtered_data['colors'] = clr_data
    setFilters(filtered_data);
  }

  const handleSizeChange = (sizeId) => {
    // console.log(sizeId);
    const size_data = [...filters.sizes]
    size_data.forEach( item => {
      if(item.id === sizeId){
        if(item.clicked){
          item.clicked = !item.clicked
        }
        else{
          item.clicked = true
        }
      }
    })
    const filtered_data = {...filters}
    filtered_data['sizes'] = size_data
    setFilters(filtered_data);
  }

  const handleShapeChange = (shapeId) => {
    // console.log(shapeId);
    const shape_data = [...filters.shapes]
    shape_data.forEach( item => {
      if(item.id === shapeId){
        if(item.clicked){
          item.clicked = !item.clicked
        }
        else{
          item.clicked = true
        }
      }
    })
    const filtered_data = {...filters}
    filtered_data['shapes'] = shape_data
    setFilters(filtered_data);
  }

  useEffect(()=>{
    const clrs_data = [...filters.colors]
    let clr_query = '';
    for(let clr of clrs_data){
      if(clr.clicked){
        clr_query = clr_query + `color=${clr.id}&`
      }
    }
    // console.log(clr_query);
    setColorQuery(clr_query);
  },[filters.colors])

  useEffect(()=>{
    const sizes_data = [...filters.sizes]
    let size_query = '';
    for(let size of sizes_data){
      if(size.clicked){
        size_query = size_query + `size=${size.id}&`
      }
    }
    // console.log(clr_query);
    setSizeQuery(size_query);
  },[filters.sizes])
    
  useEffect(()=>{
    const shapes_data = [...filters.shapes]
    let shape_query = '';
    for(let shape of shapes_data){
      if(shape.clicked){
        shape_query = shape_query + `shape=${shape.id}&`
      }
    }
    // console.log(clr_query);
    setShapeQuery(shape_query);
  },[filters.shapes])

  useEffect(()=>{
    if(colorQuery || sizeQuery || shapeQuery)
      getSearchResults(searchVal,colorQuery,sizeQuery,shapeQuery)
  },[colorQuery,sizeQuery,shapeQuery])

  // console.log(filters);
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
          <Filter 
            filters={filters}
            handleColorChange = {handleColorChange}
            handleSizeChange = {handleSizeChange}
            handleShapeChange = {handleShapeChange}
             />
        </Grid>
        <Grid item xs={8}>
          <Results data={filterData} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
