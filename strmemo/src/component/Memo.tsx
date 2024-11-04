import "../index.css";

function Memo(props: any) {
  console.log(props);
  console.log(props.props.num);
  return (
    <>
      <div>{}</div>
      <textarea className="flex fusen flex-wrap rounded-lg"></textarea>
    </>
  );
}

export default Memo;
