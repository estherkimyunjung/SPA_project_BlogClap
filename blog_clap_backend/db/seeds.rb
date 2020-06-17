# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Blogger.destroy_all
Blog.destroy_all
Review.destroy_all

blogger_a = Blogger.create(name: 'Cole Davis')
blogger_b = Blogger.create(name: 'Edwin Calvillo')
blogger_c = Blogger.create(name: 'Freddy Flores')
blogger_d = Blogger.create(name: 'Taiye Salami')
blogger_e = Blogger.create(name: 'Thach Luu')
blogger_f = Blogger.create(name: 'Yannick Djoumbi')
blogger_g = Blogger.create(name: 'Esther Kim')

blog_a = Blog.create(title: 'The Flaws of Communication', link: 'https://medium.com/@colebuildanddevelop/the-flaws-of-communication-e640f9b78420', description: 'Imagine two groups of allied gangs each on opposing sides of a city')
blog_b = Blog.create(title: 'A = Abstraction', link: 'https://medium.com/@floresfreddy.ultra/a-abstraction-c78a27d17aaf', description: 'How code and life are nothing but embedded representations')
blog_c = Blog.create(title: 'Ruby on Rails in 2020', link: 'https://medium.com/@luuphanbaothach/ruby-on-rails-in-2020-3d3c84976947', description: 'Ruby on Rails (RoR) is a web framework that is one of the most popular tools in web development')
blog_d = Blog.create(title: 'Powerful Regular Expression', link: 'https://medium.com/@estherkimyunjung/powerful-regular-expression-2c7a11592b40?source=friends_link&sk=5cf2c108ed408b3936ff08d6662fd778', description: 'Regular Expression Basic Rules and Patterns')
blog_e = Blog.create(title: 'Front-end Design', link: 'https://medium.com/@calvillo.edwin/understanding-a-software-engineers-responsibility-to-front-end-design-9161c437cd55', description: 'Understanding a Software Engineer’s Responsibility to Front-end Design')

review_a = Review.create(clap: 14, comment: 'Keep up the great work!', blogger: blogger_f, blog: blog_a)
review_b = Review.create(clap: 10, comment: 'Thank you for sharing your blog!', blogger: blogger_g, blog: blog_b)
review_c = Review.create(clap: 11, comment: 'Keep up the great work!', blogger: blogger_d, blog: blog_c)
