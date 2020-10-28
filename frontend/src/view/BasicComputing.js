import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  Button,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
  Grid,
  TextField,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { getB2s } from "../functions/axios";

const useStyles = makeStyles((theme) => ({
  buttonB: {
    background: "white",
    border: "1px solid #black",
    borderRadius: 3,
    color: "black",
    height: 48,
    padding: "0 30px",
    "&:hover": {
      background: "white",
      border: "",
      borderRadius: 3,
      boxShadow: "0 3px 5px 2px #fff",
      color: "black",
      height: 48,
      padding: "0 30px",
    },
  },
  buttonG: {
    background: "black",
    border: 0,
    borderRadius: 3,
    color: "white",
    height: 48,
    padding: "0 30px",
    "&:hover": {
      background: "black",
      border: 0,
      borderRadius: 3,
      boxShadow: "0 3px 5px 2px #000",
      color: "white",
      height: 48,
      padding: "0 30px",
    },
  },

  cardHeader: {
    backgroundColor: "black",
    color: "white",
  },

  card: {
    marginLeft: theme.spacing(10),
    marginRight: theme.spacing(10),
    marginTop: theme.spacing(10),
  },
}));

export default function Page() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [bit2string, setBit2string] = useState(11011);
  const [result, setResult] = useState("");
  const generate = () => {
    getB2s(bit2string).then((res) => {
      setResult(res);
    });
  };

  const back = () => {
    navigate("/whole");
  };

  return (
    <Typography align="center">
      <Card className={classes.card} style={{ marginTop: "10rem" }}>
        <CardHeader
          title="Lesson 1"
          titleTypographyProps={{ align: "center" }}
          subheaderTypographyProps={{ align: "center" }}
          className={classes.cardHeader}
        />
        <CardContent>
          <Grid container spacing={3} alignItems="flex-end">
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                id="outlined-basic"
                value={bit2string}
                label="Binary"
                variant="outlined"
                onChange={(e) => setBit2string(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <TextField
                id="outlined-read-only-input"
                label="Result"
                value={result === "" ? "" : result}
                InputProps={{
                  readOnly: true,
                }}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Grid container spacing={5} alignItems="flex-end">
          <Grid item xs={12} sm={6} md={6}>
            <Button
              onClick={back}
              fullWidth
              variant="outlined"
              color="primary"
              className={classes.buttonB}
            >
              Back
            </Button>
          </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Button
                onClick={generate}
                fullWidth
                variant="contained"
                color="primary"
              className={classes.buttonG}
              >
              Calculate
              </Button>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </Typography>
  );
}
