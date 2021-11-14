import { useBlockProps } from '@wordpress/block-editor'
import {
	TextControl,
	TextareaControl
} from '@wordpress/components';

const Edit = ( props ) => {
	const blockProps = useBlockProps();
	const {
		attributes: {
			jobPostingTitle,
			jobPostingDescription
		},
		setAttributes
	} = props;
	return (
		<div { ...blockProps }>
			<TextControl
				label="jobPostingTitle"
				value={ jobPostingTitle }
				onChange={ ( newJobPostingTitle ) => setAttributes({ jobPostingTitle: newJobPostingTitle }) }
			/>
			<TextareaControl
				label="jobPostingDescription"
				help="Enter jobPosting description"
				value={ jobPostingDescription }
				onChange={ ( newJobPostingDescription ) => setAttributes({ jobPostingDescription: newJobPostingDescription }) }
			/>
		</div>
	);
}

export default Edit;
