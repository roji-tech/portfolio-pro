import styled from "styled-components";

const SkillStyle = styled.section`
  padding: 5%;
  display: flex;
  flex-direction: column;
  gap: 30px;

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    list-style-type: square;

    div {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      grid-gap: 1rem;
      padding: 50px
    }

    .right {
      background-color: aliceblue;
    }
  }
`;

export default SkillStyle;
