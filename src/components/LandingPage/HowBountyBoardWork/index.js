import HowItWorks from "./HowItWorks";

const Index = () => {
  return (
    <div className="bg-gradient-to-br from-[#F8F9FC] to-[#E9ECEF] py-[100px] px-2 sm:px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-[150px]">
      <div className="max-w-[100rem] w-full mx-auto py-10">
        <h1 className="text-[32px] sm:text-[40px] text-center font-bold mb-4 animate-slide-in-top">
          How <span className="text-gradient">Bounty Board</span> Works
        </h1>
        <p className="text-center text-gray-600 text-lg mb-12 animate-fade-in">
          Get started in 4 simple steps ✨
        </p>
        <HowItWorks />
      </div>
    </div>
  );
};

export default Index;
