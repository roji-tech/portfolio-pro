import styled from "styled-components";

const AboutStyle = styled.section`
  background-color: aliceblue;
  padding: 10%;
  text-align: center;
  width: 100%;

  p {
    padding: 10%;
    font-size: 1.3em;
    line-height: 1.5em;

    @media screen and (min-width: 900px) {
      padding: 5% 30%;
    }
  }
`;

export default AboutStyle;
