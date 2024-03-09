import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from 'styled-components'
import Facebook from '../../assets/apple-logo.png'
import Google from '../../assets/google-logo.png'
import logoLight from '../../assets/logoBarbershp.png'
import logoDark from '../../assets/logoBarbershpDark.png'
import { AuthAnimationWrapper } from '../AuthAnimationWrapper'
import {
  DivLabelInput,
  Form,
  Logodiv,
  MainHero,
  SectionHero,
  Sectionform,
} from './styles'
export function LoginPage() {
  const theme = useContext(ThemeContext)
  return (
    <AuthAnimationWrapper>
      <MainHero>
        <SectionHero>
          <Link to="/">
            <img
              src={theme.mode === 'dark' ? logoDark : logoLight}
              alt="Hero"
            />
          </Link>
        </SectionHero>
        <Sectionform>
          <div>
            <h1>Login</h1>
            <p>Entre com email e senha.</p>
          </div>
          <Form>
            <DivLabelInput>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="exemplo@gmail.com"
              />
            </DivLabelInput>

            <DivLabelInput>
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="**********"
              />
              <a href="#">Esqueceu a senha?</a>
            </DivLabelInput>

            <button type="submit">Entrar</button>

            <Logodiv>
              <p>OU</p>
              <div>
                <button type="button">
                  <img src={Facebook} alt="" />
                </button>
                <button type="button">
                  <img src={Google} alt="" />
                </button>
              </div>
              <Link to="/signup">Não possui conta? Cadastre-se </Link>
            </Logodiv>
          </Form>
        </Sectionform>
      </MainHero>
    </AuthAnimationWrapper>
  )
}
