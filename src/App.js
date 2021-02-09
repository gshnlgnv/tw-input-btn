import './App.css';
import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        };
    }

    render() {
        const handleClick = () => {
            this.setState({active: true});
            //this.state.active ? this.setState({active: false}) : this.setState({active: true});
        };

        return (
            <div className="App">
                <header className="App-header">
                    <div
                        className={`App-header__newitem${this.state.active ? "--active" : ""}`}
                        onClick={() => handleClick()}
                    >
                        <div className="App-header__dots-wrapper">
                            <div className={`App-header__left-star${this.state.active ? "--active" : ""}`}></div>
                            <div className={`App-header__dot-two${this.state.active ? "--active" : ""}`}></div>
                        </div>
                        <input
                            className={`App-header__input${this.state.active ? "--active" : ""}`}
                            placeholder="Write a new task"
                        />
                        <button className={`App-header__calendar ${this.state.active ? "--visible" : "visible"}`}>
                            <i className="far fa-calendar-plus"></i>
                        </button>
                        <select
                            className={` App-header__select ${this.state.active ? "--visible" : "visible"}`}>
                            <option value="1">No list</option>
                        </select>

                    </div>
                </header>
            </div>
        )
    }
}

export default App;

