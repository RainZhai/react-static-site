import React from 'react';
import { DatePicker, message } from 'antd';
import Header from './Header'; 
import MainSlide from './MainSlide'; 
import Sidebar from './Sidebar'; 
import ServiceList from './ServiceList'; 

import './main.css';

const App = React.createClass({
  getInitialState() {
    return {
      date: ''
    };
  },
  handleChange(value) {
    message.info('您选择的日期是: ' + value.toString());
    this.setState({
      date: value
    });
  },
  render() {
    return <div style={{width: '100%' }}>
      <Header />
      <MainSlide className="pt-8" />
      <div className="container pt clearfix">
          <div className="main posr left bgw">
            <ServiceList />
          </div>
          <Sidebar/>
      </div>
      <DatePicker onChange={this.handleChange} />
      <div style={{marginTop: 20}}>当前日期：{this.state.date.toString()}</div>
    </div>;
  }
});


export default App;

