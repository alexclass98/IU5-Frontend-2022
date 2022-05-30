import React, {useState, useEffect} from "react";
import {UserProps} from "./GetDataTypes"
import "./App.css";
import {Link, useLocation } from 'react-router-dom';

export const OwnPage: React.FC<UserProps> = () => {

    interface LocationState {
        data: {
          userName: string;
        };
      }
    const [search, setSearch] = useState(false);
    const location = useLocation() ;
    const { data } = location.state as LocationState;
    console.log(location, " useLocation Hook");
    const userName = data.userName ;
    console.log(userName, " Кто там");
    const User1: UserProps = {
        name: "",
        followers: 0,
        following: 0,
        avatar: "",
      }
    const [User] = useState(User1);

    useEffect(()=>{
        fetch(`https://api.github.com/users/${userName}` , {
                headers: {
                  Authorization: `token${process.env.REACT_APP_API_TOKEN}`,
                },
              })
              .then((response)=>{
                return response.json();
            })
            .then((data) => {
                console.log(userName)
                console.log(data);
                User.name = data.login;
                User.followers = data.followers;
                User.following = data.following;
                User.avatar = data.avatar_url;
                console.log(User.name);

            })
            },[search]);
    return (
        <div className="card1" >
            <img className="pic1" src="https://bugaga.ru/uploads/posts/2016-03/1457946334_kot-kotleta-11.jpg" alt='buuuu'/>
            {User.name!=="" &&User.name!==undefined ?(
                <div className="block1">
            <img className='usersPic' src={User.avatar} alt=''/>
            <div className="users">
                <div className="someText"><h4>Nickname: {User.name}</h4></div>
                <div className="someText"><h4>Followers: {User.followers}</h4></div>
                <div className="someText"><h4>Following: {User.following}</h4></div>
            </div>
            </div>):(<div>
            <div className="someText"><h4>Вы уверены, что хотите получить данные об {userName}</h4></div>
            <button className='but1' onClick={() => setSearch(!search)}><h5>Да</h5></button>
            </div>)}
            <Link to='/'>Back</Link>
        </div>
    )

}