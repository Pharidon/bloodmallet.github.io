Highcharts.chart('shaman_elemental_patchwerk', 
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
                301440,
                297255,
                287331,
                39279,
                39782,
                38507,
                242059,
                31801,
                0,
                0,
                26318,
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
                22178,
                15355,
                15579,
                0,
                13637,
                7712,
                14492,
                15262,
                15306,
                15128,
                11949,
                13196,
                14498,
                13808,
                13552,
                11274,
                12656,
                14827,
                12471,
                10360,
                11967,
                14846,
                11244,
                10755,
                9803,
                12849,
                10561,
                8600,
                7290,
                6634,
                7556,
                11718,
                10945,
                10426,
                10643,
                8323,
                13856,
                8940,
                8625,
                7407,
                5017,
                6437,
                5131,
                0,
                6778,
                5568,
                5397,
                5028,
                7192,
                5527,
                6977,
                6959,
                5614,
                2304,
                5888,
                1960,
                4172,
                1955
            ],
            name: "980"
        },
        {
            color: "#ff7f00",
            data: [
                0,
                0,
                0,
                12732,
                19591,
                16610,
                0,
                183389,
                7896,
                16407,
                11683,
                9900,
                11326,
                12823,
                10891,
                8831,
                10168,
                9025,
                11581,
                9878,
                8602,
                11443,
                9722,
                13961,
                13810,
                10686,
                7687,
                10137,
                8410,
                9957,
                9602,
                9178,
                10518,
                10241,
                11643,
                8675,
                11141,
                9804,
                5415,
                6679,
                9124,
                7287,
                7576,
                9174,
                7123,
                6968,
                0,
                6499,
                5848,
                6846,
                6013,
                4841,
                5225,
                3966,
                3773,
                3792,
                4158,
                5251,
                4454,
                2327,
                3781
            ],
            name: "970"
        },
        {
            color: "#fb9a99",
            data: [
                0,
                0,
                0,
                18727,
                12476,
                13027,
                0,
                0,
                8019,
                9147,
                9185,
                12282,
                11064,
                9579,
                11861,
                9104,
                10113,
                11342,
                10194,
                10439,
                11011,
                10047,
                9500,
                8767,
                11815,
                11040,
                10816,
                8535,
                8597,
                7320,
                9576,
                7857,
                7322,
                6366,
                10190,
                12000,
                8152,
                8367,
                6770,
                9305,
                9696,
                5823,
                6145,
                3719,
                6346,
                4951,
                0,
                4025,
                6049,
                5543,
                5664,
                5430,
                2905,
                4941,
                5661,
                3097,
                6383,
                2355,
                5150,
                3569,
                999
            ],
            name: "960"
        },
        {
            color: "#e31a1c",
            data: [
                0,
                0,
                0,
                12149,
                14383,
                13153,
                0,
                0,
                6656,
                11802,
                9920,
                9641,
                12579,
                9122,
                7975,
                10588,
                8564,
                10004,
                10536,
                9673,
                7625,
                9114,
                9633,
                10104,
                10444,
                9873,
                9404,
                7515,
                7610,
                7681,
                6857,
                9002,
                7810,
                6663,
                8412,
                8015,
                11188,
                9473,
                7325,
                8660,
                8480,
                4682,
                5097,
                6806,
                5603,
                4826,
                0,
                7957,
                2393,
                4720,
                5871,
                3282,
                6068,
                2367,
                2919,
                6466,
                3594,
                3979,
                2798,
                1529,
                3001
            ],
            name: "950"
        },
        {
            color: "#b2df8a",
            data: [
                0,
                0,
                0,
                173273,
                170446,
                162507,
                0,
                0,
                8757,
                9243,
                133343,
                9455,
                7921,
                12322,
                9219,
                8697,
                11493,
                8385,
                8030,
                7713,
                9577,
                9018,
                11035,
                10308,
                9976,
                6077,
                6174,
                8987,
                5751,
                8560,
                6872,
                6630,
                7588,
                7073,
                7936,
                9559,
                8022,
                10126,
                7365,
                7606,
                7488,
                7028,
                6080,
                5112,
                2654,
                5753,
                0,
                3358,
                8714,
                4028,
                4929,
                5585,
                4193,
                6788,
                3142,
                2398,
                1883,
                4515,
                2099,
                2297,
                2499
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
                0,
                7787,
                9293,
                0,
                6188,
                9273,
                5409,
                9412,
                9249,
                6558,
                7241,
                8285,
                10005,
                9206,
                7441,
                8215,
                7268,
                9195,
                8198,
                8511,
                5213,
                8360,
                5269,
                7334,
                5400,
                6997,
                6415,
                7730,
                6767,
                6428,
                4883,
                2912,
                8539,
                7613,
                3330,
                6073,
                6973,
                5193,
                4545,
                7204,
                5002,
                2370,
                5125,
                4563,
                4460,
                5190,
                4639,
                5442,
                6004,
                4696,
                1599,
                4747,
                3601,
                762
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
                0,
                4799,
                147878,
                0,
                9239,
                7794,
                7423,
                6744,
                7497,
                7184,
                10179,
                6246,
                7589,
                7075,
                7502,
                4510,
                10060,
                95045,
                7930,
                5963,
                6858,
                7676,
                97456,
                4134,
                98480,
                4725,
                6079,
                4360,
                6831,
                4958,
                8628,
                87400,
                4117,
                6690,
                6052,
                2829,
                3956,
                5702,
                5892,
                6704,
                5098,
                3115,
                3136,
                2163,
                4086,
                919,
                974,
                1975,
                0,
                2874,
                2801,
                2176,
                835,
                3677
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
                0,
                172664,
                0,
                0,
                114965,
                110459,
                111798,
                110480,
                110455,
                109579,
                106301,
                105885,
                103587,
                102795,
                103193,
                106563,
                95664,
                0,
                93955,
                95996,
                98080,
                94549,
                0,
                91323,
                0,
                89438,
                86932,
                70265,
                67860,
                68531,
                65596,
                0,
                66227,
                64280,
                79114,
                77157,
                73789,
                75371,
                74423,
                97773,
                71346,
                74399,
                72887,
                72278,
                70963,
                68946,
                66478,
                66210,
                67554,
                63884,
                60836,
                60676,
                63137,
                52210
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2018-01-17 08:21 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/807590d332e8cb63f9aa86e7f423a0814c264bcb\" target=\"blank\">807590d</a>",
        useHTML: true
    },
    title: {
        text: "Shaman - Elemental - Patchwerk",
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
            "<a href=\"http://www.wowhead.com/item=144259\">Kil'jaeden's Burning Wish</a>",
            "<a href=\"http://www.wowhead.com/item=141482\">Unstable Arcanocrystal</a>",
            "<a href=\"http://www.wowhead.com/item=151955\">Acrid Catalyst Injector</a>",
            "<a href=\"http://www.wowhead.com/item=154177\">Norgannon's Prowess</a>",
            "<a href=\"http://www.wowhead.com/item=147002\">Charm of the Rising Tide</a>",
            "<a href=\"http://www.wowhead.com/item=140809\">Whispers in the Dark</a>",
            "<a href=\"http://www.wowhead.com/item=140792\">Erratic Metronome</a>",
            "<a href=\"http://www.wowhead.com/item=144480\">Dreadstone of Endless Shadows</a>",
            "<a href=\"http://www.wowhead.com/item=142507,bonus_id=603\">Stat Stick (Crit)</a>",
            "<a href=\"http://www.wowhead.com/item=141536\">Padawsen's Unlucky Charm</a>",
            "<a href=\"http://www.wowhead.com/item=142507,bonus_id=604\">Stat Stick (Haste)</a>",
            "<a href=\"http://www.wowhead.com/item=142507,bonus_id=605\">Stat Stick (Mastery)</a>",
            "<a href=\"http://www.wowhead.com/item=137419\">Chrono Shard</a>",
            "<a href=\"http://www.wowhead.com/item=142507,bonus_id=607\">Stat Stick (Versatility)</a>",
            "<a href=\"http://www.wowhead.com/item=137485\">Infernal Writ</a>",
            "<a href=\"http://www.wowhead.com/item=141584\">Eyasu's Mulligan</a>",
            "<a href=\"http://www.wowhead.com/item=147019\">Tome of Unraveling Sanity</a>",
            "<a href=\"http://www.wowhead.com/item=151971\">Sheath of Asara</a>",
            "<a href=\"http://www.wowhead.com/item=142779\">PVP Badge of Dominance</a>",
            "<a href=\"http://www.wowhead.com/item=147017\">Tarnished Sentinel Medallion</a>",
            "<a href=\"http://www.wowhead.com/item=147016\">Terror From Below</a>",
            "<a href=\"http://www.wowhead.com/item=137367\">Stormsinger Fulmination Charge</a>",
            "<a href=\"http://www.wowhead.com/item=151970\">Vitality Resonator</a>",
            "<a href=\"http://www.wowhead.com/item=142668\">PVP Insignia of Dominance</a>",
            "<a href=\"http://www.wowhead.com/item=151962\">Prototype Personnel Decimator</a>",
            "<a href=\"http://www.wowhead.com/item=133642\">Horn of Valor</a>",
            "<a href=\"http://www.wowhead.com/item=137433\">Obelisk of the Void</a>",
            "<a href=\"http://www.wowhead.com/item=151310\">Reality Breacher</a>",
            "<a href=\"http://www.wowhead.com/item=140804\">Star Gate</a>",
            "<a href=\"http://www.wowhead.com/item=137398\">Portable Manacracker</a>",
            "<a href=\"http://www.wowhead.com/item=142165\">Deteriorated Construct Core</a>",
            "<a href=\"http://www.wowhead.com/item=151969\">Terminus Signaling Beacon</a>",
            "<a href=\"http://www.wowhead.com/item=139323\">Twisting Wind</a>",
            "<a href=\"http://www.wowhead.com/item=139323\">Bough of Corruption</a>",
            "<a href=\"http://www.wowhead.com/item=140030\">Devilsaur Shock-Baton</a>",
            "<a href=\"http://www.wowhead.com/item=137349\">Naraxas' Spiked Tongue</a>",
            "<a href=\"http://www.wowhead.com/item=147018\">Spectral Thurible</a>",
            "<a href=\"http://www.wowhead.com/item=139321\">Swarming Plaguehive</a>",
            "<a href=\"http://www.wowhead.com/item=140798\">Icon of Rot</a>",
            "<a href=\"http://www.wowhead.com/item=151607\">Astral Alchemist Stone</a>",
            "<a href=\"http://www.wowhead.com/item=137306\">Oakheart's Gnarled Root</a>",
            "<a href=\"http://www.wowhead.com/item=140801\">Fury of the Burning Sky</a>",
            "<a href=\"http://www.wowhead.com/item=142160\">Mrrgria's Favor</a>",
            "<a href=\"http://www.wowhead.com/item=137541\">Moonlit Prism</a>",
            "<a href=\"http://www.wowhead.com/item=140800\">Pharameres Forbidden Grimoire</a>",
            "<a href=\"http://www.wowhead.com/item=139326\">Wriggling Sinew</a>",
            "<a href=\"http://www.wowhead.com/item=142164\">Toe Knee's Promise</a>",
            "<a href=\"http://www.wowhead.com/item=142157\">Aran's Relaxing Ruby</a>",
            "<a href=\"http://www.wowhead.com/item=133641\">Eye of Skovald</a>",
            "<a href=\"http://www.wowhead.com/item=137446\">Elementium Bomb Squirrel Generator</a>",
            "<a href=\"http://www.wowhead.com/item=136716\">Caged Horror</a>",
            "<a href=\"http://www.wowhead.com/item=137301\">Corrupted Starlight</a>",
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
                    text: 'mean: ' + Intl.NumberFormat().format(156168),
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 156168.04918032786,
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