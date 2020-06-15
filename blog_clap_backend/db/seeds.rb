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

blogger_a = Blogger.create(name: 'Cole')
blogger_b = Blogger.create(name: 'Esther')
blogger_c = Blogger.create(name: 'Thach')

blog_a = Blog.create(title: 'The Flaws of Communication', link: 'https://medium.com/@colebuildanddevelop/the-flaws-of-communication-e640f9b78420', description: 'Imagine two groups of allied gangs each on opposing sides of a city')
blog_b = Blog.create(title: 'World Belongs to Me Through the Software Engineering', link: 'https://medium.com/@estherkimyunjung/world-belongs-to-me-through-software-engineering-a58de134967?source=friends_link&sk=430052bed992caeeea92fb8fba16bc6c', description: 'How to develop the growth mindset')
blog_c = Blog.create(title: 'Ruby on Rails in 2020', link: 'https://medium.com/@luuphanbaothach/ruby-on-rails-in-2020-3d3c84976947', description: 'Ruby on Rails (RoR) is a web framework that is one of the most popular tools in web development')
blog_d = Blog.create(title: 'I am Learning Vim?', link: 'https://medium.com/@colebuildanddevelop/i-am-learning-vim-2883fb0565e4', description: 'Vim is a text editor that optimizes for speed and efficiency.')
blog_e = Blog.create(title: 'Powerful Regular Expression', link: 'https://medium.com/@estherkimyunjung/powerful-regular-expression-2c7a11592b40?source=friends_link&sk=5cf2c108ed408b3936ff08d6662fd778', description: 'Regular Expression Basic Rules and Patterns')
blog_f = Blog.create(title: 'Screen Scraping for Real-time Poker Data', link: 'https://medium.com/@colebuildanddevelop/screen-scraping-for-real-time-poker-data-25053f572bab', description: 'scraped the screen for images of suits in order to compare them with images')

review_a = Review.create(clap: 14, comment: 'Keep up the great work!', blogger: blogger_b, blog: blog_b)