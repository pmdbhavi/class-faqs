import './index.css'
import {Component} from 'react'

class FaqsItem extends Component{
    state={isShow:false}

    isActive=()=>{
        this.setState(prevState=>({isShow:!prevState.isShow}))
    }
    
    render(){
        const {details}=this.props
        const {questionText,answerText}=details
        const {isShow}=this.state
    return(
        <li className="list">
            <div className="con">
                <h1 className="question">{questionText}</h1>
                <button className="button" type="button" onClick={this.isActive}>
                    {isShow ? <img src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png" alt="minus"/>:
                    <img src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png" alt="plus"/>}
                </button>
            </div>
            {isShow &&<div className="con1">
                <hr className="line"/>
                <p className="answer">{answerText}</p>
            </div>}
        </li>
    )
    }
}

export default FaqsItem