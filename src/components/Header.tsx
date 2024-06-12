import Container from './Container';

const menuItems = [
  {
    title: 'Главная',
    path: '/',
  },
  {
    title: 'О компании',
    path: '/',
  },
  {
    title: 'Контакты',
    path: '/',
  },
];

const Header = () => {
  return (
    <header>
      <Container>
        <div className="flex w-full justify-between items-center py-[20px]">
          <div className="">
            <img src="/logo.svg" alt="logo" />
          </div>
          <div className="flex items-center gap-[40px]">
            <nav className="flex items-center gap-[40px]">
              {menuItems.map((item, index) => (
                <span className="text-[20px] text-black" key={index}>
                  {item.title}
                </span>
              ))}
            </nav>
            <div className="flex items-center gap-[5px]">
              <span className="text-[20px] text-black">Русский</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8.486"
                height="8.486"
                viewBox="0 0 8.486 8.486">
                <path
                  id="Dropdown"
                  d="M.5,6A.5.5,0,0,1,0,5.5V.5a.5.5,0,1,1,1,0V5H5.5a.5.5,0,1,1,0,1Z"
                  transform="translate(0 4.243) rotate(-45)"
                />
              </svg>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
