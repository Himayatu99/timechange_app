import './App.css';

let curDate = new Date();
curDate = curDate.getHours();
let greeting = '';
let cssStyle = {};
if (curDate > 1 && curDate < 12) {
  greeting = 'Good Morning'
  cssStyle.color = "green"

} else if (curDate >= 12 && curDate < 19) {
  greeting = 'Good Afternoon'
  cssStyle.color = "Orange"
}
else {
  greeting = 'Good Night';
  cssStyle.color = 'Black'
}
function App() {
  return (
    <>
      <div>
        <h1>Hello sir,<span style={cssStyle}> {greeting} </span></h1>
      </div>
    </>

  );
}

export default App;
