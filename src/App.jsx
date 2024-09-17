import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AppLayout from "./Components/AppLayout";
import LandingPage from "./Pages/LandingPage";
import LoginPage from "./Pages/LoginPage";
import CartPage from "./Pages/CartPage";
import GamePage from "./Pages/GamePage";
import { AuthenticationProvider } from "./Contexts/AuthContext";
import { StoreGamesProvider } from "./Contexts/StoreGamesContext";
import RawgStorePage from "./Pages/RawgStorePage";
import { GameQueryProvider } from "./Contexts/GameQueryContext";
import { CartProvider } from "./Contexts/CartContext";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <AuthenticationProvider>
        <GameQueryProvider>
          <StoreGamesProvider>
            <CartProvider>
              <Routes>
                <Route path="/" element={<AppLayout />}>
                  <Route index element={<LandingPage />} />
                  <Route path="login" element={<LoginPage />}></Route>
                  <Route path="home" element={<HomePage />}></Route>
                  <Route
                    path="rawg"
                    element={
                      <ProtectedRoute>
                        <RawgStorePage />
                      </ProtectedRoute>
                    }
                  ></Route>
                  <Route path="cart" element={<CartPage />}></Route>
                  <Route path="game/:id" element={<GamePage />}></Route>
                </Route>
              </Routes>
            </CartProvider>
          </StoreGamesProvider>
        </GameQueryProvider>
      </AuthenticationProvider>
    </BrowserRouter>
  );
}

export default App;
