/**
 * Created by 30947 on 2018/7/18.
 */
$(function(){

    
    char2();


})


function char2() {

    var myChart = echarts.init($("#char2")[0]);

    option = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {show:'true',borderWidth:'0'},
        legend: {
            data:['在线', '离线','故障','维修'],
            textStyle : {
                color : '#ffffff',
				fontSize:10
            }
        },
		color:['rgba(58,224,52,0.5)','rgba(199,134,153,0.5)','rgba(27,159,255,0.5)','rgba(213,116,7,0.5)'],
        calculable :false,
        xAxis : [
            {
                type : 'value',
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
                splitLine:{
                    lineStyle:{
                        color:['#f2f2f2'],
                        width:0,
                        type:'solid'
                    }
                },
				axisTick:{
					  show:false//不显示坐标轴刻度线
				},
				axisLine: {
					  show: false,//不显示坐标轴线
				},
				axisLabel: {
					  show: false,//不显示坐标轴上的文字
				}
            }
        ],
        yAxis : [
            {
                type : 'category',
                data : ['设备'],
                axisLabel: {
                    show: false,
                    textStyle: {
                        color: '#fff'
                    }
                },
                splitLine:{
                    lineStyle:{
                        width:0,
                        type:'solid'
                    },
					show:false
                },
				axisTick:{
				    show: false
				},
				axisLine: { //轴线
				          show: false
				        },
            },

        ],
        series : [
            {
                name:'在线',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'insideRight'},borderWidth: 1,
				borderColor: '#3ae034'},
				},
				            
                data:[9340],
				barWidth : 20,
            },
            {
                name:'离线',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'insideRight'},borderWidth: 1,borderColor:'#778699'}},
                data:[100],
				barWidth : 20,
            },
            {
                name:'故障',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'insideRight'},borderWidth: 1,borderColor:'#1b9fff'}},
                data:[200],
				barWidth : 20,
            },
            {
                name:'维修',
                type:'bar',
                stack: '总量',
                itemStyle : { normal: {label : {show: true, position: 'insideRight'},borderWidth: 1,borderColor:'#e77407'}},
                data:[400],
				barWidth : 20,
            }

        ]
    };

    myChart.setOption(option);
    window.addEventListener('resize', function () {myChart.resize();})


}
