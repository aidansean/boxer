from project_module import project_object, image_object, link_object, challenge_object

p = project_object('boxer', 'Box filler')
p.domain = 'http://www.aidansean.com/'
p.path = 'boxer'
p.preview_image    = image_object('%s/images/project.jpg'   %p.path, 150, 250)
p.preview_image_bw = image_object('%s/images/project_bw.jpg'%p.path, 150, 250)
p.folder_name = 'aidansean'
p.github_repo_name = 'boxer'
p.mathjax = True
p.tags = 'Frvilolous'
p.technologies = 'CSS,HTML,JavaScript'
p.links.append(link_object(p.domain, 'boxer/', 'Live page'))
p.introduction = 'This is a rather frivolous script I wrote to serve some sort of purpose, but I forget exactly what that purpose was.  I think it may have been to create a random sitemap using images from various pages.  It takes rectangular array of squares and fills it with squares (or boxes) of random sizes.  Then to make it look more attractive it fills each rectangle with a picture from <a href="http://www.placekitten.com">placekitten</a>.'
p.overview = '''The tool allows the user to create a plot in several steps.  Each entry can be styled quickly and simply, and bands can also be added around different groups of results.  The user can specify up to three uncertainties (for example, statistics, systematic, and theoretical) which can be asymmetric.  The output is an SVG document, giving a very clean and slick image that scales well.  Unfortunately this is not as well suited for creating bitmaps, and also relies on server side (PHP) scripting.'''

p.challenges.append(challenge_object('The only real challenge here is to make sure none of the squares end up more than one box.', 'This challenge is overcome by choosing a square at random which has not yet been used, then finding the largest possible box size starting from that square, \(n\).  A random number is thrown in the range \(1,n\) to determine the box size.  Each square which fits in this box has it status changed to "used".  This process is repeated until all squares are accounted for.', 'Resolved'))
