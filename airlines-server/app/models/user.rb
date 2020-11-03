class User < ApplicationRecord
  belongs_to :user, optional: true
  has_many :flights
end
