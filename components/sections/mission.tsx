export const MissionSection = () => {
  const features = [
    "We bridge the gap between individuals and organizations.",
    "Motivating engagement rewarding volunteers with innovative incentives like NFT collectibles to recognize and inspire their contributions.",
    "Create an impact developing a scalable, community-driven platform where volunteering is accessible and rewarding for everyone."
  ];

  return (
    <section className="bg-[#0A0B1A] text-white py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#7CB9E8] text-lg mb-4 block">Our Mission</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Revolutionizing Volunteerism<br />with Blockchain
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            By using blockchain&apos;s transparency and efficiency, we connect volunteers with organizations,
            fostering collaboration and impactful experiences in a secure and scalable ecosystem.
          </p>
        </div>

        <div className="bg-[#1A1B2E] rounded-3xl p-12 flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <img
              src="/mission-illustration.svg"
              alt="Mission illustration"
              className="w-full max-w-lg mx-auto"
            />
          </div>
          
          <div className="md:w-1/2">
            <ul className="space-y-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="bg-[#7CB9E8] rounded-full p-1.5 mt-1.5">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};