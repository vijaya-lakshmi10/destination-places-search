// Write your code here
import {Component} from 'react'

import './index.css'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component{
    state={searchInput:''}

    onSearchDestination=(event)=>{
        this.setState({searchInput:event.target.value})
    }
    render(){
        const {searchInput}=this.state
        const {destinationsList}=this.props
        const searchResults=destinationsList.filter((eachPlace)=>eachPlace.name.toLowerCase().includes(searchInput.toLowerCase()))
        return(
            <div className="bg-container">
            <div className="destination-search-container">
            <h1 className="heading">Destination Search</h1>
            <div className="destination-search-bar">
            <input type="search" placeholder="Search" className="search-bar" value={searchInput} onChange={this.onSearchDestination} />
            <img src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png" alt="search icon" className="search-img"/>
            </div>
            <ul className="destination-items">
            {searchResults.map((eachPlace)=>(<DestinationItem destinationPlaceDetails={eachPlace} key={eachPlace.id}/>))}
            </ul>
            </div>
            </div>
        )
    }

}
export default DestinationSearch
