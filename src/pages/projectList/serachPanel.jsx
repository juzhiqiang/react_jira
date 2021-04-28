import { useState, useEffect} from 'react';
export const SearchPabel  = ()=>{
    const [param,setParam] = useState({
        name: "",
        personId: ""
    });
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        fetch("").then(async res=>{
            console.log(res)
        })
    },[param]);
    return (<form>
        <div>
            <input type="text" value={param.name} onChange={evt => setParam({...param,name:evt.target.name})}/>
            <select value={param.personId} onChange={evt=>{setParam({
                ...param,
                personId: evt.target.personId
            })}}>
                <option value=""></option>
            </select>
        </div>
    </form>)
}