import React, { Component } from "react";

export default class SignUp extends Component {
  state = { username: "", email: "", password: "" };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert("Аккаунт создан!");
  };

  render() {
    return (
      <div className="flex items-center justify-center min-h-[80vh]">
        <div className="w-full max-w-md bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-violet-100">
          <h2 className="text-2xl font-bold mb-6 text-center text-violet-600">
            Регистрация
          </h2>
          <form onSubmit={this.handleSubmit} className="space-y-4">
            <input
              type="text"
              name="username"
              placeholder="Имя пользователя"
              className="w-full border border-violet-200 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400 transition"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full border border-violet-200 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400 transition"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Пароль"
              className="w-full border border-violet-200 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400 transition"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-violet-500 to-pink-500 text-white py-2 rounded-lg hover:opacity-90 transition"
            >
              Создать аккаунт
            </button>
          </form>
        </div>
      </div>
    );
  }
}