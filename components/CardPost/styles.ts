import styled from "styled-components";
import { mainColors } from "../../constants/colors";
import { width } from "../../constants/width";

export const Container = styled.div`
  color: white;
  min-height: 500px;
  padding: 1rem;
  flex: 1 0 28%;
  max-width: 33%;

  @media screen and (max-width: ${width.large}) {
    max-width: 50%;
    flex: 1 0 48%;
  }

  @media screen and (max-width: ${width.medium}) {
    max-width: 100%;
    min-height: auto;
  }
`;

export const Card = styled.div`
  background-color: ${mainColors.neutral};
  height: 100%;
`;

export const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

export const CardTitle = styled.h2`
  padding: 10px 10px 0 10px;
  margin: 0;
`;

export const Description = styled.p`
  padding: 10px;
  margin: 0;
`;

export const PostLink = styled.span`
  color: ${mainColors.link};
  cursor: pointer;
`
