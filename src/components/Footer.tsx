import { footerItems, menuItems } from '../lib/database/Menu.data';
import Container from './Container';

export const Footer = () => {
  return (
    <footer className="bg-white py-[100px]">
      <Container>
        <div className="flex justify-between">
          <img src="/logo.svg" alt="" />

          <div className="flex flex-col gap-5 mr-10">
            {menuItems.map((item) => (
              <div key={item.title}>{item.title}</div>
            ))}
          </div>

          <div className="flex flex-col gap-5 mr-6">
            {footerItems.map((item) => (
              <div key={item.title}>{item.title}</div>
            ))}
          </div>

          <div className="flex gap-6">
            <div className="">Мы в социальных сетях:</div>
            <div className="flex gap-[15px]">
              <img src="/public/footer/instagram.svg" alt="" className="w-8 h-8" />
              <img src="/public/footer/linkedin.svg" alt="" className="w-8 h-8" />
              <img src="/public/footer/facebook.svg" alt="" className="w-8 h-8" />
            </div>
          </div>

          <div className="">Сайт «Transpetrol», 2020 год</div>
        </div>
      </Container>
    </footer>
  );
};
