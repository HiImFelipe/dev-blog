import React from "react";
import Link from "next/link";
import { Container, ListContainer, ListItem } from "./styles";

const Navigation = () => {
  return (
    <Container>
      <ListContainer>
        <ListItem>
          <Link href="/">
            <a>Home</a>
          </Link>
        </ListItem>

        <ListItem>
          <Link href="/about">
            <a>About</a>
          </Link>
        </ListItem>
      </ListContainer>
    </Container>
  );
};

export default Navigation;
