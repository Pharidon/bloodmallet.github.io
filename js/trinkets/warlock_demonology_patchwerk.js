Highcharts.chart('warlock_demonology_patchwerk', 
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
                309740,
                308431,
                299264,
                37381,
                40070,
                36843,
                251358,
                0,
                30692,
                29494,
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
                0,
                0
            ],
            name: "1000"
        },
        {
            color: "#cab2d6",
            data: [
                0,
                0,
                0,
                16527,
                15724,
                16400,
                0,
                11441,
                13908,
                12086,
                13861,
                10528,
                14999,
                10776,
                13220,
                13251,
                12724,
                11910,
                13125,
                11828,
                13502,
                12701,
                12993,
                14280,
                11277,
                13732,
                10259,
                10360,
                8852,
                8729,
                8322,
                7712,
                9471,
                9545,
                13214,
                10607,
                8167,
                14631,
                8417,
                10847,
                7422,
                8058,
                6508,
                8706,
                7498,
                6712,
                10322,
                0,
                4940,
                6119,
                3831,
                5891,
                5107,
                2735,
                3935,
                5405,
                3899,
                5962,
                5358,
                3056,
                1435
            ],
            name: "980"
        },
        {
            color: "#ff7f00",
            data: [
                0,
                0,
                0,
                16143,
                15965,
                14387,
                0,
                9717,
                176433,
                14041,
                12738,
                13752,
                11474,
                14133,
                9711,
                11096,
                10596,
                10761,
                9581,
                10893,
                10833,
                10437,
                9431,
                12741,
                11815,
                11411,
                10497,
                11662,
                11496,
                9692,
                9914,
                9834,
                10437,
                6745,
                8687,
                9783,
                6368,
                9102,
                4336,
                10797,
                7921,
                12165,
                6473,
                6840,
                5393,
                5592,
                10772,
                0,
                6690,
                7232,
                5882,
                4809,
                4318,
                5938,
                5943,
                3666,
                6380,
                3546,
                3304,
                2614,
                1329
            ],
            name: "970"
        },
        {
            color: "#fb9a99",
            data: [
                0,
                0,
                0,
                14007,
                12135,
                14652,
                0,
                7741,
                0,
                8921,
                11400,
                9833,
                11839,
                10131,
                11366,
                10789,
                7764,
                10418,
                11275,
                9823,
                11122,
                12261,
                10655,
                13836,
                7369,
                8115,
                7320,
                10908,
                7694,
                8094,
                9462,
                8075,
                8793,
                7839,
                10036,
                11210,
                7535,
                8235,
                8517,
                8272,
                4558,
                9850,
                5312,
                5000,
                6420,
                3341,
                8918,
                0,
                4824,
                4203,
                4378,
                7887,
                5778,
                3790,
                3016,
                2908,
                84,
                4076,
                3278,
                1765,
                2972
            ],
            name: "960"
        },
        {
            color: "#e31a1c",
            data: [
                0,
                0,
                0,
                14378,
                15088,
                8990,
                0,
                9574,
                0,
                10715,
                11897,
                9636,
                10197,
                9815,
                10216,
                9612,
                11338,
                9405,
                7700,
                9431,
                9584,
                8261,
                8604,
                9996,
                11140,
                11440,
                8529,
                4562,
                8719,
                7270,
                8547,
                7885,
                6114,
                8235,
                8048,
                8949,
                4907,
                8393,
                6838,
                7231,
                7515,
                8208,
                5391,
                6248,
                5170,
                7040,
                7145,
                0,
                3422,
                5819,
                5924,
                4265,
                5663,
                4138,
                5176,
                2912,
                3324,
                4568,
                2783,
                1934,
                2666
            ],
            name: "950"
        },
        {
            color: "#b2df8a",
            data: [
                0,
                0,
                0,
                171290,
                169366,
                165979,
                0,
                8545,
                0,
                138431,
                9296,
                8396,
                8545,
                9460,
                6080,
                8860,
                8222,
                11159,
                10094,
                9847,
                5982,
                6718,
                8604,
                9741,
                7829,
                9944,
                8267,
                9234,
                5275,
                7507,
                4765,
                6896,
                6179,
                9450,
                8556,
                6331,
                7132,
                7591,
                2999,
                9248,
                4429,
                5386,
                7676,
                2959,
                2539,
                6449,
                5734,
                0,
                4256,
                5163,
                2813,
                6677,
                2773,
                5374,
                1644,
                5814,
                5202,
                2475,
                4942,
                2715,
                1379
            ],
            name: "940"
        },
        {
            color: "#33a02c",
            data: [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                5473,
                0,
                0,
                8675,
                7360,
                9852,
                9600,
                9847,
                10457,
                8360,
                6139,
                7035,
                7478,
                10752,
                8395,
                9189,
                10041,
                7672,
                6861,
                5906,
                8049,
                7938,
                5812,
                7978,
                5560,
                7449,
                3960,
                7336,
                6415,
                4190,
                6801,
                3685,
                6694,
                4307,
                7471,
                3395,
                7585,
                6579,
                5905,
                6355,
                5505,
                4024,
                1345,
                6586,
                1691,
                4896,
                2077,
                4513,
                3585,
                3861,
                1828,
                909,
                2988,
                1110
            ],
            name: "930"
        },
        {
            color: "#a6cee3",
            data: [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                6584,
                0,
                0,
                10112,
                7502,
                6163,
                122758,
                8283,
                6816,
                7256,
                7995,
                8288,
                7323,
                5545,
                10087,
                5598,
                94061,
                4575,
                6111,
                105333,
                6134,
                103944,
                5059,
                6751,
                5980,
                5672,
                7168,
                5918,
                7102,
                89625,
                5000,
                6988,
                5562,
                6251,
                5969,
                3962,
                6273,
                3789,
                4513,
                2807,
                7671,
                5326,
                5284,
                1791,
                3733,
                3107,
                4344,
                3157,
                2173,
                3974,
                4049,
                3857,
                1871,
                2566
            ],
            name: "920"
        },
        {
            color: "#1f78b4",
            data: [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                177310,
                0,
                0,
                115597,
                125215,
                116766,
                0,
                113711,
                111305,
                115342,
                111997,
                106336,
                105918,
                105038,
                102137,
                99978,
                0,
                99022,
                90466,
                0,
                93733,
                0,
                97661,
                91607,
                93474,
                90611,
                86860,
                67336,
                68020,
                0,
                66341,
                82841,
                64060,
                79967,
                64485,
                82259,
                77340,
                78683,
                75445,
                62572,
                98459,
                73879,
                71822,
                74456,
                69511,
                71826,
                68347,
                69307,
                59350,
                58012,
                57864,
                56169,
                53143,
                44747
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2018-01-17 23:36 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/807590d332e8cb63f9aa86e7f423a0814c264bcb\" target=\"blank\">807590d</a>",
        useHTML: true
    },
    title: {
        text: "Warlock - Demonology - Patchwerk",
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
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +20</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +15</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +10</a>",
            "<a href=\"http://www.wowhead.com/item=154177\">Norgannon's Prowess +20</a>",
            "<a href=\"http://www.wowhead.com/item=154177\">Norgannon's Prowess +15</a>",
            "<a href=\"http://www.wowhead.com/item=154177\">Norgannon's Prowess +10</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision</a>",
            "<a href=\"http://www.wowhead.com/item=141482\">Unstable Arcanocrystal</a>",
            "<a href=\"http://www.wowhead.com/item=144259\">Kil'jaeden's Burning Wish</a>",
            "<a href=\"http://www.wowhead.com/item=154177\">Norgannon's Prowess</a>",
            "<a href=\"http://www.wowhead.com/item=140809\">Whispers in the Dark</a>",
            "<a href=\"http://www.wowhead.com/item=147002\">Charm of the Rising Tide</a>",
            "<a href=\"http://www.wowhead.com/item=140792\">Erratic Metronome</a>",
            "<a href=\"http://www.wowhead.com/item=151955\">Acrid Catalyst Injector</a>",
            "<a href=\"http://www.wowhead.com/item=144480\">Dreadstone of Endless Shadows</a>",
            "<a href=\"http://www.wowhead.com/item=142507,bonus_id=604\">Stat Stick (Haste)</a>",
            "<a href=\"http://www.wowhead.com/item=137419\">Chrono Shard</a>",
            "<a href=\"http://www.wowhead.com/item=142507,bonus_id=605\">Stat Stick (Mastery)</a>",
            "<a href=\"http://www.wowhead.com/item=141536\">Padawsen's Unlucky Charm</a>",
            "<a href=\"http://www.wowhead.com/item=141584\">Eyasu's Mulligan</a>",
            "<a href=\"http://www.wowhead.com/item=142507,bonus_id=607\">Stat Stick (Versatility)</a>",
            "<a href=\"http://www.wowhead.com/item=137367\">Stormsinger Fulmination Charge</a>",
            "<a href=\"http://www.wowhead.com/item=142507,bonus_id=603\">Stat Stick (Crit)</a>",
            "<a href=\"http://www.wowhead.com/item=151971\">Sheath of Asara</a>",
            "<a href=\"http://www.wowhead.com/item=142779\">PVP Badge of Dominance</a>",
            "<a href=\"http://www.wowhead.com/item=147019\">Tome of Unraveling Sanity</a>",
            "<a href=\"http://www.wowhead.com/item=151962\">Prototype Personnel Decimator</a>",
            "<a href=\"http://www.wowhead.com/item=137485\">Infernal Writ</a>",
            "<a href=\"http://www.wowhead.com/item=151970\">Vitality Resonator</a>",
            "<a href=\"http://www.wowhead.com/item=147017\">Tarnished Sentinel Medallion</a>",
            "<a href=\"http://www.wowhead.com/item=142668\">PVP Insignia of Dominance</a>",
            "<a href=\"http://www.wowhead.com/item=137433\">Obelisk of the Void</a>",
            "<a href=\"http://www.wowhead.com/item=133642\">Horn of Valor</a>",
            "<a href=\"http://www.wowhead.com/item=147016\">Terror From Below</a>",
            "<a href=\"http://www.wowhead.com/item=140804\">Star Gate</a>",
            "<a href=\"http://www.wowhead.com/item=151310\">Reality Breacher</a>",
            "<a href=\"http://www.wowhead.com/item=151969\">Terminus Signaling Beacon</a>",
            "<a href=\"http://www.wowhead.com/item=142165\">Deteriorated Construct Core</a>",
            "<a href=\"http://www.wowhead.com/item=137349\">Naraxas' Spiked Tongue</a>",
            "<a href=\"http://www.wowhead.com/item=139323\">Bough of Corruption</a>",
            "<a href=\"http://www.wowhead.com/item=147018\">Spectral Thurible</a>",
            "<a href=\"http://www.wowhead.com/item=139323\">Twisting Wind</a>",
            "<a href=\"http://www.wowhead.com/item=140801\">Fury of the Burning Sky</a>",
            "<a href=\"http://www.wowhead.com/item=139321\">Swarming Plaguehive</a>",
            "<a href=\"http://www.wowhead.com/item=137541\">Moonlit Prism</a>",
            "<a href=\"http://www.wowhead.com/item=137306\">Oakheart's Gnarled Root</a>",
            "<a href=\"http://www.wowhead.com/item=137398\">Portable Manacracker</a>",
            "<a href=\"http://www.wowhead.com/item=151607\">Astral Alchemist Stone</a>",
            "<a href=\"http://www.wowhead.com/item=142157\">Aran's Relaxing Ruby</a>",
            "<a href=\"http://www.wowhead.com/item=140030\">Devilsaur Shock-Baton</a>",
            "<a href=\"http://www.wowhead.com/item=140800\">Pharameres Forbidden Grimoire</a>",
            "<a href=\"http://www.wowhead.com/item=140798\">Icon of Rot</a>",
            "<a href=\"http://www.wowhead.com/item=142164\">Toe Knee's Promise</a>",
            "<a href=\"http://www.wowhead.com/item=136716\">Caged Horror</a>",
            "<a href=\"http://www.wowhead.com/item=137301\">Corrupted Starlight</a>",
            "<a href=\"http://www.wowhead.com/item=142160\">Mrrgria's Favor</a>",
            "<a href=\"http://www.wowhead.com/item=133641\">Eye of Skovald</a>",
            "<a href=\"http://www.wowhead.com/item=139326\">Wriggling Sinew</a>",
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
                    text: 'mean: ' + Intl.NumberFormat().format(156401),
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 156401.22950819673,
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