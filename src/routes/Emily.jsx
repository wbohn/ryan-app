import "../App.css";

export function Emily() {
  const poem = `while True: \n\t# (always)\n\ti love you`;

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
