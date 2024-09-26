import { useNavigate } from 'react-router-dom';
import { Button } from '../Button';
import { Container, Wrapper, BuscarInputContainer, Input, Row, Menu, MenuRight, UserPicture} from './styles';

type HeaderProps = {
  autenticado?: boolean,
}

export const Header = (props: HeaderProps) => {
  const navigate = useNavigate();

  const handleClickLogin = () => {
      navigate('/login')
  }

  const handleClickRegister = () => {
    navigate('/register')
}


  return (
    <Wrapper>
      <Container>
          <Row>
            <img src='../../assets/logo-dio.png' alt="Logo da dio"/>
            {props.autenticado ? (
              <>
               <BuscarInputContainer>
                <Input placeholder='Buscar...'/>
               </BuscarInputContainer>
                <Menu>Live Code</Menu>
                <Menu>Global</Menu>
              </>
            ) : null}
          </Row>
          <Row>
              {props.autenticado ? (
                <UserPicture src="https://avatars.githubusercontent.com/u/45184516?v=4"/>
              ) : (
              <>
                <MenuRight href="/">Home</MenuRight>
                <Button type="button" title="Entrar" onClick={handleClickLogin} />
                <Button type="button" title="Cadastrar" onClick={handleClickRegister} />
              </>)}
          </Row>
      </Container>
    </Wrapper>
  )
}