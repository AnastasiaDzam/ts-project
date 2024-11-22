import { FormEvent, useContext, useState } from "react";
import AuthApi from "../api/AuthApi";
import { setAccessToken } from "../../../shared/lib/axiosInstance";
import { UserContext } from "../../../app/Context/UserContext";
import { UserType } from "../type/UserType";
import { useNavigate } from "react-router-dom";

function RegForm(): JSX.Element {
  const [name, setName] = useState<UserType["name"]>("");
  const [email, setEmail] = useState<UserType["email"]>("");
  const [password, setPassword] = useState<UserType["password"]>("");
  const [confirm, setConfirm] = useState<UserType["password"]>("");
  const [shown, setShown] = useState<boolean>(false);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await AuthApi.reg({ name, email, password });
    if (response) {
      const { user, accessToken } = response;
      setAccessToken(accessToken);
      setUser(user);
      navigate("/cities");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input
          required
          type="text"
          placeholder="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          required
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <label>
          <input
            type={shown ? "text" : "password"}
            placeholder="password"
            value={password}
            required
            minLength={3}
            onChange={(event) => setPassword(event.target.value)}
          />
          
        </label>
        <input
          required
          type={shown ? "text" : "password"}
          placeholder="confirm password"
          value={confirm}
          onChange={(event) => setConfirm(event.target.value)}
        />
        <button type="button" onClick={() => setShown((prev) => !prev)}>
            👁
          </button>
        <button type="submit"> Отправить</button>
      </form>
    </div>
  );
}

export default RegForm;
