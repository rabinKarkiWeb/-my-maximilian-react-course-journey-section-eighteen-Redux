import classes from './Counter.module.css';
import {useSelector, useDispatch} from "react-redux";

const Counter = () => {

	const counter = useSelector(state => state.counter);
	const show = useSelector(state => state.show);
	const dispatch = useDispatch();

	const toggleCounterHandler = () => {
		dispatch({ type : 'show' });
	};

	const incrementHandler = () => {
		dispatch({ type : 'increment' });
	}
	const decrementHandler = () => {
		dispatch({ type : 'decrement' });
	}
	const increaseHandler = () => {
		dispatch({ type : 'increase', amount: 5 });
	}
	const decreaseHandler = () => {
		dispatch({ type : 'decrease', amount: 5 });
	}

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			{ show && <div className={classes.value}>{counter}</div>}
			<div>
				<button onClick={incrementHandler}>Increment</button>
				<button onClick={increaseHandler}>Increment by 5</button>
				<button onClick={decrementHandler}>Decrement</button>
				<button onClick={decreaseHandler}>Decrement by 5</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

// class Counter extends Component  {
//     incrementHandler (){
//         this.props.increment();
//     }
//     decrementHandler (){
//         this.props.decrement();
//
//     }
//
//     render (){
//         return (
//             <main className={classes.counter}>
//                 <h1>Redux Counter</h1>
//                 <div className={classes.value}>{ this.props.counter }</div>
//                 <div>
//                     <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//                     <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//                 </div>
//                 <button>Toggle Counter</button>
//             </main>
//         )
//
//     }
//
// }
//
// const mapStateToProps = state =>{
//     return {
//         counter : state.counter
//     }
// }
//
// const mapDispatchToProps = dispatch => {
//     return {
//         increment : () => dispatch({ type: 'increment' }),
//         decrement : () => dispatch({ type: 'decrement' })
//     }
// }

export default Counter;
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
