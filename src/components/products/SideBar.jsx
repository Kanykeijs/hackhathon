import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  InputAdornment,
  Paper,
  Radio,
  RadioGroup,
} from "@mui/material";
import { TextField } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useProducts } from "../../contexts/ProductsContext";
import SearchIcon from "@mui/icons-material/Search";
import { useSearchParams } from "react-router-dom";

const SideBar = () => {
  const { fetchByParams } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("q" || ""));

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  return (
    <Grid className="grid" item md={10}>
      <Paper
        elevation={5}
        sx={{
          p: 2,
          width: 500,
          height: 270,
          marginTop: 2,
          backgroundColor: "#e0f2f1",
        }}
      >
        <TextField
          fullWidth
          id="input-with-icon-textfield"
          label="Search..."
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment>
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        <Grid>
          <FormControl>
            <FormLabel>Type</FormLabel>
            <RadioGroup onChange={(e) => fetchByParams("type", e.target.value)}>
              <FormControlLabel value="all" control={<Radio />} label="all" />
              <FormControlLabel
                value="Gel Polish"
                control={<Radio />}
                label="Gel Polish"
              />
              <FormControlLabel
                value="Luxsio"
                control={<Radio />}
                label="Luxsio"
              />
              <FormControlLabel valur="Base" control={<Radio />} label="Base" />
            </RadioGroup>
          </FormControl>
          <input
            step={100}
            min={1}
            max={10000}
            onChange={(e) => console.log(e.target.value)}
            type="range"
            name=""
            id=""
          />
          <FormControl>
            <FormLabel>Price</FormLabel>
            <RadioGroup
              onChange={(e) => fetchByParams("price_lte", e.target.value)}
            >
              <FormControlLabel value="all" control={<Radio />} label="all" />
              <FormControlLabel
                value="1200"
                control={<Radio />}
                label="less then 1200сом"
              />
              <FormControlLabel
                value="1700"
                control={<Radio />}
                label="less then 1700сом"
              />
              <FormControlLabel
                value="1900"
                control={<Radio />}
                label="less then 1900com"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default SideBar;
