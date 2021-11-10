import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardTitle,
  Container,
  Description,
  ImageContainer,
  PostLink,
} from "./styles";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  image: string;
}

const CardPost: React.FC<IProps> = ({ description, title, image }) => {
  return (
    <Container>
      <Card>
        <ImageContainer>
          <Image src={image} width={16} height={9} layout="responsive"></Image>
        </ImageContainer>

        <CardTitle>{title}</CardTitle>

        <Description>
          {description.length >= 255 ? (
            <div>
              {description.substring(0, 255) + "... "}
              <PostLink>Continue Reading</PostLink>
            </div>
          ) : (
            description
          )}
        </Description>
      </Card>
    </Container>
  );
};

export default CardPost;
