import { Col, Container, Row, Form, Button } from 'react-bootstrap'
import './Home.css';

import ImageCard from '../components/ImageCard'
// const ImageCard = React.lazy(() => import("../components/ImageCard"))
import React, { useEffect, useState } from 'react';
import SearchField from '../components/SearchField';

import api from '../api'

function List() {
    return (
        <div>
            <Hero />
            <HomeContent />
        </div>
    )
}

let Hero = () => {
    return (
        <header header className="App-header" >
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


let HomeContent = () => {
    const [data, setPhotosResponse] = useState(null);
    let [page, setPage] = useState(null);

    let listPhotos = () => {
        api.photos.list({ perPage: 10, page: page })
            .then(res => {
                console.log('res', res);
                setPhotosResponse(res)
            })
            .catch(err => console.log('err', err))
    }
    let loadMore = () => {
        ++page
        setPage(page)
        console.log(page);
        api.photos.list({ perPage: 10, page: page })
            .then(res => {
                console.log('res', res);
                let morePhotos = [...data.response.results, ...res.response.results]
                console.log(morePhotos.length);
                data.response.results = morePhotos
                setPhotosResponse(data)
            })
            .catch(err => console.log('err', err))
    }
    useEffect(() => {
        setPage(1)
        listPhotos()
    }, [])

    if (data === null) {
        return <div>Loading...</div>
    } else if (data.errors) {
        return (
            <div>
                <div>{data.errors[0]}</div>
                <div>PS: Make sure to set your access token!</div>
            </div>
        );
    }else{
        const imageList = data.response.results.map((item, index) => <ImageCard className="" key={index} item={item} />)

        return (
            <Container className="my-4">
                <h1 className="display-4 my-4">Photos by Unsplash</h1>
                <div className="masonry-grid">
                    {imageList}
                </div>
                <div className="text-center ms-3">
                    <Button variant="primary" onClick={loadMore}>Load more..</Button>
                </div>
            </Container>
        )
    }
}


export default List