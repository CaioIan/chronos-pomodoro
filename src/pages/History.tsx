import '../styles/global.css';
import '../styles/theme.css';
import { CountDown } from '../components/CountDown/index';
import { Container } from '../components/Container/index';
import { Header } from '../components/Header/index';
import { Menu } from '../components/Menu/index';

export function History() {

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
      </>
  );
}