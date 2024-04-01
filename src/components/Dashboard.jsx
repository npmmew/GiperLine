import logo from "../assets/logo.svg";

function Dashboard() {
  return (
    <div className="w-[250px] h-screen bg-indigo-700">
      <div className="logo h-[70px] flex items-center justify-center">
        <img src={logo} alt="logo" width={50} />
        <h1 className="text-center font-semibold text-xl text-white ml-4">
          Гипер Линия
        </h1>
      </div>
      <div className="list p-5">
        <ul className="leading-10 text-white text-lg font-light cursor-pointer">
          <li>Профиль</li>
          <li>Создать заказ</li>
          <li>История заказов</li>
          <li>Тех.Поддержка</li>
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
