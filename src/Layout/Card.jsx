import { Component } from "react"

function CardUi(props){
    return(
        <>
            <div id="card" className="card border-0 shadow p-4">
                    <h4 className="text-center">{props.title || "NA"}</h4>
                    <h6 className="text-center text-secondary">{props.subtitle || "NA"}</h6>
                    <img src={props.url || "https://static.vecteezy.com/system/resources/thumbnails/022/059/000/small_2x/no-image-available-icon-vector.jpg"} alt="" />
                    <div className="card-body">
                        <p>{props.des || "No Description !!"}</p>
                    </div>
            </div>
        </>
    )
}

class CardclassUi extends Component {
    render() {
        return (
            <>
                <div id="card" className="card border-0 shadow p-4">
                    <h4 className="text-center">{this.props.title}</h4>
                    <h6 className="text-center text-secondary">{this.props.subtitle}</h6>
                    <img src={this.props.url} alt="" />
                    <div className="card-body">
                        <p>{this.props.des}</p>
                    </div>
                </div>
            </>
        )
    }
}

export {CardUi,CardclassUi}
