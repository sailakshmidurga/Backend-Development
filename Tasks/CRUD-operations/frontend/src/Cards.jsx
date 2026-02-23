function Cards({ details }) {
  if (!details) return null;

  return (
    <div style={{ margin: "20px" }}>
      <h2>Cards Page</h2>
      <div
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          borderRadius: "5px",
          width: "200px",
        }}
      >
        <h3>{details.username}</h3>
        <p>{details.description}</p>
      </div>
    </div>
  );
}

export default Cards;
