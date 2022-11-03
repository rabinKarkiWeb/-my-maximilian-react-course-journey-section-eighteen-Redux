import classes from './Counter.module.css';
import {useSelector, useDispatch} from "react-redux";
import {counterActions} from "../store/counter-slice";

const Counter = () => {

	const counter = useSelector(state => state.counter.counter);
	const show = useSelector(state => state.counter.show);
	const dispatch = useDispatch();

	const toggleCounterHandler = () => {
		dispatch(counterActions.show());
	};

	const incrementHandler = () => {
		dispatch(counterActions.increment());
	}
	const decrementHandler = () => {
		dispatch(counterActions.decrement());
	}
	const increaseHandler = () => {
		dispatch(counterActions.increase(5));
	}
	const decreaseHandler = () => {
		dispatch(counterActions.decrease(5));
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
