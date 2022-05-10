import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

const Results = ({ data }) => {
  const resultData = data.map((res) => {
    return <div key={res.id}>
            <ListItem  alignItems="flex-start">
              <ListItemText
                primary={res.name}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.secondary"
                    >
                      {res.id}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" sx={{ marginLeft: "17px" }} />
          </div>;
  });
  return (
      <List sx={{ width: "100%", bgcolor: "background.paper",height:'500px',overflowY:'auto' }}>
        {resultData}
      </List>
  )
};

export default Results;
