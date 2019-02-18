class PagesController < ApplicationController

  def glossaire
    @alphabet = ('A'..'Z').to_a
  end
end
