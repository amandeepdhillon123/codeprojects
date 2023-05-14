import '../index.css'
const Video = ()=>{

    return(
        <>
            <h1>Hello Dosto</h1>
        </>
    )
}

const Samay = ()=>{

   let color ="black"
    let name ="amandeep"
    return(
        <div>
            <h5>Hello {name}</h5>
            <img src="https://placebear.com/260/190" alt ="image"/>.
            <div className="red" style={{color:color}}> React Js tutorial - Components</div>
        </div>
    )
}

// export default Video;

export {Video, Samay};