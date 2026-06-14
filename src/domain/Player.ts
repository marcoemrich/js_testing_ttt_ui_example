export type Player = "X" | "O";

export const Player: {
  X: Player;
  O: Player;
  opponent: (player: Player) => Player;
} = {
  X: "X",
  O: "O",
  opponent: (player) => (player === Player.O ? Player.X : Player.O),
};
