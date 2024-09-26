import { Container, NameText, Progress, UserPicture} from './styles';

type UserInfoProps = {
  nome: string,
  image: string,
  percentual: number,
}

export const UserInfo = (props: UserInfoProps) => {
  return (
    <Container>
        <UserPicture src={props.image} />
        <div>
            <NameText>{props.nome}</NameText>
            <Progress percentual={props.percentual} />
        </div>
    </Container>
  )
}