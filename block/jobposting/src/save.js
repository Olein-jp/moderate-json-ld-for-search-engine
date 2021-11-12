import { RichText } from "@wordpress/block-editor";

const save = ( props ) => {
	const {
		attributes: { myTest }
	} = props;

	return(
		<div>
			<RichText
				className='myRichTextTest'
				value={ myTest }
				tagName='h3'
			/>
		</div>
	);
}

export default save;
