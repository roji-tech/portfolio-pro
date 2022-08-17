import styled from "styled-components";

const ContactStyle = styled.section`
  display: flex;
  padding: 5% 0;

  .grid {
    height: 80%;
    display: grid;
    grid-template-columns: 50% 50%;
    background-color: black;
    height: 300px;
  }

  .right {
    background-color: navy;
  }
`;

export default ContactStyle;
