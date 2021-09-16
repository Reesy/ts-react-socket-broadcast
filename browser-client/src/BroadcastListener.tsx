import React from 'react';
import './BroadcastListener.css';

class BroadcastListener extends React.Component<any, any> 
{
   websocket: WebSocket = new WebSocket('ws://192.168.45.163:7070');


   state  = 
    {
        testBool: false,
        connectedPeersNumber: 0
    };

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

        this.websocket.onmessage = (event: any) =>
        {
            console.log('This was called');
            // this.setState((state: any) => {
            //     console.log('Attempting to test state, but I think the screen renderes first');
            //     state.testBool = true;
            // });
        };

    };
   

    constructor(props: any) {
        super(props);
        this.sendMessage = this.sendMessage.bind(this);   
    };

    render() {
      return (
        <div className="Broadcast-laistener">
        <p>
            <button
                className="Main-button"
                onClick={this.sendMessage}>
                Click here for something to happen: 
            </button>
        </p>
        </div>
      );
    }
    
    sendMessage()
    {   
        this.websocket.send("Update");
        //broadcast a message to all the connected clients    
    };

};

export default BroadcastListener;
