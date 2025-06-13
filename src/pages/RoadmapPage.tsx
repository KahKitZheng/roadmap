import Layout from "../components/layouts";
import * as data from "../data";

type RoadmapPageProps = {};

export default function RoadmapPage(props: Readonly<RoadmapPageProps>) {
  const teamMembers = data.team.members.map((member) => {
    return member.fullName
      ? member.fullName
          .split(" ")
          .map((name) => name[0].toUpperCase())
          .join("")
      : member.name[0].toUpperCase();
  });

  return (
    <Layout>
      <header>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          {teamMembers.map((member, index) => (
            <p
              key={index}
              style={{
                borderRadius: "999px",
                backgroundColor: "#f0f0f0",
                border: "2px solid #ddd",
                height: "1.5rem",
                width: "1.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0.25rem",
                fontWeight: "600",
                textTransform: "uppercase",
                position: "relative",
                zIndex: teamMembers.length - index,
                marginLeft: index === 0 ? 0 : "-6px",
              }}
            >
              {member}
            </p>
          ))}
        </div>
        <div></div>
      </header>
      <div style={{ display: "grid", gap: "1.5rem" }}>
        {data.projects.map((project) => (
          <div
            key={project.name}
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "200px 1fr",
              alignItems: "baseline",
            }}
          >
            <header
              style={{
                display: "grid",
                flexDirection: "column",
                gap: "4px",
              }}
            >
              <h2>{project.name}</h2>
              <small
                style={{
                  borderRadius: "999px",
                  backgroundColor: "#daffd8",
                  border: "2px solid #9ae6bd",
                  color: "#1a8b4e",
                  padding: "0 8px",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  fontSize: "10px",
                  width: "fit-content",
                }}
              >
                {project.status}
              </small>
            </header>
            <div>
              {project.phases.map((phase) => (
                <div
                  key={phase.name}
                  style={{
                    display: "grid",
                    gap: "1rem",
                    gridTemplateColumns: "150px 1fr",
                  }}
                >
                  <h4 style={{ fontWeight: 600 }}>{phase.name}</h4>
                  <p>
                    {phase.members?.map((member) => member.name).join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
