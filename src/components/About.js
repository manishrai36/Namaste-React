import React from "react";
import User from "./User";
import UserClass from "./UserClass";
class About extends React.Component
{
    constructor(props)
    {
        super(props)
        console.log("parent Constructor")
    }

    componentDidMount()
    {
        console.log("Parent componentDidMount")
    }
    render()
    {
        console.log("Parent Render");
        return(
            <div>
                About us
                <User/>
                <UserClass name={"Manish"} location={"Patna"}/>
                <UserClass name={"Raj"} location={"Sahebganj"}/>
            </div>
        )
        }
    
}
export default About;

// import React from 'react'

// const About = () => {
//   return (
//     <div>About</div>
//   )
// }

// export default About;