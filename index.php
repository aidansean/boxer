<?php
$title = 'Boxer' ;
$stylesheets = array('style.css') ;
$js_scripts  = array('functions.js') ;
include($_SERVER['FILE_PREFIX'] . '/_core/preamble.php') ;
?>
<p>Have a randomly generated box of kittens!</p>

<table id="table_boxes">
  <tbody id="tbody_boxes">
  </tbody>
</table>

<?php foot() ; ?>