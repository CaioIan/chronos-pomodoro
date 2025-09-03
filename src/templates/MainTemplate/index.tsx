import '../../styles/global.css';
import '../../styles/theme.css';
import { CountDown } from '../../components/CountDown/index';
import { Container } from '../../components/Container/index';
import { Header } from '../../components/Header/index';
import { Menu } from '../../components/Menu/index';
import { Footer } from '../../components/Footer/index';

type MainTemplateProps = {
  children: React.ReactNode
}

export function MainTemplate({children}: MainTemplateProps) {

  return (
      <>
      <Container>
        <Header />
      </Container>

        <Container>
          <Menu />
        </Container>

        {children}

        <Container>
          <Footer />
        </Container>
      </>
  );
}