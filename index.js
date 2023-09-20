import {jsx as $l7i9T$jsx, jsxs as $l7i9T$jsxs, Fragment as $l7i9T$Fragment} from "react/jsx-runtime";
import $l7i9T$react from "react";
import $l7i9T$reactdom from "react-dom";






const $9723d19bf2a2276a$var$cols = [
    0,
    1,
    2
];
const $9723d19bf2a2276a$var$rows = $9723d19bf2a2276a$var$cols;
const $9723d19bf2a2276a$var$rowsOrCols = $9723d19bf2a2276a$var$cols;
const $9723d19bf2a2276a$var$posToString = (pos)=>`${pos.x}/${pos.y}`
;
const $9723d19bf2a2276a$var$winnerOfTwoCells = (symbol1, symbol2)=>symbol1 === symbol2 ? symbol1 : undefined
;
const $9723d19bf2a2276a$var$or = (a, b)=>a || b
;
const $9723d19bf2a2276a$export$185802fd694ee1f5 = ()=>({})
;
const $9723d19bf2a2276a$export$bf7f2fce5c1cf636 = (player, pos, board)=>({
        ...board,
        [$9723d19bf2a2276a$var$posToString(pos)]: player
    })
;
const $9723d19bf2a2276a$export$493d36ec626b6698 = (pos, board)=>board[$9723d19bf2a2276a$var$posToString(pos)]
;
const $9723d19bf2a2276a$var$winByDiag1 = (board)=>$9723d19bf2a2276a$var$rows.map((xy)=>$9723d19bf2a2276a$export$493d36ec626b6698({
            x: xy,
            y: xy
        }, board)
    ).reduce($9723d19bf2a2276a$var$winnerOfTwoCells)
;
const $9723d19bf2a2276a$var$winByDiag2 = (board)=>$9723d19bf2a2276a$var$rows.map((xy)=>$9723d19bf2a2276a$export$493d36ec626b6698({
            x: 2 - xy,
            y: xy
        }, board)
    ).reduce($9723d19bf2a2276a$var$winnerOfTwoCells)
;
const $9723d19bf2a2276a$var$winByRowY = (y, board)=>$9723d19bf2a2276a$var$cols.map((x)=>$9723d19bf2a2276a$export$493d36ec626b6698({
            x: x,
            y: y
        }, board)
    ).reduce($9723d19bf2a2276a$var$winnerOfTwoCells)
;
const $9723d19bf2a2276a$var$winByColX = (x, board)=>$9723d19bf2a2276a$var$rows.map((y)=>$9723d19bf2a2276a$export$493d36ec626b6698({
            x: x,
            y: y
        }, board)
    ).reduce($9723d19bf2a2276a$var$winnerOfTwoCells)
;
const $9723d19bf2a2276a$var$winByRow = (board)=>$9723d19bf2a2276a$var$winByRowOrCol($9723d19bf2a2276a$var$winByRowY, board)
;
const $9723d19bf2a2276a$var$winByCol = (board)=>$9723d19bf2a2276a$var$winByRowOrCol($9723d19bf2a2276a$var$winByColX, board)
;
const $9723d19bf2a2276a$var$winByRowOrCol = (winByRowOrColXY, board)=>$9723d19bf2a2276a$var$rowsOrCols.map((xOrY)=>winByRowOrColXY(xOrY, board)
    ).reduce($9723d19bf2a2276a$var$or)
;
const $9723d19bf2a2276a$export$b14ee659ac727b39 = (board)=>[
        $9723d19bf2a2276a$var$winByRow,
        $9723d19bf2a2276a$var$winByCol,
        $9723d19bf2a2276a$var$winByDiag1,
        $9723d19bf2a2276a$var$winByDiag2
    ].map((winCondition)=>winCondition(board)
    ).reduce($9723d19bf2a2276a$var$or)
;
const $9723d19bf2a2276a$export$878041e1e4cd4218 = ()=>[
        {
            x: 0,
            y: 0
        },
        {
            x: 1,
            y: 0
        },
        {
            x: 2,
            y: 0
        },
        {
            x: 0,
            y: 1
        },
        {
            x: 1,
            y: 1
        },
        {
            x: 2,
            y: 1
        },
        {
            x: 0,
            y: 2
        },
        {
            x: 1,
            y: 2
        },
        {
            x: 2,
            y: 2
        }, 
    ]
;


const $bd36369e8d30b1af$export$2616165974278734 = {
    X: "X",
    O: "O",
    opponent: (player)=>player === $bd36369e8d30b1af$export$2616165974278734.O ? $bd36369e8d30b1af$export$2616165974278734.X : $bd36369e8d30b1af$export$2616165974278734.O
};







const $5e4561dc86ab0364$export$a51ca3725619235c = (pos)=>`${pos.x}|${pos.y}`
;
const $5e4561dc86ab0364$export$f6f0c3fe4ec306ea = ({ owner: owner = "" , position: position , onClick: onClick  })=>/*#__PURE__*/ $l7i9T$jsx("button", {
        role: "cell",
        className: `cell cell_${$5e4561dc86ab0364$export$a51ca3725619235c(position)}`,
        "data-position": $5e4561dc86ab0364$export$a51ca3725619235c(position),
        onClick: (e)=>onClick(position)
        ,
        "data-testid": `cell_${$5e4561dc86ab0364$export$a51ca3725619235c(position)}`,
        children: owner
    })
;


const $b21b9dae10d511eb$export$aa7f14f1e995cb32 = (str)=>({
        x: str.split("|")[0],
        y: str.split("|")[1]
    })
;
const $b21b9dae10d511eb$export$dc537a3a3893548e = ({ board: board , clickAtCell: clickAtCell  })=>/*#__PURE__*/ $l7i9T$jsx("div", {
        className: "board",
        "data-testid": "board",
        children: $9723d19bf2a2276a$export$878041e1e4cd4218().map((pos1)=>/*#__PURE__*/ $l7i9T$jsx($5e4561dc86ab0364$export$f6f0c3fe4ec306ea, {
                position: pos1,
                owner: $9723d19bf2a2276a$export$493d36ec626b6698(pos1, board),
                onClick: (pos)=>clickAtCell(pos)
            }, $5e4561dc86ab0364$export$a51ca3725619235c(pos1))
        )
    })
;





const $849c2319e4747f11$export$2616165974278734 = ({ label: label , name: name , onChange: onChange  })=>/*#__PURE__*/ $l7i9T$jsxs("div", {
        children: [
            /*#__PURE__*/ $l7i9T$jsx("b", {
                children: label
            }),
            ":",
            " ",
            /*#__PURE__*/ $l7i9T$jsx("input", {
                value: name.toUpperCase(),
                onChange: onChange,
                "data-testid": "player"
            })
        ]
    })
;




const $a1f6d596b7150afe$export$52499e2c5ea4b095 = ({ messages: messages = []  })=>/*#__PURE__*/ $l7i9T$jsx("ul", {
        id: "message-box",
        children: messages.map((m, i)=>/*#__PURE__*/ $l7i9T$jsx("li", {
                children: m
            }, i)
        )
    })
;


const $bb97ecb60cb280a9$export$985739bfa5723e08 = ()=>{
    const [board, setBoard] = $l7i9T$react.useState($9723d19bf2a2276a$export$185802fd694ee1f5());
    const [currentPlayer, setCurrentPlayer] = $l7i9T$react.useState($bd36369e8d30b1af$export$2616165974278734.X);
    const [names, setNames] = $l7i9T$react.useState({
        X: "Bob",
        O: "Alice"
    });
    const [messages, setMessages] = $l7i9T$react.useState([]);
    const winner = ()=>$9723d19bf2a2276a$export$b14ee659ac727b39(board)
    ;
    const clickAtCell = (pos)=>{
        setMessages(messages.concat([
            names[currentPlayer] + " sets " + currentPlayer + " on " + $5e4561dc86ab0364$export$a51ca3725619235c(pos), 
        ]));
        setBoard($9723d19bf2a2276a$export$bf7f2fce5c1cf636(currentPlayer, pos, board));
        setCurrentPlayer($bd36369e8d30b1af$export$2616165974278734.opponent(currentPlayer));
    };
    return winner() ? /*#__PURE__*/ $l7i9T$jsxs("h1", {
        "data-testid": "win-message",
        children: [
            names[winner()],
            " wins the game with ",
            winner()
        ]
    }) : /*#__PURE__*/ $l7i9T$jsxs($l7i9T$Fragment, {
        children: [
            /*#__PURE__*/ $l7i9T$jsx($849c2319e4747f11$export$2616165974278734, {
                label: "Player X",
                name: names.X,
                onChange: (e)=>setNames({
                        ...names,
                        X: e.target.value
                    })
            }),
            /*#__PURE__*/ $l7i9T$jsx("br", {}),
            /*#__PURE__*/ $l7i9T$jsx($849c2319e4747f11$export$2616165974278734, {
                label: "Player O",
                name: names.O,
                onChange: (e)=>setNames({
                        ...names,
                        O: e.target.value
                    })
            }),
            /*#__PURE__*/ $l7i9T$jsx("br", {}),
            /*#__PURE__*/ $l7i9T$jsx($b21b9dae10d511eb$export$dc537a3a3893548e, {
                board: board,
                clickAtCell: clickAtCell
            }),
            /*#__PURE__*/ $l7i9T$jsx("br", {}),
            /*#__PURE__*/ $l7i9T$jsx($a1f6d596b7150afe$export$52499e2c5ea4b095, {
                messages: messages
            })
        ]
    });
};


const $cf838c15c8b009ba$var$App = document.getElementById("app");
$l7i9T$reactdom.render(/*#__PURE__*/ $l7i9T$jsx($bb97ecb60cb280a9$export$985739bfa5723e08, {}), $cf838c15c8b009ba$var$App);


//# sourceMappingURL=index.js.map
