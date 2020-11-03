class User < ApplicationRecord
  has_many :airplanes
  has_many :reservations
  has_secure_password
end
