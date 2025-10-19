import { useEffect } from 'react';
import { CountDown } from '../../components/CountDown/index';
import { Container } from '../../components/Container/index';
import { MainTemplate } from '../../templates/MainTemplate';
import { MainForm } from '../../components/MainForm';

export function Home() {
  useEffect(() => {
    document.title = 'Chronos Pomodoro';
  }, []);
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