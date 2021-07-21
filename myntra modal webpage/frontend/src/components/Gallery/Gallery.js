import React,{Component} from 'react';
import {
        Container,
        Row} from 'reactstrap'
import Name from './Product';

class Home extends Component {
    constructor() {
        super();
        this.state={
            products:[]
        };
}
componentDidMount() {
    fetch('http://localhost:5000/products/get')
      .then(res => res.json())
      .then(products => this.setState({ products }, () => console.log('images fetched...', products)));
  }
 Products(){
    return this.state.products.map(data => {
        return ( <div key={data.image} className="col-lg-3 col-sm-12 col-md-6">
            <Name link={data.link} image={data.image} name={data.name} hint={data.hint} />
        </div>)
    });
 }

  render() {
    
      return (
          
          <Container fluid={true}>
              <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/5/4/a097f6e0-54dd-46e2-980f-906b5dc017d81620110700459-desktop-give.jpg"></img>
                <hr></hr>
                <marquee width="100%" direction="right" height="100px">
                <h1> DEALS OF THE DAY</h1>
                    </marquee>
           
            <Row>
          {this.Products()}
          </Row>
                    </Container>
      );
  }
}
export default Home;
