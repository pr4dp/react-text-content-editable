import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  min-width: 0px;
  width: 100%;
  flex: 1 1 auto;
`;

export const RootWrapper = styled.div`
  flex-direction: column;
  width: 100%;
  display: flex;
  max-width: 100%;
  margin-left: -8px;
  flex: 0 1 auto;
`;

export const InputContainer = styled.div`
  width: ${props => (props.width === "auto" ? "auto" : `${props.width}px`)};
  text-align: left;
  outline: none;
`;
export const InputWrapper = styled.div`
  width: ${props => (props.width === "auto" ? "auto" : `${props.width}px`)};
  * {
    outline: none;
  }
  [contenteditable="false"] {
    padding: 6px;
  }
  [contenteditable="true"] {
    padding: 6px;
  }
  .text {
    background-color: ${props =>
    props.readOnly ? "transparent" : "transparent"};
    width: ${props => (props.width === "auto" ? "auto" : `${props.width}px`)};
    text-align: left;
    transition: border-color 0.2s ease-in-out 0s;
    border: ${props =>
    props.readOnly ? "2px solid white" : "2px solid black"};
    border-radius: 3px;
  }
  .textarea {
    overflow-y: scroll;
  }
  ::-webkit-scrollbar {
    -webkit-appearance: none;
  }
  ::-webkit-scrollbar-thumb {
    width: 0;
  }
  ::-webkit-scrollbar-track {
    width: 0;
  }
  ::-webkit-scrollbar-thumb:horizontal {
    width: 0;
  }
`;
