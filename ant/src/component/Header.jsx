import React from 'react';
import {Router, Link} from 'react-router'; 

var Header = React.createClass({
  render: function() {
    return (
          <div className="headwrap posf fullw" style={{left:'0' ,top:'0' , 'zIndex':'9999'}}>
          <div className="topcwrap fullw clearfix">
          <div className="topc bg-1 wf-25 l fl"></div>
          <div className="topc bg-2 wf-25 l fl"></div>
          <div className="topc bg-3 wf-25 l fl"></div>
          <div className="topc bg-4 wf-25 l fl"></div>
          </div>
          <div className="headerM headerGrey">
          <div className="container posr fullh clearfix">
          <div className="l">
          <h1 className="logo">
          <a href="http://wandeme.com" title="玩的么 wandeme.com 游戏创造快乐" className="logoLink block tdn posr">
          <img alt="玩的么 wandeme.com" src="http://wande.me/images/logo.png" width="100%" />
          <span className="wandeintro posa vf">玩的么 wandeme.com 智趣游戏</span></a>
          </h1>
          </div>
          <div className="menuNav block posr l oh">
          <a className="l fl posr menuLink block tdn fullh" href="http://wandeme.com/haowan" target="_blank">Joy
          <br/><span>好玩的</span>
          </a>
          <a className="l fl posr menuLink block tdn fullh" href="http://wandeme.com/games" target="_blank">Games
          <br/><span>游戏</span>
          </a>
          <a className="l fl posr menuLink block tdn fullh" target="_blank" href="http://wandeme.com/haowan/category/mm">Images
          <br/><span>游戏美图</span>
          </a>
          <a className="l fl posr menuLink block tdn fullh" href="http://wandeme.com/haowan/category/%E6%90%9E%E7%AC%91%E5%9B%BE/" target="_blank">Funny
          <br/><span>搞笑图</span>
          </a>
          </div>
          </div>
          </div>
          </div>
    );
  }
});

module.exports = Header;
