const Player = require("./player");

describe("Player.Opponent", () => {
  it("returns the opposite Player", () => {
    expect(Player.opponent(Player.X)).toEqual(Player.O);
    expect(Player.opponent(Player.O)).toEqual(Player.X);
  });
});
