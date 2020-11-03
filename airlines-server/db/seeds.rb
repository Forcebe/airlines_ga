User.destroy_all
u1 = User.create :email => 'nick@ga.com', :name => 'Nick', :password => 'chicken', :is_admin => true
u2 = User.create :email => 'mike@ga.com', :name => 'Mike', :password => 'chicken', :is_admin => true
u3 = User.create :email => 'henry@ga.com', :name => 'Henry', :password => 'chicken',  :is_admin => true
puts "#{ User.count } users"

Airplane.destroy_all

a1 = Airplane.create :name => 'GA123', :rows => 4, :columns => 20
a2 = Airplane.create :name => 'GA456', :rows => 5, :columns => 22
a3 = Airplane.create :name => 'GA789', :rows => 6, :columns => 20
puts "#{ Airplane.count } airplanes"

Flight.destroy_all
f1 = Flight.create :flight_number => 'VA189', :origin => 'Sydney',:destination => 'Melbourne'
f2 = Flight.create :flight_number => 'JQ252', :origin => 'Adelaide',:destination => 'Perth'
f3 = Flight.create :flight_number => 'CA369', :origin => 'Canberra', :destination => 'Lismore'
puts "#{ Flight.count } flights"
