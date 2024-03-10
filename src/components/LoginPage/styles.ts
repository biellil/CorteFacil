import styled from 'styled-components'

export const MainHero = styled.main`
  display: flex;
  height: 100vh;
  background-color: var(--background);
  justify-content: space-between;
  align-items: center;

  button {
    cursor: pointer;
  }
  @media (max-width: 425px) {
    flex-direction: column;
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
    width: 25rem;
    img {
      padding: 1rem;
      width: 40rem;
      height: 30rem;
    }
  }
  @media (max-width: 425px) {
    margin: 2rem;
    height: 19vh;
    width: 18rem;
    img {
      padding: 1rem;
      padding: 0rem;
      width: auto;
      height: 20rem;
    }
  }
`
export const Sectionform = styled.section`
  height: 100vh;
  width: 80vh;
  background-color: var(--secondary);
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
      font-weight: 500;
      font-style: normal;
      color: var(--text);
    }
    p {
      font-size: 1rem;
      font-weight: 300;
      font-style: normal;
      color: var(--text);
    }
  }
  @media (max-width: 768px) {
    width: 68vh;
  }
  @media (max-width: 425px) {
    height: 100vh;
    width: 64vh;

    > div {
      align-items: center;

      h1 {
        margin-top: 2.5rem;
        font-size: 3rem;
        color: var(--text);
      }
      p {
        font-size: 1.4rem;
        font-weight: 350;
        font-style: normal;
        color: var(--text);
      }
    }
  }
`
export const Form = styled.form`
  padding: 2rem 0;
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
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    color: var(--text);
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
  @media (max-width: 425px) {
    gap: 0.5rem;
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
    color: var(--text);
  }
  input {
    border-radius: 16px;
    padding: 1rem;
    height: 2.8rem;
    width: 20rem;
    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);

    &:focus {
      border: 2px solid var(--primary);
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.644);
    }
    font-size: 1.2rem;
  }

  a {
    color: var(--primary);

    margin-left: 11.5rem;
    &:hover {
      text-shadow: 0 4px 5px;
    }
  }
  @media (max-width: 768px) {
    gap: 0.2rem;
    input {
      width: 20rem;
      height: 2.5rem;
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
    &:hover {
      text-shadow: 0 4px 5px;
    }
  }
  @media (max-width: 425px) {
    gap: 1rem;
  }
`
