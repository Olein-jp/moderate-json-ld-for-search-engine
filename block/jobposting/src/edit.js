import { useBlockProps } from '@wordpress/block-editor'
import { TextControl } from '@wordpress/components';

const Edit = ( props ) => {
	const blockProps = useBlockProps();
	const {
		attributes: { myTest },
		setAttributes
	} = props;
	return (
		<div { ...blockProps }>
			<TextControl
				label="myTest"
				value={ myTest }
				onChange={ ( newTest ) => setAttributes({ myTest: newTest }) }
			/>
		</div>
	);
}

export default Edit;
