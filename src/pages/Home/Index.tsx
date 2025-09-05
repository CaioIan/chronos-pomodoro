import { CountDown } from '../../components/CountDown/index';
import { Container } from '../../components/Container/index';
import { MainTemplate } from '../../templates/MainTemplate';
import { MainForm } from '../../components/MainForm';
import { TaskContextProvider } from '../../contexts/TaskContext/TaskContextProvider';

export function Home() {
  return (
      <MainTemplate>
        <Container>
          <CountDown />
        </Container>

        <Container>
          <MainForm />
        </Container>
      </MainTemplate>
  );
}