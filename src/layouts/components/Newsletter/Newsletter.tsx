const Newsletter = () => {
  return (
    <section className="newslletter #FAFAFA flex justify-center items-center flex-col h-[120px] px-[20px] lg:mt-[80px] lg:flex lg:items-center lg:justify-center">
      <div className="container text-center my-[40px] py-[24px] lg:flex lg:justify-center lg:items-center ">
        <label
          className="Titillium-Bold text-[24px] lg:w-[307px] ml-[15px]"
          htmlFor="newslatter-info"
        >
          Recebe Nossa Newsletter
        </label>

        <div className="relative flex lg:flex w-full lg:w-[630px]">
          <input
            className="w-full h-[26px] mt-[8px] pl-[24px] border-none rounded-[4px] -text--color-2-400 border border-black  lg:pl-[24px] lg:h-[40px] lg:m-0 lg:p-0"
            type="text"
            placeholder="Digite seu e-mail"
          />

          <button
            className="ml-[15px] -bg--color-1-500 -text--color-5-500 text-[14px] Titillium-Bold w-[79px] h-[26px] rounded-[4px] lg:w-[131px]
          lg:h-[40px] lg:absolute lg:right-0 border-2 -border--color-1-500"
          >
            Enviar
          </button>

        </div>

      </div>
    </section>
  );
};

export default Newsletter;
