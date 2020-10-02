import React from 'react';
import ReactDOM from 'react-dom';
import './Accordian.css';

class Accordian extends React.Component {
    static defaultProps = { sections: [] };

    state = {
        activeSectionIndex: null
    }

    handleButtonClick = (indexChosen) => {
        console.log("Pressed button");
        this.setState({
            activeSectionIndex: indexChosen
        })
    }

    renderAccordionItems() {
        return this.props.sections.map((section, i) => (

            <li key={i}>
                <button key={i} onClick={() => this.handleButtonClick(i)}>{this.props.sections[i].title}</button>
                <p>{i == this.state.activeSectionIndex && this.props.sections[i].content}
                </p>
            </li>
        ))
    }



    render(props) {
        return (
            <div>
                <ul >
                    {this.renderAccordionItems()}
                </ul>
            </div>
        )
    }
}

export default Accordian;