import React, {Component} from "react";
import axios from "axios";

const Item = props => (
    <div>
        <table className="table">
            <tbody>
                <tr>
                    <h4>{props.item.itemname}</h4>
                <td style={{textAlign: 'right'}}>{props.item.price}</td>
                </tr>
                <tr>
                    <td>{props.item.description}</td>
                </tr>
            </tbody>
        </table>
      
    </div>
)

export default class Website extends Component{
    constructor(props) {
        super(props);

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

    menuList(){
        return this.state.items.map(currentitem => {
            if(currentitem.show){
                return <Item item={currentitem} key={currentitem._id}/>;
            }else{return(null);}
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