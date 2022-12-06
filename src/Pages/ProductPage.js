import { useEffect, useState } from "react";

const ProductPage = ({ productItem }) => {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const cartQuantity = JSON.parse(localStorage.getItem("cart"));
    cartQuantity?.forEach((value) => {
      if (value.id === productItem.id) {
        setQuantity(value.quantity);
      }
    });
  },[]);

  const cardStyles = {
    container: {
      display: "flex",
      height: "200px",
      width: "400px",
      boxShadow: "0 0 3px 2px #cec7c759",
      alignItems: "center",
      padding: 20,
      borderRadius: 20,
    },
    profilePicture: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      height: "150px",
      width: "150px",
      fontWeight: "bold",
    },

    bio: {
      marginLeft: 10,
    },
    userName: {
      fontWeight: "bold",
    },
    youtube: {
      height: "30px",
      width: "30px",
    },
  };

  //  Add to cart

  const addToCart = (item) => {
    var conditionData;

    var getData = JSON.parse(localStorage.getItem("cart")) || [];

    item.quantity = quantity;

    getData?.forEach((value) => {
      if (value.id === item.id) {
        conditionData = "x";
      }
    });
    if (conditionData === "x") {
      localStorage.setItem("cart", JSON.stringify(getData));
    } else {
      localStorage.setItem("cart", JSON.stringify([...getData, item]));
    }
  };

  const decrementValue = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const incrementValue = () => {
    setQuantity(quantity + 1);
  };

  return (
    <>
      <div style={cardStyles.container}>
        <img src={productItem.photo} alt="profilePicture" style={cardStyles.profilePicture} />
        <div style={cardStyles.bio}>
          <p style={cardStyles.userName}>{productItem.name}</p>
          <p>{productItem.department}</p>
          <div>age:{productItem.age}</div>
          <div>roll no:{productItem.rollno}</div>
          <div>price:{productItem.price}₹</div>
          <span>Free Subscription:
          {productItem.subscription && (
            <img src={productItem.subscription} alt="youtubeImage" style={cardStyles.youtube} />
          )}
          </span>
          <div className="container">
            <button onClick={decrementValue}>-</button>
            <span>{quantity}</span>
            <button onClick={incrementValue}>+</button>
          </div>
          <button onClick={() => addToCart(productItem)}>Add to Cart</button>
        </div>
      </div>
    </>
  );
};
export default ProductPage;
