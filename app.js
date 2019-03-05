var groceryItems = ['Tea', 'Milk'];

var Cucumber = () => (
    <li>Cucumber</li>
);

var Kale = () => (
    <li>Kale</li>
);

class GroceryListItem extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
        <li>{this.props.groceryItem}</li>
        )
    };
}


var GroceryList = (props) => (
    <ul>
        <GroceryListItem groceryItem = {props.groceryItems[0]} />
        <GroceryListItem groceryItem = {props.groceryItems[1]} />
        <Cucumber />
        <Kale />
    </ul>
);

ReactDOM.render(<GroceryList groceryItems = {groceryItems}/>, document.getElementById('app'));

