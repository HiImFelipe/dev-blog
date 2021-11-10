import styled from "styled-components";
import { mainColors } from "../../constants/colors";
import { width } from "../../constants/width";

export const Container = styled.nav`
  color: white;
  min-height: 400px;
  padding: 1rem;
  flex: 1 0 28%;
  max-width: 33%;

  @media screen and (max-width: ${width.large}) {
    max-width: 50%;
    flex: 1 0 48%;
  }

  @media screen and (max-width: ${width.medium}) {
    max-width: 100%;
  }
`;

export const Card = styled.div`
  background-color: ${mainColors.neutral};
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
