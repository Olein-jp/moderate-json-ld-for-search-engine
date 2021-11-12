import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';

registerBlockType( 'mjse/jobposting', {
	apiVersion: 2,
	title: 'JobPosting',
	icon: 'megaphone',
	category: 'text',
	supports: {
		html:false,
	},
	attributes: {
		myTest: {
			type: 'string',
			default: '',
			selector: '.myRichTextTest'
		}
	},
	edit: Edit,
} );
