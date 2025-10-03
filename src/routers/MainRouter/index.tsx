import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Home } from "../../pages/Home/Index";
import { AboutPomodoro } from "../../pages/About-Pomodoro";
import { NotFound } from "../../pages/NotFound";
import { useEffect } from "react";
import { History } from "../../pages/History/Index";

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({top: 0})
  }, [pathname]);

  return null
}

export function MainRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Home />} index />
            <Route path="/about-pomodoro" element={<AboutPomodoro/>} />
            <Route path="/history" element={<History/>} />
            <Route path="*" element={<NotFound />} />
        </Routes>
        <ScrollToTop />
      </BrowserRouter>
  )
}