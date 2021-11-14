import { useBlockProps } from '@wordpress/block-editor'
import { TextControl } from '@wordpress/components';

const Edit = ( props ) => {
	const blockProps = useBlockProps();
	const {
		attributes: { jobPostingTitle },
		setAttributes
	} = props;
	return (
		<div { ...blockProps }>
			<TextControl
				label="jobPostingTitle"
				value={ jobPostingTitle }
				onChange={ ( newJobPostingTitle ) => setAttributes({ jobPostingTitle: newJobPostingTitle }) }
			/>
		</div>
	);
}

export default Edit;
