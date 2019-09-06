import React from "react";
import Logo from "../assets/logo.svg";

export default function Main({ match }) {
  return <h1>{match.params.id}</h1>;
}
