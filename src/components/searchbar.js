import React, {Component} from 'react'

class SearchBar extends Component {
    constructor(props){
        //inhereited from component
        super(props);
        //this proprty that should be updated when a change occurs on the input
        //only inside of contructor should the state look like an object
        this.state = { term : ''}
    }

    render() {
        return(
            <div className ="search-bar">
                {/* <input onChange={this.onInputChange}/> */}
                {/* Now a controlled component when the event fires, it then updates the state,
                 which then updates the value based on the state */}
                <input 
                value = {this.state.term}
                onChange={event => this.onInputChange(event.target.value)} 
                />
            </div>
        );
    }
    onInputChange(term){
        this.setState({term})
        this.props.onSearchTermChange(term);
    }

    // Will not set state properly since this is not a lambda function , context?
    // onInputChange(event) {
    //     //on 'name of element' on 'event'
    //     //event describes the context and information of the event that occured
    //     //use event to access the value of the text element.
    //     console.log(event.target.value)
    //     this.setState({term: event.target.value});
    // }

}

export default SearchBar;