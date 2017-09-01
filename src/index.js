import _ from 'lodash';

const getMessage = () => {
	_.map(_.range(10), (i) => console.log(i));
	return 'Hello World';
};

getMessage();

export { getMessage }
