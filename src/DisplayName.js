import React,{Component} from 'react';

class DisplayName extends Component{

constructor(){
  super();
  this.state={name:'Faraz'}
}

componentWillReceiveProps(nextProps){

  
  //  if(nextProps.name!==this.props.name){

      this.setState({
        name:nextProps.name
      });

  //  }
  }


  render(){
    return(
      <p >
        Hello {this.state.name}
      </p>

    )
  }
}


export default DisplayName;
