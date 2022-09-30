import React from "react";

export default class MyButton extends React.Component {

    constructor(props){
        super(props)
        // this state
        this.state = {
            count : 1
        }

        // function untuk increment state count
        this.increment = ()=>{
            this.setState({
                count : this.state.count + 1 
            })
        }
    }

    // componnet did mount
    componentDidMount(){
        console.info('mybutton di mounting ke halaman browser')
    }

    componentDidUpdate(){
        console.info("my button terupdate", this.state.count)
    }

    // componen will unmount
    componentWillUnmount(){
        console.info("my button distroyed")
    }

    render(){
        return (
            <button onClick={this.increment}> Button {this.state.count}</button>
        )
    }

}