var map = new AMap.Map('container', {
    resizeEnable: true,
    center: [116.635057, 23.411848],
    zoom: 16
});

map.clearMap(); // 清除地图覆盖物

//获取经纬https://lbs.amap.com/api/javascript-api/example/map/click-to-get-lnglat

var markers_build = [{
    // icon: '',
    id: 1,
    position: [116.638111, 23.408676],
    name: '正门1'
}, {
    // icon: '',
    id: 2,
    position: [116.637773, 23.408706],
    name: '正门2'
}, {
    // icon: '',
    id: 3,
    position: [116.636545, 23.410104],
    name: '真理钟'
}, {
    // icon: '',
    id: 4,
    position: [116.635622, 23.410586],
    name: '图书馆前'
}, {
    // icon: '',
    id: 5,
    position: [116.634721, 23.409927],
    name: '图书馆后'
}, {
    // icon: '',
    id: 6,
    position: [116.6339, 23.409868],
    name: '医学院前'
}, {
    // icon: '',
    id: 7,
    position: [116.632731, 23.409878],
    name: '医学院后'
}, {
    // icon: '',
    id: 8,
    position: [116.639184, 23.408471],
    name: '新体育馆1'
}, {
    // icon: '',
    id: 9,
    position: [116.633412, 23.410385],
    name: '弘毅书院'
}, {
    // icon: '',
    id: 10,
    position: [116.631904, 23.409823],
    name: '汕大附中'
}, {
    // icon: '',
    id: 11,
    position: [116.629104, 23.410468],
    name: '思源书院'
}, {
    // icon: '',
    id: 12,
    position: [116.628568, 23.410739],
    name: '知行书院'
}, {
    // icon: '',
    id: 13,
    position: [116.628691, 23.410611],
    name: '西苑餐厅'
}, {
    // icon: '',
    id: 14,
    position: [116.636164, 23.411793],
    name: 'E座教学楼'
}, {
    // icon: '',
    id: 15,
    position: [116.638041, 23.410907],
    name: '东门/美食/超市'
}, {
    // icon: '',
    id: 16,
    position: [116.637473, 23.411852],
    name: '第四饭堂/鸿泰'
}, {
    // icon: '',
    id: 17,
    position: [116.638004, 23.412378],
    name: 'G座宿舍/德馨'
}, {
    // icon: '',
    id: 18,
    position: [116.636486, 23.41293],
    name: 'DG座教学楼'
}, {
    // icon: '',
    id: 19,
    position: [116.63744, 23.412772],
    name: 'C座教学楼'
}, {
    // icon: '',
    id: 20,
    position: [116.634973, 23.411965],
    name: '校训碑'
}, {
    // icon: '',
    id: 21,
    position: [116.638299, 23.411512],
    name: '至诚书院/J座宿舍'
}, {
    // icon: '',
    id: 22,
    position: [116.637467, 23.412891],
    name: '气膜篮球馆'
}, {
    // icon: '',
    id: 23,
    position: [116.636947, 23.413068],
    name: '实验室'
}, {
    // icon: '',
    id: 24,
    position: [116.63397, 23.414751],
    name: '科技楼/机电楼'
}, {
    // icon: '',
    id: 25,
    position: [116.63331, 23.414874],
    name: '二三饭堂'
}, {
    // icon: '',
    id: 26,
    position: [116.632087, 23.415233],
    name: 'ABCD宿舍/修远敬一'
}, {
    // icon: '',
    id: 27,
    position: [116.633632, 23.415499],
    name: '研究生宿舍'
}, {
    // icon: '',
    id: 28,
    position: [116.631293, 23.41608],
    name: 'EF宿舍/明德'
}, {
    // icon: '',
    id: 29,
    position: [116.630252, 23.41784],
    name: '长江艺术学院'
}, {
    // icon: '',
    id: 30,
    position: [116.631427, 23.415643],
    name: '旧体育馆'
}, {
    // icon: '',
    id: 31,
    position: [116.6339, 23.412511],
    name: '大礼堂'
}, {
    // icon: '',
    id: 32,
    position: [116.63059, 23.41393],
    name: '789楼'
}, {
    // icon: '',
    id: 33,
    position: [116.630059, 23.414325],
    name: '校医院'
}, {
    // icon: '',
    id: 34,
    position: [116.63022, 23.414734],
    name: '露天泳池'
}, {
    // icon: '',
    id: 35,
    position: [116.63345, 23.413892],
    name: '新行政楼'
}, {
    // icon: '',
    id: 36,
    position: [116.635064, 23.412967],
    name: '旧行政楼'
}, {
    // icon: '',
    id: 37,
    position: [116.634077, 23.41337],
    name: '文科楼'
}, {
    // icon: '',
    id: 38,
    position: [116.635869, 23.412891],
    name: '工科楼'
}, {
    // icon: '',
    id: 39,
    position: [116.635359, 23.414458],
    name: '理学院'
}, {
    // icon: '',
    id: 40,
    position: [116.632704, 23.41357],
    name: '篮球场/羽毛球场/网球场'
}, {
    // icon: '',
    id: 41,
    position: [116.63066, 23.414121],
    name: '田径场'
}];

var markers_cs = [{
    id: 100,
    position: [116.629287, 23.410105]
}, {
    id: 101,
    position: [116.632757, 23.41011]
}, {
    id: 102,
    position: [116.633573, 23.410553]
}, {
    id: 103,
    position: [116.631674, 23.412821]
}, {
    id: 104,
    position: [116.63383, 23.410784]
}, {
    id: 105,
    position: [116.635901, 23.410829]
}, {
    id: 106,
    position: [116.634908, 23.411641]
}, {
    id: 107,
    position: [116.63456, 23.410056]
}, {
    id: 108,
    position: [116.634281, 23.412758]
}, {
    id: 109,
    position: [116.635686, 23.412419]
}, {
    id: 110,
    position: [116.637768, 23.411153]
}, {
    id: 111,
    position: [116.630322, 23.414609]
}, {
    id: 112,
    position: [116.630896, 23.416608]
}, {
    id: 113,
    position: [116.631051, 23.417302]
}, {
    id: 114,
    position: [116.634147, 23.415869]
}, {
    id: 115,
    position: [116.632934, 23.413753]
}, {
    id: 116,
    position: [116.632291, 23.414988]
}, {
    id: 117,
    position: [116.633562, 23.414806]
}, {
    id: 118,
    position: [116.636507, 23.413136]
}, {
    id: 119,
    position: [116.63788, 23.411605]
}, {
    id: 120,
    position: [116.635971, 23.411463]
}, {
    id: 121,
    position: [116.636244, 23.411409]
}, {
    id: 122,
    position: [116.633991, 23.413038]
}, {
    id: 123,
    position: [116.634533, 23.414623]
}, {
    id: 124,
    position: [116.638229, 23.408973]
}, {
    id: 125,
    position: [116.637499, 23.409977]
}, {
    id: 126,
    position: [116.636523, 23.413536]
}, {
    id: 127,
    position: [116.635879, 23.414393]
}, {
    id: 128,
    position: [116.633203, 23.416982]
}, {
    id: 129,
    position: [116.629657, 23.415584]
}, {
    id: 130,
    position: [116.629903, 23.4098]
}, {
    id: 131,
    position: [116.63751, 23.412133]
}, {
    id: 132,
    position: [116.637896, 23.412084]
}, {
    id: 133,
    position: [116.637403, 23.412596]
}];

var lineArr = [{
    id: 1,
    block: 0, //是不是阻塞路段不可通行
    line: [markers_build[0].position,
        markers_build[1].position
    ],
    point1: 1, //build数组位置+1
    point2: 2 //cs数组位置+100
}, {
    id: 2,
    line: [markers_build[1].position,
        markers_build[2].position
    ],
    point1: 2,
    point2: 3
}, {
    id: 3,
    line: [markers_build[3].position,
        markers_build[4].position
    ],
    point1: 4,
    point2: 5
}, {
    id: 4,
    line: [markers_build[4].position,
        markers_build[5].position
    ],
    point1: 5,
    point2: 6
}, {
    id: 5,
    line: [markers_build[5].position,
        markers_build[6].position
    ],
    point1: 6,
    point2: 7
}, {
    id: 6,
    line: [markers_build[10].position,
        markers_build[12].position
    ],
    point1: 11,
    point2: 13
}, {
    id: 7,
    line: [markers_build[11].position,
        markers_build[12].position
    ],
    point1: 12,
    point2: 13
}, {
    id: 8,
    line: [markers_build[18].position,
        markers_build[21].position
    ],
    point1: 19,
    point2: 22
}, {
    id: 9,
    line: [markers_build[21].position,
        markers_build[22].position
    ],
    point1: 22,
    point2: 23
}, {
    id: 10,
    line: [markers_build[24].position,
        markers_build[26].position
    ],
    point1: 25,
    point2: 27
}, {
    id: 11,
    line: [markers_build[24].position,
        markers_build[34].position
    ],
    point1: 25,
    point2: 35
}, {
    id: 12,
    line: [markers_build[25].position,
        markers_build[27].position
    ],
    point1: 26,
    point2: 28
}, {
    id: 13,
    line: [markers_build[25].position,
        markers_build[29].position
    ],
    point1: 26,
    point2: 30
}, {
    id: 14,
    line: [markers_build[27].position,
        markers_build[29].position
    ],
    point1: 28,
    point2: 30
}, {
    id: 15,
    line: [markers_build[31].position,
        markers_build[40].position
    ],
    point1: 32,
    point2: 41
}, {
    id: 16,
    line: [markers_build[33].position,
        markers_cs[11].position
    ],
    point1: 34,
    point2: 111
}, {
    id: 17,
    line: [markers_build[34].position,
        markers_build[36].position
    ],
    point1: 35,
    point2: 37
}, {
    id: 18,
    line: [markers_build[34].position,
        markers_build[39].position
    ],
    point1: 35,
    point2: 40
}, {
    id: 19,
    line: [markers_build[35].position,
        markers_build[36].position
    ],
    point1: 36,
    point2: 37
}, {
    id: 20,
    line: [markers_build[35].position,
        markers_build[37].position
    ],
    point1: 36,
    point2: 38
}, {
    id: 21,
    line: [markers_build[36].position,
        markers_build[37].position
    ],
    point1: 37,
    point2: 38
}, {
    id: 22,
    line: [markers_build[0].position,
        markers_cs[24].position,
    ],
    point1: 1,
    point2: 124
}, {
    id: 23,
    line: [markers_build[2].position,
        markers_cs[5].position
    ],
    point1: 3,
    point2: 105
}, {
    id: 24,
    line: [markers_build[2].position,
        markers_cs[25].position
    ],
    point1: 3,
    point2: 125
}, {
    id: 25,
    line: [markers_build[3].position,
        markers_cs[5].position,
    ],
    point1: 4,
    point2: 105
}, {
    id: 26,
    line: [markers_build[4].position,
        markers_cs[7].position
    ],
    point1: 5,
    point2: 107
}, {
    id: 27,
    line: [markers_build[5].position,
        markers_cs[2].position
    ],
    point1: 6,
    point2: 102
}, {
    id: 28,
    line: [markers_build[6].position,
        markers_cs[1].position
    ],
    point1: 7,
    point2: 101
}, {
    id: 29,
    line: [markers_cs[24].position,
        markers_build[7].position
    ],
    point1: 124,
    point2: 8
}, {
    id: 30,
    line: [markers_build[8].position,
        markers_cs[1].position
    ],
    point1: 9,
    point2: 101
}, {
    id: 31,
    line: [markers_build[8].position,
        markers_cs[2].position
    ],
    point1: 9,
    point2: 102
}, {
    id: 32,
    line: [markers_build[9].position,
        markers_cs[1].position
    ],
    point1: 10,
    point2: 101
}, {
    id: 33,
    line: [markers_build[9].position,
        markers_cs[30].position
    ],
    point1: 10,
    point2: 130
}, {
    id: 34,
    line: [markers_build[10].position,
        markers_cs[0].position
    ],
    point1: 11,
    point2: 100
}, {
    id: 35,
    line: [markers_build[12].position,
        markers_cs[0].position
    ],
    point1: 13,
    point2: 100
}, {
    id: 36,
    line: [markers_build[13].position,
        markers_cs[21].position
    ],
    point1: 14,
    point2: 121
}, {
    id: 37,
    line: [markers_build[13].position,
        markers_cs[20].position
    ],
    point1: 14,
    point2: 120
}, {
    id: 38,
    line: [markers_build[13].position,
        markers_cs[9].position
    ],
    point1: 14,
    point2: 109
}, {
    id: 39,
    line: [markers_build[14].position,
        markers_cs[10].position
    ],
    point1: 15,
    point2: 110
}, {
    id: 40,
    line: [markers_build[15].position,
        markers_build[16].position
    ],
    point1: 16,
    point2: 17
}, {
    id: 41,
    line: [markers_build[15].position,
        markers_cs[19].position
    ],
    point1: 16,
    point2: 119
}, {
    id: 42,
    line: [markers_cs[6].position,
        markers_cs[7].position
    ],
    point1: 106,
    point2: 107
}, {
    id: 43,
    line: [markers_build[16].position,
        markers_build[18].position
    ],
    point1: 17,
    point2: 19
}, {
    id: 44,
    line: [markers_build[17].position,
        markers_cs[9].position
    ],
    point1: 18,
    point2: 109
}, {
    id: 45,
    line: [markers_build[17].position,
        markers_cs[18].position
    ],
    point1: 18,
    point2: 118
}, {
    id: 46,
    line: [markers_build[19].position,
        markers_cs[6].position
    ],
    point1: 20,
    point2: 106
}, {
    id: 47,
    line: [markers_build[19].position,
        markers_cs[8].position
    ],
    point1: 20,
    point2: 108
}, {
    id: 48,
    line: [markers_build[19].position,
        markers_cs[9].position
    ],
    point1: 20,
    point2: 109
}, {
    id: 49,
    line: [markers_build[20].position,
        markers_cs[19].position
    ],
    point1: 21,
    point2: 119
}, {
    id: 50,
    line: [markers_build[22].position,
        markers_cs[18].position,
    ],
    point1: 23,
    point2: 118
}, {
    id: 51,
    line: [markers_build[23].position,
        markers_cs[23].position
    ],
    point1: 24,
    point2: 123
}, {
    id: 52,
    line: [markers_build[23].position,
        markers_cs[17].position
    ],
    point1: 24,
    point2: 117
}, {
    id: 53,
    line: [markers_build[24].position,
        markers_cs[17].position
    ],
    point1: 25,
    point2: 117
}, {
    id: 54,
    line: [markers_build[24].position,
        markers_cs[16].position
    ],
    point1: 25,
    point2: 116
}, {
    id: 55,
    line: [markers_build[25].position,
        markers_cs[16].position
    ],
    point1: 26,
    point2: 116
}, {
    id: 56,
    line: [markers_build[26].position,
        markers_cs[14].position
    ],
    point1: 27,
    point2: 114
}, {
    id: 57,
    line: [markers_build[27].position,
        markers_cs[12].position
    ],
    point1: 28,
    point2: 112
}, {
    id: 58,
    line: [markers_build[28].position,
        markers_cs[13].position
    ],
    point1: 29,
    point2: 113
}, {
    id: 59,
    line: [markers_build[30].position,
        markers_cs[8].position
    ],
    point1: 31,
    point2: 108
}, {
    id: 60,
    line: [markers_build[32].position,
        markers_cs[11].position
    ],
    point1: 33,
    point2: 111
}, {
    id: 61,
    line: [markers_build[33].position,
        markers_cs[29].position
    ],
    point1: 34,
    point2: 129
}, {
    id: 62,
    line: [markers_build[34].position,
        markers_cs[16].position
    ],
    point1: 35,
    point2: 116
}, {
    id: 63,
    line: [markers_build[34].position,
        markers_cs[22].position
    ],
    point1: 35,
    point2: 122
}, {
    id: 64,
    line: [markers_build[35].position,
        markers_cs[9].position
    ],
    point1: 36,
    point2: 109
}, {
    id: 65,
    line: [markers_build[35].position,
        markers_cs[8].position
    ],
    point1: 36,
    point2: 108
}, {
    id: 66,
    line: [markers_build[36].position,
        markers_cs[22].position
    ],
    point1: 37,
    point2: 122
}, {
    id: 67,
    line: [markers_build[37].position,
        markers_cs[9].position
    ],
    point1: 38,
    point2: 109
}, {
    id: 68,
    line: [markers_build[38].position,
        markers_cs[23].position
    ],
    point1: 39,
    point2: 123
}, {
    id: 69,
    line: [markers_build[38].position,
        markers_cs[27].position
    ],
    point1: 39,
    point2: 127
}, {
    id: 70,
    line: [markers_build[38].position,
        markers_cs[14].position
    ],
    point1: 39,
    point2: 114
}, {
    id: 71,
    line: [markers_build[39].position,
        markers_cs[3].position
    ],
    point1: 40,
    point2: 103
}, {
    id: 72,
    line: [markers_build[39].position,
        markers_cs[16].position
    ],
    point1: 40,
    point2: 116
}, {
    id: 73,
    line: [markers_build[40].position,
        markers_cs[3].position
    ],
    point1: 41,
    point2: 103
}, {
    id: 74,
    line: [markers_build[40].position,
        markers_cs[11].position
    ],
    point1: 41,
    point2: 111
}, {
    id: 75,
    line: [markers_cs[2].position,
        markers_cs[4].position
    ],
    point1: 102,
    point2: 104
}, {
    id: 76,
    line: [markers_cs[3].position,
        markers_cs[4].position
    ],
    point1: 103,
    point2: 104
}, {
    id: 77,
    line: [markers_cs[4].position,
        markers_cs[6].position
    ],
    point1: 104,
    point2: 106
}, {
    id: 78,
    line: [markers_cs[4].position,
        markers_cs[7].position
    ],
    point1: 104,
    point2: 107
}, {
    id: 79,
    line: [markers_cs[5].position,
        markers_cs[6].position
    ],
    point1: 105,
    point2: 106
}, {
    id: 80,
    line: [markers_cs[6].position,
        markers_cs[20].position
    ],
    point1: 106,
    point2: 120
}, {
    id: 81,
    line: [markers_cs[8].position,
        markers_cs[22].position
    ],
    point1: 108,
    point2: 122
}, {
    id: 82,
    line: [markers_cs[10].position,
        markers_cs[19].position
    ],
    point1: 110,
    point2: 119
}, {
    id: 83,
    line: [markers_cs[10].position,
        markers_cs[21].position
    ],
    point1: 110,
    point2: 121
}, {
    id: 84,
    line: [markers_cs[10].position,
        markers_cs[25].position
    ],
    point1: 110,
    point2: 125
}, {
    id: 85,
    line: [markers_cs[12].position,
        markers_cs[13].position
    ],
    point1: 112,
    point2: 113
}, {
    id: 86,
    line: [markers_cs[12].position,
        markers_cs[29].position
    ],
    point1: 112,
    point2: 129
}, {
    id: 87,
    line: [markers_cs[13].position,
        markers_cs[28].position
    ],
    point1: 113,
    point2: 128
}, {
    id: 88,
    line: [markers_cs[14].position,
        markers_cs[28].position
    ],
    point1: 114,
    point2: 128
}, {
    id: 89,
    line: [markers_cs[18].position,
        markers_cs[26].position
    ],
    point1: 118,
    point2: 126
}, {
    id: 90,
    line: [markers_cs[20].position,
        markers_cs[21].position
    ],
    point1: 120,
    point2: 121
}, {
    id: 91,
    line: [markers_cs[24].position,
        markers_cs[25].position
    ],
    point1: 124,
    point2: 125
}, {
    id: 92,
    line: [markers_cs[26].position,
        markers_cs[27].position
    ],
    point1: 126,
    point2: 127
}, {
    id: 93,
    line: [markers_cs[30].position,
        markers_cs[0].position
    ],
    point1: 130,
    point2: 100
}];

// var G_A;

// 地图点
// markers_build.forEach(function (marker) {
//     var a = new AMap.Marker({
//         map: map,
//         icon: marker.icon,
//         position: [marker.position[0], marker.position[1]],
//         //offset: new AMap.Pixel(-12, -36),
//         title: marker.name,
//         id: marker.id
//     });
//     a.setLabel({
//         offset: new AMap.Pixel(0, -5),
//         content: marker.name.toString()
//     });
//     // a.on('click', (e) => {
//     //     console.log("title: >>> ", e.target.B.title)
//     //     console.log("id: >>> ", e.target.B.id)
//     // })
//     // G_A = a;
// });
/*
// 辅助点
markers_cs.forEach(function (marker) {
    var text = new AMap.Text({
        text: marker.id.toString(),
        textAlign: 'center', // 'left' 'right', 'center',
        verticalAlign: 'middle', //middle 、bottom
        cursor: 'pointer',
        angle: 10,
        style: {
            'background-color': 'white',
            'padding': '5px 5px'
        },
        position: marker.position
    });
    text.setMap(map);
});
*/

var length_a = markers_build.length;
var length_b = markers_cs.length;

var Matrix_Array = new Array();
for (var k = 0; k < (length_a + length_b); k++) {
    Matrix_Array[k] = new Array();
    for (var j = 0; j < (length_a + length_b); j++) {
        if (k == j) {
            Matrix_Array[k][j] = 0;
        }
        else {
            Matrix_Array[k][j] = 4294967295;
        }
    }
}

// var jz = [{
//     mark1: markers_cs[0].position,
//     mark2: markers_cs[1].position,
//     length: 0.0
// }];

var i = ox = oy = 0;
lineArr.forEach(function (Line) {
    // var jzz = {
    //     mark1: Line.line[0],
    //     mark2: Line.line[1],
    //     length: getDisance(Line.line[0][0], Line.line[0][1], Line.line[1][0], Line.line[1][1])
    // };
    if(Line.point1 < 100){
        ox = Line.point1 - 1;
    }else{
        ox = Line.point1 - 100 + length_a;
    }
    if (Line.point2 < 100) {
        oy = Line.point2 - 1;
    } else {
        oy = Line.point2 - 100 + length_a;
    }
    if(!Line.block){
        Matrix_Array[ox][oy] = getDisance(Line.line[0][0], Line.line[0][1], Line.line[1][0], Line.line[1][1]);
        Matrix_Array[oy][ox] = getDisance(Line.line[0][0], Line.line[0][1], Line.line[1][0], Line.line[1][1]);
    }
    // jz[i] = jzz;
    // i++;
    // var polyline = new AMap.Polyline({
    //     map: map,
    //     path: Line.line, // 设置线覆盖物路径
    //     strokeColor: '#3366FF', // 线颜色
    //     strokeOpacity: 1, // 线透明度
    //     strokeWeight: 4, // 线宽
    //     strokeStyle: 'solid', // 线样式
    //     strokeDasharray: [10, 5], // 补充线样式
    //     geodesic: true // 绘制大地线
    // });
});

var num = 0;
for (var k = 0; k < (length_a + length_b); k++) {
    for (var j = 0; j < (length_a + length_b); j++) {
        if (Matrix_Array[k][j] != 4294967295 && Matrix_Array[k][j] != 0) {
            num++;
        }
    }
}

// console.log(Matrix_Array); //矩阵
// console.log(num);

function toRad(d) {
    return d*Math.PI/180;
}

function getDisance(lng1, lat1, lng2, lat2) {
    var dis = 0;
    var radLat1 = toRad(lat1);
    var radLat2 = toRad(lat2);
    var deltaLat = radLat1-radLat2;
    var deltaLng = toRad(lng1)-toRad(lng2);
    var dis = 2*Math.asin(Math.sqrt(Math.pow(Math.sin(deltaLat/2), 2)+Math.cos(radLat1)*Math.cos(radLat2)*Math.pow(Math.sin(deltaLng/2), 2)));
    return dis*6378137;
}

function DrawLine(lineID) {
    var line = [];
    for (var i = 0; i < lineID.length; i++) {
        if (lineID[i] <= length_a) {
            line[i] = markers_build[lineID[i]-1].position;
        }
        else {
            line[i] = markers_cs[lineID[i]-100].position;
        }
    }
    //console.log(line);
    var polyline = new AMap.Polyline({
        map: map,
        path: line, // 设置线覆盖物路径
        strokeColor: '#3366FF', // 线颜色
        strokeOpacity: 1, // 线透明度
        strokeWeight: 4, // 线宽
        strokeStyle: 'solid', // 线样式
        showDir: true,
        strokeDasharray: [10, 5], // 补充线样式
        geodesic: true // 绘制大地线
    });
}