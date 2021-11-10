import styled from "styled-components";
import { mainColors } from "../constants/colors";

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
  justify-content: space-between;
  flex-direction: row;
`;
