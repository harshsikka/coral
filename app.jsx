
var data = [{
  title: 'twitter',
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

var App = () => {
  return(
    <div>
    {data.map( post =>
      <Post postData={post} />
    )}
    </div>
    
  );
};

var Post = (props) => {
  return(
    <div>
      <span>
        {props.postData.upvotes}
      </span>
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