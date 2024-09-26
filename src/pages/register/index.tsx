import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Api } from "../../services/api";
import { Header } from "../../components/Header";
import { RegisterColumn, RegisterContainer, RegisterLogin, RegisterRow, RegisterSubtitleInfo, RegisterTerms, RegisterTitle, RegisterTitleInfo, RegisterWrapper } from "./styles";
import { IconContainer, InputContainer, InputText } from "../../components/Input";
import { MdEmail, MdLock } from "react-icons/md";
import { Button } from "../../components/Button";
import { User } from "../../models/user";

type FormData = {
    nome: string,
    email: string,
    senha: string,
    confirmaSenha: string
}

export const Register = () => {
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
            const data: User = await Api.register({
                nome: formData.nome,
                senha: formData.senha,
                email: formData.email,
            });
            
            if(data!=null && data.id != null){
                navigate('/feed') 
                return
            }

            alert('Não foi possível cadastrar o usuário.');
        }catch(e: unknown){
            //TODO: HOUVE UM ERRO
            console.log(e);
        }
    });
    

    console.log('errors', errors);

    return(
        <>
            <Header />
            <RegisterContainer>
                <RegisterColumn>
                    <RegisterTitle>
                        A plataforma para você aprender com experts, dominar as principais tecnologias e 
                        entrar mais rápido nas empresas mais desejadas.
                    </RegisterTitle>
                </RegisterColumn>
                <RegisterColumn>
                    <RegisterWrapper>
                        <RegisterTitleInfo>Comece agora grátis</RegisterTitleInfo>
                        <RegisterSubtitleInfo>Faça seu login e make the change._</RegisterSubtitleInfo>
                        <form onSubmit={onSubmit}>
                            <InputContainer>
                                <IconContainer><MdEmail/></IconContainer>
                                <InputText placeholder="Nome completo" required {...register('nome')} />
                            </InputContainer>
                            {errors.nome && <span>Nome é obrigatório</span>}
                            <InputContainer>
                                <IconContainer><MdEmail/></IconContainer>
                                <InputText placeholder="E-mail" required {...register('email')} />
                            </InputContainer>
                            {errors.email && <span>E-mail é obrigatório</span>}
                            <InputContainer>
                                <IconContainer><MdLock/></IconContainer>
                                <InputText placeholder="Senha" required {...register('senha')} />
                            </InputContainer>
                            {errors.senha && <span>Senha é obrigatório</span>}
                            <InputContainer>
                                <IconContainer><MdLock/></IconContainer>
                                <InputText placeholder="Confirma Senha" required {...register('confirmaSenha')} />
                            </InputContainer>
                            {errors.confirmaSenha && <span>Confirma Senha é obrigatório</span>}
                            <Button title="Registrar" variant="secondary" type="submit"/>
                        </form>
                        <RegisterTerms>
                            Ao clicar em "criar minha conta grátis", 
                            declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
                        </RegisterTerms>
                        <RegisterTerms>
                            <RegisterRow>
                                Já tenho conta.&nbsp;<RegisterLogin>Fazer login</RegisterLogin>
                            </RegisterRow>
                        </RegisterTerms>
                    </RegisterWrapper>
                </RegisterColumn>
            </RegisterContainer>
        </>
    );
}