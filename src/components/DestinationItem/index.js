// Write your code here

import './index.css'

const DestinationItem=props=>{
    const {destinationPlaceDetails}=props
    const {name,imgUrl}=destinationPlaceDetails
    return(
        <li className="destination-places">
        <img src={imgUrl} alt={name} className="destination-images"/>
        <p className="destination-place-name">{name}</p>
        </li>
    )
}
export default DestinationItem


