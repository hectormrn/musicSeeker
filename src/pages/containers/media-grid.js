import React, { Component, Fragment } from "react";
import ApiClient from "../../http/apiClient";
import Media from '../../shared/components/media';
import Loading from "../../shared/container/loading";
import LoadingIcon from '../../shared/components/loading-icon';
import BackButton from "../../shared/components/back-button";
import { logger } from ".././../http/logger";
import leftArrow from '../../../images/arrow-l.svg';
import rigthArrow from '../../../images/arrow-r.svg';

class MediaGrid extends Component {
    constructor () {
        super()
        this.api = new ApiClient();
        this.state = {
            gridItems: [],
            keyword: "",
            type: "",
            offset: 10,
            limit: 10
        }
    }

    componentDidMount () {
        let { keyword, type } = this.props.match.params;
        this.setState({keyword: keyword})
        this.setState({type: type})
        this.api.searchMixed(keyword, type, {limit: this.state.limit})
        .then( resp => {
            this.setState({gridItems: resp[0]})
        })
    }

    handleNextPrev = (next) => {
        let requestOffset = this.state.offset
        if (!next) {
            if (requestOffset <= 0 && this.state.offset == 0) {
                logger("There are no more result previous")('i')
                return
            } 
            console.log("current offset: ", requestOffset)
            requestOffset = this.state.offset - (this.state.limit * 2)
            this.setState(this.decrementOffset())
            console.log("after decrement: ", requestOffset)    
        }
        this.api.search(
            this.state.keyword, 
            this.state.type, 
            { 
                offset: requestOffset,
                limit: this.state.limit
             }
        ).then( (resp) => {
            if (Array.isArray(resp) && resp[0].length <= 0) {
                logger(`There are no more results for "${this.state.keyword}"`)('i')
                return;
            }
            next ? this.setState(this.incrementOffset()) : this.setState(this.decrementOffset()) 
            this.setState({gridItems: resp[0]})
        }
        )
    }

    //move this in another module
    incrementOffset = () => {
        return {
            offset: (this.state.offset + this.state.limit)
        }
    }

    //move this in another module
    decrementOffset = () => {
        let nextOffset = this.state.offset - (this.state.limit * 2)
        return {
            offset: nextOffset < 0 ? 0: nextOffset 
        }
    }

    render() {
        return(
            <div className="container">
                {
                    this.state.gridItems && this.state.gridItems.length > 0 ?
                    <Fragment>
                    <BackButton />
                    <div className="row" style={{justifyContent: 'center'}}>
                    {
                        this.state.gridItems.map( item => {
                            return <Media data={item} key={item.id} insideGrid={true}/>    
                        })
                    }
                    </div>
                    <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-center">
                            <li className="page-item" onClick={this.handleNextPrev.bind(this, false)}>
                                <a className="page-link" tabIndex="-1">
                                    <img src={leftArrow} width={30} height={30}/>
                                </a>
                            </li>
                            <li className="page-item" 
                                onClick={this.handleNextPrev.bind(this, true)} 
                                style={{marginLeft:'20px'}}
                            >
                            <a className="page-link">
                                <img src={rigthArrow} width={30} height={30}/>
                            </a>
                            </li>
                        </ul>
                    </nav>
                    </Fragment>
                    :
                    <Loading><LoadingIcon /></Loading>
                }
            </div>
        )
    }

}

export default MediaGrid;