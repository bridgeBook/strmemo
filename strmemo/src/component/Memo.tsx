import "../index.css";

function Memo(props: any) {
  // console.log(props);
  // console.log(props.props.num);
  // console.log(props.props.strCount);
  // console.log(props.props.strCount[props.props.num].name);

  // props.props.strCount[props.props.num].name
  // props.props.strCount.name
  // console.log(props);
  return (
    <>
      <div className="title">{props.strCount[props.num].name}</div>
      <textarea className="flex fusen flex-wrap rounded-lg"></textarea>
    </>
  );
}

export default Memo;
