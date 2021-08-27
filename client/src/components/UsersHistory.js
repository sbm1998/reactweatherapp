import {useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { useHistory } from 'react-router-dom';
import {requestGetHistory} from '../userThunk'


export default function UsersHistory(){
    const dispatch=useDispatch();
    const records=useSelector((state)=>state.userInfo.history);
    const name=useSelector((state)=>state.userInfo.name)
    let history=useHistory();

    useEffect(()=>{
        dispatch(requestGetHistory(name));
},[dispatch]);

console.log(records);

const recordsFields= records.length > 0 ? Object.keys(records[0]) : [];
console.log(recordsFields)
return (
    
    <div>
         <button onClick={() =>{history.push("/home");}}>Home</button>
         <button onClick={() =>{history.push("/dashboard");}}>DashBoard</button><br /><br />
        <h1>Users History Data</h1>
        
       
        <table>
            <tbody>
            <tr>
            {recordsFields.map((header)=>(
                <th key={header}>
                    {header}
                    </th>
            ))}
            </tr>
        {records.map((record)=>
            (<tr key={record.id}>

            {recordsFields.map((field)=>(

                <td key={`${record.id}-${field}`}>

                   {typeof record[field]==="object" ? JSON.stringify(record[field]) : record[field] }
                </td>
            ))}   
            </tr>)
        )}
        </tbody>
        </table>
        </div>
)
}