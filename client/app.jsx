
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

  fetch() {
    var stateSet = this.setState.bind(this);
    $.ajax({
      url: 'http://localhost:3000/get',
      type: 'GET',
      dataType: 'json',
      contentType: 'application/json',
      success: function (data) {
        console.log('Succesfully Fetched Data' + JSON.stringify(data));

        data.sort(function(a,b) {
          return b.upvotes - a.upvotes;
        }); //sort the posts

        stateSet({
          data: data
        })
      }

    })
  }

  render() {
    return (
      <div>
      <div>
      <span><button onClick={this.fetch.bind(this)}> Refresh </button></span>
      </div>
      <div>

      {this.state.data.map( post =>
        <Post postData={post} />
      )}
      
      </div>
      </div>
      
    );
  }

}

var Post = (props) => {
  return(
    <div>
      <a href='#' >
        {props.postData.upvotes}
      </a>
      <span>
      
      <a href={props.postData.url}> {props.postData.title} </a>
      </span>
    </div>
  );
};


ReactDOM.render(<App />, document.getElementById("app"));