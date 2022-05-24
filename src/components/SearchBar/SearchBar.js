import React from "react";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from '@mui/icons-material/Search';
import { Button } from "@mui/material";

const SearchBar = (props) => {

  return (
    <div>
      <FormControl
        sx={{ margin: "0 15% 0 15%", width: "70%" }}
        variant="outlined"
      >
        <OutlinedInput
          id="outlined-adornment-password"
          type={"text"}
          value={props.searchValue}
          sx={{paddingRight:'0px'}}
          placeholder="Search Here ...."
          onChange={props.handleSearchChange}
          onKeyDown={props.handleSearchEnter}
          endAdornment={
            <InputAdornment position="end" style={{padding:'12px'}}>
              <IconButton
                variant="contained"
                sx={{background:'#1976d2',borderRadius:'0px',height:'56px'}}
                edge="end"
                onClick={(e)=>props.handleSearchEnter(e,'btn')}
              >
                <SearchIcon variant="primary" />
              </IconButton>
            </InputAdornment>
          }
        //   label="Password"
        />
      </FormControl>
    </div>
  );
};

export default SearchBar;
