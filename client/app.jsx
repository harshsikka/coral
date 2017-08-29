
var data = [{
  title: 'twitte',
  url: 'https://twitter.com',
  upvotes: 4
}, {
  title: 'google',
  url: 'https://www.google.com/',
  upvotes: 7
}, {
  title: 'facebook',
  url: 'https://www.facebook.com/',
  upvotes: 2
}, {
  title: 'wikipedia',
  url: 'https://www.wikipedia.org/',
  upvotes: 0
}];

// var App = () => {
//   return(
//     <div>
//     {data.map( post =>
//       <Post postData={post} />
//     )}
//     </div>
    
//   );
// };



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    }
  }

  onClick() {
    var stateSet = this.setState.bind(this);
    $.ajax({
      url: 'http://localhost:3000/get',
      type: 'GET',
      dataType: 'json',
      contentType: 'application/json',
      success: function (data) {
        console.log('Succesfully Fetched Data' + JSON.stringify(data));
        stateSet({
          data: data
        })
      }

    })
  }

  render() {
    return (
      <div>
      {this.state.data.map( post =>
        <Post postData={post} onClick={this.onClick.bind(this)}/>
      )}
      </div>
      
    );
  }

}

var Post = (props) => {
  return(
    <div>
      <a href='#' onClick={function(){props.onClick()}}>
        {props.postData.upvotes}
      </a>
      <span>
      
      <a href={props.postData.url}> {props.postData.title} </a>
      </span>
    </div>
  );
};

var Testpost = () => {
  return(
    <div>
      <span>
        4
      </span>
      <span>
      
      <a href='www.google.com'> a great learning guide </a>
      </span>
    </div>
  );
};


ReactDOM.render(<App />, document.getElementById("app"));