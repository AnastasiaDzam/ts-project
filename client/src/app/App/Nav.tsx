import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

import AuthApi from '../../features/Auth/api/AuthApi'

function Nav(): JSX.Element {
  const { user, setUser } = useContext(UserContext);

  const onHandleLogout = async () => {
    try {
      await AuthApi.Logout();
      // Обновляем состояние пользователя
      setUser(null);
      console.log('Выход выполнен успешно');
    } catch (error) {
      console.error('Ошибка при выходе:', error);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Привет!
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to={"/cities"}>
                Узнать погоду
              </Link>
            </li>
            {!user && (
              <li className="nav-item">
                <Link className="nav-link active" to={"/auth"}>
                  Авторизация
                </Link>
              </li>
            )}

            {!user && (
              <li className="nav-item">
                <Link className="nav-link active" to={"/reg"}>
                  Регистрация
                </Link>
              </li>
            )}
            {user && <li className="nav-link active">{user.email}</li>}
            {user && (
              <li className="nav-item">
                <button onClick={onHandleLogout}>Logout</button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
