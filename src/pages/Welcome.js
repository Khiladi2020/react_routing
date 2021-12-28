import { Route } from "react-router-dom"

const Welcome = ()=>{
    return <section>
        <h1>Welcome Here</h1>
        <Route path="/welcome/new-user">
            <p>Hi, New User</p>
        </Route>
    </section>
}

export default Welcome