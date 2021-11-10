import { __ } from '@wordpress/i18n';
import { TextControl } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { useEntityProp } from '@wordpress/core-data';
import { useBlockProps } from '@wordpress/block-editor';

import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const blockProps = useBlockProps();
	const postType = useSelect(
		( select ) => select( 'core/editor' ).getCurrentPostType(),
		[]
	);
	const [ meta, setMeta ] = useEntityProp(
		'postType',
		postType,
		'meta'
	);
	const presetMetaFieldValue = meta[ 'mjse-sample-01' ];
	const metaFieldValue = meta[ 'mjse_mjse-sample-01' ];
	function updateMetaValue( newValue ) {
		if ( presetMetaFieldValue === '' ) {
			setMeta({...meta, 'mjse-sample-01': newValue});
		} else {
			setMeta({...meta, 'mjse_mjse-sample-01': newValue});
		}
	}

	return (
		<div { ...blockProps }>
			<TextControl
				label="mjse_mjse-sample-01"
				value={ metaFieldValue }
				onChange={ updateMetaValue }
			/>
		</div>
	);
}
