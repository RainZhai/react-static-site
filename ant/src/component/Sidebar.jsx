import React from 'react';
import {Router, Link} from 'react-router'; 

var Sidebar = React.createClass({
  render: function() {
    return (
        <div className="sidebar posr right">
        <div className="imageAds">
        <p className="tal hm"><a href="javascript:;" className="j_codebtn1 red">关注微信</a> <a href="javascript:;" className="j_codebtn1">扫码下载安卓客户端</a></p>
        <a href="http://mp.weixin.qq.com/s?__biz=MzA4MzI3MTMzMw==&amp;mid=10000007&amp;idx=1&amp;sn=826a5629230c0fd39a03d1ae528be4a0" title="html5小游戏微信公众号" className="block fullw j_ewm1">
        <img src="http://wandeme.com/images/qrcode_for_gh_a649c5a3135f_344.jpg" width="100%" alt="html5小游戏微信公众号" />
        </a>
        <a href="http://wandeme.com/wandeme.apk" title="玩的么安装客户端下载" className="block fullw hide j_ewm1"><img src="http://wandeme.com/images/wandemeapklink.png" width="100%" /></a>
        </div>
        <div className="imageAds mtss">
        <a className="block fullw" href="http://api.egret-labs.org/games/www/game.php/316_18410" target="_blank">
        <img src="http://ww4.sinaimg.cn/mw690/005vSBqygw1eyvutjs6twj30hs0qodma.jpg" width="100%" alt="2048" />
        </a>
        </div>
        <div className="imageAds mtss">
            <a target="_blank" className="block tdn fullw hm black hoverlgrey clearfix" href="http://weibo.com/wandeme">
                <span className="ib fullh wf-15 ib l fl tac">
                <img alt="新浪微博" height="90%" src="http://www.sinaimg.cn/blog/developer/wiki/LOGO_24x24.png" />
                </span>
                <span className="ib fullh wf-55 ib l fl tal">新浪微博</span>
                <span className="ib hf-90 wf-25 ib l fl tac rounds gr btn redbtn">关注</span>
            </a>
        </div>
            <div className="imageAds mtss">
            <p className="bottom tal">
            <a href="http://url.cn/PCrxsP" target="_blank">QQ群 : 344592223</a>
            </p>
            </div>
            
            <div className="imageAds mtss">
            <p className="bottom tal">开发者游戏推荐(带上链接哟): 发邮件到zhaiyu963[at]gmail.com 或qq联系 356655671</p>
            </div>
        </div>
    );
  }
});

module.exports = Sidebar;
