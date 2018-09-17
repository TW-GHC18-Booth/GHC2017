class QueensAnswers

  def initialize(white_position: [0,0], black_position: [0,0])
    @white = white_position
    @black = black_position
  end

  def attack?
    if valid_position? then
      return (same_rank? || same_file? || diagonal?)
    else
      raise ArgumentError.new("Argument Error")
    end
  end

  def same_rank? #'rank' is the row on the board - chess positions are stated row-column / [rank,file]
    @black[0] == @white[0]
  end

  def same_file? 
    @black[1] == @white[1]
  end

  def diagonal?
    (@black[0] - @white[0]).abs == (@black[1] - @white[1]).abs
  end

  def valid_position?
    return ((@black[0] >= 0) && (@black[1] >= 0) && (@black[0] < 8) && (@black[1] < 8) && (@white[0] >= 0) && (@white[1] >= 0) && (@white[0] < 8) && (@white[1] < 8)) && !((@black[0]==@white[0]) && (@black[1]==@white[1]))
  end
end
