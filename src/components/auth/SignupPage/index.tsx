import { Link } from 'react-router-dom'
import Facebook from '../../../assets/apple-logo.png'
import Google from '../../../assets/google-logo.png'
import logo from '../../../assets/heroBarbershp.png'
import { AuthAnimationWrapper } from '../../AuthAnimationWrapper'
import {
  DivLabelInput,
  Form,
  Logodiv,
  MainHero,
  SectionHero,
  Sectionform,
} from './styles'

export function SignupPage() {
  return (
    <AuthAnimationWrapper>
      <MainHero>
        <Sectionform>
          <div>
            <h1>Crie uma conta</h1>
          </div>
          <Form>
            <DivLabelInput>
              <label htmlFor="name">Nome completo</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="José da Silva"
              />
            </DivLabelInput>
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
            </DivLabelInput>

            <DivLabelInput>
              <label htmlFor="confirmPassword">Confirmar senha</label>
              <input
                type="password"
                id="confirmPassword"
                name="password"
                placeholder="**********"
              />
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
            </Logodiv>
            <Link to="/">Já estou cadastrado</Link>
          </Form>
        </Sectionform>
        <SectionHero>
          <img src={logo} alt="Hero" />
        </SectionHero>
      </MainHero>
    </AuthAnimationWrapper>
  )
}
