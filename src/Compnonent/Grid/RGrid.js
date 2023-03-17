import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  // color: theme.palette.text.secondary,
}));

const RGrid = (props) => {
  return (
    <Box sx={{ flexGrow: 1 }} style={{ marginTop: "25px" }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Array.from(Array(9))
          .slice(0, 3)
          .map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Item>
                <h2>{Object.values(props.res)}</h2>{" "}
                {Object.keys(props.res || "")}{" "}
              </Item>
              {/* <Item>{props.item}</Item> */}
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default RGrid;
