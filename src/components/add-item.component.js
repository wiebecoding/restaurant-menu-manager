import React, {Component} from "react";

export default class AddItems extends Component{
    constructor(props){
        super(props);

        this.onChangeItemname = this.onChangeItemname.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeShow = this.onChangeShow.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            itemname: '',
            description: '',
            price: 0,
            show: true
        }
    }

    onChangeItemname(e){
        this.setState({
            itemname: e.target.value
        });
    }

    onChangeDescription(e){
        this.setState({
            description: e.target.value
        });
    }
    onChangePrice(e){
        this.setState({
            price: e.target.value
        });
    }
    onChangeShow(e){
        this.setState({
            show: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
        
        const item = {
            itemname: this.state.itemname,
            description: this.state.description,
            price: this.state.price,
            show: this.state.show,
        }
        console.log(item);
        window.location = "/menu-add";
    }

    render(){
        return(
            <div>
                <h3>Add Menu Item</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Menu Item Name: </label>
                        <input type="text" 
                            required
                            className="form-control"
                            value={this.state.itemname}
                            onChange={this.onChangeItemname}
                        />
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text" 
                            required
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                        />
                    </div>
                    <div className="form-group">
                        <label>Price: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.price}
                            onChange={this.onChangePrice}
                        />
                    </div>
                    <div className="form-group">
                        <label>Show: </label>
                        <input type="Boolean"
                            required
                            className="form-control"
                            value={this.state.show}
                            onChange={this.onChangeShow}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Menu Item" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}