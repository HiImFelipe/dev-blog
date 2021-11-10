import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CardTitle, Container, Description, ImageContainer } from "./styles";

const CardPost = () => {
  return (
    <Container>
      <ImageContainer>
        <Image src="/images/ahri.jpg" width={16} height={9} layout="responsive"></Image>
      </ImageContainer>

      <CardTitle>Lorem ipsum dolor sit amet.</CardTitle>

      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolores
        exercitationem quisquam explicabo eaque nobis error quas distinctio.
        Omnis repellat sit delectus maxime. Incidunt, ullam.
      </Description>
    </Container>
  );
};

export default CardPost;
