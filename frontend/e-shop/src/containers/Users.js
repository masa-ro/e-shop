import { connect } from "react-redux";
import Users from '../components/Users';
import {fetchUsers, inputName, inputBirthday, inputGender, inputChildmode} from '../actions/Actions';

function mapStateToProps({usersReducer}){
    return{
        user: usersReducer.user,
        users: usersReducer.users,
    };
};

function mapDispatchToProps(dispatch){
    return{
        async fetchUsers(){
            const response = await fetch('http://localhost:13000/users');
            const users = await response.json();
            dispatch(fetchUsers(users));
        },
        inputName(name){
            dispatch(inputName(name));
        },
        inputBirthday(birthday){
            dispatch(inputBirthday(birthday));
        },
        inputGender(gender){
            dispatch(inputGender(gender));
        },
        inputChildmode(childmode){
            dispatch(inputChildmode(childmode));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);