import Avatar from "../components/avatar/Avatar";
import Layout from "../components/layouts";
import * as data from "../data";
import styles from "./RoadmapPage.module.scss";
import { useRef } from "react";

export default function RoadmapPage() {
  const timelineContainersRef = useRef<{
    [key: string]: HTMLDivElement | null;
  }>({});

  const handleScroll = (projectId: string, scrollLeft: number) => {
    Object.entries(timelineContainersRef.current).forEach(
      ([key, container]) => {
        if (key !== projectId && container) {
          container.scrollLeft = scrollLeft;
        }
      }
    );
  };

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
            <div className={styles.projectHeader}>
              <h2 className={styles.projectTitle}>{project.name}</h2>
              {/* <small className={styles.projectStatus}>{project.status}</small> */}
            </div>

            <div className={styles.projectDetails}>
              <div className={styles.phasesList}>
                {project.phases.map((phase) => (
                  <div key={phase.name} className={styles.projectPhases}>
                    <h4 className={styles.projectPhase}>{phase.name}</h4>
                    <p className={styles.projectPhaseMembers}>
                      {phase.members?.map((member) => member.name).join(", ")}
                    </p>
                  </div>
                ))}
              </div>
              <div
                className={styles.timelineContainer}
                ref={(el: HTMLDivElement | null) => {
                  timelineContainersRef.current[project.name] = el;
                }}
                onScroll={(e) =>
                  handleScroll(project.name, e.currentTarget.scrollLeft)
                }
              >
                <div
                  style={{
                    display: "grid",
                    gap: "1px",
                    backgroundColor: "#ddd",
                    padding: "1px",
                    minWidth: "1700px", // Accommodates all weeks (52 * 32px + gaps)
                    width: "max-content",
                  }}
                >
                  {project.phases.map((phase) => (
                    <div
                      key={phase.name}
                      className={styles.projectPhaseTimeline}
                    >
                      {Array.from({ length: 52 }, (_, index) => {
                        const weekNumber = index + 1;
                        return (
                          <span
                            key={weekNumber}
                            style={{
                              display: "inline-block",
                              width: "32px",
                              height: "23px",
                              textAlign: "center",
                              // border: "1px solid #ccc",
                              backgroundColor: "white",
                            }}
                          >
                            {""}
                          </span>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
