import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

import { Label, Input } from "../components";

export const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(AuthContext);

  function handleChange(name, value) {
    if (name === "usuario") {
      setUser(value);
    }
    if (name === "contraseña") {
      setPassword(value);
    }
  }

  const handleLogin = (e) => {
    e.preventDefault();
    login(user, password);

    navigate("/", {
      replace: true,
    });
  };

  return (
    <div>
      <div className="login">
        <div className="login__container">
          <h1 className="login__tittle">Bienvenido</h1>
          <form className="login__form" onSubmit={handleLogin}>
            <Input
              attribute={{
                id: "usuario",
                name: "usuario",
                type: "text",
                placeholder: "Ingrese su usuario",
              }}
              handleChange={handleChange}
            />
            <Label text="Usuario" />
            <Input
              attribute={{
                id: "contraseña",
                name: "contraseña",
                type: "password",
                placeholder: "Ingrese su contraseña",
              }}
              handleChange={handleChange}
            />
            <Label text="Contraseña" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};
