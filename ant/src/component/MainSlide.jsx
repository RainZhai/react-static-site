import React from 'react';
import {Router, Link} from 'react-router'; 
import { Carousel } from 'antd';

var MainSlide = React.createClass({
  render: function() {
    return (
      <Carousel effect="fade" autoplay autoplaySpeed="5000" speed="2000" className="fullw pt-8" style={{height: '400px'}}>
        <div><a className="block fullw h-40" href="http://wandeme.com/games/%E8%82%B2%E7%A2%A7%E3%80%8A%E5%88%BA%E5%AE%A2%E4%BF%A1%E6%9D%A1%EF%BC%9A%E6%B5%B7%E7%9B%97%E3%80%8B%E6%89%8B%E6%B8%B8/" target="_blank" style={{background:"#ccc url(http://ww2.sinaimg.cn/large/005vSBqygw1f1hjaaka0uj30zk0b4taj.jpg) no-repeat 50% 0"}}></a></div>
        <div><a className="block fullw h-40" href="http://www.r2games.com/play/?game=106" target="_blank" style={{background: "url(http://r2cdn2.r2games.com/uploads/1511/271552366713.jpg) no-repeat 50% 0"}}></a></div>
        <div><a className="block fullw h-40" href="http://yzr.163.com/" target="_blank" style={{background: "#ccc  url(http://ww1.sinaimg.cn/large/005vSBqygw1f14swxd686j30zk0b4abu.jpg) no-repeat 50% 0"}}></a></div> 
      </Carousel>
    );
  }
});

module.exports = MainSlide;
