import {Component} from 'react'
import FaqsItem from '../FaqsItem'
import './index.css'

class Faqs extends Component{
    render(){
        const {faqsList}=this.props
        return(
            <div className="main-container">
                <div className="container">
                    <h1 className="heading">FAQs</h1>
                    <ul className="ul">
                        {faqsList.map(each=>(
                            <FaqsItem details={each} key={each.id}/>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Faqs