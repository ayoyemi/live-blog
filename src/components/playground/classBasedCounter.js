import React from 'react';

class CbCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          count: 0
        };
        this.title = "AYOMIDE ADEYEMI WEEK 4 ASSESSMENT";
        this.subTitle = "Class Based Component Counter";

        this.handleIncreaseCounter = () => this.setState({ count: this.state.count + 1 });
        this.handleDecreaseCounter = () => this.setState({ count: this.state.count - 1 });
        this.handleResetCounter = () => this.setState({ count: 0})
      }

    render() { 
        return (

            <div className="container" style={{textAlign: "center", backgroundColor: "lightblue", padding: "20px", margin: "10px 25%", borderRadius: "20px"}}>
            <p><b>{this.title}</b></p>
            <br />
            <p>{this.subTitle}</p>
            <br />
            <p>{`Counter = ${this.state.count}`}</p>
            <br />
            {/* <button onClick={}>Click me</button> */}
            <button onClick={this.handleIncreaseCounter}>Increase Counter</button> &nbsp;
            <button onClick={this.handleDecreaseCounter}>Decrease Counter</button> &nbsp;
            <button onClick={this.handleResetCounter}>Reset Counter</button>
            </div>
        
        )
    }
}
 
export default CbCounter;