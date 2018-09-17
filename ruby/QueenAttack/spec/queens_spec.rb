require_relative '../app/queens'
require_relative '../app/queensAnswers' #for testing answers file

describe Queens do
  describe "#attack?" do
    it "cannot attack on different rank and file" do
      queens = Queens.new(black_position: [2, 4], white_position: [6, 6])
      expect(queens.attack?).to eq(false)
    end

    xit "can attack on same rank" do
      queens = Queens.new(black_position: [2, 4], white_position: [2, 6])
      expect(queens.attack?).to eq(true)
    end

    xit "can attack on same file" do
      queens = Queens.new(black_position: [4, 5], white_position: [2, 5])
      expect(queens.attack?).to eq(true)
    end

    xit "can attack on first diagonal" do
      queens = Queens.new(black_position: [2, 2], white_position: [0, 4])
      expect(queens.attack?).to eq(true)
    end

    xit "can attack on second diagonal" do
      queens = Queens.new(black_position: [2, 2], white_position: [3, 1])
      expect(queens.attack?).to eq(true)
    end

    xit "can attack on third diagonal" do
      queens = Queens.new(black_position: [2, 2], white_position: [1, 1])
      expect(queens.attack?).to eq(true)
    end

    xit "can attack on fourth diagonal" do
      queens = Queens.new(black_position: [2, 2], white_position: [5, 5])
      expect(queens.attack?).to eq(true)
    end

    xit "raises an error if the queens occupy the same space on the board" do
      expect { queens = Queens.new(black_position: [2, 2], white_position: [2, 2]).attack? }.to raise_error(ArgumentError)
    end

    xit "raises an error if the rank is negative" do
      expect { queens = Queens.new(black_position: [-2, 2], white_position: [1, 1]).attack? }.to raise_error(ArgumentError)
    end

    xit "raises an error if the rank is off the board" do
      expect { Queens.new(black_position: [8, 4], white_position: [5, 5]).attack? }.to raise_error(ArgumentError)
    end

    xit "raises an error if the file is negative" do
      expect { Queens.new(black_position: [2, -2], white_position: [5, 5]).attack? }.to raise_error(ArgumentError)
    end

    xit "raises an error if the file is off the board" do
      expect { Queens.new(black_position: [4, 8], white_position: [5, 5]).attack? }.to raise_error(ArgumentError)
    end
  end
end

# Tests for queensAnswers.rb file - don't peek!
# Refactoring tip: Extract the queen position into a class
# describe QueensAnswers do
#   describe "#attack?" do
#     it "cannot attack on different rank and file" do
#       queens = QueensAnswers.new(black_position: [2, 4], white_position: [6, 6])
#       expect(queens.attack?).to eq(false)
#     end

#     it "can attack on same rank" do
#       queens = QueensAnswers.new(black_position: [2, 4], white_position: [2, 6])
#       expect(queens.attack?).to eq(true)
#     end

#     it "can attack on same file" do
#       queens = QueensAnswers.new(black_position: [4, 5], white_position: [2, 5])
#       expect(queens.attack?).to eq(true)
#     end

#     it "can attack on first diagonal" do
#       queens = QueensAnswers.new(black_position: [2, 2], white_position: [0, 4])
#       expect(queens.attack?).to eq(true)
#     end

#     it "can attack on second diagonal" do
#       queens = QueensAnswers.new(black_position: [2, 2], white_position: [3, 1])
#       expect(queens.attack?).to eq(true)
#     end

#     it "can attack on third diagonal" do
#       queens = QueensAnswers.new(black_position: [2, 2], white_position: [1, 1])
#       expect(queens.attack?).to eq(true)
#     end

#     it "can attack on fourth diagonal" do
#       queens = QueensAnswers.new(black_position: [2, 2], white_position: [5, 5])
#       expect(queens.attack?).to eq(true)
#     end

#     it "raises an error if the queens occupy the same space on the board" do
#       expect { queens = QueensAnswers.new(black_position: [2, 2], white_position: [2, 2]).attack? }.to raise_error(ArgumentError)
#     end

#     it "raises an error if the rank is negative" do
#       expect { queens = QueensAnswers.new(black_position: [-2, 2], white_position: [1, 1]).attack? }.to raise_error(ArgumentError)
#     end

#     it "raises an error if the rank is off the board" do
#       expect { QueensAnswers.new(black_position: [8, 4], white_position: [5, 5]).attack? }.to raise_error(ArgumentError)
#     end

#     it "raises an error if the file is negative" do
#       expect { QueensAnswers.new(black_position: [2, -2], white_position: [5, 5]).attack? }.to raise_error(ArgumentError)
#     end

#     it "raises an error if the file is off the board" do
#       expect { QueensAnswers.new(black_position: [4, 8], white_position: [5, 5]).attack? }.to raise_error(ArgumentError)
#     end
#   end
# end  

