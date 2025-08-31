import { BrowserRouter, Route, Routes } from "react-router-dom";
import './styles/global.css';
import './styles/theme.css';
import { Index } from "./pages/Index";

export function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route element={<Index />} index />
        </Routes>
      </BrowserRouter>
  );
}
