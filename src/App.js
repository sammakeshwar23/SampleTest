import "./styles.css";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setListingData, addProduct } from "./redux/actions";

const Listing = () => {
  const dispatch = useDispatch();
  const listingData = useSelector((state) => state.listingData);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => dispatch(setListingData(data.products)));
  }, [dispatch]);

  const [productData, setProductData] = useState({
    title: "",
    description: "",
    price: ""
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    let newData = [...listingData];
    newData.push({
      title: productData.title,
      description: productData.description,
      price: productData.price
    });
    dispatch(addProduct(productData));
    setProductData({
      title: "",
      description: "",
      price: ""
    });
  };

  const onchangeHnadler = (e) => {
    console.log(e.target.value);
    setProductData({
      ...productData,
      [e.target.name]: e.target.value
    });
  };
  console.log("products", productData);
  return (
    <div>
      <h1>Listing Data</h1>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" onChange={onchangeHnadler} />
        </label>
        <br />
        <label>
          Description:
          <input type="text" name="description" onChange={onchangeHnadler} />
        </label>
        <br />
        <label>
          Price:
          <input type="text" name="price" onChange={onchangeHnadler} />
        </label>
        <br />
        <br />
        <button type="submit">Add Product</button>
      </form>
      <ul>
        {listingData.map((item, index) => (
          <table key={index}>
            <tr>
              <th>ID</th>
              <th>title</th>
              <th>description</th>
              <th>price</th>
              <th>Thumbnail</th>
            </tr>
            <tr>
              <td>{index}</td>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>{item.price}</td>
              <td>
                <img src={item.thumbnail} width="70px" height="40px" alt="" />
              </td>
            </tr>
          </table>
        ))}
      </ul>
    </div>
  );
};

export default Listing;
