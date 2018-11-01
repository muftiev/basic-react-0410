import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'
import ArticlesPage from './routes/articles-page'
import UserForm from './user-form'
import Filters from './filters'
import Counter from './counter'

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <div>
            <NavLink to="/articles" activeStyle={{ color: 'red' }}>
              articles
            </NavLink>
          </div>
          <div>
            <NavLink to="/filters" activeStyle={{ color: 'red' }}>
              filters
            </NavLink>
          </div>
          <div>
            <NavLink to="/counter" activeStyle={{ color: 'red' }}>
              counter
            </NavLink>
          </div>
        </nav>
        <UserForm />
        <Route path="/counter" component={Counter} exact />
        <Route path="/filters" component={Filters} />
        <Route path="/articles" component={ArticlesPage} />
      </div>
    )
  }
}

export default App
