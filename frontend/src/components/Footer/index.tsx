import { FacebookLogo, InstagramLogo } from '@phosphor-icons/react'
import { ContentGrid, FooterContainer, SocialMedia, Title } from './styles'

export const Footer = () => {
  return (
    <FooterContainer>
      <ContentGrid>
        <SocialMedia href="#">
          <InstagramLogo size={32} />
          <p>Instagram</p>
        </SocialMedia>

        <Title>
          <h1>Deck Barbearia™</h1>
        </Title>

        <SocialMedia href="#">
          <FacebookLogo size={32} />
          <p>Facebook</p>
        </SocialMedia>
      </ContentGrid>
    </FooterContainer>
  )
}
