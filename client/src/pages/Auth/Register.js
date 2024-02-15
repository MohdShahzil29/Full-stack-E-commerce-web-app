import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/register", {
        name,
        email,
        password,
        phone,
        address,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title="Register - Ecommer App">
       <form class="form" onSubmit={handleSubmit}>
        <p class="title">Register </p>
        <p class="message">Signup now and get full access to our app. </p>
        <div class="flex">
          <label>
            <input
              required
              placeholder=""
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              class="input"
            />
            <span>Name</span>
          </label>

          <label>
            <input
              required
              placeholder=""
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              class="input"
            />
            <span>Paaword</span>
          </label>
        </div>

        <label>
          <input
            required
            placeholder=""
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            class="input"
          />
          <span>Email</span>
        </label>

        <label>
          <input
            required
            placeholder=""
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            class="input"
          />
          <span>Address</span>
        </label>
        <label>
          <input
            required
            placeholder=""
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            class="input"
          />
          <span>What is Your Favourite Teacher Name</span>
        </label>
        <label>
          <input
            required
            placeholder=""
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            class="input"
          />
          <span>Phone Number</span>
        </label>
        <button class="submit">Submit</button>
        <p class="signin">
          Already have an acount ? <a href="/login">Signin</a>{" "}
        </p>
      </form>
    </Layout>
  );
};

export default Register;
