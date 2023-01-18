import "./assets/css/app.css";

const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];

function App() {
  return (
    <div className="page-container">
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title} {product.isFruit ? "(fruit)" : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
