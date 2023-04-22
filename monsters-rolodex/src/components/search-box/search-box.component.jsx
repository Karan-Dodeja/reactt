import { Component } from "react";

class searchBox extends Component {
    render() {
        return (
            <input type="search" className={this.props.className} placeholder={this.props.placeholder} onChange={this.props.onChangeHandler} />
        )
    }
}

export default searchBox;