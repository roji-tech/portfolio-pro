import styled from "styled-components";

const NavStyle = styled.nav`
  height: 50px;
  background-color: rgba(0, 0, 0, 0.1);
  color: black;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .right,
  .left {
    * {
      white-space: nowrap;
    }

    display: flex;
    list-style-type: none;
    justify-content: space-between;
  }

  .left {
    gap: 10%;

    ul {
      list-style-type: none;
      display: flex;
      justify-content: space-between;
      width: 100%;
      gap: 10%;
    }
  }

  .right {
    gap: 15px;
    color: white;
  }
`;

export default NavStyle;
