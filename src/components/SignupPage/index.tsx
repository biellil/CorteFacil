import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
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

interface FormData {
  emailOrPhone: string
  password: string
  confirmPassword: string
}

const isEmailOrPhone = (value: string) => {
  const emailRegex = /\S+@\S+\.\S+/
  const phoneRegex = /^[0-9]{10,11}$/
  return emailRegex.test(value) || phoneRegex.test(value)
}

const SignupSchema = z
  .object({
    emailOrPhone: z
      .string()
      .nonempty({ message: 'Email ou telefone é obrigatório' })
      .refine((val) => isEmailOrPhone(val), {
        message: 'Email ou telefone inválido',
      }),
    password: z
      .string()
      .min(6, { message: 'Senha deve ter pelo menos 6 caracteres' }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas não coincidem',
    path: ['confirmPassword'],
  })

export const SignupPage = ({
  switchToLogin,
}: {
  switchToLogin: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void
}) => {
  const theme = useContext(ThemeContext) || { mode: 'light' }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(SignupSchema),
  })

  const onSubmit = (data: FormData) => {
    console.log(data)
    // Implemente a lógica de cadastro aqui
  }

  return (
    <AuthAnimationWrapper>
      <MainHero>
        <Sectionform>
          <Themeselection />
          <div>
            <h1>Crie uma conta</h1>
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
            </DivLabelInput>

            <DivLabelInput>
              <label htmlFor="confirmPassword">
                Confirmar senha
                {errors.confirmPassword && (
                  <p>{errors.confirmPassword.message}</p>
                )}
              </label>
              <input
                type="password"
                id="confirmPassword"
                {...register('confirmPassword')}
                placeholder="**********"
              />
            </DivLabelInput>

            <button type="submit">Criar conta</button>

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
              <button onClick={switchToLogin}>Já estou cadastrado</button>
            </Logodiv>
          </Form>
        </Sectionform>
        <SectionHero>
          <img src={theme.mode === 'dark' ? logoDark : logoLight} alt="Hero" />
        </SectionHero>
      </MainHero>
    </AuthAnimationWrapper>
  )
}
