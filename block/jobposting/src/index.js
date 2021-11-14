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
		jobPostingTitle: {
			type: 'string',
			default: ''
		},
		jobPostingDescription: {
			type: 'string',
			default: ''
		},
		jobPostingIdentifierName: {
			type: 'string',
			default: ''
		},
		jobPostingIdentifierValue: {
			type: 'string',
			default: ''
		}
	},
	edit: Edit,
} );
