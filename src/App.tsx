import { TaskContextProvider } from "./contexts/TaskContext/TaskContextProvider";
import { MessagesContainer } from "./components/MessagesContainer";
import { MainRouter } from "./routers/MainRouter";

import './styles/global.css';
import './styles/theme.css';

export function App() {
  return (
    <TaskContextProvider>
      <MessagesContainer>
        <MainRouter />
      </MessagesContainer>
    </TaskContextProvider>
  );
};