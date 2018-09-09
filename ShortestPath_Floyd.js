//所有节点的数量（包括建筑物和路口）
const vertex_num = length_a + length_b;

var DistanceMatrix = Matrix_Array;
var ShortestPathTable = [];

var isInit = false;

// function upload(input) {
//     var file = input.files[0];
//     var filename = file.name.split(".")[0];
//     var reader = new FileReader();
//     reader.onload = function() {
// 	    var data = [];
// 		data = reader.result.split(" ");
// 		init(data);
//         ShortestPath();
//         DisplayResult(DistanceMatrix);
//         DisplayResult(ShortestPathTable);
// 	}
//     reader.readAsText(file);
// }
// function init(data) {
//     var i = 0;
//     var j = 0;
// 	for (i = 0; i < vertex_num; i++) {
// 		ShortestPathTable[i] = new Array();
// 		for (j = 0; j < vertex_num; j++) {
// 		    ShortestPathTable[i][j] = j;
// 		}
// 	}
// 	for (i = 0; i < vertex_num; i++) {
// 		DistanceMatrix[i] = new Array();
// 		for (j = 0; j < vertex_num; j++) {
// 		    DistanceMatrix[i][j] = Number(data[i*vertex_num + j]);
// 		}
// 	}
// }

function p2p() {
    this.length = 0;
    this.path = [];
}

function init() {
    for (var i = 0; i < vertex_num; i++) {
        ShortestPathTable[i] = new Array();
        for (var j = 0; j < vertex_num; j++) {
            ShortestPathTable[i][j] = j;
        }
    }
}

function ShortestPath() {
    for (var k = 0; k < vertex_num; k++) {
        for (var v = 0; v < vertex_num; v++) {
            for (var w = 0; w < vertex_num; w++) {
                if (DistanceMatrix[v][w] > DistanceMatrix[v][k] + DistanceMatrix[k][w]) {
                    DistanceMatrix[v][w] = DistanceMatrix[v][k] + DistanceMatrix[k][w];
                    ShortestPathTable[v][w] = ShortestPathTable[v][k];
                }
            }
        }
    }
}

function display(matrix) {
    for (var i = 0; i < vertex_num; i++) {
        for (var j = 0; j < vertex_num; j++) {
            document.getElementById("demo").innerHTML += matrix[i][j] + " ";
        }
        document.getElementById("demo").innerHTML += "<br />";
    }
    document.getElementById("demo").innerHTML += "<br />";
}

/*

    前端调用, 需要传入 route 参数
    例如: [起点id, 终点id]
    返回值为 {length: xxx, path: [...]}

*/
function pointTopoint(route) {
    var come_out = new p2p();
    //计算两点间的最短距离
    come_out.length = DistanceMatrix[route[0]-1][route[1]-1];
    //统计最短路径经过的节点
    come_out.path[0] = route[0];
    var v = 1;
    var w = route[1]-1;
    var k = ShortestPathTable[route[0]-1][route[1]-1];
    while (k != w) {
        if (k>=0 && k<=length_a-1) {
            come_out.path[v] = k+1;
        }
        else {
            come_out.path[v] = k+100-length_a;
        }
        v++;
        k = ShortestPathTable[k][w];
    }
    come_out.path[v] = route[1];
    return come_out;
}

function ShortestPath_Floyd() {
    if (!isInit) {
        init();
        ShortestPath();
        isInit = true;
    }
}