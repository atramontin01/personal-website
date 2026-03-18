import React from 'react';

const workExperience = [
  {
    date: 'may 2025',
    title: 'co-founder',
    company: 'stealth ai startup',
    link: null,
    note: 'during mba summer',
  },
  {
    date: 'aug 2024',
    title: 'mba candidate',
    company: 'uc berkeley haas',
    link: 'https://haas.berkeley.edu',
  },
  {
    date: 'sep 2023',
    title: 'bizops',
    company: 'linkedin',
    link: 'https://linkedin.com',
  },
  {
    date: 'mar 2020',
    title: 'data and insights',
    company: 'linkedin',
    link: 'https://linkedin.com',
  },
  {
    date: 'oct 2018',
    title: 'business leadership program',
    company: 'linkedin',
    link: 'https://linkedin.com',
  },
] as const;

export default function WorkPage() {
  return (
    <div className="pt-20 px-6 min-h-screen text-left page-enter">
      <div className="max-w-4xl">
        <div className="pt-16">
          <h2 className="text-2xl font-light text-gray-900 mb-8">work</h2>
          <div className="space-y-4 stagger-children">
            {workExperience.map((item, index) => (
              <div key={index} className="flex items-start">
                <div className="w-24 flex-shrink-0">
                  <span className="text-sm text-gray-500">{item.date}</span>
                </div>
                <div className="flex-1">
                  <span className="text-gray-900">{item.title} @ </span>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-gray-900 underline decoration-gray-300 hover:decoration-gray-900 transition-colors duration-75"
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
