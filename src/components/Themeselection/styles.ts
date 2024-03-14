import styled from 'styled-components'

export const Sectiontema = styled.nav`
  position: fixed;

  top: 75px;
  right: 2px;

  cursor: pointer;
  background-color: var(--button);
  border-radius: 25px 0px 0px 25px;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: 5s;
  button {
    margin: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    transition: 5s;

    svg {
      width: 3rem;
      height: 3rem;
    }
  }
`

export const SectiontemaLeft = styled.nav`
  position: fixed;

  top: 75px;
  left: 2px;

  cursor: pointer;
  background-color: var(--button);
  border-radius: 0px 25px 25px 0px;
  transition: 5s;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    margin: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    transition: 5s;
    svg {
      width: 3rem;
      height: 3rem;
    }
  }
`
