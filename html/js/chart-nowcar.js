$(function(){

Highcharts.setOptions({
    global: {
        useUTC: false
    }
});
function activeLastPointToolip(chart) {
    var points = chart.series[0].points;
    chart.tooltip.refresh(points[points.length -1]);
}
$('#chart-nowcar').highcharts({
    chart: {
        type: 'spline',
		backgroundColor: 'rgba(0,0,0,0)',
        // backgroundColor: 'dark',
        animation: Highcharts.svg, // don't animate in old IE
        marginRight: 10,
        events: {
            load: function () {
                // set up the updating of the chart each second
                var series = this.series[0],
                    chart = this;
                setInterval(function () {
                    var x = (new Date()).getTime(), // current time
                    y = Math.round(Math.random()*100);
                    series.addPoint([x, y], true, true);
                    activeLastPointToolip(chart)
                }, 100000);
            }
        }
    },
    title: {
        text: '违法实时数据',
        style:{ "color": "white", "fontSize": "0px" },
    },
    xAxis: {
        type: 'datetime',
        tickPixelInterval: 150,
		labels:{
			style:{
				color:"#ffffff"
			}
		}
    },
    yAxis: {
        max: 200,
        title: {
            text: '消息数',
			style:{
				color:'#ffffff'
			}
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#ffffff'
        }],
		labels:{
			style:{
				color:"#ffffff"
			}
		}
    },
    tooltip: {
        // formatter: function () {
        //     return '<b>' + this.series.name + '</b><br/>' +
        //         Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
        //         Highcharts.numberFormat(this.y, 2);
        // },
		formatter: function () {
		    return '<b>'  + '</b><br/>' +
		         '<br/>' +
		        Highcharts.numberFormat(this.y, 0);
		},
		
    },
    legend: {
        enabled: false
    },
    exporting: {
        enabled: false
    },
    series: [{
        name: '消息数',
		marker:{
			symbol:"circle",
			fillColor:"white",
			radius:2
		},
        data: (function () {
            // generate an array of random data
            var data = [],
                time = (new Date()).getTime(),
                i;
            for (i = -19; i <= 0; i += 1) {
                data.push({
                    x: time + i * 1000,
                    y: Math.round(Math.random()*100)
                });
            }
            return data;
        }())
    }]
}, function(c) {
    activeLastPointToolip(c)
});
})