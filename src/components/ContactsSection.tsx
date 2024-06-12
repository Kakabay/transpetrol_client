import Container from './Container';

export const ContactsSection = () => {
  return (
    <div className="relative py-[110px]">
      <img
        src="/contacts.png"
        alt=""
        className="absolute left-0 top-0 mx-auto bottom-0 right-0 -z-10"
      />
      <Container>
        <div className="pl-[50px] pt-[50px] pr-[30px] pb-[75px] bg-white w-fit rounded-[10px]">
          <div className="flex flex-col gap-[50px] w-[330px]">
            <div>
              <h4 className="font-semibold text-[20px] mb-[10px]">НАШИ КОНТАКТЫ</h4>
              <div className="h-[3px] w-[60px] bg-[#FD4F00]" />
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex gap-[10px] items-start">
                <img src="/contacts/1.svg" alt="" />

                <div className="">
                  <h5 className="leading-[120%] text-[18px] font-semibold">Адрес:</h5>
                  <p className="leading-[120%] ">50120, Jebel Ali Free Zone</p>
                  <p className="leading-[120%] ">P.O. Box 18132, Dubai, UAE</p>
                </div>
              </div>

              <div className="flex gap-[10px] items-start">
                <img src="/contacts/2.svg" alt="" />

                <div className="">
                  <h5 className="leading-[120%] text-[18px] font-semibold">Телефон:</h5>
                  <p className="leading-[120%] ">+971 52 9042905</p>
                  <p className="leading-[120%] ">+971 4 8017000</p>
                </div>
              </div>

              <div className="flex gap-[10px] items-start">
                <img src="/contacts/3.svg" alt="" />

                <div className="">
                  <h5 className="leading-[120%] text-[18px] font-semibold">Электронная Почта:</h5>
                  <p className="leading-[120%] ">transpetrol.info@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-[10px] items-start">
                <img src="/contacts/4.svg" alt="" />

                <div className="">
                  <h5 className="leading-[120%] text-[18px] font-semibold">Сайт:</h5>
                  <p className="leading-[120%] ">www.transpetrol.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
