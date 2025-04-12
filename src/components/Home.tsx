"use client";

const HomePage = () => {
  return (
    <section
      id="home"
      className=" bg-white overflow-hidden mt-[50px] py-16 px-20 h-[800px] md:px-[200px]"
    >
      <div className="mx-auto text-center">
        <p className="text-gray-700 text-[22px] mb-4 max-w-[1000px] ml-[400px]">
          A modern ERP platform specifically designed to assist entrepreneurs in
          recording every incoming and outgoing item and monitoring daily
          profits in an efficient and structured manner.
        </p>

        <div className="mt-20 items-center">
          <div className="text-left">
            <p className="italic text-gray-600 text-xl max-w-[700px]">
              We help entrepreneurs record the daily flow of goods and profits
              through a practical, smart and easy-to-use ERP system.
            </p>
            <img src="/chart.svg" alt="chart" className="w-80 mt-[150px]" />
          </div>

          <div className="relative">
            <div className="w-[600px] h-[300px] bg-gradient-to-r from-blue-500 to-purple-500 rounded-tl-[50%] rounded-tr-[50%] rounded-bl-[50%] absolute bottom-0 right-0"></div>
            <div className="absolute bottom-[100px] right-[80px] bg-purple-300 w-5 h-5 rounded-full"></div>
            <div className="absolute bottom-[60px] right-[140px] bg-blue-300 w-8 h-8 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
