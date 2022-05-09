import React from "react";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from '@mui/icons-material/Search';
import { Button } from "@mui/material";

const SearchBar = () => {
  const [searchValue, setSearchValue] = React.useState('');

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div>
      <FormControl
        sx={{ margin: "0 15% 0 15%", width: "70%" }}
        variant="outlined"
      >
        {/* <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel> */}
        <OutlinedInput
          id="outlined-adornment-password"
          type={"text"}
          value={searchValue}
          placeholder="Search Here ...."
          onChange={handleSearchChange}
        //   sx={{padding:'12px'}}
          endAdornment={
            <InputAdornment position="end" style={{padding:'12px'}}>
              <IconButton
                variant="contained"
                // onClick={handleClickShowPassword}
                // onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {/* <Button variant="contained" startIcon={<SearchIcon />} /> */}
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
