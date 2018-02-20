// tooling
import postcss from 'postcss';

// plugin
export default postcss.plugin('postcss-exact-width', opts => {
	console.log('opts', opts);

	return (root, result) => {
		console.log('root, result', root, result);
	};
});
