import React from "react";
import { CardTitle, CardText, Row, Col, Button, Card } from "reactstrap";
import "../App.css";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const nextPage = (page) => {
    navigate("/" + page);
  };

  return (
    <div
      class="d-flex flex-column justify-content-center align-items-center"
      style={{
        backgroundImage: "url(" + "https://images.unsplash.com/photo-1418985991508-e47386d96a71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" + ")",
        backgroundSize: "cover",
        height: "100vh",
        color: "#f5f5f5",
      }}
    >
      <h3 style={{ color: "black" }}>Computational Mathematics</h3>
      <br />
      <Button
        style={{ backgroundColor: "black" }}
        onClick={() => {
          nextPage("BasicComputing");
        }}
      >
        <h5>1.Basic Computing</h5>
      </Button>
      <br />
      <Button
        style={{ backgroundColor: "black" }}
        onClick={() => {
          nextPage("LinearEquations");
        }}
      >
        <h5>2.Linear Equations</h5>
      </Button>
      <br />
      <Button
        style={{ backgroundColor: "black" }}
        onClick={() => {
          nextPage("Interpolation");
        }}
      >
        <h5>3.Interpolation </h5>
      </Button>
      <br />
      <Button
        style={{ backgroundColor: "black" }}
        onClick={() => {
          nextPage("Differentiation");
        }}
      >
        <h5>4.Differentiation</h5>
      </Button>
      <br />
      <Button
        style={{ backgroundColor: "black" }}
        onClick={() => {
          nextPage("Integration");
        }}
      >
        <h5>5.Integration</h5>
      </Button>
      <br />
      <Button
        style={{ backgroundColor: "black" }}
        onClick={() => {
          nextPage("Rootfinding");
        }}
      >
        <h5>6.Root-finding</h5>
      </Button>
      <br />
    </div>
  );
}

export default Home;
