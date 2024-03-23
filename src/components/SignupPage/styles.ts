import styled from 'styled-components'

export const MainHero = styled.main`
  display: flex;
  max-width: 100%;
  max-height: 100%;
  height: 100vh;

  background-color: var(--background);
  justify-content: space-between;
  align-items: center;

  button {
    cursor: pointer;
  }
  @media (max-width: 425px) {
    flex-direction: column-reverse;
  }
`

export const SectionHero = styled.section`
  display: flex;
  flex: 1;
  width: 20rem;
  align-items: center;
  justify-content: center;

  img {
    padding: 0.5rem;

    width: 50rem;
    height: 50rem;
  }

  @media (max-width: 768px) {
    img {
      padding: 1rem;
      width: 40rem;
      height: 30rem;
    }
  }
  @media (max-width: 425px) {
    display: none;

    img {
      padding: 0rem;
      width: 15rem;
      height: 15rem;
    }
  }
`
export const Sectionform = styled.section`
  height: 100vh;
  width: 45vw;
  background-color: var(--secondary);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > div {
    gap: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      color: var(--primary);
      font-size: 4rem;
      font-weight: 500;
      font-style: normal;
    }
  }
  @media (max-width: 768px) {
    width: 70vh;
  }
  @media (max-width: 425px) {
    height: 100vh;
    width: 100vw;

    > div {
      align-items: center;

      h1 {
        margin-top: 2.5rem;
        font-size: 3rem;
      }
      p {
        font-size: 1.4rem;
        font-weight: 350;
        font-style: normal;
      }
    }
  }
`
export const Form = styled.form`
  padding: 0.5rem 0;

  gap: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  > div {
  }
  > button,
  input {
    width: 90%;
    max-width: 20rem;
  }
  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 16px;

    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
    height: 2.5rem;
    width: 20rem;
    color: white;
    font-size: 1.2rem;
    font-weight: 400;
    font-style: normal;
    background-color: var(--primary);
    cursor: pointer;
    &:hover {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.644);
    }
  }
  a {
    color: var(--primary);
    &:hover {
      text-shadow: 0 4px 5px;
    }
  }
  @media (max-width: 425px) {
    gap: 0.9rem;
  }
`

export const DivLabelInput = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: space-evenly;

  label {
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    font-weight: 400;
    font-style: normal;
    color: var(--text);
    gap: 0.5rem;
    p {
      font-size: 1rem;
      color: red;
    }
  }
  input {
    padding: 1.2rem;
    font-size: 1.1rem;
    border-radius: 16px;

    height: 2.8rem;
    width: 20rem;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);

    &:focus {
      border: 2px solid var(--primary);
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.644);
    }
  }

  a {
    color: #000;
    margin-left: 11.5rem;
    &:hover {
      text-shadow: 0 4px 5px;
    }
  }
  @media (max-width: 768px) {
    input {
      width: 19rem;
      height: 3rem;
    }
  }
`

export const Logodiv = styled.div`
  padding: 0 3rem;
  display: flex;
  flex-direction: column;
  color: var(--text);
  align-items: center;
  gap: 2rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 1rem;

    > button {
      border: 2px solid var(--primary);
      border-radius: 16px;
      &:hover {
        box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
      }
    }
    img {
      width: 42px;
      padding: 1px;
    }
  }
  > button {
    font-size: 1.3rem;
    color: var(--primary);
    background-color: var(--secondary);
    &:hover {
      text-shadow: 0 4px 5px;
    }
  }
  @media (max-width: 425px) {
    gap: 1rem;
  }
`
