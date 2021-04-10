import React, { Suspense, Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { StyleProvider } from "./contexts/StyleContext";

import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Preloader from './components/Preloader';
import NotFound from './pages/404';

const Home = React.lazy(async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return import('./pages/Home');
});

const About = React.lazy(async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return import('./pages/About');
});

const Portfolio = React.lazy(async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return import('./pages/Portfolio');
});

const Contact = React.lazy(async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return import('./pages/Contact');
});

const Blog = React.lazy(async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return import('./pages/Blog');
});



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDark: false
    };
  }

  componentDidMount() {
    if (localStorage.getItem("isDark") === null) {
      const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
      localStorage.setItem("isDark", darkPref.matches);
    }
    this.setState({ isDark: JSON.parse(localStorage.getItem("isDark")) });
  }

  changeTheme = () => {
    this.setState({ isDark: !this.state.isDark }, () => {
      localStorage.setItem("isDark", this.state.isDark);
    });
  };

  render() {
    return (
      <div className={this.state.isDark ? "dark-mode" : "light-mode"}>
        <StyleProvider value={{
          isDark: this.state.isDark,
          changeTheme: this.changeTheme
        }}>
          <Suspense fallback={<Preloader />}>
            <Router>
              <Route exact path={["/", "/about", "/portfolio", "/contact", "/blog"]} component={Topbar} />
              <Route exact path={["/", "/about", "/portfolio", "/contact", "/blog"]} component={Sidebar} />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/contact" component={Contact} />
                <Route path="/blog" component={Blog} />
                <Route component={NotFound} />
              </Switch>
            </Router>
          </Suspense>
        </StyleProvider>
      </div>
    )
  }
}

