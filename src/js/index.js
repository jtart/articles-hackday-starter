import 'bootstrap';
import "../styles/styles.scss";

var today = new Date();
document.querySelector('#app time').innerHTML = today.toDateString();