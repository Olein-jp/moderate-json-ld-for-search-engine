import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

import Edit from './edit';
import save from './save';

registerBlockType('mjse/moderate-json-ld-for-search-engine', {
	apiVersion: 2,
	edit: Edit,
	save,
});
