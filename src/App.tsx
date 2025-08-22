import { BrowserRouter, Route, Routes } from "react-router-dom";
import './styles/global.css';
import './styles/theme.css';
import { Index } from "./pages/Index";
import { History } from "./pages/history"; // Importando a página de histórico

export function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route element={<Index />} index />
          <Route element={<History />} path="/history" />
        </Routes>
      </BrowserRouter>
  );
}
