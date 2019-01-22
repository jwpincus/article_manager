# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#
names = ['Abi', 'Abner', 'Acacia', 'Ada', 'Alan', 'Sumin', 'Rob', 'Jack']

names.each do |name|
  User.create(name: name, email: "#{name}@email.com")
  puts "user #{name} created"
end

# articles = ['first', 'second', 'third']
#
# lorem_ipsum = "I have printed it out, but the animated gif is not moving. Do less with more give us a complimentary logo along with the website can you please send me the design specs again? yet i'll know it when i see it. I know you've made thirty iterations but can we go back to the first one that was the best version thats not what i saw in my head at all. I was wondering if my cat could be placed over the logo in the flyer I like it, but can the snow look a little warmer try making it a bit less blah yet try making it a bit less blah needs to be sleeker, i know you've made thirty iterations but can we go back to the first one that was the best version. We need to make the new version clean and sexy make it pop that's great, but can you make it work for ie 2 please, can you help me out?"
#
# articles.each do |title|
#   Article.create(title: title, body: lorem_ipsum)
# end
