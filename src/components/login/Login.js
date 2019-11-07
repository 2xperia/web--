// Copyright (c) 2018 by monster1935. All Rights Reserved.
// 新手入门组件
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

class Login extends Component {

  render() {
    return (
      <div className="panel">
        <div className="header">
          <ul className="breadcrumb">
            <li>
              <Link to="/">主页</Link>
              <span className="divider">/</span>
            </li>
            <li className="active">登录</li>
          </ul>

        </div>
        <div className="inner topic">
          <form className="form">
              用户<input/>  
          </form>
          <form className="form">
              密码<input/> 
          </form>
          <Link to="/"><input type="button" value="登录" className="input"/></Link>
        </div>
      </div>
    );
  }
};

export default Login;
