import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

import { SelectControl } from '@wordpress/components';

import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { jsonType, setJsonType }= attributes;

	return (
		<div { ...useBlockProps() } >
			<SelectControl
				label="JSON-LD type"
				value={ jsonType }
				options={ [
					{
						label: __('Recruit', 'mjse' ),
						value: 'recruit'
					},
					{
						label: __('Item', 'mjse' ),
						value: 'ec-item'
					},
					{
						label: __('Local Business', 'mjse' ),
						value: 'local-business'
					},
				] }
				onChange={ ( newJsonType ) => setJsonType( newJsonType ) }
			/>
		</div>
	);
}
