import React from "react"
import User from "./User"
class UserClass extends React.Component{

    constructor(props)
    {
        super(props);
        this.state={
            count:0,
            count2:2,
        };
    }
    componentDidMount()
    {
        console.log("This is child Component Mount")
    }
    render()
    {
        console.log(this.props.name+" render");
        const {name,location}=this.props;
        //const{count,count2}=this.state;
        return(
            <div className='user-card'>
                <h1>Count:{this.state.count}</h1>
                <h1>Count2:{this.state.count2}</h1>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1,
                        count2:this.state.count2+1
                    });
                   
                }}>Increase </button>
            <h2>Name: {name}</h2>
            <h3>Location:{location}</h3>
            <h4>Contact: @akshaymarch4</h4>
        </div>
        )
    }
}
export default UserClass;