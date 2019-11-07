// Copyright (c) 2018 by monster1935. All Rights Reserved.
// 头部导航栏组件
import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const routeList = [
  { path: '/', label: '首页' },
  { path: '/getstart', label: '新手入门' },
  { path: '/api', label: 'API' },
  { path: '/about', label: '关于' },
  { path: '/login', label: '登录' },
];

const Header = () => (
  <div className="header-wrapper navbar-inner">
    <Link to="/" className="brand">
      <img
        src="//static2.cnodejs.org/public/images/cnodejs_light.svg"
        alt=""
      />
    </Link>
    <form id="search_form" className="navbar-search" action="https://cnodejs.org/search">
        <input type="text" id="q" name="q" className="search-query span3" />
    </form>
    <ul className="nav pull-right">
      {routeList.map(route => {
        return (
          <li key={route.path}>
            <Link to={route.path}>
              {route.label}
            </Link>
          </li>
        );
      })}
    </ul>
  </div>
);

export default Header;
