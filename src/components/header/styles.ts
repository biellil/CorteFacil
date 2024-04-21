import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderMain = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 20vh;
  background-color: var(--secondary);
`
export const LogoHero = styled.div`
  img {
    padding: 0.5rem;

    width: 10rem;
    height: 10rem;
  }
`
export const HeaderNav = styled.nav`
  display: flex;
  gap: 1rem;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-decoration: none;
    color: var(--text);
    font-size: 1.3rem;
    font-weight: 400;
    font-style: normal;
  }
`
export const Headerlogin = styled.nav`
  display: flex;
  gap: 1rem;
  align-items: center;
`
export const ActiveLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-decoration: none;
  color: var(--text);
  font-size: 1.3rem;
  font-weight: 400;
  font-style: normal;

  &.active {
    color: var(--primary);
  }
`
