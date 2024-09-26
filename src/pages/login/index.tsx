import { useNavigate  } from "react-router-dom";
import { MdEmail, MdLock } from 'react-icons/md'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { useForm } from "react-hook-form";


import { Container, Title, Column, TitleLogin, SubtitleLogin, EsqueciText, CriarText, Row, Wrapper } from './styles';
import { IconContainer, InputContainer, InputText } from "../../components/Input";
import { Api } from "../../services/api";
import { User } from "../../models/user";

type FormData = {
    email: string; 
    senha: string;
}

export const Login = () => {

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({ 
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const onSubmit = handleSubmit(async (formData) => {
        try{
            const data: User = await Api.login(formData.email, formData.senha);
            
            if(data != null && data.id != null){
                navigate('/feed') 
                return
            }

            alert('Usuário ou senha inválido');
        }catch(e: unknown){
            //TODO: HOUVE UM ERRO
            console.log(e);
        }
    });
    

    console.log('errors', errors);

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                 e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                <TitleLogin>Faça seu cadastro</TitleLogin>
                <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                <form onSubmit={onSubmit}>
                    <InputContainer>
                        <IconContainer><MdEmail/></IconContainer>
                        <InputText placeholder="E-mail" required {...register('email')} />
                    </InputContainer>
                    {errors.email && <span>E-mail é obrigatório</span>}
                    <InputContainer>
                        <IconContainer><MdLock/></IconContainer>
                        <InputText type="password" placeholder="Senha" required {...register('senha')} />
                    </InputContainer>
                    {errors.senha && <span>Senha é obrigatório</span>}
                    <Button title="Entrar" variant="secondary" type="submit"/>
                </form>
                <Row>
                    <EsqueciText>Esqueci minha senha</EsqueciText>
                    <CriarText>Criar Conta</CriarText>
                </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}