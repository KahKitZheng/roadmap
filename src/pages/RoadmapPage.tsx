import Layout from "../components/layouts";
import * as data from "../data";

type RoadmapPageProps = {};

export default function RoadmapPage(props: Readonly<RoadmapPageProps>) {
  const users = data.users;

  return (
    <Layout>
      <header>
        <div></div>
        <div></div>
      </header>
      <div>
        <div>
          <p>Roadmap</p>
          {/* <p>Tooling to manage projects easier</p> */}
        </div>
        <div style={{ display: "grid", gap: "0.5rem" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "150px 1fr",
              gap: "0.5rem",
            }}
          >
            <p>Project plan</p>
            <div>
              <p>Employee #1</p>
              <p>Employee #2</p>
            </div>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "150px 1fr",
              gap: "0.5rem",
            }}
          >
            <p>Design</p>
            <div>
              <p>Employee #1</p>
            </div>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "150px 1fr",
              gap: "0.5rem",
            }}
          >
            <p>Development</p>
            <div>
              <p>Employee #1</p>
              <p>Employee #2</p>
              <p>Employee #3</p>
            </div>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "150px 1fr",
              gap: "0.5rem",
            }}
          >
            <p>Testing</p>
            <div>
              <p>Employee #1</p>
              <p>Employee #2</p>
              <p>Employee #3</p>
            </div>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "150px 1fr",
              gap: "0.5rem",
            }}
          >
            <p>Communication</p>
            <div>
              <p>Employee #1</p>
              <p>Employee #2</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
