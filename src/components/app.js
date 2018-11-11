import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import ArticlesPage from './routes/articles-page'
import UserForm from './user-form'
import Filters from './filters'
import Counter from './counter'
import CommentsPage from './routes/comments-page'
import Menu, { MenuItem } from './menu'
import Language from './language'
import { Provider as UserProvider } from '../contexts/user'
import {
  Provider as LocalizationProvider,
  dictionary
} from '../contexts/localization'

class App extends Component {
  state = {
    user: 'roma',
    localization: dictionary.ru,
    lang: 'ru'
  }

  setUser = (user) => this.setState({ user })

  setLang = (lang) => {
    this.setState((state) => ({
      ...state,
      localization: dictionary[lang],
      lang
    }))
  }

  render() {
    return (
      <LocalizationProvider value={this.state.localization}>
        <UserProvider value={this.state.user}>
          <div>
            <Menu>
              <MenuItem link="/articles" children="Articles" />
              <MenuItem link="/filters">Filters</MenuItem>
              <MenuItem link="/counter">Counter</MenuItem>
              <MenuItem link="/comments">Comments</MenuItem>
            </Menu>
            <UserForm value={this.state.user} onChange={this.setUser} />
            <Language onChange={this.setLang} lang={this.state.lang} />

            <Switch>
              <Redirect from="/" exact to="/articles" />
              <Route path="/counter" component={Counter} exact />
              <Route path="/comments" component={CommentsPage} />
              <Route path="/filters" component={Filters} />
              <Route
                path="/articles/new"
                render={() => (
                  <h1>{this.state.localization.new_article_page}</h1>
                )}
              />
              <Route path="/articles" component={ArticlesPage} />
              <Route
                path="/error"
                render={() => <h1>{this.state.localization.error_page}</h1>}
              />
              <Route
                path="*"
                render={() => <h1>{this.state.localization.not_found_page}</h1>}
              />
            </Switch>
          </div>
        </UserProvider>
      </LocalizationProvider>
    )
  }
}

export default App
