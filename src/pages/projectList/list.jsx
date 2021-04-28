export const List = ({list,users})=>{
    return (<table>
        <thead>
            <tr>
                <th>名称</th>
                <th>负责人</th>
            </tr>
        </thead>
        <tbody>
            {
                list.map(item=>{
                    return (<tr key={item.personId}>
                        <td>{item.name}</td>
                        <td>{users.find(user=>user.id === item.personId)?.name}</td>
                    </tr>)
                })
            }
        </tbody>
    </table>)
}