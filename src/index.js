import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar';

const API_KEY = ''
//------------------------------------------------------------
// Lecture11
// ex1

// // create a new component 
// const App = function() {
//   return <div>hi</div>;
// }
// // take this component's generated HTML and put it on the page (in DOM)
// ReactDOM.render(<App />, document.querySelector('.container'))

// ex2
// const App = () => {
//   return (
//   <div>
//     <SearchBar />
//   </div>
//   );
// }

// ReactDOM.render(<App />, document.querySelector('.container'))


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {videos: []};

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      //this.setState({videos: videos})
      this.setState({videos});
    });
 }

 render() {
    return (
    <div>
      <SearchBar />

    </div>
    );
 }

}

// take this component's generated HTML and put it on the page (in DOM)
ReactDOM.render(<App />, document.querySelector('.container'))
