import logo from '../assets/logo.svg'

function Header() {
    return (
      <header className="container mx-auto sm:w-[90%] md:w-[90%]">
        <div className="header__inner flex justify-between items-center h-24">
            <div className="header-right flex items-center">
                <img src={logo} alt="" width={60}/>
                <div className="ml-5 sm:hidden">
                    <h1 className='font-semibold text-xl'>ГиперЛиния</h1>
                    <p>Компания грузоперевозок №1</p>
                </div>
            </div>
            <div className="header-left">
                <ul>
                    <a href="/" className='hover:bg-gray-200 ease-in-out duration-300 px-4 py-2 rounded-full'>Войти</a>
                </ul>
            </div>
        </div>
      </header>
    );
  }
  
  export default Header;