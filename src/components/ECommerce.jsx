import { useState } from "react";

const ECommerce = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [products, setProducts] = useState([]);

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!name || !price) return;

    const newProduct = {
      id: Date.now(),
      name,
      description,
      price,
    };

    setProducts([...products, newProduct]);
    setName("");
    setDescription("");
    setPrice(0);
  };

  const deleteProduct = (idToDelete) => {
    const updatedProducts = products.filter(
      (product) => product.id !== idToDelete,
    );
    setProducts(updatedProducts);
  };

  return (
    <div style={{ padding: "0 400px" }}>
      <h2>Admin Dashboard</h2>
      <form
        onSubmit={handleAddProduct}
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
        <button
          type="submit"
          style={{
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            padding: "10px",
          }}
        >
          Add Product
        </button>
      </form>

      <hr />

      <h3>Store Inventory</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {products.map((item) => (
          <li
            key={item.id}
            style={{
              border: "1px solid #ddd",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "5px",
            }}
          >
            <strong>{item.name}</strong> — Rs.{item.price}
            <p style={{ fontSize: "14px", color: "#666" }}>
              {item.description}
            </p>
            <button
              onClick={() => deleteProduct(item.id)}
              style={{
                backgroundColor: "#dc3545",
                color: "white",
                border: "none",
                borderRadius: "3px",
                cursor: "pointer",
              }}
            >
              Delete Product
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ECommerce;
