//Mapkob链长
const LENGTH_Mapkob = 500;

//退火速度
const SPEED = 0.98;

//初始温度
const INITIAL_TEMPERATURE = 1000.0;

//最低温度
const MIN_TEMPERATURE = 0.001;

//最大整数 (2^32-1)
const MAX_INT = 4294967295;

/*

	CreateNewGraph函数
		LocationList: 用户想去的建筑物id列表
		matrix: 图的邻接矩阵

*/
function CreateNewGraph(LocationList) {
	var LocationList_length = LocationList.length;
	var G = new Graph(LocationList_length, LocationList, DistanceMatrix);
	return G;
}

/*

	Graph对象的构造函数
		vertex_number: 顶点数量
		vertexs: 顶点列表
		arcs: 图的邻接矩阵存储

*/
function Graph(vertex_number, vertexs, arcs) {
	this.vertex_number = vertex_number;
	this.vertexs = vertexs;
	this.arcs = arcs;
}

/*

	TSP_solution对象的构造函数

*/
function TSP_solution() {
	this.length_path = 0;
	this.path = [];
}

/*

	模拟退火算法, 返回值为一个 TSP_solution 对象 (近似全局最优解)
		G: Graph 对象

*/
function SA(G) {
	var max = G.vertex_number-2;
	var min = 1;
	var temp = [];
	//当前温度
	var Current_Temperature = INITIAL_TEMPERATURE;
	//最优解
	var Best_solution = new TSP_solution();
	Best_solution.length_path = MAX_INT;
	//初始化最优解的路径
	for (var i = 0; i < G.vertex_number; i++) {
		Best_solution.path[i] = G.vertexs[i];
	}
	// Best_solution.path[G.vertex_number] = G.vertexs[0];
	//随机排列 Best_solution.path[1] ~ Best_solution.path[G.vertex_number-1]
	for (var i = 0; i < G.vertex_number-1; i++) {
		temp[i] = Best_solution.path[i];
		if (i != 0) {
			Best_solution.path[i] = 0;
		}
	}
	var i = 1;
	while (i != G.vertex_number-1) {
		//index的取值范围为 [1, G.vertex_number-2]
		var index = Math.floor(Math.random()*(max-min+1)+min);
		if (Best_solution.path[index] == 0) {
			Best_solution.path[index] = temp[i];
			i++;
		}
	}
	//当前解, 用于与最优解的比较
	var Current_solution = null;
	//模拟退火过程
	while (MIN_TEMPERATURE < Current_Temperature) {
		//满足迭代次数
		for (var i = 0; i < LENGTH_Mapkob; i++) {
			Current_solution = FindNewSolution(G, Best_solution);
			//接受新的最优解
			if (Current_solution.length_path <= Best_solution.length_path) {
				Best_solution = Current_solution;
			}
			else {
				//根据 Metropolis 原则判断是否接受恶化解
				if (Math.floor(Math.exp((Best_solution.length_path-Current_solution.length_path)/Current_Temperature))*100 > (Math.floor(Math.random()*(MAX_INT+1))*101)) {
					Best_solution = Current_solution;
				}
			}
		}
		//按 SPEED 速率退火
		Current_Temperature *= SPEED;
	}
	//返回最优解
	return Best_solution;
}

/*

	函数功能: 根据当前最优解查找新的解. 根据当前传入的 G(Graph对象) 以及 bestSolution(TSP_solution对象) 产生新的解.
	注意:不得在该函数内修改 bestSolution 对象!

*/
function FindNewSolution(G, bestSolution) {
	//构造 bs(TSP_solution), 令其与传入的 bestSolution 相同
	var bs = new TSP_solution();
	bs.length_path = bestSolution.length_path;
	for (var m = 0; m < G.vertex_number; m++) {
		bs.path[m] = bestSolution.path[m];
	}
	//构造新的解, 作为函数最后的返回值
	var newSolution = null;
	//i和j的取值范围为 [1, G.vertex_number-2]
	var i = Math.floor(Math.random()*(G.vertex_number-2)+1);
	var j = Math.floor(Math.random()*(G.vertex_number-2)+1);
	if (i > j) {
		var temp = i;
		i = j;
		j = temp;
	}
	else {
		//产生的随机数没有改变的作用
		if (i == j) {
			if (bs.path.length == 3) {
				newSolution = bs;
				newSolution.length_path = CalculateLength(G, newSolution);
				return newSolution;
			}
			newSolution = bs;
			return newSolution;
		}
	}
	//choice 的取值可能为: 0, 1, 2
	var choice = Math.floor(Math.random()*3);
	if (choice == 0) {
		//交换任意两个地点的位置
		var temp = bs.path[i];
		bs.path[i] = bs.path[j];
		bs.path[j] = temp;
	} else if (choice == 1) {
		//逆置地点列表的顺序
		var reverse_array = [];
		for (var x = i, y = 0; x < j; x++, y++) {
			reverse_array[y] = bs.path[x];
		}
		var newPathArray = reverse_array.reverse();
		for (var x = i, y = 0; x < j; x++, y++) {
			bs.path[x] = newPathArray[y];
		}
	} else {
		//改变地点列表的顺序
		//处理边界情况
		if (j+1 == G.vertex_number-1) {
			newSolution = bs;
			return newSolution;
		}
		var temp = bs.path[j];
		for (var x = j-1; x > i-1; x--) {
			bs.path[x+1] = bs.path[x];
		}
		bs.path[i] = temp;
	}
	newSolution = bs;
	newSolution.length_path = CalculateLength(G, newSolution);
	return newSolution;
}

/*

	计算路径长度的函数
		G (Graph对象)
		newSolution (TSP_solution对象)

*/
function CalculateLength(G, newSolution) {
	var length = 0;
	for (var i = 0; i < G.vertex_number-1; i++) {
		var startPlace = newSolution.path[i];  //起点
		var endPlace = newSolution.path[i+1];  //终点
		if (G.arcs[startPlace-1][endPlace-1] == MAX_INT) {
			return MAX_INT;
		}
		else {
			length += G.arcs[startPlace-1][endPlace-1];
		}
	}
	return length;
}

function DisplayResult(G, bestSolution) {
	for (var i = 0; i < G.vertex_number-1; i++) {
		document.getElementById("demo").innerHTML += bestSolution.path[i] + "-->";
	}
	document.getElementById("demo").innerHTML += bestSolution.path[G.vertex_number-1] + "<br />";
	document.getElementById("demo").innerHTML += bestSolution.length_path + "<br />";
}

/*

	前端调用, 返回值为一个 TSP_solution 对象 (近似全局最优解)
	注意: 调用时需传入地点列表以及图的邻接矩阵

*/
function TSP_SA(locationList) {
	var G = CreateNewGraph(locationList);
	var bestSolution = SA(G);
	//DisplayResult(G, bestSolution);
	return bestSolution;
}