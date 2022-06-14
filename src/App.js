import "./App.css"
import React, { Component } from "react"
import axios from "axios"
import CardList from "./components/card-list/CardList"
import SearchBox from "./components/search-box/SearchBox"
export default class App extends Component {
  state = {
    monsters: [],
    searchField: "",
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => this.setState({ monsters: res.data }))
  }
  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }
  render() {
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter((item) =>
      item.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox placeholder="placeholder" handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}
