// tooling
import postcss from 'postcss';

function lengthProp(decl) {
	const childSelector = " > *";
	const originalRule = decl.parent;
	const levelTwoRule = postcss.rule({selector: originalRule.selector + childSelector});

	let percentage = decl.value.match(/[\d\.]+%/g);
	let prop = decl.prop;
	let oppProp;
	let direction;

	// Check for width or height
	if (prop === "width") {
		oppProp = "height";
		direction = "row";
	}
	else if (prop === "height") {
		oppProp = "width";
		direction = "column";
	}


	// Add new rules
	originalRule.before(levelTwoRule);

	if (decl.value === "shrink") {
		decl.before(
			`--${prop}-grow: 0;
			 flex-grow: 0;
			 display: inline-flex;`
		);
		levelTwoRule.append(
			`--${prop}-grow: initial;`
		);

		decl.remove();
	}
	else if (decl.value === "grow") {
		decl.before(
			`flex-grow: 1;`
		);

		decl.remove();
	}
	else if (percentage) {

		decl.before(
			`--${prop}-grow: 0;
			 flex-grow: var(--${direction}-grow, var(--${oppProp}-grow, 1));
			 flex-shrink: 0;
			 flex-basis: auto !important;`
		);

		levelTwoRule.append(
			`--${prop}-grow: initial;`
		);

	}
	else {
		decl.before(
			`--width-grow: 0;
			 flex-grow: var(--${direction}-grow, var(--${oppProp}-grow, 1));
			 flex-shrink: 0;
			 flex-basis: auto !important`
		);
		levelTwoRule.append(
			`--width-grow: initial;`
		);

	}

	originalRule.walk(i => {i.raws.before = "\n\t";});
	levelTwoRule.walk(i => {i.raws.before = "\n\t";});

}

// plugin
export default postcss.plugin('postcss-exact-width', opts => {
	console.log('opts', opts);

	return function (root) {
		root.walkDecls(function (decl) {
			if (decl.prop === "width" || decl.prop === "height") {
				lengthProp(decl);
			}
		});
	};
});
