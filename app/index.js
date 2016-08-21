var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes')

ReactDOM.render(
  routes,
  document.getElementById("app")
);



// Lessons 3 and 4
// var USER_DATA = {
//   name: "John Colella",
//   username: "jmcolella",
//   img: "https://avatars0.githubusercontent.com/u/17008820?v=3&s=460"
// }

// var Link = React.createClass({
//   changeURL: function () {
//     window.location.replace(this.props.href)
//   },
//   render: function () {
//     return (
//       <span
//         style={{color: "blue", cursor: "pointer"}}
//         onClick={this.changeURL}>
//         {this.props.children}
//       </span>
//     )
//   }
// })

// var ProfilePic = React.createClass({
//   render: function () {
//     return (
//       <img src={this.props.img} style={{height: 100, width: 100}}/>
//     )
//   }
// });

// var ProfileLink = React.createClass({
//   render: function () {
//     return (
//       <Link href={"https://www.github.com/" + this.props.username}>
//         {this.props.username}
//       </Link>
//     )
//   }
// });

// var ProfileName = React.createClass({
//   render: function () {
//     return (
//       <div>
//         <p>{ this.props.name }</p>
//       </div>
//     )
//   }
// });

// var Avatar = React.createClass({
//   render: function () {
//     return (
//       <div>
//         <ProfilePic img={this.props.user.img} />
//         <ProfileName name={this.props.user.name} />
//         <ProfileLink username={this.props.user.username} />
//       </div>
//     )
//   }
// });

