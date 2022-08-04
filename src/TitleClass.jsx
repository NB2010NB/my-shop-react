import { Component } from "react";

class Text extends Component {
    constructor(props) {
        super();
    }
    render() {
        return (
            <div className="forList">
                <h1>sopping for {this.props.name}</h1>


            </div>
        )
    }
}
export default Text