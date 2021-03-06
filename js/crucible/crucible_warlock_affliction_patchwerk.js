Highcharts.chart('crucible_warlock_affliction_patchwerk', 
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
                34478,
                0,
                0,
                25772,
                23950,
                23716,
                22355,
                21802,
                21722,
                21712,
                21341,
                20699,
                20686,
                0,
                0,
                13791,
                0,
                11092,
                0,
                6895,
                0
            ],
            name: 1,
            showInLegend: false
        },
        {
            color: "#9482C9",
            data: [
                56867,
                0,
                29801,
                26611,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                18102,
                15113,
                0,
                12867,
                0,
                9249,
                0,
                0
            ],
            name: 1,
            showInLegend: false
        }
    ],
    subtitle: {
        text: "UTC 2018-02-03 18:43 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/8e0142c79d228199db12e0b0162ef0e2af9059f0\" target=\"blank\">8e0142c</a>",
        useHTML: true
    },
    title: {
        text: "Warlock - Affliction - Patchwerk",
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
            "<a href=\"http://www.wowhead.com/spell=199158\">Perdition</a>",
            "<a href=\"http://www.wowhead.com/spell=250879\">+5 itemlevel</a>",
            "<a href=\"http://www.wowhead.com/spell=199163\">Shadowy Incantations</a>",
            "<a href=\"http://www.wowhead.com/spell=238072\">Winnowing</a>",
            "<a href=\"http://www.wowhead.com/spell=252906\">Torment the Weak</a>",
            "<a href=\"http://www.wowhead.com/spell=253070\">Secure in the Light</a>",
            "<a href=\"http://www.wowhead.com/spell=252875\">Shadowbind</a>",
            "<a href=\"http://www.wowhead.com/spell=253093\">Infusion of Light</a>",
            "<a href=\"http://www.wowhead.com/spell=252799\">Shocklight</a>",
            "<a href=\"http://www.wowhead.com/spell=252091\">Master of Shadows</a>",
            "<a href=\"http://www.wowhead.com/spell=252088\">Light Speed</a>",
            "<a href=\"http://www.wowhead.com/spell=252191\">Murderous Intent</a>",
            "<a href=\"http://www.wowhead.com/spell=252888\">Chaotic Darkness</a>",
            "+3 itemlevel",
            "<a href=\"http://www.wowhead.com/spell=199152\">Inherently Unstable</a>",
            "<a href=\"http://www.wowhead.com/spell=199111\">Inimitable Agony</a>",
            "+2 itemlevel",
            "<a href=\"http://www.wowhead.com/spell=199112\">Hideous Corruption</a>",
            "<a href=\"http://www.wowhead.com/spell=252922\">Dark Sorrows</a>",
            "<a href=\"http://www.wowhead.com/spell=199120\">Drained to a Husk</a>",
            "+1 itemlevel",
            "<a href=\"http://www.wowhead.com/spell=199153\">Seeds of Doom</a>"
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