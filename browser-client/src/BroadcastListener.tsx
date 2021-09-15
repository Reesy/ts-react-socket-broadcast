import React from 'react';
import './BroadcastListener.css';

class BroadcastListener extends React.Component<any, any> 
{
    websocket: WebSocket = new WebSocket('ws://localhost:7070');

    componentDidMount()
    {

        this.websocket.onopen = (event: any) =>
        {
            console.log('Websocket opened');
        };

        this.websocket.onclose = (event: any) =>
        {
            console.log('Websocket closed');
        };
    };
   

    constructor(props: any) {
        super(props);


        this.sendMessage = this.sendMessage.bind(this);
        this.state = {
            testBool: false
        };
     
    };

    render() {
      return (
        <div className="Broadcast-laistener">
        <p>
            <button
                className="Main-button"
                onClick={this.sendMessage}  
            >
                Click here for something to happen: 
            </button>

            <div>
                {this.state.testBool ? <p>Test bool is true</p> : <p>Test bool is false</p>}
            </div>
        </p>
        </div>
      );
    }
    

    sendMessage()
    {   
        //Q: How do modify the state of the component?
        //A: We can use the setState() method to change the state of the component.
        //   This method takes a new state object as an argument.
        //   The state object is a map of key-value pairs.

        this.setState({
            testBool: !this.state.testBool
        });
  
        this.websocket.send(this.state.testBool);
    };

};

export default BroadcastListener;
