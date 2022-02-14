
import 'bootstrap/dist/css/bootstrap.css';
import Spinner from 'react-bootstrap/Spinner';

function BsTest() {
return (
	<div style={{ display: 'block', width: 700, padding: 30 }}>
	<h4>React-Bootstrap Spinner Component</h4>
	With Border Animation:
	<Spinner animation="border" variant="primary" /> <br/>
	With Grow Animation:
	<Spinner animation="grow" variant="warning" />
	</div>
);
}

export default BsTest();
