import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import users from '../../../data/user.json'

function UserDropdown(){

    const userContext = useContext(UserContext);

    return(<select onChange={(event) => userContext.changeUser(Number(event.target.value))}>
            {users.map(user => <option value={user.id}>{user.username}</option>)}
        </select>);
}

export default UserDropdown;