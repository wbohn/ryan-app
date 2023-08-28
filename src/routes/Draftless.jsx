import "../App.css";

export function Draftless() {
  const poem = `draftless:\n\tdraft thoughts\n\t\tscope grows\n\tdrift together\n\t\tdraftless again`;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div>
        <p style={{ whiteSpace: "pre", fontSize: "calc(10px + 2vmin)" }}>
          {poem}
        </p>
      </div>
    </div>
  );
}
