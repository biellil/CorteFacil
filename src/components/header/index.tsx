import { Calendar, House, Scissors, User } from '@phosphor-icons/react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from 'styled-components'
import logoLight from '../../assets/logoBarbershp.png'
import logoDark from '../../assets/logoBarbershpDark.png'
import { Themeselection } from '../Themeselection'
import { HeaderMain, HeaderNav, Headerlogin, LogoHero } from './styles'

export const Header = () => {
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
        <Link to="/feat">
          <House size={40} weight="fill" />
          <span>Feat</span>
        </Link>

        <Link to="/serviço">
          <Scissors size={40} weight="fill" />
          <span>Serviços</span>
        </Link>

        <Link to="/Agendar">
          <Calendar size={40} weight="fill" />
          <span>Agendar</span>
        </Link>
      </HeaderNav>
      <Headerlogin>
        <Link to="/auth">
          <User size={40} weight="fill" />
        </Link>
      </Headerlogin>
      <Themeselection />
    </HeaderMain>
  )
}
