import React, { Component } from 'react';

class ErrorBoundary extends Component {
    
    state = { 
        hasError: false 
    };

 
  
    componentDidCatch(error, info) {
      // Display fallback UI
      console.log(error);
      this.setState({
           hasError: true
      });
        
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <h1>Please enter the product in correct format</h1>;
      }
      return this.props.children;
    }
  }


  export default ErrorBoundary;