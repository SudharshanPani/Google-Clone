import React,{useState} from 'react'
import './Search.css'
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router';
import { useStateValue } from './StateProvider';
import {actionTypes} from './reducer';

function Search({hideButtons=false}){

    const [{},dispatch] = useStateValue();

    const [input, setInput] = useState('')
    const history = useHistory();    
    const search=e=>{
        e.preventDefault();
        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })

        history.push('/search')
    }
    return (
        <form className="search" >
            <div className="search_input" >
                <SearchIcon className="search_inputIcon"/> 
                <input value={input} onChange={e=>setInput(e.target.value)} />
                <MicIcon className/>
            </div>
            {!hideButtons?(
            <div className="search__buttons">
                <Button type='submit' onClick={search} variant="outlined">Google Search</Button>
                <a href="https://www.google.com/doodles"><Button variant="outlined">I'm Feeling Lucky</Button></a>
            </div>
            ):(
            <div className="search__buttons">
                <Button className="search__buttonsHidden" type='submit' onClick={search} variant="outlined">Google Search</Button>
                <Button className="search__buttonsHidden" variant="outlined">Google Search</Button>
            </div>
            )
            }
            
        </form>
    )
}

export default Search
