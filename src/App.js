import data from "./data"
import { CardUi, CardclassUi } from "./Layout/Card"

// import CardClass from "./Layout/CardClassUi"
// import

function App(){
  return(
    <>
      <h1 className="text-center my-5">Card Using Function</h1>
       <div className="col-lg-8 mx-auto my-5 ">
          <div className="row mx-auto gap-5">
                {data.map((ele)=>(
                    <CardUi title={ele.title} des={ele.des} url={ele.url} subtitle={ele.subtitle}/>
                ))
            }
        </div>
       </div>

      <h1 className="text-center my-5">Card Using Class Components</h1>

      <div className="col-lg-8 mx-auto my-5">
         <div className="row mx-auto gap-5">
                {data.map((ele)=>(
                    <CardclassUi title={ele.title} des={ele.des} url={ele.url} subtitle={ele.subtitle}/>
                ))
            }
        </div>
       </div>


    </>
  )
}

export default App