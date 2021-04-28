import { useState, useEffect} from 'react';
export const SearchPabel  = ()=>{
    const [param,setParam] = useState({
        name: "",
        personId: ""
    });
    const [users, setUsers] = useState([]);
    // 选项列表
    const [list,setList] =  useState([]);

    // 初始化行为
    useEffect(()=>{
        // 获取选项列表
        fetch("").then(async res=>{
            if(res.ok){
                setList(await res.json());
            }
        })
    },[param]);

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