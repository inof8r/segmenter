<?php
	include("config.php");
	$page_title = "$APP_NAME $APP_VERSION";
?>
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
	<head>
		<title><?=$page_title;?></title>
		<link rel="stylesheet" href="css/main.css" />
		<script src="js/jquery-2.1.4.min.js"></script>
		<script src="js/main.js"></script>
	</head>
	<body>
		<div id="mainCanvas" class="mainCanvas">
		</div>
		<script>
			var sf = new SegmentFactory();
			var params = ["foo","bar"];
			sf.segmentTarg("mainCanvas", "cross", params);
			sf.segmentTarg("mainCanvas_cell_0", "splitV", params);
			sf.segmentTarg("mainCanvas_cell_2", "splitV", params);
			sf.segmentTarg("mainCanvas_cell_2_cell_0", "cross", params);
		</script>
	</body>
</html>