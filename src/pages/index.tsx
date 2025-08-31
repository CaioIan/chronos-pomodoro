import '../styles/global.css';
import '../styles/theme.css';
import { CountDown } from '../components/CountDown/index';
import { Container } from '../components/Container/index';
import { Header } from '../components/Header/index';
import { Menu } from '../components/Menu/index';
import { DefaultInput } from '../components/DefaultInput';
import { Cycles } from '../components/Cycles';
import { DefaultButton } from '../components/DefaultButton';
import { PlayCircleIcon } from 'lucide-react';
import { Footer } from '../components/Footer';

export function Index() {

  return (
      <>
      <Container>
        <Header />
      </Container>

        <Container>
          <Menu />
        </Container>

        <Container>
          <CountDown />
        </Container>

        <Container>
          <form className='form' action="">
            <div className='formRow'>
              <DefaultInput labelText='task' id='meuInput' type='text' placeholder='Ex: estudar pra prova'/>
            </div>

            <div className='formRow'>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>

            <div className='formRow'>
              <Cycles />
            </div>

            <DefaultButton icon={<PlayCircleIcon />} />
          </form>
        </Container>

        <Container>
          <Footer />
        </Container>
      </>
  );
}