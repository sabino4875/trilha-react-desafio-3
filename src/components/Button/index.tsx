import React from 'react'
import { ButtonContainer } from './styles';

type ButtonProps = {
  title: string,
  variant?: string,
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  type: string,
}

export const Button = (props: ButtonProps) => {
  return (
    <ButtonContainer variant={props.variant ?? 'primary'} onClick={props.onClick} type={props.type}>{props.title}</ButtonContainer>
  )
}