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
			jobPostingDescription,
			jobPostingIdentifierName,
			jobPostingIdentifierValue
		},
		setAttributes
	} = props;
	return (
		<div { ...blockProps }>
			<TextControl
				label="jobPostingTitle"
				help="求人タイトルを入力してください。（必須）"
				value={ jobPostingTitle }
				onChange={ ( newJobPostingTitle ) => setAttributes({ jobPostingTitle: newJobPostingTitle }) }
			/>
			<TextareaControl
				label="jobPostingDescription"
				help="Enter jobPosting description"
				value={ jobPostingDescription }
				onChange={ ( newJobPostingDescription ) => setAttributes({ jobPostingDescription: newJobPostingDescription }) }
			/>
			<TextControl
				label="jobPostingIdentifierName"
				value={ jobPostingIdentifierName }
				onChange={ ( newJobPostingIdentifierName ) => setAttributes({ jobPostingIdentifierName: newJobPostingIdentifierName }) }
			/>
			<TextControl
				label="jobPostingIdentifierValue"
				value={ jobPostingIdentifierValue }
				onChange={ ( newJobPostingIdentifierValue ) => setAttributes({ jobPostingIdentifierValue: newJobPostingIdentifierValue }) }
			/>
		</div>
	);
}

export default Edit;
