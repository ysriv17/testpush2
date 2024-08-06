import React from "react";
import Card from "./elementalComponents/Card";
const CardData = () => {
  const cardData = [
    {
      title: "No Need for Call Centers",
      body: " Eliminate the hassle of setting up traditional call centers.",
    },
    {
      title: "No SDR Army Required:",
      body: "Forget about hiring a large team for cold calling; Dial247.AI",
    },
    {
      title: "Admin Task Simplification",
      body: "Reduce the need for a large administrative staff for mundane tasks like appointment scheduling, visitor confirmations.",
    },
    {
      title: "Swift Analysis So You Can Plan Next Action Items",
      body: "Say goodbye to long wait times to get analysis after completion of call processes.",
    },
    {
      title: "Independence from Outsourced BPO",
      body: "No more reliance on external BPO call centers.",
    },
    {
      title: "Realistic, Human-Like Voice",
      body: "Experience the nuances of a natural voice. Don't just take our word for it; try it yourself—actions speak louder than words.",
    },
    {
      title: "Your Own Personal Agent",
      body: "Train your agent once, and it’s yours for forever. Enjoy peace of mind.",
    },
    {
      title: "No Technical Expertise Needed",
      body: "Our experts will handle the training; you just need to provide them with few requirements. All set then!",
    },
    {
      title: "Custom Voices Available",
      body: "Personalize with custom voices, including the option to use your own voice. Interesting, isn’t it?",
    },
    {
      title: "IVR Navigation Included",
      body: "Fully managed IVR navigation.",
    },
    {
      title: "Immediate Post-Call Insights",
      body: " Extract actionable insights from conversations right after calls.",
    },
    {
      title: "Versatile Application",
      body: "Industry-agnostic and suitable for any use case involving communication.",
    },
    {
      title: "Global Client Communication",
      body: "Engage with clients worldwide in multiple languages. You just name it, AI will be seen speaking in that language. ",
    },
    {
      title: "Unlimited Scalability",
      body: " Expand without constraints.",
    },

    // More card data
  ];

  return (
    <div className="min-h-screen px-4">
      <h2 className="text-4xl font-Poppins py-8 md:py-10 md:text-6xl text-black text-center font-bold fade-in-up fade-in-up fade-in-up-delay-3">
        Why D<span className="text-[#0388A7]">i</span>al 24
        <span className="text-[#0388A7]">x</span>7
      </h2>
      <div className="container mx-auto p-4 md:py-12 min-h-screen bg-gray-100 rounded-3xl">
        <div className="xl:px-8 grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ">
          {cardData.map((data, index) => (
            <Card key={index} title={data.title} body={data.body} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardData;
