
export default function Home() {
  return (
    <div>
      <h1>hello jii</h1>
      <User name="amandeep"/>
       <User name ="ramfal"/>
    </div>
  )
}


const User =(props)=>{
  return(
    <div>
      <h2>hello {props.name}</h2>
    </div>
  )
}
