import Image from "next/image";

const page = () => {
	return (
		<div>
			<div className="flex mx-auto my-[50px] bg-white p-[40px]">
				{/* Left Section */}
				<div className="w-3/5 p-[40px]">
					<Image
						src={"/assets/images/martechsnews.png"}
						alt="Google Cloud"
						width={200}
						height={100}
						className="mb-7"
					/>
					<div className="flex flex-row">
						<div>
							<h1 className="text-[28px] text-[#202124] mb-[20px]">
								그 파워는 엄청날 것입니다. 하지만 현재 비즈니스 및 IT
								의사 결정권자 중 15%만이 빠르게 변화하는 이 분야에 대한
								전문 지식을 갖추고 있다고 생각합니다.
							</h1>
							<p className="text-[16px] text-[#5f6368] leading-[1.6]">
								이 포괄적인 가이드는 최신 정보를 제공할 뿐만 아니라
								비즈니스에 생성형 AI를 도입하기 위한 명확한 경로를
								제시하는 데 도움이 될 것입니다. 이 가이드의 내용은
								다음과 같습니다:
							</p>
							<ul className="pl-[20px] text-[16px] text-[#202124] leading-[1.6] list-disc">
								<li>생성형 AI에 대한 간략한 입문서</li>
								<li>생성형 AI 시작을 위한 30일간의 단계별 가이드</li>
								<li>생성형 AI의 영향력을 측정하기 위한 KPI</li>
								<li>
									도이치뱅크, 타임 등의 산업별 사용 사례 및 고객
									스토리.
								</li>
							</ul>
							<p className="text-[16px] text-[#5f6368] leading-[1.6]">
								지금 바로 generative AI가 비즈니스에 새로운 가치를
								제공하는 데 어떻게 도움이 되는지 알아보세요.
							</p>
						</div>
                        <div className="flex justify-center items-center">

						<Image
							src={"/assets/images/banner.png"}
							alt="AI"
							width={0}
							height={0}
                            sizes="100vw"
							className="border-4 border-gray-600 m-[20px] w-[700px] h- "
						/>
                        </div>
					</div>
				</div>

				{/* Right Section (Form) */}
				<div className="w-2/5 bg-white text-white p-[30px] rounded-lg">
					<Image
						src={"/assets/images/cloud.png"}
						alt="Google Cloud"
						width={400}
						height={300}
					/>
					<div className="bg-[#4285F4] py-[2px] flex justify-start items-center">
						<h2 className="text-[22px] text-start px-3 py-4">
							지금 다운로드
						</h2>
					</div>
					<form id="download-form" className="flex flex-col mx-10 my-3">
						<input
							type="text"
							placeholder="이름*"
							required
							className="w-full p-[12px] my-[10px] text-[14px] rounded border border-[#ddd] bg-white text-[#333] focus:border-[#0F9D58] focus:outline-none"
						/>
						<input
							type="text"
							placeholder="성*"
							required
							className="w-full p-[12px] my-[10px] text-[14px] rounded border border-[#ddd] bg-white text-[#333] focus:border-[#0F9D58] focus:outline-none"
						/>
						<input
							type="text"
							placeholder="회사명*"
							required
							className="w-full p-[12px] my-[10px] text-[14px] rounded border border-[#ddd] bg-white text-[#333] focus:border-[#0F9D58] focus:outline-none"
						/>
						<input
							type="email"
							placeholder="회사 이메일*"
							required
							className="w-full p-[12px] my-[10px] text-[14px] rounded border border-[#ddd] bg-white text-[#333] focus:border-[#0F9D58] focus:outline-none"
						/>
						<input
							type="text"
							placeholder="핸드폰"
							className="w-full p-[12px] my-[10px] text-[14px] rounded border border-[#ddd] bg-white text-[#333] focus:border-[#0F9D58] focus:outline-none"
						/>
						<input
							type="text"
							placeholder="업무용 전화*"
							required
							className="w-full p-[12px] my-[10px] text-[14px] rounded border border-[#ddd] bg-white text-[#333] focus:border-[#0F9D58] focus:outline-none"
						/>
						<input
							type="text"
							placeholder="직함"
							className="w-full p-[12px] my-[10px] text-[14px] rounded border border-[#ddd] bg-white text-[#333] focus:border-[#0F9D58] focus:outline-none"
						/>
						<input
							type="text"
							placeholder="직함 수"
							className="w-full p-[12px] my-[10px] text-[14px] rounded border border-[#ddd] bg-white text-[#333] focus:border-[#0F9D58] focus:outline-none"
						/>
						<select
							required
							className="w-full p-[12px] my-[10px] text-[14px] rounded border border-[#ddd] bg-white text-[#333] focus:border-[#0F9D58] focus:outline-none"
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
							className="w-full p-[12px] my-[10px] text-[14px] rounded border border-[#ddd] bg-white text-[#333] focus:border-[#0F9D58] focus:outline-none"
						/>
						<div className="flex flex-col justify-center items-center">
							<label className="flex items-center text-[13px] mt-[10px] text-[#333]">
								<input type="checkbox" className="mr-[8px]" />
								구글 클라우드에 관련한 이벤트 정보, 뉴스, 제품 업데이트
								그리고 특별한 오퍼에 대한 정보를 받아보는 것에
								동의합니다. 내 개인정보가 구글의 개인정보 규정에 따라
								처리되는 것에 대해 이해하고 있습니다.
							</label>
							<button
								type="submit"
								className="w-full p-3 my-4 text-lg rounded bg-[#4285F4] text-white font-bold border-none cursor-pointer transition duration-300 hover:bg-[#DB4437]"
							>
								다운로드
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default page;
