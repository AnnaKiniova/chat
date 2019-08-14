
export default const LocalStorage = () => {
if (userName !== null) {
  localStorage.setItem('userName', userName);
}

if (localStorage.getItem('userName') !== null) {
  this.props.setUserName(localStorage.getItem('userName'));
}
}
