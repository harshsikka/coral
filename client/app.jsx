

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
      data: [],
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

  post() {
    // take values
    var url = $('#urlValue').val();
    var title = $('#titleValue').val();
    console.log(url);
    console.log(title)

    $.ajax({
      type: "POST",
      url: 'http://localhost:3000/addPost',
      data: JSON.stringify({
        url: url,
        title: title
      }),
      contentType: 'application/json',
      dataType: 'json',
      success: function (data) {
        console.log('succesfully posted data!');
      },
    })
  }

  render() {
    return (
      <div>
        <div>
          <h2> Coral</h2>
          <h3> learn anything</h3>
          <div>
            <input  id="urlValue" type="text" defaultValue="Link"/>
          </div>
          <input  id="titleValue" type="text" defaultValue="Title"/>
          <button onClick={this.post.bind(this)}>Post Link!</button>
        <div><button onClick={this.fetch.bind(this)}> Refresh Posts </button></div>
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
      <a href='' >
        {props.postData.upvotes}
      </a>

      <span>
        <a href={props.postData.url} color='black'> {props.postData.title} </a>
      </span>
    </div>
  );
};


ReactDOM.render(<App />, document.getElementById("app"));