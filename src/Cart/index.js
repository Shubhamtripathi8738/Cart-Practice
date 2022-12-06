import { useEffect, useState } from "react";
import youtubeimage from "../Pages/images/youtube.png";

const Cart = () => {
  const [localData, setLocalData] = useState(
    JSON.parse(localStorage.getItem("cart"))
  );

const[state,setState]=useState(0)

// useEffect(()=>{
//  setState(state+1);
// })
// // console.log(state);

useEffect(()=>{
  console.log("jdksgjsd");
  alert("gfdhjg");
},[])

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

 

  const removeToCart = (item) => {
    var localStorageData = JSON.parse(localStorage.getItem("cart"));
    const index = localStorageData.findIndex((value) => value.id === item.id);

    localStorageData.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(localStorageData));

    setLocalData(JSON.parse(localStorage.getItem("cart")));
  };

  return (
    <>
      <div>Cart Page</div>

      {localData.length ? (
        localData?.map((item, i) => (
          <div style={cardStyles.container} key={i}>
            <img src={item.photo} alt="profilePicture" style={cardStyles.profilePicture} />
            <div style={cardStyles.bio}>
              <p style={cardStyles.userName}>{item.name}</p>
              <p>{item.department}</p>
              <div>age:{item.age}</div>
              <div>roll no:{item.rollno}</div>
              <span>Free Subscription:
              {item.subscription && (
                <img src={item.subscription} alt="youtubeImage" style={cardStyles.youtube} />
              )}
             </span>
              <div>Quantity:{item.quantity}</div>
              <div>Price:{item.price} ₹</div>
              <div>Total Price:{item.quantity * item.price}</div>
              <button onClick={() => removeToCart(item)}>Remove to Cart</button>
            </div>
          </div>
        ))
      ) : (
        <h3>No Item in Cart</h3>
      )}
    </>
  );
};
export default Cart;
