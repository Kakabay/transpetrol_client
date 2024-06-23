import Container from "./Container";

export const ContactsSection = () => {
  return (
    <div className="relative">
      <div className=" bg-[url('/contacts.png')] py-20 bg-cover bg-center bg-no-repeat">
        <Container>
          <div className="p-6 max-w-full md:p-[50px] bg-white w-fit rounded-[10px]">
            <div className="flex flex-col gap-[50px] w-[330px]">
              <div>
                <h4 className="font-semibold text-[20px] mb-[10px]">
                  НАШИ КОНТАКТЫ
                </h4>
                <div className="h-[3px] w-[60px] bg-[#FD4F00]" />
              </div>

              <div className="flex flex-col gap-5">
                <div className="flex gap-[10px] items-start">
                  <img src="/contacts/1.svg" alt="" />

                  <div className="">
                    <h5 className="leading-[120%] text-[18px] font-semibold">
                      Адрес:
                    </h5>
                    <p className="leading-[120%] ">
                      50120, Jebel Ali Free Zone
                    </p>
                    <p className="leading-[120%] ">
                      P.O. Box 18132, Dubai, UAE
                    </p>
                  </div>
                </div>

                <div className="flex gap-[10px] items-start">
                  <img src="/contacts/2.svg" alt="" />

                  <div className="">
                    <h5 className="leading-[120%] text-[18px] font-semibold">
                      Телефон:
                    </h5>
                    <p className="leading-[120%] ">+971 52 9042905</p>
                    <p className="leading-[120%] ">+971 4 8017000</p>
                  </div>
                </div>

                <div className="flex gap-[10px] items-start">
                  <img src="/contacts/3.svg" alt="" />

                  <div className="">
                    <h5 className="leading-[120%] text-[18px] font-semibold">
                      Электронная Почта:
                    </h5>
                    <p className="leading-[120%] ">
                      transpetrol.info@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
