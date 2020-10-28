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
  Divider,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { getInterpolation } from "../functions/axios";

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
  grid: {
    marginTop: theme.spacing(5),
  },
  typho: {
    marginTop: theme.spacing(5),
  },
}));

export default function Page() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [x, setx] = useState(5);
  const [xi1, setxi1] = useState(0);
  const [xi2, setxi2] = useState(8);
  const [xi3, setxi3] = useState(14);
  const [xi4, setxi4] = useState(20);
  const [xi5, setxi5] = useState(23);
  const [xi6, setxi6] = useState(30);
  const [yi1, setyi1] = useState(0);
  const [yi2, setyi2] = useState(50);
  const [yi3, setyi3] = useState(96);
  const [yi4, setyi4] = useState(110);
  const [yi5, setyi5] = useState(100);
  const [yi6, setyi6] = useState(86);

  const [result, setresult] = useState("");

  const back = () => {
    navigate("/whole");
  };

  const generate = () => {
    const data = {
      x: x,
      xi: [xi1, xi2, xi3, xi4, xi5, xi6],
      yi: [yi1, yi2, yi3, yi4, yi5, yi6],
    };
    getInterpolation(data).then((res) => {
      setresult(`In second ${x} will have the speed ${res}`);
    });
  };
  return (
    <Typography align="center">
      <Card className={classes.card}>
        <CardHeader
          title="Lesson 3"
          titleTypographyProps={{ align: "center" }}
          subheaderTypographyProps={{ align: "center" }}
          className={classes.cardHeader}
        />
        <CardContent>
          <Grid container spacing={3} alignItems="flex-end">
            <Grid item xs={12} sm={12} md={12}>
              <TextField
                id="outlined-basic"
                label="t"
                value={x}
                variant="outlined"
                onChange={(e) => setx(e.target.value)}
              />
            </Grid>

            <Grid item xs={12} sm={2} md={2}>
              <TextField
                id="outlined-basic"
                label="x1"
                value={xi1}
                variant="outlined"
                onChange={(e) => setxi1(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={2} md={2}>
              <TextField
                id="outlined-basic"
                label="x2"
                value={xi2}
                variant="outlined"
                onChange={(e) => setxi2(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={2} md={2}>
              <TextField
                id="outlined-basic"
                label="x3"
                value={xi3}
                variant="outlined"
                onChange={(e) => setxi3(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={2} md={2}>
              <TextField
                id="outlined-basic"
                label="x4"
                value={xi4}
                variant="outlined"
                onChange={(e) => setxi4(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={2} md={2}>
              <TextField
                id="outlined-basic"
                label="x5"
                value={xi5}
                variant="outlined"
                onChange={(e) => setxi5(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={2} md={2}>
              <TextField
                id="outlined-basic"
                label="x6"
                value={xi6}
                variant="outlined"
                onChange={(e) => setxi6(e.target.value)}
              />
            </Grid>

            <Grid item xs={12} sm={2} md={2}>
              <TextField
                id="outlined-basic"
                label="y1"
                value={yi1}
                variant="outlined"
                onChange={(e) => setyi1(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={2} md={2}>
              <TextField
                id="outlined-basic"
                label="y2"
                value={yi2}
                variant="outlined"
                onChange={(e) => setyi2(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={2} md={2}>
              <TextField
                id="outlined-basic"
                label="y3"
                value={yi3}
                variant="outlined"
                onChange={(e) => setyi3(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={2} md={2}>
              <TextField
                id="outlined-basic"
                label="y4"
                value={yi4}
                variant="outlined"
                onChange={(e) => setyi4(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={2} md={2}>
              <TextField
                id="outlined-basic"
                label="y5"
                value={yi5}
                variant="outlined"
                onChange={(e) => setyi5(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={2} md={2}>
              <TextField
                id="outlined-basic"
                label="y6"
                value={yi6}
                variant="outlined"
                onChange={(e) => setyi6(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <TextField style={{width:"500px"}}
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
