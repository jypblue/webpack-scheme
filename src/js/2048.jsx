/**
 *
 * @authors zx.wang (zx.wang1991@gmail.com)
 * @date    2016-06-20 15:22:19
 * @version $Id$
 * @description 从网上获取的2048游戏例子
 */


require('../css/components/2048.css');
import React from 'react';
import ReactDom from 'react-dom';


var initialboard = {
    a1:null,a2:null,a3:null,a4:null,
    b1:null,b2:null,b3:null,b4:null,
    c1:null,c2:null,c3:null,c4:null,
    d1:null,d2:null,d3:null,d4:null
};

function availablespaces(board){
    return Object.keys(board).filter(function(key){
        return board[key] == null;
    });
}

function usedspaces(board){
    return Object.keys(board).filter(function(key){
        return board[key] !== null;
    });
}

function scoreboard(board){
    return usedspaces(board).map(function(key){
        return (board[key].values.reduce(function(a, b) {
            return a + b; //sum tile values
        })) - board[key].values[0]; //don't count initial value
    }).reduce(function(a,b){
        return a + b;
    }, 0);
}

function tilevalue(tile){
    return tile ? tile.values[tile.values.length - 1] : null;
}

function canmove(board){
    var newboard = [up,down,left,right].reduce(function(b, direction){
        return foldboard(b, direction);
    }, board);
    return availablespaces(newboard).length > 0;
}

function sameboard(board1, board2){
    return Object.keys(board1).reduce(function(ret, key){
        return ret && board1[key] == board2[key];
    }, true);
}

function foldline(board, line){
    var tiles = line.map(function(key){
        return board[key];
    }).filter(function(tile){
         return tile !== null;
    });
    var newtiles = [];
    if(tiles){
        //must loop so we can skip next if matched
        for(var i = 0; i < tiles.length; i++){
           var tile = tiles[i];
           if(tile){
               var val = tilevalue(tile);
               var nexttile = tiles[ i + 1 ];
                if(nexttile && val == tilevalue(nexttile)){
                    //skip next tile;
                    i++;
                    newtiles.push({
                        id: nexttile.id, //keep id
                        values: tile.values.concat([val * 2])
                    });
                } else {
                    newtiles.push(tile);
                }
            }
        }
    }
    var newline = {};
    line.forEach(function(key, i){
        newline[key] = newtiles[i] || null;
    });
    return newline;
}

function foldorder(xs, ys, reversekeys){
    return xs.map(function(x){
        return ys.map(function(y){
            var key = [x,y];
            if(reversekeys){
                return key.reverse().join('');
            }
            return key.join('');
        });
    });
}

function foldboard(board, lines){
    //copy reference
    var newboard = board;
    lines.forEach(function(line){
        var newline = foldline(board, line);
        Object.keys(newline).forEach(function(key){
            //mutate reference while building up board
            newboard = settile(newboard, key, newline[key]);
        });
    });
    return newboard;
}

var tilecounter = 0;
function newtile(initial){
    return {
        id: tilecounter++,
        values: [initial]
    };
}

function settile(board, where, tile){
    //do not destory the old board
    var newboard = {};
    Object.keys(board).forEach(function(key, i){
        //copy by reference for structual sharing
        newboard[key] = (key == where) ? tile : board[key];
    });
    return newboard;
}

var left = foldorder(['a','b','c','d'], ['1','2','3','4'], false);
var right = foldorder(['a','b','c','d'], ['4','3','2','1'], false);
var up = foldorder(['1','2','3','4'], ['a','b','c','d'], true);
var down = foldorder( ['1','2','3','4'], ['d','c','b','a'], true);

var GameBoard = React.createClass({
    getInitialState: function(){
        return this.addTile(this.addTile(initialboard));
    },
    keyHandler:function(e){
        var directions = {
            37: left,
            38: up,
            39: right,
            40: down
        };
        if(directions[e.keyCode]
        && this.setBoard(foldboard(this.state, directions[e.keyCode]))
        && Math.floor(Math.random() * 30, 0) > 0){
            setTimeout(function(){
                 this.setBoard(this.addTile(this.state));
            }.bind(this), 100);
        }
    },
    setBoard:function(newboard){
        if(!sameboard(this.state, newboard)){
            this.setState(newboard);
            return true;
        }
        return false;
    },
    addTile:function(board){
        var location = availablespaces(board).sort(function() {
          return .5 - Math.random();
        }).pop();
        if(location){
            var twoorfour = Math.floor(Math.random() * 2, 0) ? 2 : 4;
            return settile(board, location, newtile(twoorfour));
        }
        return board;
    },
    newGame:function(){
        this.setState(this.getInitialState());
    },
    componentDidMount:function(){
        window.addEventListener('keydown', this.keyHandler, false);
    },
    render:function(){
        var status = !canmove(this.state) ? ' - Game Over!' : '';
        return <div className="app">
            <span className="score">
                Score: {scoreboard(this.state)}{status}
            </span>
            <Tiles board={this.state}/>
            <button onClick={this.newGame}>New Game</button>
        </div>;
    }
});

var Tiles = React.createClass({
    render: function(){
        var board = this.props.board;
        //sort board keys first to stop re-ordering of DOM elements
        var tiles = usedspaces(board).sort(function(a, b) {
            return board[a].id - board[b].id;
        });
        return <div className="board">{
            tiles.map(function(key){
                var tile = board[key];
                var val = tilevalue(tile);
                return <span key={tile.id} className={key + ' value' + val}>
                        {val}
                       </span>;
        })}</div>;
    }
});

ReactDom.render(<GameBoard />, document.body);
