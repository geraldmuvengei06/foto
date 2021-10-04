import { useEffect, useState } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import './ViewImage.css'

import api from "../api";
// import ImageCard from "../components/ImageCard";
let ViewImage = () => {
    let { id } = useParams()
    let [data, setPhotoResponse] = useState(null)
    let getPhoto = () => {
        api.photos.get({ photoId: id })
            .then(res => {
                console.log(res);
                setPhotoResponse(res)
            })
            .catch(err => console.log("err", err))
    }
    useEffect(() => {
        getPhoto()
        // eslint-disable-next-line
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
    } else {

        // const preview_photos = data.response.preview_photos.map((item, index) => <ImageCard key={index} id={data.response.id} user={data.response.user} urls={data.response.preview_photos}></ImageCard>)

        return (
            <div>
                <Container className="my-4 is-view-image">
                    <Row className="justify-content-center">
                        <Col xs sm="8" className="align-self-center">
                            <div className="text-center">
                                <img className="img-fluid" alt={data.response.urls.regular} src={data.response.urls.regular} />
                            </div>
                        </Col>
                        <Col className="">
                            <div className="d-flex">
                                <div className="flex-shrink-0">
                                    <img className="rounded" src={data.response.user.profile_image.small || ''} alt={data.response.user.username} />
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <strong>{data.response.user.username}</strong>
                                    <p><a href={data.response.user.links.html}>@{data.response.user.username}</a> </p>
                                </div>
                            </div>
                            <p className="btn-group">
                                <Button variant="primary">Download</Button>
                            </p>
                        </Col>
                    </Row>
                </Container>

                {/* <Container className="my-4" fluid>
                    <h1 className="display-4 my-4">Photos by Unsplash</h1>
                    <div className="masonry-grid">
                        {preview_photos}
                    </div>

                </Container> */}
            </div>


        )
    }
}

export default ViewImage