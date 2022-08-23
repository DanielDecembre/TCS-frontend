//react core functionality (hooks)
import { useState, useEffect} from 'react';



// components Libraries
import { Route } from  'react-router-dom';


// Page components 
import Index from '../pages/Index';
import Show from '../pages/Show';


const Main = (props) => {

    const [ member, setMember ] = useState([]);

    const URL = 'http://localhost:4000/member';
    
    const getMember = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setMember(data);
    };

    const createMember = async (person) => {
        await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-type': "Application/json"
            },
            body: JSON.stringify(person)
        });
    };

    useEffect(() => {
        getMember();
    }, []);

    return (
    <main>
        <Route exact path="/">
            <Index member={member} createMember={createMember} />
        </Route>
        <Route path="/member/:id" render={(renderprops) => (
            <Show {...renderprops}/>
        )} />
    </main>
    );
};
// rp mean render props

export default Main;