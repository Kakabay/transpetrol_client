import { Link } from 'react-router-dom';
import { footerItems, menuItems } from '../lib/database/Menu.data';
import Container from './Container';

export const Footer = () => {
  return (
    <footer className="bg-white py-10 md:py-20 lg:py-[100px]">
      <Container>
        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-0">
          <img src="/logo.svg" alt="logo" className="w-[240px] 2xl:w-[350px] h-full" />
          <div className="flex justify-between gap-10 lg:flex-row flex-col 2xl:justify-between">
            <div className="flex gap-6 ">
              <div className="flex flex-col gap-5 mr-10">
                {menuItems.map((item) => (
                  <Link to={item.path} key={item.title}>
                    {item.title}
                  </Link>
                ))}
              </div>

              <div className="flex flex-col gap-5 mr-6">
                {footerItems.map((item) => (
                  <div key={item.title}>{item.title}</div>
                ))}
              </div>
            </div>

            <div className="flex flex-col 2xl:flex-row justify-between gap-10">
              <div className="flex gap-6 2xl:flex-row flex-col">
                <div className="">Мы в социальных сетях:</div>
                <div className="flex gap-[15px]">
                  <img src="/footer/instagram.svg" alt="" className="w-8 h-8" />
                  <img src="/footer/linkedin.svg" alt="" className="w-8 h-8" />
                  <img src="/footer/facebook.svg" alt="" className="w-8 h-8" />
                </div>
              </div>

              <div className="">Сайт «Transpetrol», 2020 год</div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
