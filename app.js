var groceryItems = ['Tea', 'Milk'];

var Cucumber = () => (
    <li>Cucumber</li>
);

var Kale = () => (
    <li>Kale</li>
);

class GroceryListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            done: false
        }
    }

    
    render() {
        return (
        <li>{this.props.groceryItem}</li>
        )
    };
}


var GroceryList = (props) => (
    <ul>
        {props.groceryItems.map(item => <GroceryListItem groceryItem = {item} />)}
        <Cucumber />
        <Kale />
    </ul>
);

ReactDOM.render(<GroceryList groceryItems = {groceryItems}/>, document.getElementById('app'));

