import { useRouteError } from "react-router-dom";
const Error=()=>
{
    const err=useRouteError();
    return(
        <div>
            <h1>😡 {err.status}:{err.statusText}
            <img src="https://media.tenor.com/_lBztfGBlV8AAAAM/nikal.gif"/>
            !!!</h1>
            <h2>Something went wrong!!!</h2>
        </div>
    )
}
export default Error;