import { Button } from "../../components/ui/button";

export const StatisticsSection = () => {
  const stats = [
    { number: "260+", label: "Foundations" },
    { number: "960+", label: "Users" },
    { number: "231+", label: "Successful Volunteers" },
    { number: "10,000+", label: "People Helped" }
  ];

  return (
    <section className="bg-[#0A0B1A] text-white py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-20">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Our app connects foundations with volunteers, creating impactful opportunities for both.
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              We will help you to achieve the same as a company or volunteer!
            </p>
            <Button variant="coral" size="lg" className="px-8 py-6 text-lg rounded-full">
              Let&apos;s get started
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-6 md:w-1/2">
            {stats.map((stat, index) => (
              <div key={index} className="bg-[#1A1B2E] p-8 rounded-2xl">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-gray-400 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};