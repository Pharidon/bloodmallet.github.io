Highcharts.chart('crucible_rogue_subtlety_patchwerk',
{
    chart: {
        type: "bar"
    },
    legend: {
        align: "right",
        backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
        borderColor: "#CCC",
        borderWidth: 1,
        floating: false,
        reversed: true,
        shadow: false,
        verticalAlign: "bottom",
        x: 0,
        y: 0
    },
    plotOptions: {
        bar: {
            dataLabels: {
                align: "right",
                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                enabled: false
            },
            point: {
                events: {
                    click: function (event) {                var chart = this.series.yAxis;                chart.removePlotLine('helperLine');                chart.addPlotLine({                    value: this.stackY,                    color: '#000',                    width: 2,                    id: 'helperLine',                    zIndex: 5,                    label: {                      text: this.series.name + ' ' + this.category,                      align: 'left',                      verticalAlign: 'bottom',                      rotation: 0,                      y: -5                    }                });              }
                }
            },
            stacking: "normal"
        },
        series: {
            borderColor: "#151515",
            events: {
                legendItemClick: function() { return false; }
            }
        }
    },
    series: [
        {
            color: "#343434",
            data: [
                0,
                0,
                21848,
                20747,
                18978,
                18370,
                0,
                17971,
                17455,
                17260,
                17034,
                15386,
                0,
                0,
                10601,
                0,
                9231,
                8190,
                0,
                0,
                6154,
                3077
            ],
            name: 1,
            showInLegend: false
        },
        {
            color: "#FFF569",
            data: [
                23675,
                22058,
                0,
                0,
                0,
                0,
                18155,
                0,
                0,
                0,
                0,
                0,
                11928,
                10723,
                0,
                9620,
                0,
                0,
                7395,
                6300,
                0,
                0
            ],
            name: 1,
            showInLegend: false
        }
    ],
    subtitle: {
        text: "UTC 2018-01-31 11:53 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/0c4b430f56bfb215b32c304915fc49e966d0b553\" target=\"blank\">0c4b430</a>",
        useHTML: true
    },
    title: {
        text: "Rogue - Subtlety DfA - Patchwerk",
        useHTML: true
    },
    tooltip: {
        backgroundColor: "#eee",
        borderColor: "#bbb",
        formatter: function() {        var s = '<b>'+ this.x +'</b>';        var cumulative_amount = 0;        for (var i = this.points.length - 1 ; i >= 0 ; i--) {            cumulative_amount += this.points[i].y;            if (this.points[i].y !== 0){                s += '<br/><span style=\"color: ' + this.points[i].series.color + '; font-weight: bold;\">' + this.points[i].series.name +'</span>: ' + Intl.NumberFormat().format(cumulative_amount);            }        }        return s;      },
        headerFormat: "<b>{point.x}</b>",
        shared: true,
        style: {
            color: "black"
        }
    },
    xAxis: {
        categories: [
            "<a href=\"http://www.wowhead.com/spell=197239\">Energetic Stabbing</a>",
            "<a href=\"http://www.wowhead.com/spell=238068\">Weak Point</a>",
            "<a href=\"http://www.wowhead.com/spell=252906\">Torment the Weak</a>",
            "<a href=\"http://www.wowhead.com/spell=252875\">Shadowbind</a>",
            "<a href=\"http://www.wowhead.com/spell=253093\">Infusion of Light</a>",
            "<a href=\"http://www.wowhead.com/spell=253070\">Secure in the Light</a>",
            "<a href=\"http://www.wowhead.com/spell=197234\">Gutripper</a>",
            "<a href=\"http://www.wowhead.com/spell=252888\">Chaotic Darkness</a>",
            "<a href=\"http://www.wowhead.com/spell=252799\">Shocklight</a>",
            "<a href=\"http://www.wowhead.com/spell=252191\">Murderous Intent</a>",
            "<a href=\"http://www.wowhead.com/spell=252091\">Master of Shadows</a>",
            "<a href=\"http://www.wowhead.com/spell=250879\">+5 itemlevel</a>",
            "<a href=\"http://www.wowhead.com/spell=197235\">Precision Strike</a>",
            "<a href=\"http://www.wowhead.com/spell=197231\">The Quiet Knife</a>",
            "<a href=\"http://www.wowhead.com/spell=252088\">Light Speed</a>",
            "<a href=\"http://www.wowhead.com/spell=197386\">Soul Shadows</a>",
            "+3 itemlevel",
            "<a href=\"http://www.wowhead.com/spell=252922\">Dark Sorrows</a>",
            "<a href=\"http://www.wowhead.com/spell=197233\">Demon's Kiss</a>",
            "<a href=\"http://www.wowhead.com/spell=197369\">Fortune's Bite</a>",
            "+2 itemlevel",
            "+1 itemlevel"
        ],
        labels: {
            useHTML: true
        }
    },
    yAxis: {
        labels: {
            enabled: false
        },
        min: 0,
        stackLabels: {
            enabled: true,
            formatter: function() {          return Intl.NumberFormat().format(this.total);        },
            style: {
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'black',
                fontWeight: "bold"
            }
        },
        title: {
            text: "\u0394 Damage per second"
        }
    }
});
