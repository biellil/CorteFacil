import styled from 'styled-components'

export const MainHero = styled.main`
  display: flex;
  height: 100vh;
  background-color: #8085a5;
  justify-content: space-between;
  align-items: center;
`

export const SectionHero = styled.section`
  display: flex;
  flex: 1;
  width: 10vh;

  img {
    padding: 1rem;
    width: 40rem;
    height: 20rem;
  }
`
export const Sectionform = styled.section`
  height: 100vh;
  width: 90vh;
  background-color: #eceff1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > form {
    padding: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
  }
`
