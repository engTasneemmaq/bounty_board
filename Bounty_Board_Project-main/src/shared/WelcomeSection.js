import welcomeImage from '../assets/welcome.png';

const WelcomeSection = () => {
  return (
    <div
      className="relative h-full rounded-2xl p-12 flex flex-col justify-between items-center text-white overflow-hidden pt-[108px]"
      style={{
        backgroundImage: `url(${welcomeImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-[40px] font-bold">Welcome to Bounty Board</h2>
        <p className="text-lg opacity-90 text-[22px] font-abeezee">Let's build something meaningful</p>
      </div>

      <div className='flex flex-col gap-[29px]'>
        <div className="flex flex-col justify-center items-center gap-2">
          <h3 className="text-[40px] font-bold font-satoshi">Seamless Collaboration</h3>
          <div className="opacity-90 font-akatab text-[24px] text-center font-[400]">
            Effortlessly work together with<br/> your team in real-time.
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <div className="w-2 h-2 bg-white/50 rounded-full"></div>
          <div className="w-2 h-2 bg-white/50 rounded-full"></div>
        </div>
      </div>

    </div>
  );
};

export default WelcomeSection;
