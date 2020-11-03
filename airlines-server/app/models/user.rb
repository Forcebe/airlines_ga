class User < ApplicationRecord
  has_many :airplanes
  has_many :reservations
end
