import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";

function ProtectedRoute({ children }) {
  const { role } = useAuth();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!role) navigate("/login");
    },
    [role, navigate]
  );

  return role ? children : null;
}

export default ProtectedRoute;
