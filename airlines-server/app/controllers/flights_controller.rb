class FlightsController < ApplicationController
  def index
    @flights = Flight.all
  end

  def new
    @flight = Flight.new
  end

  def create
    flight = Flight.create flights_params
    redirect_to flight
  end

  def show
    @flight = Flight.find params[:id]
  end

  def edit
    @flight = Flight.find params[:id]
  end

  def update
    flight = Flight.find params[:id]
    flight.update flights_params
    redirect_to flight
  end

  def destroy
    flight = Flight.find params[:id]
    flight.destroy
    redirect_to flights_path # index
  end

  private

  def flights_params
    params.require(:flight).permit(:flight_number, :origin, :destination, :flight_date, :plane_id)
  end
end
