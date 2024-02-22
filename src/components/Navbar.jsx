import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { IoMdSearch } from 'react-icons/io';
import { FaRegBell } from 'react-icons/fa6';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Tvshows from './tvshows';
import Movies from './Movies';
import MovieListTop from './MovieListTop';
import List from './List';
import Home from './Home';
import './navbar.css';
import Moviedetail from './Moviedetail';
import Tvdetail from './detailpages/Tvdetail';
import Topdetail from './detailpages/Topdetail';
import Login from './Login';
import Signup from './signup';

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleListItemClick = () => {
    setExpanded(false); // Close the navbar menu when a list item is clicked
  };

  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link to="/" className="navbar-brand text-danger">CINE<span className='text-light'>CRAFT</span></Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded={expanded}
              aria-label="Toggle navigation"
              onClick={handleToggle}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse justify-content-between ${expanded ? 'show' : ''}`} id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link" onClick={handleListItemClick}>Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/tvshows" className="nav-link" onClick={handleListItemClick}>Tv Shows</Link>
                </li>
                <li className="nav-item">
                  <Link to="/movies" className="nav-link" onClick={handleListItemClick}>Movies</Link>
                </li>
                <li className="nav-item">
                  <Link to="/popular" className="nav-link" onClick={handleListItemClick}>New & Popular</Link>
                </li>
                <li className="nav-item">
                  <Link to="/list" className="nav-link" onClick={handleListItemClick}>My Lists</Link>
                </li>
              </ul>
              <div className="icons flex-nowrap">
                <IoMdSearch className="me-3" />
                <FaRegBell className="me-3" />
                <button className="btn btn-danger"><Link to="/signin" className='text-white text-decoration-none '>Sign in</Link></button>
                
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/home' element={<Home/>}></Route>
          <Route path="/tvshows" element={<Tvshows />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/popular" element={<MovieListTop />} />
          <Route path="/list" element={<List />} />
          <Route path='/signin' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path="/Moviedetail/:id" element={<Moviedetail />} />
          <Route path="/Tvdetail/:id" element={<Tvdetail/>}></Route>
          <Route path="/Topdetail/:id" element={<Topdetail/>}></Route>

        </Routes>
      </div>
    </Router>
  );
};

export default Navbar;


// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { IoMdSearch } from 'react-icons/io';
// import { FaRegBell } from 'react-icons/fa6';
// import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
// import Tvshows from './tvshows';
// import Movies from './Movies';
// import MovieListTop from './MovieListTop';
// import List from './List';
// import Home from './Home';
// import './navbar.css';import React, { useState } from 'react';
// import Moviedetail from './Moviedetail';

// const Navbar = () => {
//   const [expanded, setExpanded] = useState(false);

//   const handleToggle = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <Router>
//       <div>
//         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//           <div className="container">
//             <Link to="/" className="navbar-brand text-danger">NETFLIX</Link>
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarNav"
//               aria-controls="navbarNav"
//               aria-expanded={expanded}
//               aria-label="Toggle navigation"
//               onClick={handleToggle}
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className={`collapse navbar-collapse justify-content-between ${expanded ? 'show' : ''}`} id="navbarNav">
//               <ul className="navbar-nav">
//                 <li className="nav-item">
//                   <Link to="/" className="nav-link">Home</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link to="/tvshows" className="nav-link">Tv Shows</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link to="/movies" className="nav-link">Movies</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link to="/popular" className="nav-link">New & Popular</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link to="/list" className="nav-link">My Lists</Link>
//                 </li>
//               </ul>
//               <div className="icons flex-nowrap">
//                 <IoMdSearch className="me-3" />
//                 <FaRegBell className="me-3" />
//                 <button className="btn btn-danger">Sign in</button>
//               </div>
//             </div>
//           </div>
//         </nav>

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/tvshows" element={<Tvshows />} />
//           <Route path="/movies" element={<Movies />} />
//           <Route path="/popular" element={<MovieListTop />} />
//           <Route path="/list" element={<List />} />
//           <Route path="/Moviedetail/:id" element={<Moviedetail />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default Navbar;

// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { IoMdSearch } from "react-icons/io";
// import { FaRegBell } from "react-icons/fa6";
// import {BrowserRouter as Router,Link,Routes,Route} from 'react-router-dom'
// import Tvshows from './tvshows';
// import Movies from './Movies';
// import MovieListTop from './MovieListTop';
// import List from './List';
// import Home from './Home';
// import './navbar.css';
// import Moviedetail from './Moviedetail';

// const Navbar = () => {
//   return (
//     <Router>
//     <div>
//       <div className="header p-2">
//         <div className="logo">
//             <h1 className='text-danger'>NETFLIX</h1>
//         </div>
//         <div className="navbar">
//             <ul className='text-white'>
//                 <li><Link to="/" className='link'>Home</Link></li>
//                 <li><Link to="/tvshows"  className='link'>Tv Shows</Link></li>
//                 <li><Link to="/movies"  className='link'>Movies</Link></li>
//                 <li><Link to="/popular"  className='link'>New & Popular</Link></li>
//                 <li><Link to="/list"  className='link'>My Lists</Link></li>
//             </ul>
//         </div>
        
//         <div className="icons flex-nowrap">
//             <IoMdSearch className='me-3'/>
//             <FaRegBell className='me-3'/>
//             <button className='btn btn-danger'>Sign in</button>
            

//         </div>
//       </div>
//       <Routes>
//           <Route path='/' element={<Home/>}></Route>
//           <Route path='/tvshows' element={<Tvshows/>}></Route>
//           <Route path='/movies' element={<Movies/>}></Route>
//           <Route path='/popular' element={<MovieListTop/>}></Route>
//           <Route path='/list' element={<List/>}></Route>
//           <Route path='/Moviedetail/:id' element={<Moviedetail/>}></Route>
//         </Routes>
//     </div>
//     </Router>
//   );
// }

// export default Navbar;
