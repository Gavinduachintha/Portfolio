import projects from "../../data/projects.js";
import Card from "../../components/ui/Card.jsx";

export default function ProjectGrid() {
  return (
    <section className="py-12 px-4">
      <div className="mx-auto max-w-[72rem]">
        <div className="flex flex-col gap-6">
          {projects.map((p) => (
            <Card
              key={p.slug}
              title={p.title}
              description={p.summary}
              image={p.image}
              as="a"
              href={p.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
