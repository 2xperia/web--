// Copyright (c) 2018 by monster1935. All Rights Reserved.
import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import 'moment/locale/zh-cn';
import { Link } from 'react-router-dom';
import './index.less';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      postList: [],
      tagType: '',
    };
  }

  componentWillMount() {
    const type = this.props.match.params.type;
    this.setState({
      tagType: type || 'all',
    });
    this.getPostData(type).then(res => {
      if (res.status === 200) {
        this.setState({
          postList: res.data.data,
        });
      } else {
        console.error(res.statusText);
      }
    }).catch(e => {
      console.warn(e);
    });
  }

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {
    const type = nextProps.match.params.type;
    this.setState({
      tagType: type || 'all',
    });
    if (this.state.tagType !== type) {
      this.getPostData(type).then(res => {
        if (res.status === 200) {
          this.setState({
            postList: res.data.data,
          });
        } else {
          console.error(res.statusText);
        }
      }).catch(e => {
        console.warn(e);
      });
    }
  }

  getPostData(type) {
    return axios.get('https://cnodejs.org/api/v1/topics',{
      params: {
        tab: type,
      }
    });
  }

  

  getRouteList() {
    const routeList = [
      { type: 'all', path: '/', text: '全部' },
      { type: 'good', path: '/tag/good', text: '精华' },
      { type: 'share', path: '/tag/share', text: '分享' },
      { type: 'ask', path: '/tag/ask', text: '问答' },
      { type: 'job', path: '/tag/job', text: '招聘' },
    ];
    return routeList.map((route) => (
      <Link to={route.path} key={route.path} className={'topic-tab current-tab'}>
        {route.text}
      </Link>
    ));
  }

  render () {
    const contentHtml = () => {
      return this.state.postList.map((post,index) => (
          <div className="cell" key={post.id}>
            <a className="user-avatar pull-left">
              <img  src={post.author.avatar_url} alt={post.author.loginname}/>
            </a>
            <span className="reply-count pull-left" >
              <span className="count-of-replies" title="回复数">{post.reply_count}</span>
              <span className="count-sperator">/</span>
              <span className="count-of-visits" title="点击数"> {post.visit_count}</span>
            </span>
            <a className="last-time pull-right">
              <img className="user-small-avatar" src={post.author.avatar_url} alt={post.author.loginname}>
              </img>
              <span className="last-active-time">{moment(post.last_reply_at).fromNow()}</span>
            </a>
            <div className="topic-title-wrapper">
              <span
                className={'tag put-top'}
              >
               
              </span>
              <Link className="topic-title" to={'/topic/'+post.id}>{post.title}</Link>
            </div>
          </div>
        )
      );
    }
    return (
      <div className="panel">
        <div className="header">
          {this.getRouteList()}
        </div>
        <div className="inner no-padding">
          <div className="topic-list">
            {contentHtml()}
          </div>
          <div className="pagination" current_page="1">
            <ul>
              <li className="disabled" ><a>«</a></li>
              <li className="disabled active"><a>1</a></li>
              <li><a href="https://cnodejs.org/api/v1/topics/2">2</a></li>
              <li><a href="">3</a></li>
              <li><a href="">4</a></li>
              <li><a href="">5</a></li>
              <li><a href="">6</a></li>
              <li><a href="">7</a></li>
              <li><a href="">8</a></li>
              <li><a href="">9</a></li>
              <li className="disabled" ><a>»</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
};

export default Home;
