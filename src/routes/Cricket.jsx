import "../App.css";

export function Cricket() {
  const poem = `with (roar of night):\n\theard:\n\t\tas one\n\t\tas many`;

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
