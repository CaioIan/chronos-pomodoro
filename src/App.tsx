import { BrowserRouter, Route, Routes } from "react-router-dom";
import './styles/global.css';
import './styles/theme.css';
import { Home } from "./pages/Home/Index";
import { PomodoroDescript } from "./pages/Pomodoro-Descript";
import { NotFound } from "./pages/NotFound";
import { TaskContextProvider } from "./contexts/TaskContext/TaskContextProvider";

export function App() {

  return (
    <TaskContextProvider>
      <BrowserRouter>
        <Routes>
            <Route element={<Home />} index />
            <Route element={<PomodoroDescript />} path="/pomodoro-descript" />
            <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TaskContextProvider>
  );
};