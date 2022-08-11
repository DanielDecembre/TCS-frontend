// components Libraries
import { Route } from  'react-router-dom';


// Page components 
import Index from '../pages/Index';
import Show from '../pages/Show';


const Main = (props) => {
    return (
    <main>
        <Route exact path="/">
            <Index />
        </Route>
        <Route path="/member/:id" render={(rp) => (
            <Show {...rp}/>
        )} />
    </main>
    );
};
// rp mean render props

export default Main;