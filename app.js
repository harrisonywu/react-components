var list = ['tea', 'milk'];

var Cucumber = () => (
    <li>Cucumber</li>
);

var Kale = () => (
    <li>Kale</li>
);

var GroceryList = (props) => (
    <ul>
        <li> {props.list[0]}</li>
        <li> {props.list[1]} </li>
        <Cucumber />
        <Kale />
    </ul>
);

ReactDOM.render(<GroceryList list = {list}/>, document.getElementById('app'));

