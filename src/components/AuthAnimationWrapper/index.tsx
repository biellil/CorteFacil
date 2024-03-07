import React from 'react'
import { animated, useSpring } from 'react-spring'

type AuthAnimationWrapperProps = {
  children: React.ReactNode
}

export const AuthAnimationWrapper: React.FC<AuthAnimationWrapperProps> = ({
  children,
}) => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } })

  return <animated.div style={props}>{children}</animated.div>
}
