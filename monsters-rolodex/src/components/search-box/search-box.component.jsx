import { Component } from "react";
import './search-box.styles.css'

class searchBox extends Component {
    render() {
        return (
            <input type="search" 
            className={`search-box ${this.props.className}` }
            placeholder={this.props.placeholder} 
            onChange={this.props.onChangeHandler} />
        )
    }
}

export default searchBox;