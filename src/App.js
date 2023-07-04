import "./styles.css";
import User from "./components/User";

export default function App() {
  const isim = "Steve";
  const soyisim = <h1>Jobs</h1>;
  return (
    <div className="App">
      <h1>{isim}</h1>
      {soyisim}
      <MyInputComponent />
      <UserComponent />
      <h1 style={{ color: "blue" }}> Başlık</h1>
      <User />
    </div>
  );
}

function MyInputComponent() {
  return (
    <form className="MyInputComponentStyle">
      <input type="text" />
      <button>Gönder</button>
    </form>
  );
}

function UserComponent() {
  return (
    <ul className="UserComponentStyle">
      <li> İsim : Elon Musk </li>
      <li> Departman : Bilişim </li>
      <li> Maaş : 50000$</li>
    </ul>
  );
}
