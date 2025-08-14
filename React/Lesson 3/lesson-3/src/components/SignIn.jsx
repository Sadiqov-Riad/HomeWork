import React, { Component } from "react";
import { useNavigate } from "react-router-dom";

class SignInForm extends Component {
  state = { username: "", password: "" };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.username && this.state.password) {
      this.props.onLogin(this.state.username);
      this.props.navigate("/");
    }
  };

  render() {
    return (
      <div className="flex items-center justify-center min-h-[80vh]">
        <div className="w-full max-w-md bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-cyan-100">
          <h2 className="text-2xl font-bold mb-6 text-center text-cyan-600">
            Вход в аккаунт
          </h2>
          <form onSubmit={this.handleSubmit} className="space-y-4">
            <input
              type="text"
              name="username"
              placeholder="Имя пользователя"
              className="w-full border border-cyan-200 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Пароль"
              className="w-full border border-cyan-200 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-violet-500 text-white py-2 rounded-lg hover:opacity-90 transition"
            >
              Войти
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default function SignIn(props) {
  const navigate = useNavigate();
  return <SignInForm {...props} navigate={navigate} />;
}