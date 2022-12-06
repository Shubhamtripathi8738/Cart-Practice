import { Link } from "react-router-dom";
import image from "../Pages/images/carimage.jpg";

import ProductPage from "./ProductPage";

const Home = () => {
  var data = {
    students: [
      {
        id: 1,
        name: "Student 1",
        age: "22",
        department: "Information Technology",
        rollno: "123",
        photo: image,
        subscription: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
        price: "40",
      },
      {
        id: 2,
        name: "Student 2",
        age: "21",
        department: "Computer Engineering",
        rollno: "456",
        photo: image,
        price: "100",
      },
      {
        id: 3,
        name: "Student 3",
        age: "23",
        department: "Information Technology",
        rollno: "789",
        photo: image,
        subscription: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
        price: "60",
      },
      {
        id: 4,
        name: "student 4",
        age: "25",
        department: "Electronic Engineering",
        rollno: "658",
        photo: image,
        price: "50",
      },
    ],
  };

  return (
    <>
      <Link to="/cart">Cart Page</Link>

      {data.students.map((value, index) => {
        return (
          <div  key={index}>
            <ProductPage productItem={value} />
          </div>
        );
      })}
    </>
  );
};
export default Home;
