import styled from 'styled-components'

export const FooterContainer = styled.footer`
  height: 20vh;
  background: var(--secondary);
`
export const ContentGrid = styled.div`
  display: grid;
  place-content: center;
  align-items: center;
  padding-top: 5.5vh;
  grid-template-columns: auto auto auto;
  color: var(--text);
`
export const Title = styled.div`
  font-style: italic;
`
export const SocialMedia = styled.a`
  display: flex;
  text-decoration: none;
  align-items: center;
  flex-direction: column;
  color: var(--text);
  margin: 0 20px;
  transition: 0.5s;
  &:hover {
    color: var(--primary);
  }
`
