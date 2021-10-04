import { Col, Container, Row, Form, Button } from 'react-bootstrap'
import './Home.css';

import ImageCard from '../components/ImageCard'
// const ImageCard = React.lazy(() => import("../components/ImageCard"))
import React, { useEffect, useState } from 'react';
import SearchField from '../components/SearchField';

import api from '../api'

function Home(){
    return (
        <div>
            <Hero/>
            <HomeContent/>
        </div>
    )
}

let Hero = () => {
    return (
        <header header className = "App-header" >
        <Container>
            <Row className="d-flex justify-content-center">
                <Col xs="12" sm="10" md="6">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="text-dark">Search for your favourite Foto.</Form.Label>
                            <SearchField />
                            <Form.Text className="text-grey">
                                High quality fotos for everyone.
                            </Form.Text>
                        </Form.Group>
                </Col>
            </Row>
        </Container>
      </header >
    )
}

class HomeContent extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            photos: [],
            page: 1
        }
        this.loadMore = this.loadMore.bind(this)
    }

    loadMore() {
        let newpage = this.state.page
        newpage++
        this.setState({page: newpage});
        console.log("current page", this.state.page);
        api.photos.list({ perPage: 10, page: this.state.page })
            .then(res => {
                console.log('res', res);
                let morePhotos = [...this.state.photos, ...res.response.results]
                this.setState((state) => ({
                    photos: morePhotos
                }))
            })
            .catch(err => console.log('err', err))
    }

    componentDidMount() {
        this.loadMore()
    }

    render() {
        const imageList = this.state.photos.map((item, index) => <ImageCard className="" key={index} item={item} />)

        return (
            <Container className="my-4">
                <h1 className="display-4 my-4">Photos by Unsplash</h1>
                <div className="masonry-grid">
                    {imageList}
                </div>
                <div className="text-center ms-3">
                    <Button variant="primary" onClick={this.loadMore}>Load more..</Button>
                </div>
            </Container>
        )
    }
}


export default Home