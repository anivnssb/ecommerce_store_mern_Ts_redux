import { useState, type ChangeEvent } from "react";
import Sidebar from "../../components/Sidebar";

const NewProduct = () => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [stock, setStock] = useState<number>(0);
  const [photo, setPhoto] = useState<string>("");

  const changeImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];
    const reader: FileReader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        console.log(reader.result);
        if (typeof reader.result === "string") setPhoto(reader.result);
      };
    }
  };

  return (
    <div className="admin-container">
      <Sidebar />
      <main className="product-management">
        <article>
          <form action="">
            <h2>New Product</h2>
            <div>
              <label htmlFor="name">Name</label>
              <input
                required
                type="text"
                placeholder="Name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="price">Price</label>
              <input
                required
                type="number"
                placeholder="Price"
                id="price"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
              />
            </div>
            <div>
              <label htmlFor="stock">Stock</label>
              <input
                required
                type="number"
                placeholder="Stock"
                id="stock"
                value={stock}
                onChange={(e) => setStock(Number(e.target.value))}
              />
            </div>
            <div>
              <label htmlFor="photo">Photo</label>
              <input
                required
                type="file"
                id="photo"
                onChange={changeImageHandler}
              />
            </div>
            {photo && <img src={photo} alt="New Image" />}
            <button type="submit">Create</button>
          </form>
        </article>
      </main>
    </div>
  );
};

export default NewProduct;
