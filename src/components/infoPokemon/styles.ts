import styled from "styled-components";
export const Container = styled.div`
  h4 {
    color: black;
  }
  .info_main {
    display: flex;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;

  img {
    width: 96px;
    height: 96px;
    margin-right: 20px;
  }
  .info_title {
    font-size: 1.5rem;
    font-weight: 900;
  }
  .info_content {
    font-size: 1rem;
  }

  .laft_side {
    display: flex;
  }

  .type {
    margin-right: 20px;
  }

  .modal-title {
    font-weight: 900;
  }
`;
