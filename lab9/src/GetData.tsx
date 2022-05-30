import React, {useState, useEffect} from "react";
import {UserProps} from "./GetDataTypes"
import "./App.css";
import {Link } from 'react-router-dom';

export const GetData: React.FC<UserProps> = () => {
    const [userName, setUserName] = useState("");
    const[loader,setLoader] = useState(false);

    const User1: UserProps = {
        name: "",
        followers: 0,
        following: 0,
        avatar: ""
      }
    const [User] = useState(User1);



    const ChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value)
        setLoader(true);
    }

    const KeyPressHandler =(event:React.KeyboardEvent)=>{
        if (event.key === "Enter"){
            fetch(`https://api.github.com/users/${userName}` , {
                method: 'GET',
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
                setLoader(false);
            })
            console.log(User.name);

        }
    }
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
                setLoader(false);

            })
            },[userName]);

    return (
        <div className="card1">
            {loader === false?
            (<img className="pic1" src="https://telegrator.ru/wp-content/uploads/2021/05/chat_avatar-136.jpg" alt='buuuu'/>):
            (<img className="pic1" src="https://i11.fotocdn.net/s126/a0ab0cbe67aed88d/public_pin_l/2871593654.jpg" alt='buuuu'/>)}
            <input onChange ={ChangeHandler}
            onKeyPress = {KeyPressHandler}
            placeholder="Введите имя пользователя"/>
            {User.name!=="" &&User.name!==undefined ?(
                 <Link to={'/cool'} state={{ data: {userName} }} >Your user</Link> ):
            (<div className="someText2"><h4>Данного пользователя не существует!</h4></div>)}
        </div>
    )

}
