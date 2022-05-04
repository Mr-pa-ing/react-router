import React from "react";
import { Routes, Route } from "react-router-dom";
import Admin from "./components/Admin";
import FeaturedProduct from "./components/FeaturedProduct";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NewProduct from "./components/NewProduct";
import NoMatch from "./components/NoMatch";
import OrderSummary from "./components/OrderSummary";
import Product from "./components/Product";
import UserDetails from "./components/UserDetails";
import Users from "./components/Users";
import Profile from "./components/Profile";
import { AuthProvider } from "./components/auth/auth";
import Login from "./components/auth/Login";
import RequireAuth from "./components/auth/RequireAuth";

const LazyAbout = React.lazy(() => import('./components/About'));

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route
          path="about"
          element={
            <React.Suspense fallback='Loading...'>
              <LazyAbout/>
            </React.Suspense>
          }
        />
        <Route path="order-summary" element={<OrderSummary/>} />
        <Route path="*" element={<NoMatch/>} />
        <Route path="product" element={<Product/>} >
          <Route index element={<FeaturedProduct/>} />
          <Route path="featured" element={<FeaturedProduct/>} />
          <Route path="new" element={<NewProduct/>} />
        </Route>
        <Route path="users" element={<Users/>}>
          <Route path=":userId" element={<UserDetails/>}/>
          <Route path="admin" element={<Admin/>} />
        </Route>
        <Route path="/profile" element={<RequireAuth><Profile/></RequireAuth>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
