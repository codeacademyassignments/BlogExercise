import React,{Component} from 'react';
import Footer from '../Footer/Footer.Component';
import Header from '../Header/Header.Component';
import Section from '../Section/Section.Component';
import '../index.css';

class Index extends Component{
  createRows = (cards)=>{
    const rows = [];
    cards.forEach((card)=>{
      rows.push(<Section card={card}/>);
    });
    return rows;
  }
  render(){
    return (
      <body>
          <Header/>
          <section class="main-block">
          {this.createRows(this.props.cards)}
          </section>
          <Footer/>
      </body>
    )
  }
}

export default Index;