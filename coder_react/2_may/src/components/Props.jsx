import "./Props.css";

// 1st way
// function Prop(props){
// console.log(props)

// destructuring

function Prop({ children,title ="jai ho", color, views, channel, time }) {
  // console.log(title)

  return (
    <div className="container">
      {/* <h1>{props.title}</h1> */}

      <div className="pic">
        <img src="http://placeimg.com/160/90/any" />
      </div>

      <div className="title">{title} {children} </div>

      <div className="channel" style={{ color: "white" }}>
        {channel}{" "}
      </div>
      <div className="views" style={{ color: "white" }}>
        {views} views <span> .</span>
        {time}
      </div>
    </div>
  );
}

export default Prop;
