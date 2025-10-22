import {
  Apply,
  ArrowLineDown,
  ArrowLineup,
  CreateAcc,
  Explore,
  UploadCv,
} from "../../../assets/LandingPage";
import CreativeCard from "../../../shared/Cards/CreativeCard";

const HowItWorks = () => {
  const steps = [
    {
      title: "Create account",
      description: "Sign up in seconds and set up your profile.",
      icon: <CreateAcc />,
      number: "01",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
      title: "Upload CV/Resume",
      description:
        "Show off your skills and experience to potential collaborators.",
      icon: <UploadCv />,
      number: "02",
      gradient: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)",
    },
    {
      title: "Explore Bounties",
      description: "Browse active projects looking for talent like you.",
      icon: <Explore />,
      number: "03",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    },
    {
      title: "Apply or Post",
      description: "Apply to join a bounty — or create your own and find help.",
      icon: <Apply />,
      number: "04",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    },
  ];

  return (
    <section className="py-8 px-4">
      <div className="relative flex flex-col md:flex-row md:flex-wrap md:justify-center gap-10 max-w-7xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center text-center w-full sm:w-3/4 md:w-64 mx-auto animate-scale-in"
            style={{animationDelay: `${index * 0.1}s`}}
          >
            <CreativeCard 
              className="px-6 py-6 w-full relative overflow-hidden flex flex-col justify-between"
              hoverable={true}
              style={{ minHeight: '280px', height: '280px' }}
            >
              {/* Number Badge */}
              <div 
                className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-base shadow-lg"
                style={{ background: step.gradient }}
              >
                {step.number}
              </div>

              {/* Icon */}
              <div className="flex items-center justify-center mb-4 transform transition-transform hover:scale-110">
                {step.icon}
              </div>

              {/* Content */}
              <div className="flex-grow flex flex-col justify-center">
                {/* Title */}
                <h3 className="text-base font-bold mb-2 text-gray-800">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-xs leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Decorative gradient bar */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-1"
                style={{ background: step.gradient }}
              />
            </CreativeCard>

            {/* Arrow connector */}
            {index < steps.length - 1 && (
              <div
                className={`hidden md:block absolute ${
                  index % 2 === 0 ? "-top-5" : "top-20"
                } right-[-55%] z-10 opacity-50`}
              >
                {index % 2 === 0 ? <ArrowLineup /> : <ArrowLineDown />}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
