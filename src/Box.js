import "./Box.css"

function Box({ id, handleRemoveBox, width = 5, height = 5, backgroundColor = "green" }) {
  const removeBox = () => handleRemoveBox(id);
  return (
    <div className="Box-container">
      <div
        className="Box"
        style={{
          height: `${height}em`,
          width: `${width}em`,
          backgroundColor,
        }}
      />
      <button onClick={removeBox}>X</button>
    </div>
  );
}

export default Box;
