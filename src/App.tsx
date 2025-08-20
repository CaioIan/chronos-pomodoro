import { TimerIcon } from 'lucide-react';
import { Heading } from './components/Heading';
import './styles/global.css';
import './styles/theme.css';

export function App() {
  return (
    <Heading>
      Hello World
      <button>
        <TimerIcon />
      </button>
      </Heading>
  );
}
