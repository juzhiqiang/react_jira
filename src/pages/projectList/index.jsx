import React, {useState, useEffect} from 'react';
import {SearchPabel} from "./serachPanel"
import {List} from "./list"

const apiUrl = process.env.REACT_APP_API_URL;
export const ProjectList = ()=>{
    const [param,setParam] = useState({
        name: "",
        personId: ""
    });
    const [list,setList] =  useState([]);
      // 初始化行为
      useEffect(()=>{
        // 获取选项列表
        fetch(`${apiUrl}/projects`).then(async res=>{
            if(res.ok){
                setList(await res.json());
            }
        })
    },[param]);
    return (<div>
        <SearchPabel param={param} setParam={setParam}></SearchPabel>
        <List list={list}></List>
    </div>)
}