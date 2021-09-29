import { Form } from "react-bootstrap"
import React from 'react'
class SearchField extends React.Component {
    constructor(props) {
        super(props);
        this.state = { searchQuery: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.doSearch = this.doSearch.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    doSearch(event) {
        if (event.key === 'Enter') {
            console.log(this.props);
            // let history = useHistory()
            // history.push({ pathname: '/search/', search: event.target.value })
            // return (
                // <Redirect
                    // to={`/search/${event.target.value}`}
                // />
            // );
            alert(event.target.value)
        }
    }

    render() {
        return (
            <Form className="d-flex" onSubmit={this.handleSubmit}>
                <Form.Control type="search" placeholder="Search for your favourite Foto." onKeyDown={this.doSearch} />
            </Form>
        )
    }
}


export default SearchField