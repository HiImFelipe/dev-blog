import styled from "styled-components";
import { mainColors } from "../../constants/colors";

export const Container = styled.nav`
  background-color: ${mainColors.primary};
  color: white;
`;

export const ListContainer = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 30px;
`;

export const ListItem = styled.li`
  display: inline;
  margin: 0 15px;
`;

export const ListAnchor = styled.a`
  padding: 15px;
`;
