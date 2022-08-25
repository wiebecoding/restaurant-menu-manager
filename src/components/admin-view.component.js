import React, {Component} from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

const Item = props => (
    <div>
        <table className="table">
            <tbody>
                <tr>
                    <h4>{props.item.itemname}</h4>
                    <td style={{textAlign: 'center'}}>{props.item.price}</td>
                </tr>
                <tr>
                    <td>{props.item.description}</td>
                    <td style={{textAlign: 'right'}}><button><Link to={"/menu-edit/"+props.item._id}>edit</Link></button> | <button onClick={() => props.deleteItem(props.item._id)}>delete</button></td>
                </tr>
                
            </tbody>
        </table>
      
    </div>
)

export default class AdminView extends Component{
    constructor(props) {
        super(props);

        this.deleteItem = this.deleteItem.bind(this);

        this.state = {items: []};
    }

    componentDidMount(){
        axios.get('http://localhost:3001/items/')
            .then(response => {
                console.log(response.data);
                this.setState({items: response.data})
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteItem(id) {
        axios.delete('http://localhost:3001/items/'+id)
            .then(response => { console.log(response.data)});
        
        this.setState({
            items: this.state.items.filter(el => el._id !== id)
        })
        
      }

    menuList(){
        return this.state.items.map(currentitem => {
            return <Item item={currentitem} deleteItem={this.deleteItem} key={currentitem._id}/>;
        })
    }

    render() {
        return (
          <div>
            <h1 style={{textAlign: 'center'}}>Menu</h1>
            <div>{this.menuList()}</div>
          </div>
        )
    }
}