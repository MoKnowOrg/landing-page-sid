import Image from "next/image";

const Page = () => {
  return (
    <div className="flex flex-col md:flex-row mx-auto my-12 bg-white p-4 md:p-[40px]">
      {/* Left Section */}
      <div className="w-full md:w-4/6 p-4 md:p-[40px]">
        <Image
          src={"/assets/images/martechsnews.png"}
          alt="Google Cloud"
          width={200}
          height={100}
          className="mb-7"
        />
        {/* Use flex-col on mobile and row on larger screens */}
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-5xl text-[#202124] mb-5">
              생성 AI에 대한 경영진 가이드
            </h1>
            <p className="text-xl md:text-3xl text-[#5f6368] leading-relaxed py-4">
              그 파워는 엄청날 것입니다. 하지만 현재 비즈니스 및 IT 의사 결정권자 중 15%만이 빠르게 변화하는 이 분야에 대한
              전문 지식을 갖추고 있다고 생각합니다.
              <br />
              이 포괄적인 가이드는 최신 정보를 제공할 뿐만 아니라 비즈니스에 생성형 AI를 도입하기 위한 명확한 경로를 제시하는 데
              도움이 될 것입니다. 이 가이드의 내용은 다음과 같습니다:
            </p>
            <ul className="pl-10 text-xl text-[#202124] leading-relaxed list-disc my-3">
              <li>생성형 AI에 대한 간략한 입문서</li>
              <li>생성형 AI 시작을 위한 30일간의 단계별 가이드</li>
              <li>생성형 AI의 영향력을 측정하기 위한 KPI</li>
              <li>
                도이치뱅크, 타임 등의 산업별 사용 사례 및 고객 스토리.
              </li>
            </ul>
            <p className="text-xl text-[#5f6368] leading-relaxed">
              지금 바로 generative AI가 비즈니스에 새로운 가치를 제공하는 데 어떻게 도움이 되는지 알아보세요.
            </p>
          </div>
          <div className="flex justify-center items-center m-4 md:m-7 md:w-1/2">
            <Image
              src={"/assets/images/banner.png"}
              alt="AI"
              width={1000}
              height={600}
              sizes="100vw"
              className="border border-gray-500 w-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Right Section (Form) */}
      <div className="w-full md:w-2/6 bg-white text-white p-4 md:p-[30px] rounded-lg mt-4 md:mt-0">
        <Image
          src={"/assets/images/cloud.png"}
          alt="Google Cloud"
          width={400}
          height={300}
          className="mb-12 w-full object-contain"
        />
        <div className="bg-[#4285F4] py-2 flex justify-start items-center">
          <h2 className="text-[22px] text-start px-3 py-4">
            지금 다운로드
          </h2>
        </div>
        <form id="download-form" className="flex flex-col mx-10 my-3">
          <input
            type="text"
            placeholder="이름*"
            required
            className="w-full p-3 my-2 text-base rounded border border-[#ddd] bg-white text-[#333] focus:border-[#0F9D58] focus:outline-none"
          />
          <input
            type="text"
            placeholder="성*"
            required
            className="w-full p-3 my-2 text-base rounded border border-[#ddd] bg-white text-[#333] focus:border-[#0F9D58] focus:outline-none"
          />
          <input
            type="text"
            placeholder="회사명*"
            required
            className="w-full p-3 my-2 text-base rounded border border-[#ddd] bg-white text-[#333] focus:border-[#0F9D58] focus:outline-none"
          />
          <input
            type="email"
            placeholder="회사 이메일*"
            required
            className="w-full p-3 my-2 text-base rounded border border-[#ddd] bg-white text-[#333] focus:border-[#0F9D58] focus:outline-none"
          />
          <input
            type="text"
            placeholder="핸드폰"
            className="w-full p-3 my-2 text-base rounded border border-[#ddd] bg-white text-[#333] focus:border-[#0F9D58] focus:outline-none"
          />
          <input
            type="text"
            placeholder="업무용 전화*"
            required
            className="w-full p-3 my-2 text-base rounded border border-[#ddd] bg-white text-[#333] focus:border-[#0F9D58] focus:outline-none"
          />
          <input
            type="text"
            placeholder="직함"
            className="w-full p-3 my-2 text-base rounded border border-[#ddd] bg-white text-[#333] focus:border-[#0F9D58] focus:outline-none"
          />
          <input
            type="text"
            placeholder="직함 수"
            className="w-full p-3 my-2 text-base rounded border border-[#ddd] bg-white text-[#333] focus:border-[#0F9D58] focus:outline-none"
          />
          <select
            required
            className="w-full p-3 my-2 text-base rounded border border-[#ddd] bg-white text-[#333] focus:border-[#0F9D58] focus:outline-none"
          >
            <option value="">산업군 선택*</option>
            <option value="tech">Singapore</option>
            <option value="finance">South Korea</option>
            <option value="health">Indonesia</option>
            <option value="retail">India</option>
          </select>
          <input
            type="text"
            placeholder="국가 혹은 지역*"
            required
            className="w-full p-3 my-2 text-base rounded border border-[#ddd] bg-white text-[#333] focus:border-[#0F9D58] focus:outline-none"
          />
          <div className="flex flex-col justify-center items-center">
            <label className="flex items-center mt-2 text-[#333] text-sm">
              <input type="checkbox" className="mr-2 text-lg" />
              Google에서 Google Cloud에 관한 뉴스, 제품 업데이트, 이벤트 정보, 특별 제안을 받아보려면 가입하세요. 내 개인
              데이터가 Google의 개인정보 보호정책에 따라 처리된다는 점을 이해합니다.
              <a
                href="https://policies.google.com/privacy?hl=ko"
                className="text-[#4285F4] text-lg ml-1"
              >
                Google의 개인정보 보호정책
              </a>
            </label>
            <button
              type="submit"
              className="w-full p-3 my-4 text-lg rounded bg-[#4285F4] text-white font-bold cursor-pointer transition duration-300 hover:bg-[#DB4437]"
            >
              다운로드
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
