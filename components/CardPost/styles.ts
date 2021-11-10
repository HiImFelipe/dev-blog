import styled from "styled-components";
import { mainColors } from "../../constants/colors";

export const Container = styled.nav`
  background-color: ${mainColors.neutral};
  color: white;
  min-height: 400px;
  margin: 1rem;
  flex: 1 0 28%;
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
  overflow-wrap: break-word;
  padding: 10px;
  margin: 0;
`;
