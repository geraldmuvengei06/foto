import { Form } from "react-bootstrap"
import React from 'react'
import { useNavigate } from 'react-router-dom'
class SearchField extends React.Component {
    constructor(props)  {
        super(props);
        this.state = {searchQuery: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.doSearch = this.doSearch.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
    }

    doSearch(event) {
        let navigate = useNavigate();
        if(event.key === 'Enter') {
            navigate('/search')
            // alert(event.target.value)
            // return (
            //     <Redirect push to={{
            //         pathname: '/search',
            //         searchQuery: event.target.value,
            //     }} />
            // )
            console.log(this.props);
      
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