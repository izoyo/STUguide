// 创建一个vue实例
var addressBox = new Vue({
    el: '#addressBox',
    data: {
        buildings: markers_build, // 备选地点列表
        selectedPostion: [], // 已选择的地点对象
        showCandidate: true  // 控制候选框的显示与隐藏
    },
    watch: {
        selectedPostion: function () {
            map.clearMap();
            this.selectedPostion.forEach(function (marker) {
                var a = new AMap.Marker({
                    map: map,
                    icon: marker.icon,
                    position: [marker.position[0], marker.position[1]],
                    //offset: new AMap.Pixel(-12, -36),
                    title: marker.name,
                    id: marker.id
                }).setLabel({
                    offset: new AMap.Pixel(0, -5),
                    content: marker.name.toString()
                });
            })
        }
    }
})

// 路径长度
var __RoutesLength = 0;

/**
 * 根据用户点击的路径的顺序，生成对应的地点id数组
 * 然后调用相关函数进行处理
 */
function MakeRoutes() {
    // map.clearMap()
    ShortestPath_Floyd();   // 初始化弗洛伊德算法
    // 获取已选择的地点对象数组
    var selectedPostion = addressBox.selectedPostion;
    // 获取已选择的地点Id
    var locationIds = [];
    for (let i in selectedPostion) {
        locationIds.push(selectedPostion[i].id);
    }
    // 根据所选地点生成最优路线
    if (locationIds.length == 2) {
        var dir = pointTopoint([Number(locationIds[0]), Number(locationIds[1])]);
        __RoutesLength = dir.length;
        console.log("dir.path >>> ", dir.path);
        DrawLine(dir.path);
        GetRoutesName(dir.path);
    }
    else {
        var dir = TSP_SA(locationIds);
        var wholePath = [];
        __RoutesLength = dir.length_path;
        for (var i = 0; i < dir.path.length-1; i++) {
            var part = pointTopoint([Number(dir.path[i]), Number(dir.path[i + 1])]);
            wholePath = wholePath.concat(part.path);
            if (i != dir.path.length-2) {
                wholePath.pop();
            }
        }
        console.log("whole path >>> ", wholePath);
        DrawLine(wholePath);
        GetRoutesName(wholePath);
    }
    addressBox.showCandidate = false;
}

/**
 * 获取途径路径的名字
 */
function GetRoutesName(RoutesPoints = []) { // 可以删除
    var names = [], selectedPostion = addressBox.selectedPostion;
    var tmpid;
    for (let i = 0; i < RoutesPoints.length; i++) {
        tmpid = RoutesPoints[i];
        if (tmpid > 50) {
            continue;
        }
        names.push(markers_build[tmpid - 1].name);
    }
    // console.log(names)  // 临时输出一下途经点的名称
    // 获取特定格式的字符串显示在网页中
    var tag1 = "<span class='main-place'>{{}}</span>", tag2 = "<span>{{}}</span>", str = "";
    var len = names.length;
    str += tag1.replace("{{}}", "总距离为 " + __RoutesLength.toFixed(2) + "米");
    str += "<br>";
    for (let i = 0; i < len; i++) {
        var tmp = names[i];
        if (selectedPostion.find(value => {return value.name === tmp})) {
            str += tag1.replace("{{}}", tmp);
        }
        else {
            str += tag2.replace("{{}}", tmp);
        }
        str += (i == len - 1 ? '' : ' --> ');
    }
    // console.log(str)
    var box = document.getElementById("idBox");
    box.innerHTML = str;
}

/**
 * 清空已选的路径
*/
function ClearSelected() {
    addressBox.selectedPostion = [];
    var box = document.getElementById("idBox");
    box.innerHTML = "";
    __RoutesLength = 0;
    __RoutesPoints = [];
    map.clearMap();
    addressBox.showCandidate = true;
}