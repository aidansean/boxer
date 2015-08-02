<?php
include_once($_SERVER['FILE_PREFIX']."/project_list/project_object.php") ;
$github_uri   = "https://github.com/aidansean/boxer" ;
$blogpost_uri = "http://aidansean.com/projects/?tag=boxer" ;
$project = new project_object("boxer", "Box filler", "https://github.com/aidansean/boxer", "http://aidansean.com/projects/?tag=boxer", "boxer/images/project.jpg", "boxer/images/project_bw.jpg", "This is a rather frivolous script I wrote to serve some sort of purpose, but I forget exactly what that purpose was.  I think it may have been to create a random sitemap using images from various pages.  It takes rectangular array of squares and fills it with squares (or boxes) of random sizes.  Then to make it look more attractive it fills each rectangle with a picture from <a href=\"http://www.placekitten.com\">placekitten</a>.", "Frvilolous", "CSS,HTML,JavaScript") ;
?>