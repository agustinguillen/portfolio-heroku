import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 1rem;
  padding-top: 2rem;
`;

export const Div1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  flex-basis: 20%;
  @media ${(props) => props.theme.breakpoints.sm} {
    align-items: center;
    flex-basis: 30%;
    order: -1;
  }
`;
export const Div2 = styled.div`
  display: flex;
  justify-content: space-around;
  flex-basis: 50%;
  @media ${(props) => props.theme.breakpoints.sm} {
    flex-basis: 100%;
  }
`;
export const Div3 = styled.div`
  display: flex;
  justify-content: space-around;
  flex-basis: 20%;
  @media ${(props) => props.theme.breakpoints.sm} {
    flex-basis: 30%;
    order: -1;
  }
`;

// Navigation Links
export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`;

/// DropDown Contact
export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;

  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '.75')};
  transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : 'scaleY(1)')};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;


// Social Icons 

export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  &:hover {
      transform: scale(1.2);
      cursor: pointer;
      
    }
`

export const Span = styled.span`
  font-size: 2rem;
`