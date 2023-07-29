


export default function Home() {
  return (
    <main >
         <h1>hello ji</h1>
         <Ram name="amandeep"/>
         <Ram name="rahul"/>
         <Ram name="jai ho"/>
    </main>
  )
}

function Ram(props){
  return(
    <>
    <h1>hello ji {props.name}</h1>
    </>
  )
}
