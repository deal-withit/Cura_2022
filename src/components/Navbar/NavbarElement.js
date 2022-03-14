import styled from 'styled-components';
import logo from '../../resources/logo192.png';
// import { Link } from 'react-router-dom';
import { Container } from "../../globalStyles";

export const Nav = styled.nav`
  background: ${({ scrollNav }) =>
    scrollNav ? "rgba(0, 0, 0, 0.9)" : "transparent"};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 900px) {
    background: rgba(0, 0, 0, 0.9);
  }
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  max-width: 1300px;

  ${Container}
`;

export const NavLogo = styled.div`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const NavIcon = styled.img.attrs({ src: `${logo}` })`
  margin-right: 0.75rem;
  width: 3rem;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 900px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 95vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: rgba(0, 0, 0, 0.9);
  }
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #27c3ef;
  }

  @media screen and (max-width: 900px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;
export const NavLinks = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #27c3ef;
  }

  @media screen and (max-width: 900px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #27c3ef;
      transition: all 0.3s ease;
    }
  }
`;
