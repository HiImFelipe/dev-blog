import styled from "styled-components";
import { mainColors } from "../constants/colors";
import { width } from "../constants/width";

export const MainContent = styled.main`
  background-color: ${mainColors.primary};
  color: white;
  padding: 1.5rem;
  margin: 3em;
  min-height: 500px;
`;

export const Title = styled.h1`
  margin-top: 0;
`;

export const CardSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  @media screen and (max-width: ${width.medium}) {
    flex-direction: column;
  }
`;
