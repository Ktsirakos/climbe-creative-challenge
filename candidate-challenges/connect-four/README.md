# Connect Four Challenge

The grid is 6 row by 7 columns, those being named from A to G.

You will receive a list of strings showing the order of the pieces which dropped in columns:

```javascript
const piecesPositionList = [
    "A_Red",
    "B_Yellow",
    "A_Red",
    "B_Yellow",
    "A_Red",
    "B_Yellow",
    "G_Red",
    "B_Yellow",
]
```

The list may contain up to 42 moves and shows the order the players are playing.

The first player who connects four items of the same color is the winner.

You should return "Yellow", "Red" or "Draw" accordingly.

There are a few example tests included. These are not extensive. Feel free to add your own tests.

If you are unfamiliar with connect four rules, please read about them [here](https://en.wikipedia.org/wiki/Connect_Four)
of the same color is the winner.