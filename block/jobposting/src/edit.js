import { RichText } from "@wordpress/block-editor";

const Edit = ( props ) => {
	const {
		attributes: { myTest },
		className,
		setAttributes
	} = props;
	return (
		<div className={ className } >
			<RichText
				className='myRichTextTest'
				value={ myTest }
				onChange={ ( newTest ) => setAttributes({ myTest: newTest }) }
				tagName='h3'
				placeholder='タイトルを入力'
				keepPlaceholderOnFocus={ true }
			/>
		</div>
	);
}

export default Edit;
