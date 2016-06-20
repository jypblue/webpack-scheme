/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-06-14 16:49:37
 * @version $Id$
 */

import React from 'react';
import ReactDom from 'react-dom';
import 'resetCss';
import 'commonCss';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/components/swat.css';
import swat from './store/swatdata.js';

let swatmenu = swat.swatmenu;
let swatdata = swat.swatdata;
let swatpeople = swat.swatpeople;

class Tabspane extends React.Component {
  constructor(props) {
    super();

    this.state = {
       currentIndex : 0
    };
  }

  checkTitleIndex(index) {
    return index === this.state.currentIndex ? "tabTitle active" : "tabTitle";
  }

  checkItemIndex(index) {
    return index === this.state.currentIndex ? "tabItem show":"tabItem";
  }
  handleClick(index){
    this.setState(
    {
      currentIndex:index
    }
    )
  }
  render() {
    let self = this;
    return (
      <div>
      {
      /**
       * [className tabTitleWrap]
       * @type {String}
       * 动态生成Tab导航
       */
      }
        <ul className="tabTitleWrap">
          { React.Children.map(this.props.children , (element,index) => {
            return (
              /*
              箭头函数没有自己的this,这里的this继承自外围作用域，即组件本身
              ES6写法：()=>{this.setState({currentIndex:index})}
               */
              <li onClick={this.handleClick.bind(this,index)} className={ this.checkTitleIndex(index)}>
                {element.props.name}
              </li>
              );
          })}
        </ul>
      {/*Tab内容区域*/ }
      <div className="tabItemWrap">
        {React.Children.map(this.props.children, (element, index)=> {
          return (
            <div className={ this.checkItemIndex(index)}>
              {element}
            </div>
          );
        })}
        </div>
      </div>
    )
  }
}

class TableHeader extends React.Component {
  render() {
    let columes = this.props.columes;
    let th = [];
    for (var i = 0; i < columes.length; i++) {
      th[i] = (
        <th>{columes[i].name}</th>
      )
    }
    return (
      <tr>
        {th}
      </tr>
    )
  }
}

class SwatTable extends React.Component {
render() {
    let t = this.props.data;
    let k = this.props.datakey;
    let tables = t[k].table
    let tabArr = [];

    for (var n= 0; n < tables.length; n++) {
      let data = t[k].table[n].data;
      let tr = [];
      let td = [];
      let p = [];
      let colLength = data.length;

    for (var i = 0; i < colLength; i++) {
      let rowLength = data[i].rows.length;
      for (var j = 0; j < rowLength; j++) {

            let plenth = data[i].rows[j].length;
            for (var m = 0; m < plenth; m++) {
            if(data[i].rows[j][m].img){
                 p.push(
                  <p key={i+'-'+j+'-'+m}>
                  <a target="_blank" href={data[i].rows[j][m].href ? data[i].rows[j][m].href : '###'}>
                  <img src={data[i].rows[j][m].img } alt=""/>
                  {/*data[i].rows[j][m].name*/}
                  </a>
                  </p>
                  )
              }
             else if (data[i].rows[j][m].href) {
                p.push(
                  <p key={i+'-'+j+'-'+m}>
                  <a target="_blank" href={data[i].rows[j][m].href}>{data[i].rows[j][m].name}</a>
                </p>
                )
              }
              else {
                p.push(
                <p key={i+'-'+j+'-'+m}>
                  {data[i].rows[j][m].name}
                </p>
                )
              }
            }
        td[j] = (
          <td key={i+'-'+j}>
            {p}
          </td>
        )
                      p = [];
      }

      tr[i] = (
          <tr>{td}</tr>
      )
      td = [];
    }

    tabArr[n] = (
            <div>
            <h3>{t[k].table[n].header}</h3>
            <table className="table table-hover text-left">
            <thead>
              <TableHeader columes={t[k].table[0].columes}/>
            </thead>
            <tbody>
              {tr}
            </tbody>
          </table>
            </div>

      )
      tr = [];
    }

    return (
      <div className="swat-item">
        <h2>{t[k].title}</h2>
        <div className="swat-tables">
          {tabArr}
        </div>
      </div>
    )
  }
}

class Tabs extends React.Component {
  render(){
    let tabnav = [];
    let swatmenu = this.props.swatmenu;
    let swatdata = this.props.swatdata;

    for (var i = 0; i < swatmenu.length; i++) {
      tabnav[i] = (
          <div name={swatmenu[i]}>
            <SwatTable data={swatdata} datakey={i}/>
          </div>
        )
    }

    return (
      <div className="tabWrap">
        <Tabspane>
          {tabnav}
        </Tabspane>
      </div>
      )
  }
}

class PeopleList extends React.Component {
  render() {
    const pdata = this.props.pdata;
    let li = [];
    for (var i = 0; i < pdata.length; i++) {
      li[i] = (
          <li>
            <div className="pic">
              <img src={pdata[i].img} alt=""/>
            </div>
            <div className="name">
              <p>{pdata[i].name}</p>
              <p><a href={"tel:"+ pdata[i].tel }>{pdata[i].tel}</a></p>
            </div>
          </li>
        )
    }
    return(
        <ul>
          {li}
        </ul>
      )
  }
}

class PeopleTabs extends React.Component{

  handleClick() {
    var $peoplepanel = this.refs.peoplepanel;
    if ($peoplepanel.style.display == 'none') {
      // statement
      $peoplepanel.style.display = 'block';
    } else {
      $peoplepanel.style.display = 'none';
    }
    console.log(this.refs.peoplepanel);
  }

  render() {
      const swat = this.props.swatpeople.swat;
      const rm = this.props.swatpeople.rm;
      return (
        <div className="people-wrap">
        <div onClick={this.handleClick.bind(this)}  className="people-show">联系人</div>
        <div className="people-tabs" ref="peoplepanel" style={{display:'none'}}>
          <Tabspane>
            <div name="swat">
              <PeopleList pdata={swat}/>
            </div>
            <div name="rm">
              <PeopleList pdata={rm}/>
            </div>
          </Tabspane>
        </div>
        </div>
      )


  }
}

ReactDOM.render(
  <div className="swatmain">
  <div className="logo">天海SWAT PORTAL</div>
  <Tabs swatmenu={swatmenu} swatdata={swatdata.uat}/>
  <PeopleTabs swatpeople={swatpeople}/>
  </div>
  ,
  document.querySelector('.swat')
)













