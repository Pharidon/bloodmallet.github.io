Highcharts.chart('mage_arcane_patchwerk', 
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
                color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                enabled: false
            },
            point: {
                events: {
                    click: function (event) {                var chart = this.series.yAxis;                chart.removePlotLine('helperLine');                chart.addPlotLine({                    value: this.stackY,                    color: '#000',                    width: 2,                    id: 'helperLine',                    zIndex: 5,                    label: {                      text: this.series.name + ' ' + this.category + ': ' + Intl.NumberFormat().format(this.stackY),                      align: 'left',                      verticalAlign: 'bottom',                      rotation: 0,                      y: -5                    }                });              }
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
            color: "#fdbf6f",
            data: [
                48195,
                0,
                43317,
                41543,
                270389,
                267409,
                258264,
                0,
                212636,
                28099,
                26665,
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
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0
            ],
            name: "1000"
        },
        {
            color: "#cab2d6",
            data: [
                19029,
                25292,
                19904,
                15717,
                0,
                0,
                0,
                16742,
                0,
                13038,
                13122,
                17467,
                8153,
                9686,
                13717,
                13554,
                15515,
                13179,
                11951,
                10951,
                9255,
                12374,
                10818,
                12614,
                9914,
                13774,
                10426,
                15911,
                10567,
                10956,
                11789,
                11909,
                13872,
                9420,
                10359,
                12967,
                11336,
                11827,
                8927,
                11477,
                9727,
                7512,
                10817,
                13987,
                10270,
                10065,
                10513,
                5753,
                7186,
                8204,
                7846,
                3501,
                0,
                6050,
                2826,
                4672,
                5167,
                6218,
                6437,
                2421,
                2511
            ],
            name: "980"
        },
        {
            color: "#ff7f00",
            data: [
                16880,
                22415,
                17006,
                18114,
                0,
                0,
                0,
                14370,
                0,
                167492,
                10360,
                16685,
                5406,
                12502,
                12515,
                12878,
                10615,
                14392,
                11892,
                10860,
                13299,
                10664,
                10280,
                9534,
                11276,
                9268,
                12265,
                6197,
                11681,
                11001,
                7628,
                12031,
                12647,
                9765,
                8744,
                8682,
                12840,
                8053,
                11447,
                10329,
                8577,
                8474,
                6003,
                9000,
                11095,
                7259,
                7548,
                8779,
                8974,
                6678,
                7200,
                7756,
                0,
                6425,
                6075,
                7238,
                5239,
                3961,
                4175,
                4360,
                445
            ],
            name: "970"
        },
        {
            color: "#fb9a99",
            data: [
                17077,
                20619,
                15118,
                14615,
                0,
                0,
                0,
                12778,
                0,
                0,
                11628,
                13639,
                6488,
                12088,
                12571,
                12105,
                11123,
                12407,
                11082,
                10933,
                7620,
                11392,
                10654,
                10538,
                11876,
                10338,
                10125,
                11197,
                8140,
                10440,
                10833,
                9626,
                10135,
                7679,
                9298,
                7863,
                10759,
                7575,
                5949,
                8443,
                7917,
                7110,
                7401,
                10202,
                11187,
                7478,
                10445,
                7119,
                5691,
                9336,
                6612,
                7031,
                0,
                3566,
                4411,
                4567,
                6531,
                4749,
                1645,
                136,
                2573
            ],
            name: "960"
        },
        {
            color: "#e31a1c",
            data: [
                16017,
                15861,
                14237,
                13636,
                0,
                0,
                0,
                13778,
                0,
                0,
                7732,
                14339,
                6229,
                11210,
                10788,
                11141,
                8180,
                10697,
                11694,
                9715,
                7696,
                7327,
                6870,
                9562,
                6907,
                8460,
                9210,
                6763,
                9672,
                9699,
                9239,
                7162,
                10235,
                7577,
                6582,
                9874,
                9626,
                8020,
                6894,
                10447,
                7610,
                8194,
                8413,
                8307,
                8569,
                6876,
                8050,
                4715,
                4998,
                3319,
                4434,
                5165,
                0,
                3825,
                4037,
                5265,
                1880,
                6521,
                5068,
                1831,
                1783
            ],
            name: "950"
        },
        {
            color: "#b2df8a",
            data: [
                188153,
                17378,
                186114,
                174258,
                0,
                0,
                0,
                13559,
                0,
                0,
                131356,
                13555,
                8166,
                6204,
                11282,
                11157,
                8937,
                10443,
                8784,
                9166,
                9027,
                7309,
                9976,
                7758,
                7380,
                9652,
                6797,
                10787,
                5667,
                7474,
                7528,
                6421,
                7653,
                7038,
                8693,
                6849,
                7149,
                4726,
                9014,
                9658,
                5250,
                5510,
                6401,
                9083,
                6997,
                5859,
                7963,
                7592,
                6790,
                7424,
                6478,
                6106,
                0,
                6479,
                5210,
                4045,
                5452,
                1828,
                0,
                1533,
                32
            ],
            name: "940"
        },
        {
            color: "#33a02c",
            data: [
                0,
                16394,
                0,
                0,
                0,
                0,
                0,
                9500,
                0,
                0,
                0,
                10260,
                6181,
                10314,
                11160,
                10122,
                8885,
                9373,
                8094,
                7835,
                10395,
                9361,
                8496,
                7753,
                7680,
                5912,
                8800,
                5902,
                8897,
                7950,
                8914,
                6086,
                7794,
                7301,
                4498,
                6143,
                9890,
                9000,
                3952,
                7032,
                6920,
                6256,
                7339,
                6132,
                8087,
                5360,
                5814,
                5548,
                4662,
                5205,
                3762,
                5311,
                6938,
                3184,
                2008,
                2375,
                2684,
                4461,
                6264,
                4512,
                2571
            ],
            name: "930"
        },
        {
            color: "#a6cee3",
            data: [
                0,
                11507,
                0,
                0,
                0,
                0,
                0,
                140047,
                0,
                0,
                0,
                114040,
                4722,
                7376,
                125424,
                6642,
                124560,
                11352,
                116060,
                9126,
                5924,
                6182,
                6523,
                5478,
                5707,
                7035,
                5576,
                7840,
                4710,
                6532,
                6061,
                8033,
                7866,
                5332,
                6473,
                8037,
                6849,
                5358,
                6020,
                7234,
                4260,
                4459,
                3626,
                7370,
                5812,
                2465,
                6597,
                3541,
                4515,
                3250,
                5030,
                5219,
                5885,
                4620,
                3107,
                3409,
                5562,
                2544,
                1875,
                1528,
                2570
            ],
            name: "920"
        },
        {
            color: "#1f78b4",
            data: [
                0,
                170097,
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
                152915,
                128564,
                0,
                113406,
                0,
                97842,
                0,
                108631,
                102812,
                99392,
                100175,
                99045,
                101255,
                97031,
                97196,
                95350,
                98073,
                92393,
                93724,
                91406,
                78269,
                93650,
                92086,
                86028,
                76000,
                87026,
                87672,
                72076,
                85670,
                87940,
                84841,
                70204,
                71301,
                80742,
                67563,
                80415,
                80223,
                77840,
                74778,
                75700,
                93882,
                66231,
                70320,
                64088,
                62607,
                64640,
                56358,
                55827,
                41891
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2018-01-17 08:21 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/807590d332e8cb63f9aa86e7f423a0814c264bcb\" target=\"blank\">807590d</a>",
        useHTML: true
    },
    title: {
        text: "Mage - Arcane - Patchwerk",
        useHTML: true
    },
    tooltip: {
        backgroundColor: "#eee",
        borderColor: "#bbb",
        formatter: function() {        var s = '<div style=\"background-color:#eee; padding:12px;\"><b>'+ this.x +'</b>';        var cumulative_amount = 0;        for (var i = this.points.length - 1 ; i >= 0 ; i--) {            cumulative_amount += this.points[i].y;            if (this.points[i].y !== 0){                s += '<br/><span style=\"color: ' + this.points[i].series.color + '; font-weight: bold;\">' + this.points[i].series.name +'</span>: ' + Intl.NumberFormat().format(cumulative_amount);            }        }        s += '</div>';        return s;      },
        headerFormat: "<b>{point.x}</b>",
        shared: true,
        style: {
            color: "black"
        },
        useHTML: true
    },
    xAxis: {
        categories: [
            "<a href=\"http://www.wowhead.com/item=154177\">Norgannon's Prowess +20</a>",
            "<a href=\"http://www.wowhead.com/item=147017\">Tarnished Sentinel Medallion</a>",
            "<a href=\"http://www.wowhead.com/item=154177\">Norgannon's Prowess +15</a>",
            "<a href=\"http://www.wowhead.com/item=154177\">Norgannon's Prowess +10</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +20</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +15</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +10</a>",
            "<a href=\"http://www.wowhead.com/item=151969\">Terminus Signaling Beacon</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision</a>",
            "<a href=\"http://www.wowhead.com/item=144259\">Kil'jaeden's Burning Wish</a>",
            "<a href=\"http://www.wowhead.com/item=154177\">Norgannon's Prowess</a>",
            "<a href=\"http://www.wowhead.com/item=151971\">Sheath of Asara</a>",
            "<a href=\"http://www.wowhead.com/item=141482\">Unstable Arcanocrystal</a>",
            "<a href=\"http://www.wowhead.com/item=147002\">Charm of the Rising Tide</a>",
            "<a href=\"http://www.wowhead.com/item=151970\">Vitality Resonator</a>",
            "<a href=\"http://www.wowhead.com/item=147016\">Terror From Below</a>",
            "<a href=\"http://www.wowhead.com/item=151955\">Acrid Catalyst Injector</a>",
            "<a href=\"http://www.wowhead.com/item=147019\">Tome of Unraveling Sanity</a>",
            "<a href=\"http://www.wowhead.com/item=151962\">Prototype Personnel Decimator</a>",
            "<a href=\"http://www.wowhead.com/item=142779\">PVP Badge of Dominance</a>",
            "<a href=\"http://www.wowhead.com/item=142507,bonus_id=605\">Stat Stick (Mastery)</a>",
            "<a href=\"http://www.wowhead.com/item=142507,bonus_id=607\">Stat Stick (Versatility)</a>",
            "<a href=\"http://www.wowhead.com/item=144480\">Dreadstone of Endless Shadows</a>",
            "<a href=\"http://www.wowhead.com/item=141536\">Padawsen's Unlucky Charm</a>",
            "<a href=\"http://www.wowhead.com/item=137541\">Moonlit Prism</a>",
            "<a href=\"http://www.wowhead.com/item=142507,bonus_id=603\">Stat Stick (Crit)</a>",
            "<a href=\"http://www.wowhead.com/item=141584\">Eyasu's Mulligan</a>",
            "<a href=\"http://www.wowhead.com/item=140792\">Erratic Metronome</a>",
            "<a href=\"http://www.wowhead.com/item=142507,bonus_id=604\">Stat Stick (Haste)</a>",
            "<a href=\"http://www.wowhead.com/item=140809\">Whispers in the Dark</a>",
            "<a href=\"http://www.wowhead.com/item=137367\">Stormsinger Fulmination Charge</a>",
            "<a href=\"http://www.wowhead.com/item=137485\">Infernal Writ</a>",
            "<a href=\"http://www.wowhead.com/item=140804\">Star Gate</a>",
            "<a href=\"http://www.wowhead.com/item=137349\">Naraxas' Spiked Tongue</a>",
            "<a href=\"http://www.wowhead.com/item=147018\">Spectral Thurible</a>",
            "<a href=\"http://www.wowhead.com/item=137419\">Chrono Shard</a>",
            "<a href=\"http://www.wowhead.com/item=151310\">Reality Breacher</a>",
            "<a href=\"http://www.wowhead.com/item=142668\">PVP Insignia of Dominance</a>",
            "<a href=\"http://www.wowhead.com/item=133642\">Horn of Valor</a>",
            "<a href=\"http://www.wowhead.com/item=142165\">Deteriorated Construct Core</a>",
            "<a href=\"http://www.wowhead.com/item=137306\">Oakheart's Gnarled Root</a>",
            "<a href=\"http://www.wowhead.com/item=140801\">Fury of the Burning Sky</a>",
            "<a href=\"http://www.wowhead.com/item=140030\">Devilsaur Shock-Baton</a>",
            "<a href=\"http://www.wowhead.com/item=139323\">Twisting Wind</a>",
            "<a href=\"http://www.wowhead.com/item=139323\">Bough of Corruption</a>",
            "<a href=\"http://www.wowhead.com/item=140798\">Icon of Rot</a>",
            "<a href=\"http://www.wowhead.com/item=137398\">Portable Manacracker</a>",
            "<a href=\"http://www.wowhead.com/item=139321\">Swarming Plaguehive</a>",
            "<a href=\"http://www.wowhead.com/item=137433\">Obelisk of the Void</a>",
            "<a href=\"http://www.wowhead.com/item=139326\">Wriggling Sinew</a>",
            "<a href=\"http://www.wowhead.com/item=142164\">Toe Knee's Promise</a>",
            "<a href=\"http://www.wowhead.com/item=142157\">Aran's Relaxing Ruby</a>",
            "<a href=\"http://www.wowhead.com/item=151607\">Astral Alchemist Stone</a>",
            "<a href=\"http://www.wowhead.com/item=137301\">Corrupted Starlight</a>",
            "<a href=\"http://www.wowhead.com/item=136716\">Caged Horror</a>",
            "<a href=\"http://www.wowhead.com/item=142160\">Mrrgria's Favor</a>",
            "<a href=\"http://www.wowhead.com/item=140800\">Pharameres Forbidden Grimoire</a>",
            "<a href=\"http://www.wowhead.com/item=133641\">Eye of Skovald</a>",
            "<a href=\"http://www.wowhead.com/item=137446\">Elementium Bomb Squirrel Generator</a>",
            "<a href=\"http://www.wowhead.com/item=138224\">Unstable Horrorslime</a>",
            "<a href=\"http://www.wowhead.com/item=137329\">Figurehead of the Naglfar</a>"
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
        plotLines: [
            {
                color: "#0973DA",
                label: {
                    align: "left",
                    rotation: 0,
                    style: {
                        color: "#0973DA"
                    },
                    text: 'mean: ' + Intl.NumberFormat().format(162679),
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 162679.65573770492,
                width: 2,
                zIndex: 2
            }
        ],
        stackLabels: {
            enabled: true,
            formatter: function() {          return Intl.NumberFormat().format(this.total);        },
            style: {
                textOutline: false
            }
        },
        title: {
            text: "\u0394 Damage per second"
        }
    }
});