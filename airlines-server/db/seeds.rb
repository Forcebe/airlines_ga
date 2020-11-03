User.destroy_all
u1 = User.create :email => 'nick@ga.com', :is_admin => true
u2 = User.create :email => 'mike@ga.com', :is_admin => true
u3 = User.create :email => 'henry@ga.com', :is_admin => true
puts "#{ User.count } users"

Airplane.destroy_all

a1 = Airplane.create :name => 'GA123', :rows => 'A,B,C,D', :columns => 20
a2 = Airplane.create :name => 'GA456', :rows => 'A,B,C', :columns => 22
a3 = Airplane.create :name => 'GA789', :rows => 'A,B,C,D,E,F', :columns => 20
puts "#{ Airplane.count } airplanes"
