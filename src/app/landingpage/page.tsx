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
							데이터 AI 트렌드 보고서
						</h1>
						<p className="text-[16px] text-[#5f6368] leading-[1.6]">
							2023 년 데이터 AI 트렌드 보고서를 통해 Google Cloud의
							인사이트와 IDC 연구 결과 내용을 중...
						</p>
						<ul className="pl-[20px] text-[16px] text-[#202124] leading-[1.6]">
							<li>Data Cloud가 지향하는 방향과 이유</li>
							<li>최신 데이터 생태계가 설계되는 방식</li>
							<li>AI가 오늘날의 데이터 전략에 차별화된 역할</li>
							<li>
								비즈니스 인텔리전스(BI) 투자로 더 나은 결과를 얻기 위한
								필요사항
							</li>
							<li>데이터 보안 문제와 기업의 이를 해결하는 방법</li>
						</ul>
					</div>
                    <div className="border-l-2 border-[#ddd] m-[20px]">

                    <Image src={"/assets/images/banner.png"} alt="AI" width={400} height={300} />
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
					<form id="download-form" className="flex flex-col">
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
						<input
							type="text"
							placeholder="산업군"
							className="w-full p-[12px] my-[10px] text-[14px] rounded border border-[#ddd] bg-white text-[#333] focus:border-[#0F9D58] focus:outline-none"
						/>
						<input
							type="text"
							placeholder="국가 혹은 지역*"
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
								className="w-11/12 p-3 my-4 text-lg rounded bg-[#4285F4] text-white font-bold border-none cursor-pointer transition duration-300 hover:bg-[#DB4437]"
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
