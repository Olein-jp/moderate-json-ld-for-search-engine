<?php
function mjse_jobposting_render( $attr, $content ) {
	ob_start();
	echo '<hr>';
	echo( '<pre>' );
	var_dump( $attr );
	echo( '</pre>' );
	echo '<hr>';
	?>
	<script type="application/ld+json">
		{
			"@context" : "https://schema.org",
			"@type" : "JobPosting",
			"title" : "<?php echo $attr[ 'jobPostingTitle' ]; ?>",
			"description" : "<?php echo $attr[ 'jobPostingDescription' ]; ?>"
		}
	</script>
	<?php
	$output = ob_get_contents();
	ob_end_clean();
	return $output;
}

function mjse_jobposting() {
	$asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');

	wp_register_script(
		'mjse-jobposting',
		plugins_url( 'build/index.js', __FILE__ ),
		$asset_file['dependencies'],
		$asset_file['version']
	);

	register_block_type( 'mjse/jobposting', array(
		'api_version' => 2,
		'editor_script' => 'mjse-jobposting',
		'render_callback' => 'mjse_jobposting_render'
	) );

}
add_action( 'init', 'mjse_jobposting' );
