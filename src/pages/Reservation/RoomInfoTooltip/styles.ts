import styled from "styled-components";

export const StyledTooltip = styled.div`
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  z-index: 1101;
  display: flex;
  justify-content: center;
  align-items: center;
  .tooltipWindow {
    width: 90%;
    max-width: 300px;
    background: #fff5ef;
    border: #ffddca solid 5px;
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding-bottom: 20px;

    .closeContainer {
      width: 100%;
      display: flex;
      justify-content: flex-end;

      svg {
        margin-right: -15px;
        margin-top: -15px;
      }
    }
  }
`;
