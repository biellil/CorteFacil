import { Calendar, House, Scissors, User } from '@phosphor-icons/react'
import { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { ThemeContext } from 'styled-components'
import logoLight from '../../assets/logoBarbershp.png'
import logoDark from '../../assets/logoBarbershpDark.png'
import { Themeselection } from '../Themeselection'
import {
  ActiveLink,
  HeaderMain,
  HeaderNav,
  Headerlogin,
  LogoHero,
} from './styles'

export const Header = () => {
  const location = useLocation()
  const theme = useContext(ThemeContext) || { mode: 'light' }

  return (
    <HeaderMain>
      <LogoHero>
        <img
          src={theme.mode === 'dark' ? logoDark : logoLight}
          alt="logo barbershop"
        />
      </LogoHero>
      <HeaderNav>
        <ActiveLink
          to="/Feat"
          className={location.pathname === '/Feat' ? 'active' : ''}
        >
          <House size={40} weight="fill" />
          <span>Feat</span>
        </ActiveLink>

        <ActiveLink
          to="/Serviço"
          className={location.pathname === '/Serviço' ? 'active' : ''}
        >
          <Scissors size={40} weight="fill" />
          <span>Serviços</span>
        </ActiveLink>

        <ActiveLink
          to="/Agendar"
          className={location.pathname === '/Agendar' ? 'active' : ''}
        >
          <Calendar size={40} weight="fill" />
          <span>Agendar</span>
        </ActiveLink>
      </HeaderNav>
      <Headerlogin>
        <ActiveLink to="/Auth">
          <User size={40} weight="fill" />
        </ActiveLink>
      </Headerlogin>
      <Themeselection />
    </HeaderMain>
  )
}
