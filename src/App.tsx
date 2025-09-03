import { BrowserRouter, Route, Routes } from "react-router-dom";
import './styles/global.css';
import './styles/theme.css';
import { Home } from "./pages/Home/Index";
import { PomodoroDescript } from "./pages/Pomodoro-Descript";
import { NotFound } from "./pages/NotFound";

export function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} index />
          <Route element={<PomodoroDescript />} path="/pomodoro-descript" />

          {/* Rota para 404 */}
        <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  );
};