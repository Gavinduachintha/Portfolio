import React from "react";
import Card from "../../components/ui/Card.jsx";
import articles from "../../data/articles";

const Articles = () => {
  const seriesMap = articles.reduce((acc, a) => {
    acc[a.series] = acc[a.series] || [];
    acc[a.series].push(a);
    return acc;
  }, {});

  return (
    <div className="w-full py-12">
      <div className="mx-auto max-w-6xl px-4">
        <header className="mb-8">
          <h2 className="text-3xl font-bold">Article Series</h2>
          <p className="text-sm text-neutral-500 mt-2">
            Curated series of technical articles and guides.
          </p>
        </header>

        <div className="flex flex-col gap-10">
          {Object.entries(seriesMap).map(([seriesName, items]) => (
            <section key={seriesName}>
              <h3 className="text-2xl font-semibold mb-4">{seriesName}</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((it) => (
                  <div key={it} className="h-full">
                    <Card
                      title={it.title}
                      description={it.summary}
                      href={it.url}
                      tags={it.tags}
                      year={it.year}
                    />
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;