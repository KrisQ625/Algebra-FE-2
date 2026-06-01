export default function Users({ ime, godine, onNameChange,onDeleteUser}) {
  return (
    <>
      {" "}
      <p onClick={null}>
        Pozdrav moje ime je {ime} i imam {godine} godina
      </p>
      <input type="text" value={ime} onChange={onNameChange} />
    </>
  );
}
