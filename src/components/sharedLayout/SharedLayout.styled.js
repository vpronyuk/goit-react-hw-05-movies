import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #27296d;
  padding: 20px;
`;

export const StyledLink = styled(NavLink)`
  display: block;

  padding: 14px 70px;

  color: #fff;
  font-size: 20px;
  font-weight: 500;
  text-decoration: none;
  display: inline-block;

  &.active {
    color: yellow;
    text-decoration: underline;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    text-decoration: underline;
  }
`;

