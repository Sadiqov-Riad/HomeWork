import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    const { isLoggedIn, username, onLogout } = this.props;
    return (
      <nav className="bg-gradient-to-r from-cyan-500 to-violet-500 shadow-lg p-4 flex justify-between items-center text-white">
        <Link to="/" className="text-2xl font-bold tracking-wide">
          MyApp
        </Link>
        <div className="flex gap-3 items-center">
          {isLoggedIn ? (
            <>
              <span className="bg-white/20 px-4 py-1 rounded-full shadow-inner">
                🌿 {username}
              </span>
              <button
                onClick={onLogout}
                className="bg-pink-500 px-4 py-2 rounded-lg hover:bg-pink-600 transition duration-300"
              >
                Выйти
              </button>
            </>
          ) : (
            <>
              <Link
                to="/signin"
                className="bg-cyan-500 px-4 py-2 rounded-lg hover:bg-cyan-600 transition duration-300"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="bg-violet-500 px-4 py-2 rounded-lg hover:bg-violet-600 transition duration-300"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </nav>
    );
  }
}