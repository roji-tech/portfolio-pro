import styled from "styled-components";

const BannerStyle = styled.section`
  width: 100%;
  background-color: #fff;
  display: grid;
  grid-template-columns: 60% 40%;
  height: 70vh;

  > div {
    width: 100%;
    height: 100%;
  }

  .text {
    margin-left: 16%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5vh;
  }

  .image {
    background-color: blue;
  }
`;

export default BannerStyle;
