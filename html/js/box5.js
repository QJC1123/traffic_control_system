var myChart = echarts.init(document.getElementById("box5"));
// let base = +new Date(2001, 1,1);
// let oneDay = 24 * 3600 * 680;
// let date = [];
// let data = [Math.random() * 300];
// for (let i = 1; i < 2000; i++) {
//   var now = new Date((base += oneDay));
//   date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
//   data.push(Math.round((Math.random() - 0.5) * 5 + data[i - 1]));
// }
// option = {
//   tooltip: {
//     trigger: 'axis',
//     position: function (pt) {
//       return [pt[0], '10%'];
//     }
//   },
//   title: {
//     left: 'center',
//     // text: 'Large Area Chart'
//   },
//   toolbox: {
//     feature: {
//       dataZoom: {
//         yAxisIndex: 'none'
//       },
//       restore: {},
//       saveAsImage: {}
//     }
//   },
//       textStyle:{//图例文字的样式
//                   color:'#fff',
//                   fontSize:12
//               },
//   xAxis: {
//     type: 'category',
//     boundaryGap: false,
//     data: date
//   },
//   yAxis: {
//     type: 'value',
//     boundaryGap: [0, '100%']
//   },
//   dataZoom: [
//     {
//       type: 'inside',
//       start: 0,
//       end: 10
//     },
//     {
//       start: 0,
//       end: 10
//     }
//   ],
//       grid: {
//         bottom: 80,
//   		left:45,
//   		top:30
//       },
//   series: [
//     {
//       name: '人流量',
//       type: 'line',
//       symbol: 'none',
//       sampling: 'lttb',
//       itemStyle: {
//         color: 'rgb(255, 70, 131)'
//       },
//       areaStyle: {
//         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
//           {
//             offset: 0,
//             color: 'rgb(255, 158, 68)'
//           },
//           {
//             offset: 1,
//             color: 'rgb(255, 70, 131)'
//           }
//         ])
//       },
//       data: data
//     }
//   ]
// };
// if (option && typeof option === "object") {
//     myChart.setOption(option, true);
// }

// var myChart = echarts.init(document.getElementById("box5"));
// // var app = {};
option = null;

var dataCount = 5e5;
var data = generateData(dataCount);

var option = {
    title: {
    	textStyle:{//图例文字的样式
                color:'#fff',
                fontSize:12
            },
        // text: echarts.format.addCommas(dataCount) + ' Data',
        left: 10
    },
    toolbox: {
        feature: {
            dataZoom: {
                yAxisIndex: false
            },
            saveAsImage: {
                pixelRatio: 2
            }
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        bottom: 70,
		left:45,
		top:30
    },
    dataZoom: [{
        type: 'inside',
    }, {
        type: 'slider',
		height:10
    }],
    textStyle:{//图例文字的样式
                color:'#fff',
                fontSize:12
            },
    xAxis: {
        data: data.categoryData,
        silent: false,
        splitLine: {
            show: false
        },
        splitArea: {
            show: false
        }
    },
    yAxis: {
        splitArea: {
            show: false
        }
    },
    series: [{
        type: 'bar',
        data: data.valueData,
        // Set `large` for large data amount
        large: true
    }]
};

function generateData(count) {
    var baseValue = Math.random() * 1000;
    var time = +new Date(2020, 0, 1);
    var smallBaseValue;

    function next(idx) {
        smallBaseValue = idx % 30 === 0
            ? Math.random() * 700
            : (smallBaseValue + Math.random() * 500 - 250);
        baseValue += Math.random() * 20 - 10;
        return Math.max(
            0,
            Math.round(baseValue + smallBaseValue) + 3000
        );
    }

    var categoryData = [];
    var valueData = [];

    for (var i = 0; i < count; i++) {
        categoryData.push(echarts.format.formatTime('yyyy-MM-dd\nhh:mm:ss', time));
        valueData.push(next(i).toFixed(2));
        time += 2000;
    }

    return {
        categoryData: categoryData,
        valueData: valueData
    };
}
;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}