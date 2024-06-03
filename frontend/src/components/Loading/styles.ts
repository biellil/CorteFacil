import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border-left-color: var(--primary);

  animation: ${rotate} 1s linear infinite;
`
export const Divstyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
