import Avatar from "../components/avatar/Avatar";
import Layout from "../components/layouts";
import * as data from "../data";
import styles from "./RoadmapPage.module.scss";

type RoadmapPageProps = {};

export default function RoadmapPage(props: Readonly<RoadmapPageProps>) {
  function getMemberInitials(member: MemberEntity) {
    return member.fullName
      ? member.fullName
          .split(" ")
          .map((name) => name[0].toUpperCase())
          .join("")
      : member.name[0].toUpperCase();
  }

  return (
    <Layout>
      <header>
        <div className={styles.avatarGroup}>
          {data.team.members.map((member, index) => (
            <Avatar key={index} zIndex={data.team.members.length - index}>
              {getMemberInitials(member)}
            </Avatar>
          ))}
        </div>
      </header>

      <div className={styles.projectGridList}>
        {data.projects.map((project) => (
          <div key={project.name} className={styles.projectContainer}>
            <header className={styles.projectHeader}>
              <h2 className={styles.projectTitle}>{project.name}</h2>
              <small className={styles.projectStatus}>{project.status}</small>
            </header>
            <div>
              {project.phases.map((phase) => (
                <div key={phase.name} className={styles.projectPhases}>
                  <h4 className={styles.projectPhase}>{phase.name}</h4>
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
