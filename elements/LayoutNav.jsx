var React = require('react');
  Router = require('react-router'),
  Link = Router.Link;

var LayoutNav = React.createClass({
  render: function() {
    return (
<div id="layout-nav">
  <div className="header headerBlack ">
    <div className="lsn posr clearfix">
        <Link className="headerLink headerLinkBlack  l pr pl ib tdn" to="home">首页 Home</Link>
        <Link className="headerLink headerLinkBlack  l pr pl ib tdn" to="about">关于 About</Link>
        <Link className="headerLink headerLinkBlack l pr pl ib tdn" to="blog">播客 Blog</Link>
    </div>
  </div>
  <div className="headerM headerGrey">
      <div className="container posr">
          <div className="l"><Link className="tdn block ptll fsxxl black" to="home">宅鱼</Link></div>
      </div>
  </div>
</div>
    );
  }
});

module.exports = LayoutNav;
