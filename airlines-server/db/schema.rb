# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

<<<<<<< HEAD
ActiveRecord::Schema.define(version: 2020_11_03_085420) do
=======
ActiveRecord::Schema.define(version: 2020_11_03_070555) do
>>>>>>> b65204a3c897f93cefc34dd10a341006054abb85

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

<<<<<<< HEAD
  create_table "flights", force: :cascade do |t|
    t.text "flight_number"
    t.date "flight_date"
    t.text "origin"
    t.text "destination"
    t.integer "airplane_id"
    t.integer "user_id"
=======
  create_table "airplanes", force: :cascade do |t|
    t.string "name"
    t.integer "rows"
    t.integer "columns"
    t.integer "flight_id"
  end

  create_table "users", force: :cascade do |t|
    t.text "email"
    t.text "name"
    t.string "password_digest"
    t.integer "resevation_id"
    t.boolean "is_admin"
>>>>>>> b65204a3c897f93cefc34dd10a341006054abb85
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end