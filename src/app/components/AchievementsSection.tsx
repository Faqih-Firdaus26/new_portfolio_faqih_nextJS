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
  ];

  return (
    <section id="achievements" className="bg-[#E9F1FA] py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-[#00ABE4] text-center mb-8">
          Achievements
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF] p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-[#00ABE4] w-12 h-12 mb-4 rounded-full flex items-center justify-center text-white">
                <span className="font-bold">{achievement.year}</span>
              </div>
              <h3 className="text-xl font-semibold text-[#00ABE4] mb-3">
                {achievement.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
