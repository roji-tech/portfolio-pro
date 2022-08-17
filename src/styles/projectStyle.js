import styled from "styled-components";

const ProjectStyle = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  height: 50vh;
  gap: 5px;

  @media screen and (min-width: 900px) {
    height: 65vh;
  }

  div {
    width: 100%;
    height: 100%;
    background-color: blue;
  }

  #one {
    grid-row: 1/3;
  }

  #two {
    grid-column: 2/4;
  }

  #three {
    background-color: #030340;
  }

  #four {
    grid-column: 3;
    grid-row: 2/4;
  }

  #five {
    grid-column: 1/3;
    grid-row: 3/5;
    background-color: navy;
  }

  #six {
  }
`;

export default ProjectStyle;
