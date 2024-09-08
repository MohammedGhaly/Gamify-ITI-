import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AppLayout from "./Components/AppLayout";
import LandingPage from "./Pages/LandingPage";
import LoginPage from "./Pages/LoginPage";
import CartPage from "./Pages/CartPage";
import GamePage from "./Pages/GamePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/app" element={<AppLayout />}>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="login" element={<LoginPage />}></Route>
          <Route path="home" element={<HomePage />}></Route>
          <Route path="cart" element={<CartPage />}></Route>
          <Route path="game/:id" element={<GamePage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
