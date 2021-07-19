import { Container } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => (
  <nav>
    <Container maxWidth="lg">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/item/123">Test Item</Link>
        </li>
      </ul>
    </Container>
  </nav>
);

export default Header;
