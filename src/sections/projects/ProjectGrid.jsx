import projects from "../../data/projects.js";
import Card from "../../components/ui/Card.jsx";

export default function ProjectGrid() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-[72rem] px-4 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <Card
            key={p.slug}
            title={p.title}
            description={p.summary}
            as="a"
            href={p.url}
          />
        ))}
      </div>
    </section>
  );
}
