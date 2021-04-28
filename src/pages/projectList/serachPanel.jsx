import React, {useState} from 'react';
export const SearchPabel  = ({param,setParam})=>{

    const [users, setUsers] = useState([]);
    // 选项列表

  

    return (<form>
        <div>
            <input type="text" value={param.name} onChange={evt => setParam({...param,name:evt.target.name})}/>
            <select value={param.personId} onChange={evt=>{setParam({
                ...param,
                personId: evt.target.personId
            })}}>
                <option value={''}>负责人</option>
                {
                    users.map(item=> <option value={item.id}>{item.name}</option> )
                }
            </select>
        </div>
    </form>)
}