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
import { getRootFinding } from "../functions/axios";
import { withTheme } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
    buttonB:{
        background: 'white',
        border: "1px solid #black",
        borderRadius: 3,
        color: 'black',
        height: 48,
        padding: '0 30px',
        '&:hover':{
            background: 'white',
            border: "",
            borderRadius: 3,
            boxShadow: '0 3px 5px 2px #fff',
            color: 'black',
            height: 48,
            padding: '0 30px',
        }
    },
    buttonG:{
        background: 'black',
        border: 0,
        borderRadius: 3,
        color: 'white',
        height: 48,
        padding: '0 30px',
        '&:hover':{
            background: 'black',
            border: 0,
            borderRadius: 3,
            boxShadow: '0 3px 5px 2px #000',
            color: 'white',
            height: 48,
            padding: '0 30px',
        }
    },

  cardHeader: {
    backgroundColor:"black",
    color:"white"
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
  const [a, seta] = useState(0);
  const [b, setb] = useState(1);
  const [dx, setdx] = useState(0.001);
  const [result, setresult] = useState("");

  const back = () => {
    navigate("/whole");
  };


  const generate = () => {
    const data = {
      a: a,
      b: b,
      dx: dx
    };
    getRootFinding(data).then((res) => {
      setresult(res);
    });
  };
  return (
    <Typography align="center">
      <Card className={classes.card}>
        <CardHeader
          title="Lesson 6"
          titleTypographyProps={{ align: "center" }}
          subheaderTypographyProps={{ align: "center" }}
          className={classes.cardHeader}
        />
        <CardContent>
          <Grid container spacing={3} alignItems="flex-start">
            <Grid item xs={12} sm={4} md={4}>
              <TextField
                id="outlined-basic"
                value={a}
                label="Value A"
                variant="outlined"
                onChange={(e) => seta(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <TextField
                id="outlined-basic"
                value={b}
                label="Value B"
                variant="outlined"
                onChange={(e) => setb(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <TextField
                id="outlined-basic"
                value={dx}
                label="Estimated value"
                variant="outlined"
                onChange={(e) => setdx(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
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