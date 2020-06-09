import styled from 'styled-components'

export const InputContainer = styled.div`
    width: ${props => (props.width === 'auto' ? 'auto' : `${props.width}px`)};
    text-align:left;
    outline: none;
    margin-bottom: 10px;
`
export const InputWrapper = styled.div`
    width: ${props => (props.width === 'auto' ? 'auto' : `${props.width}px`)};
    overflow-x:scroll;
    * {
    outline: none;
    }
    [contenteditable="false"] {
      cursor: not-allowed;
    }
    .text {
      background-color: ${props => (props.disabled ? "#f3f3f3" : "white")};
      width: ${props => props.width === 'auto' ? 'auto': 'max-content'};
      text-align: left;
      border-bottom: 2px solid gainsboro;
    }
    .textarea {
      overflow-y:scroll;
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
      width: 0
    }
`

