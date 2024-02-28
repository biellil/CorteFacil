import hero from '../../assets/heroBarbershp.png'

import { MainHero } from './styles'

export function Auth() {
  return (
    <MainHero>
      <section>
        <h1>Meu aplicativo React com Vite</h1>
        <img src={hero} alt="Hero" />
      </section>
      <section></section>
    </MainHero>
  )
}
