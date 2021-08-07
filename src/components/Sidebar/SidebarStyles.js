import styled from 'styled-components';

export const SidebarDiv = styled.div`
  position: fixed;
  top: 50%;
  right: 2%;
  display: flex;
  flex-direction: column;
  justify-content: between;
  z-index: 2;
  @media ${(props) => props.theme.breakpoints.sm} {
    right: 1%;
  }
`;

export const SidebarButton = styled.button`
  width: 10px;
  height: 10px;
  border: none;
  border-radius: 100%;
  margin: 10px 3px;
  align-self: center;
  background-color: rgba(255, 255, 255, 0.75);
  &:hover{
      width: 11px;
      height: 11px;
      margin: 9px 2px;
      background-color: #B133FF;
      cursor: pointer
  }
  &:active{
      border: none;
      outline: none;
      background-color: #B133FF;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 7px;
    height: 7px;
    &:active{
      width: 8px;
      height: 8px;
  }
  }
`;