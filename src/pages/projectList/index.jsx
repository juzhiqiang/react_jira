import React, { useState, useEffect } from 'react';
import { SearchPabel } from "./serachPanel"
import { List } from "./list"
import * as qs from 'qs';
import { cleanObject } from 'utils';

const apiUrl = process.env.REACT_APP_API_URL;
export const ProjectList = () => {
    const [param, setParam] = useState({
        name: "",
        personId: ""
    });
    const [users, setUsers] = useState([]);
    const [list, setList] = useState([]);
    // 初始化行为
    useEffect(() => {
        // 获取选项列表
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(async res => {
            if (res.ok) {
                setList(await res.json());
            }
        })
    }, [param]);

    useEffect(()=>{
        fetch(`${apiUrl}/users`).then(async res => {
            if (res.ok) {
                setUsers(await res.json());
            }
        })
    },[])
    return (<div>
        <SearchPabel param={param} setParam={setParam} users={users}></SearchPabel>
        <List list={list} users={users}></List>
    </div>)
}