// import { Button } from 'react-bootstrap'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ImageCard.css'

let ImageCard = (props) => {
	let { id, user, urls } = props.item;
	return (
		<figure className="masonry-item m-2" style={{ width: 'fit-content' }}>
			<Link to={`/foto/${id}`}>
				<img src={urls.small} itemProp={urls.thumb} alt={urls.thumb} />
			</Link>
			<div className="masonry-item-overlay p-2 ">
				<Button variant="light" size="sm" className="mt-auto">Download</Button>
			</div>
			<div className="masonry-item-desc p-2 mb-3">
				<div className="d-flex align-items-center">
					<div className="flex-shrink-0">
						<img className="rounded" src={user.profile_image.small || ''} alt={user.username} />
					</div>
					<div className="flex-grow-1 ms-3">
						<a className="fontweight-bold text-black"  href={user.portfolio_url}>{user.username}</a>
					</div>
				</div>

			</div>
		</figure>
	)
}

export default ImageCard