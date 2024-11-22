import { useNavigate } from "react-router-dom";
import { setAccessToken } from "../../../shared/lib/axiosInstance";
import { useContext, useState } from "react";
import { UserContext } from "../../../app/Context/UserContext";
import { UserType } from "../type/UserType";
import AuthApi from "../api/AuthApi";

function AuthForm(): JSX.Element {
  const { setUser } = useContext(UserContext);
  const [email, setEmail] = useState<UserType["email"]>("");
  const [password, setPassword] = useState<UserType["password"]>("");
  const [shown, setShown] = useState<boolean>(false);
  const navigate = useNavigate();

  // function validation(email: User['email'], password: User['password']): boolean {
  //   if (email.trim() === '' || password.trim() === '') {
  //     setError('Заполните поле');
  //     return false;
  //   }
  //   return true;
  // }

  const onHadleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    const response = await AuthApi.auth({ email, password });
    if (response) {
      const { user, accessToken } = response;
      setAccessToken(accessToken);
      setUser(user);
      navigate("/cities");
    }
  };

  return (
    <div className="mainForm">
      <h2>Войти</h2>
      <form onSubmit={onHadleSubmit} className="regLogForm">
        <label htmlFor="email">
          <input
            required
            type="email"
            className="mainInput"
            placeholder="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <label htmlFor="password" className="password-label">
          <input
            required
            type={shown ? "text" : "password"}
            className="mainInput"
            placeholder="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button
            className="eye-button"
            type="button"
            onClick={() => setShown((prev) => !prev)}
          >
            👁
          </button>
        </label>
        <button type="submit" className="mainFormBtn">
          Войти
        </button>
      </form>
    </div>
  );
}

export default AuthForm;
