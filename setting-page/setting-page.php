<?php

/**
 * Add option page
 */
function mjse_add_option_page()
{
	add_menu_page(
		__('Default Settings of Moderate JSON-LD for Search Engine', 'mjse'),
		__('MJSE', 'mjse'),
		'manage_options',
		'mjse-default-setting-top',
		function () {
?>
		<div class="manual-contents">
			<h1>マニュアルページ</h1>
			<p>このページでは管理画面の使い方について説明する予定です。</p>
			<form method="post" action="options.php">
				<?php
				settings_fields('mjse_default_settings');
				do_settings_sections('mjse_default_settings');
				submit_button();
				?>
			</form>
		</div>
	<?php
		},
		'dashicons-welcome-learn-more',
		99
	);
}
add_action('admin_menu', 'mjse_add_option_page');

/**
 * Setting sections
 */
function mjse_admin_init()
{

	add_settings_section(
		'mjse-default-setting-top',
		'top',
		'__return_false',
		'mjse_default_settings'
	);
	add_settings_field(
		'mjse-sample-01',
		'Aenean iaculis rutrum curae lobortis mauris pretium',
		function () {
	?>
		<input type="text" id="mjse-sample-01" name="mjse-sample-01" value="<?php echo get_option('mjse-sample-01'); ?>">
	<?php
		},
		'mjse_default_settings',
		'mjse-default-setting-top'
	);
	add_settings_field(
		'mjse-sample-02',
		'Potenti magna tellus non porta proin ligula',
		function () {
	?>
		<input type="text" id="mjse-sample-02" name="mjse-sample-02" value="<?php echo get_option('mjse-sample-02'); ?>">
<?php
		},
		'mjse_default_settings',
		'mjse-default-setting-top'
	);

	register_setting('mjse_default_settings', 'mjse-sample-01');
	register_setting('mjse_default_settings', 'mjse-sample-02');
}
add_action('admin_init', 'mjse_admin_init');
