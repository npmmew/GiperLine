import avatar from '../assets/avatar.svg'

function Profle() {
  return (
    <div className="profile__personal w-[20rem] bg-white p-10 rounded-lg shadow-2xl leading-10">
        <img src={avatar} alt="Фото профиля" width={200} height={200} className='mx-auto bg-gray-100 rounded-full'/>
        <div className="full-name border-b-[1px]">
            <p>Имя фамилия</p>
        </div>
        <div className="age border-b-[1px]">
            <p>Возраст</p>
        </div>
        <div className="email border-b-[1px]">
            <p>email</p>
        </div>
        <button className="mx-auto w-full rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white mt-5">Редактировать</button>
    </div>
  );
}

export default Profle;
