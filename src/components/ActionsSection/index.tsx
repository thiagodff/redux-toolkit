import { useDispatch } from 'react-redux';

import {
	decrementCounter,
	incrementCounter,
	randomIncrementCounter,
	resetCounter,
} from '../../store/slices/counter';
import Button from '../Button';
import * as S from './styles';

const ActionsSection = () => {
	const dispatch = useDispatch();

	const increment = () => dispatch(incrementCounter());

	const decrement = () => dispatch(decrementCounter());

	const reset = () => dispatch(resetCounter());

	const randomIncrement = () => {
		const randomNumber = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

		return dispatch(randomIncrementCounter({ value: randomNumber }));
	};

	return (
		<S.Container>
			<p>
				Vamos aprender como implementar a última versão do Redux, utilizando o
				Redux Toolkit e Typescript.
			</p>

			<div>
				<Button type="button" onClick={increment}>
					Increment
				</Button>

				<Button type="button" onClick={decrement}>
					Decrement
				</Button>

				<Button type="button" onClick={reset}>
					Reset
				</Button>

				<Button type="button" onClick={randomIncrement}>
					Random Increment
				</Button>
			</div>
		</S.Container>
	);
};

export default ActionsSection;
