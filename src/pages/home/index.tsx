import { useNavigate  } from "react-router-dom";
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Container, Title, TitleHighlight, TextContent } from './styles';

export const Home = () => {

    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/login')
    }

    return (<>
        <Header />
        <Container>
            <div>
                <Title>
                    <TitleHighlight>
                        Implemente <br />
                    </TitleHighlight>
                o seu futuro global agora!</Title>
                <TextContent>Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo
                     desafio profissional, evoluindo em comunidade com os melhores experts.</TextContent>
                <Button type="button" title="Começar agora" variant="secondary" onClick={handleClickSignIn}/>
            </div>
            <div>
                <img src={'../../assets/banner.png'} alt="Imagem principal do site." />
            </div>
        </Container>
    </>)
}