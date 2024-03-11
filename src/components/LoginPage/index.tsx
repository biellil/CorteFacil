import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import Facebook from '../../assets/apple-logo.png'
import Google from '../../assets/google-logo.png'
import logoLight from '../../assets/logoBarbershp.png'
import logoDark from '../../assets/logoBarbershpDark.png'
import { AuthAnimationWrapper } from '../AuthAnimationWrapper'
import { Themeselection } from '../Themeselection'
import {
  DivLabelInput,
  Form,
  Logodiv,
  MainHero,
  SectionHero,
  Sectionform,
} from './styles'
export const LoginPage = ({
  switchToSignup,
}: {
  switchToSignup: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void
}) => {
  const theme = useContext(ThemeContext) || { mode: 'light' }
  return (
    <AuthAnimationWrapper>
      <MainHero>
        <SectionHero>
          <img
            src={theme.mode === 'dark' ? logoDark : logoLight}
            alt="logo barbershop"
          />
        </SectionHero>
        <Sectionform>
          <Themeselection />
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
              <button onClick={switchToSignup}>
                Não possui conta? Cadastre-se
              </button>
            </Logodiv>
          </Form>
        </Sectionform>
      </MainHero>
    </AuthAnimationWrapper>
  )
}
