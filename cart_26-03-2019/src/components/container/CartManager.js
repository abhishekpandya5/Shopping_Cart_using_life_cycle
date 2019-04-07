import React, { Component } from "react";
import './CartManager.css';
import CartItems from '../Cart/CartItems';
import AddItem from '../addItem/AddItem';
import CartTotal from "../cartTotal/CartTotal";
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

class CartManager extends Component {
 
    state = {
      items: [
        {
          name: "mango",
          quantity: 2,
          price: 30,
          index: 0
        },
        {
          name: "orange",
          quantity: 1,
          price: 35,
          index: 1
        },
        {
          name: "Apple",
          quantity: 4,
          price: 50,
          index: 2
        }
      ]
    };



    handleMinus = (index) => {
      const newItem = this.state.items.map( element => {
        if(element.index === index) {
          if(element.quantity > 0) {
            element.quantity -= 1;
          }
          return element;
        }
        return element;
      })
      this.setState({
        items: newItem
      });
    };  

    handlePlus = (index) => {
      const newItem = this.state.items.map( element => {
        if(element.index === index) {
         
            element.quantity += 1;
          
          return element;
        }
        return element;
      })
      this.setState({
        items: newItem
      });
    };

    handleDelete = (index) => {
      const newItem = this.state.items.filter( element => {
        if(element.index !== index) 

          return element;
      })
      this.setState({
        items: newItem
      });
    };  

    getTotal() {
      let total = this.state.items.reduce(
        (accumulator, element) => accumulator + element.price * element.quantity,
        0
      );
      return total;
    }

    handleAddItem = (event, item) => {
      event.preventDefault();
      let findItem = () => {
        let index = -1;
        this.state.items.forEach(element => {
          if (element.name === item.name) {
            index = element.index;
          }
        });
        return index;
      };
  
      let findItemIndex = findItem();
      let newItems = this.state.items.slice();
      if (findItemIndex === -1) {
        item["index"] = this.state.items.length;
        item["quantity"] = 1;
  
        newItems.push(item);
        this.setState({
          items: newItems
        });
      } else {
        newItems[findItemIndex].quantity += 1;
        newItems[findItemIndex].price = item.price;
        this.setState({
          items: newItems
        });
      }
    };

  
  render(){

    return (
      <div>
        <ErrorBoundary>
          <AddItem handleAddItem = {this.handleAddItem} />
        </ErrorBoundary>
        

        <table>
          
            <tr>
              <th>Fruits</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
              <th>Substract</th>
              <th>Add</th>
              <th>Delete</th>
            </tr>
            
            {this.state.items.map( (item, index) => {
              return(
                <CartItems
                  data={item}
                  key={index}

                  handleMinus={this.handleMinus}
                  handlePlus={this.handlePlus}
                  handleDelete={this.handleDelete}
                />
              );
            })}
            
        </table>
        
        <ErrorBoundary>
          <CartTotal total={this.getTotal()}/>
        </ErrorBoundary>
        

      </div>
    );
  }
}

export default CartManager;
