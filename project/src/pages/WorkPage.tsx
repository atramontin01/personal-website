import React from 'react';

export default function WorkPage() {
  const workExperience = [
    {
      date: "may 2025",
      title: "co-founder",
      company: "stealth ai startup",
      link: null,
      note: "during mba summer"
    },
    {
      date: "aug 2024",
      title: "mba candidate",
      company: "uc berkeley haas",
      link: "https://info.haas.berkeley.edu/berkeleyHaas-mba?gad_campaignid=2041052521&gbraid=0AAAAAD3cLo-QJeNuk5LoYc47zNZ78kR00"
    },
    {
      date: "sep 2023",
      title: "bizops",
      company: "linkedin",
      link: "https://linkedin.com"
    },
    {
      date: "mar 2020",
      title: "data and insights",
      company: "linkedin",
      link: "https://linkedin.com"
    },
    {
      date: "oct 2018",
      title: "business leadership program",
      company: "linkedin",
      link: "https://linkedin.com"
    }
  ];

  const projects = [
  ];

  const content = [];

  const Section = ({ title, items, showCompany = false }: { 
    title: string; 
    items: any[]; 
    showCompany?: boolean; 
  }) => (
    <div className="mb-16">
      <h2 className="text-2xl font-medium text-gray-900 mb-8">{title.toLowerCase()}</h2>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="flex items-start">
            <div className="w-24 flex-shrink-0">
              <span className="text-sm text-gray-500">{item.date}</span>
            </div>
            <div className="flex-1">
              {showCompany ? (
                <div>
                  <span className="text-gray-900">{item.title} @ </span>
                  {item.link ? (
                    <a 
                      href={item.link} 
                      className="text-blue-500 hover:text-blue-600 transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.company}
                    </a>
                  ) : (
                    <span className="text-gray-900">{item.company}</span>
                  )}
                  {item.note && (
                    <span className="text-gray-500 ml-2">({item.note})</span>
                  )}
                </div>
              ) : (
                <a 
                  href={item.link} 
                  className="text-blue-500 hover:text-blue-600 transition-colors duration-200"
                >
                  {item.title}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="pt-20 px-6 min-h-screen text-left">
      <div className="max-w-4xl">
        <div className="pt-16">
          <Section title="work" items={workExperience} showCompany={true} />
          <Section title="projects" items={projects} />
          <Section title="content" items={content} />
        </div>
      </div>
    </div>
  );
}