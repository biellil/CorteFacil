import styled from 'styled-components'

export const MainHero = styled.main`
  display: flex;
  height: 100vh;
  background-color: #8085a5;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 425px) {
    flex-direction: column;
  }
`

export const SectionHero = styled.section`
  display: flex;
  flex: 1;
  width: 25rem;
  align-items: center;
  justify-content: center;

  img {
    padding: 0.5rem;

    width: 45rem;
    height: 30rem;
  }
`
export const Sectionform = styled.section`
  height: 100vh;
  width: 70vh;
  background-color: #eceff1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 51vh;
  }
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
`
export const Form = styled.form`
  padding: 3rem 0;
  margin-left: -1rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  > div {
  }

  > button {
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
        height: 2.5rem;
        width: 21rem;
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
`

export const DivLabelInput = styled.div`
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
`

export const Logodiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 2rem;
  button {
    border: 2px solid rgba(25, 142, 182, 1);
    border-radius: 16px;
  }
  img {
    padding: 1px;
  }
`
