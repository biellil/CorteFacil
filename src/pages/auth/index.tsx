import Facebook from '../../assets/Facebook-logo.png'
import Google from '../../assets/google-logo.png'
import hero from '../../assets/heroBarbershp.png'
import {
  DivLabelInput,
  Form,
  Logodiv,
  MainHero,
  SectionHero,
  Sectionform,
} from './styles'
export function Auth() {
  return (
    <MainHero>
      <SectionHero>
        <img src={hero} alt="Hero" />
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
          <p>OU</p>
          <Logodiv>
            <button type="button">
              <img src={Facebook} alt="" />
            </button>
            <button type="button">
              <img src={Google} alt="" />
            </button>
          </Logodiv>

          <a href="#">Não possui conta? Cadastre-se</a>
        </Form>
      </Sectionform>
    </MainHero>
  )
}
