import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

function LoginForm() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <form action="" className="flex flex-col w-[400px] p-10 shadow-2xl">
        <img src={logo} width={60} className="mx-auto" alt="" />
        <h1 className="font-medium text-3xl mb-6 text-center">Автoризация</h1>
        <input
          className="rounded p-3 border mb-3 focus:border-blue-700 focus:border-2"
          name="email"
          type="text"
          placeholder="Введите свой email"
        />
        <input
          className="rounded p-3 border focus:border-blue-700 focus:border-2"
          name="password"
          type="password"
          placeholder="Введите свой пароль"
        />
        <a className="float-left text-blue-700 hover:underline" href="/">
          Забыли пароль?
        </a>
        <button
          className="rounded w-full p-3 bg-blue-700 text-white mt-3 hover:bg-blue-800 ease-in-out duration-300"
          type="submit"
        >
          Войти
        </button>
        <p>
          Нужна учётная запись?{" "}
          <Link to="/register" className="text-blue-700 hover:underline">
            Зарегистрируйтесь
          </Link>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
