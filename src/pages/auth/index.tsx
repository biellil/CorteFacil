import hero from '../../assets/heroBarbershp.png'
import { MainHero, SectionHero, Sectionform } from './styles'

export function Auth() {
  return (
    <MainHero>
      <SectionHero>
        <img src={hero} alt="Hero" />
      </SectionHero>
      <Sectionform>
        <form>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="exemplo@gmail.com"
          />

          <label htmlFor="password">Senha</label>
          <input type="password" id="password" name="password" />

          <button type="submit">Entrar</button>

          <div>
            <button type="button">Facebook</button>
            <button type="button">Google</button>
          </div>

          <a href="#">Esqueceu a senha?</a>
          <a href="#" className="sign-up">
            Não possui conta? Cadastre-se
          </a>
        </form>
      </Sectionform>
    </MainHero>
  )
}
