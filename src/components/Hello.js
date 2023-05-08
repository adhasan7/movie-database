
function Header() {
  return <>
    <div className="Header">
      <ul>
        <li>Home</li>
        <li>About </li>
        <li>Contact</li>
      </ul>
    </div>
  </>
}

function Footer(){
  return<>
    <div className="Footer">f</div>
  </>
}

function Hello(props) {
    const {name} =props;
    return (
      <div className="hello">
      <h2>Hello React</h2>
      <p>Saya {name} - Frontend Engineer</p>
      </div>
    );
  }
export default Hello;

export {
  Header,Footer
}



 