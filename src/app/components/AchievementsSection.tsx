export default function AchievementsSection() {
  const achievements = [
    {
      title: "1st Winner - Research and Innovation Week",
      description:
        "Developed a vertical aeroponic smart farm using IoT, Machine Learning, solar panels, and website monitoring.",
      year: "2023",
    },
    {
      title: "2nd Winner - Engineering Competition",
      description:
        "Designed a vertical aeroponic smart farm prototype to overcome urban farming challenges.",
      year: "2022",
    },
    {
      title: "1st Winner - Data Mining Competition",
      description:
        "Developed a pretrained model for sentiment analysis and categorization with 95% accuracy.",
      year: "2022",
    },
    {
      title: "Best Presenter - Senastik Unsika",
      description:
        "arah perkembangan teknologi industri berkelanjutan untuk mendukung produktivitas bangsa dan regional sustainable development goals (SDGs)",
      year: "2022",
    },
    {
      title: "Finalis 4th - Engineering Scientific Competition",
      description:
        "Making people aware of the importance of taking care of facial skin along with the many skincare products on the market.",
      year: "2022",
    },
  ];

  return (
    <section id="achievements" className="bg-[#1E293B] py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#E9F1FA] text-center mb-8">
          Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-[#334155] p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-[#00ABE4] w-12 h-12 mb-4 rounded-full flex items-center justify-center text-white">
                <span className="font-bold">{achievement.year}</span>
              </div>
              <h3 className="text-xl font-semibold text-[#E9F1FA] mb-3">
                {achievement.title}
              </h3>
              <p className="text-[#CBD5E1] leading-relaxed">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
