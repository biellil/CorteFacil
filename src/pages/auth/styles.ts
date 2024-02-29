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
  width: 25rem;
  align-items: center;
  justify-content: center;
  img {
    padding: 1rem;

    width: 45rem;
    height: 30rem;
  }
`
export const Sectionform = styled.section`
  height: 100vh;
  width: 35rem;
  background-color: #eceff1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > div {
    gap: 1rem;
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 2.5rem;
      font-weight: 400;
      font-style: normal;
    }
    p {
      font-size: 1rem;
      font-weight: 300;
      font-style: normal;
    }
  }

  > form {
    padding: 3rem 0;
    margin-left: -1rem;
    gap: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    > div {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      gap: 0.4rem;
      label {
        font-size: 1.3rem;
        font-weight: 400;
        font-style: normal;
      }
      input {
        border-radius: 16px;
        padding: 1rem;
        height: 2rem;
        width: 20rem;
        box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
      }

      a {
        color: #000;
        margin-left: 11.5rem;
      }
    }

    > button {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 16px;
      background-color: #2c3da8;
      box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
      height: 2rem;
      width: 20rem;
      color: white;
      font-size: 1rem;
      font-weight: 400;
      font-style: normal;
    }
    button {
      cursor: pointer;
    }
  }
`
