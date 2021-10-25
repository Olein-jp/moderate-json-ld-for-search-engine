<?php

/**
 * Add option page
 */
function mjse_add_option_page() {
	add_options_page(
			__( 'Moderate JSON-LD for Search Engine Default Settings', 'mjse' ),
			__( 'Moderate JSON-LD for Search Engine Default Settings', 'mjse' ),
			'manage_options',
			'mjse-default-setting',
			function() {
				?>
				<div class="wrap">
					<h1><?php esc_html_e( 'Moderate JSON-LD for Search Engine Default Settings', 'mjse' ); ?></h1>
					<?php $active_tab = isset( $_GET[ 'tab' ] ) ? $_GET[ 'tab' ] : 'tab-page1'; ?>
					<h2 class="nav-tab-wrapper">
						<a
							href="?page=mjse-default-setting&amp;tab=tab-page1"
							class="nav-tab <?php echo $active_tab == 'tab-page1' ? 'nav-tab-active' : ''; ?>">
							タブページ1
						</a>
						<a
							href="?page=mjse-default-setting&amp;tab=tab-page2"
							class="nav-tab <?php echo $active_tab == 'tab-page2' ? 'nav-tab-active' : ''; ?>">
							タブページ2
						</a>
					</h2>
					<form method="post" action="options.php">
						<?php
						settings_fields( 'mjse_default_settings' );
						do_settings_sections( 'mjse_default_settings' );
						submit_button();
						?>
					</form>
				</div>
				<?php
			}
	);
}
add_action( 'admin_menu', 'mjse_add_option_page' );

/**
 * Setting sections
 */
function mjse_admin_init() {
	$active_tab = isset( $_GET[ 'tab' ] ) ? $_GET[ 'tab' ] : 'tab-page1';
	switch ( $active_tab ){
		case 'tab-page1':
			add_settings_section(
				'sample_section1',
				'セッション',
				'__return_false',
				'mjse_default_settings'
			);
			add_settings_field(
				'mjse-sample-01',
				'フィールド tab1',
				function () {
					?>
					<input type="text" id="mjse-sample-01" name="mjse-sample-01" value="<?php echo get_option( 'mjse-sample-01' ); ?>">
					<?php
				},
				'mjse_default_settings',
				'sample_section1'
			);
			break;
		case 'tab-page2':
			add_settings_section(
				'sample_section2',
				'セッション',
				'__return_false',
				'mjse_default_settings'
			);
			add_settings_field(
				'mjse-sample-02',
				'フィールド tab2',
				function () {
					?>
					<input type="text" id="mjse-sample-02" name="mjse-sample-02" value="<?php echo get_option( 'mjse-sample-02' ); ?>">
					<?php
				},
				'mjse_default_settings',
				'sample_section2'
			);
			break;
	}
	register_setting( 'mjse_default_settings', 'mjse-sample-01' );
	register_setting( 'mjse_default_settings', 'mjse-sample-02' );

}
add_action( 'admin_init', 'mjse_admin_init' );
