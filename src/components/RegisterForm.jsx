import logo from "../assets/logo.svg";

function RegisterForm() {
  return (
    <form action="" className="p-10 shadow-2xl rounded w-[400px]">
      <img src={logo} width={60} className="mx-auto" alt="" />
      <h1 className="font-medium text-3xl mb-6 text-center">Регистрация</h1>
      <input
        type="text"
        name="name"
        placeholder="Ваше имя"
        className="rounded p-3 border mb-3 focus:border-blue-700 focus:border-2 w-full"
      />
      <input
        type="text"
        name="surname"
        placeholder="Ваша фамилия"
        className="rounded p-3 border mb-3 focus:border-blue-700 focus:border-2 w-full"
      />
      <input
        type="text"
        name="middle-name"
        placeholder="Ваше отчество"
        className="rounded p-3 border mb-3 focus:border-blue-700 focus:border-2 w-full"
      />
      <input
        type="tel"
        name="tel"
        placeholder="Ваш номер телефона"
        className="rounded p-3 border mb-3 focus:border-blue-700 focus:border-2 w-full"
      />
      <input
        type="password"
        name="password"
        placeholder="Пароль"
        className="rounded p-3 border mb-3 focus:border-blue-700 focus:border-2 w-full"
      />
      <input
        type="password"
        name="password"
        placeholder="Подтвердите пароль"
        className="rounded p-3 border mb-3 focus:border-blue-700 focus:border-2 w-full"
      />
      <button
        className="rounded w-full p-3 bg-blue-700 text-white mt-3 hover:bg-blue-800 ease-in-out duration-300"
        type="submit"
        disabled
      >
        Зарегистрироваться
      </button>
    </form>
  );
}

export default RegisterForm;
