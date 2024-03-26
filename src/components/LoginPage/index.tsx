import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { ThemeContext } from 'styled-components'
import { z } from 'zod'
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

interface LoginPageProps {
  switchToSignup: () => void
}

interface FormData {
  emailOrPhone: string
  password: string
}

const isEmailOrPhone = (value: string) => {
  const emailRegex = /\S+@\S+\.\S+/
  const phoneRegex = /^[0-9]{10}$/
  return emailRegex.test(value) || phoneRegex.test(value)
}

const loginSchema = z.object({
  emailOrPhone: z
    .string()
    .nonempty({ message: 'Email ou telefone é obrigatório' })
    .refine((val) => isEmailOrPhone(val), {
      message: 'Email ou telefone inválido',
    }),
  password: z
    .string()
    .min(6, { message: 'Senha deve ter pelo menos 6 caracteres' })
    .max(50, { message: 'Senha deve ter no máximo 50 caracteres' }),
})

export const LoginPage = ({ switchToSignup }: LoginPageProps) => {
  const theme = useContext(ThemeContext) || { mode: 'light' }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(loginSchema),
  })

  const navigate = useNavigate()
  const onSubmit = (data: FormData) => {
    navigate('/feat')
    console.log(data)
  }

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
            <p>Entre com Email ou Telefone e senha.</p>
          </div>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <DivLabelInput>
              <label htmlFor="emailOrPhone">
                Email ou Telefone
                {errors.emailOrPhone && <p>{errors.emailOrPhone.message}</p>}
              </label>
              <input
                type="text"
                id="emailOrPhone"
                {...register('emailOrPhone')}
                placeholder="Email ou Telefone"
              />
            </DivLabelInput>

            <DivLabelInput>
              <label htmlFor="password">
                Senha {errors.password && <p>{errors.password.message}</p>}
              </label>
              <input
                type="password"
                id="password"
                {...register('password')}
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
