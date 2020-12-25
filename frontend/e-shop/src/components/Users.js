import React from 'react';

class Users extends React.Component {
    async componentDidMount(){
        await this.props.fetchUsers();
    };

    async patchUser(user) {
        const params = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
              },
            body: JSON.stringify(user)
        }
    
        try {
            await fetch("http://localhost:13000/users", params);
            alert("登録しました。");
        } catch(e) {
            alert("登録に失敗しました。時間をおいて再度お試しください。");
        }
    };

    render(){
        const lists = this.props.users.map(user => {
                return(
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.birthday}</td>
                        <td>{user.gender}</td>
                        <td>{user.childmode}</td>
                    </tr>
                )
            }
        );
        const{
            user,
            inputName,
            inputBirthday,
            inputGender,
            inputChildmode,
        } = this.props;
        return(
            <div>
                <p>
                    <label>名前</label>
                    <input type="text" onChange={(e) => {inputName(e.target.value)}}/>
                </p>
                <p>
                    <label>誕生日</label>
                    <input type="date" onChange={(e) => {inputBirthday(e.target.value)}}/>
                </p>
                <p>
                    <label>性別</label>
                    <select onChange={(e) => {inputGender(e.target.value)}}>
                        <option value="1">男性</option>
                        <option value="0">女性</option>
                    </select>
                </p>
                <p>
                    <label>チャイルドモード</label>
                    <input type="checkbox" onChange={(e) => {inputChildmode(e.target.value)}}/>
                </p>
                <p>
                    <button onClick={() => {this.patchUser(user)}}>送信</button>
                </p>
                <table>
                    <tr>
                        <th>名前</th>
                        <th>誕生日</th>
                        <th>性別</th>
                        <th>チャイルドモード</th>
                    </tr>
                    {lists}
                </table>
            </div>
        )
    }
};

export default Users;