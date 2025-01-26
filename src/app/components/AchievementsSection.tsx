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
    <section id="achievements" className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-blue-600 text-center mb-8">
          Achievements
        </h2>
        <div className="overflow-x-auto">
          <div className="min-w-[800px] flex space-x-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md flex-shrink-0 w-80"
              >
                <div className="bg-blue-100 w-10 h-10 mb-3 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">
                    {achievement.year}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {achievement.title}
                </h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
