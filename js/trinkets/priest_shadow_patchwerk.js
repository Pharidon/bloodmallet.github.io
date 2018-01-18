Highcharts.chart('priest_shadow_patchwerk', 
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
                322962,
                319890,
                311244,
                268595,
                42242,
                35175,
                0,
                34596,
                0,
                33703,
                0,
                0,
                0,
                0,
                0,
                0,
                27437,
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
                0,
                17630,
                18406,
                7930,
                16299,
                13043,
                12976,
                20618,
                15304,
                13241,
                17253,
                15502,
                13572,
                12930,
                12518,
                17991,
                13919,
                16245,
                11717,
                13716,
                13290,
                7765,
                8872,
                10874,
                11479,
                10719,
                10952,
                10367,
                11380,
                16389,
                12152,
                9356,
                8982,
                11213,
                8412,
                10680,
                10542,
                13845,
                11882,
                10102,
                8614,
                8183,
                9824,
                7843,
                8863,
                7173,
                7523,
                6503,
                6396,
                5761,
                7143,
                4873,
                0,
                5629,
                4853,
                3927,
                2632,
                1858
            ],
            name: "980"
        },
        {
            color: "#ff7f00",
            data: [
                0,
                0,
                0,
                0,
                14295,
                13551,
                7523,
                16258,
                13140,
                186344,
                15315,
                13439,
                15589,
                16361,
                12095,
                9862,
                9623,
                10825,
                7853,
                6345,
                8315,
                11364,
                10006,
                10363,
                13082,
                12272,
                10306,
                9242,
                9430,
                8344,
                11837,
                10038,
                10139,
                7981,
                6028,
                9927,
                8394,
                5328,
                9793,
                12659,
                7838,
                10690,
                10962,
                9562,
                4879,
                10714,
                10058,
                6694,
                8867,
                14272,
                7145,
                5351,
                6970,
                6207,
                6329,
                0,
                9419,
                7801,
                6994,
                5385,
                3093
            ],
            name: "970"
        },
        {
            color: "#fb9a99",
            data: [
                0,
                0,
                0,
                0,
                11865,
                15747,
                9716,
                11933,
                12689,
                0,
                19628,
                14034,
                11670,
                9553,
                12447,
                12066,
                11560,
                9349,
                11460,
                12153,
                10086,
                10944,
                11025,
                7625,
                8902,
                7769,
                11018,
                9966,
                10332,
                8169,
                8288,
                9266,
                10302,
                8855,
                7216,
                6449,
                6900,
                7979,
                8426,
                8445,
                15229,
                8939,
                11336,
                6777,
                5870,
                8430,
                4936,
                3313,
                6383,
                6971,
                6602,
                5676,
                5975,
                6684,
                6357,
                0,
                3493,
                5637,
                4873,
                1245,
                4697
            ],
            name: "960"
        },
        {
            color: "#e31a1c",
            data: [
                0,
                0,
                0,
                0,
                15585,
                13745,
                8541,
                11166,
                12973,
                0,
                15193,
                12855,
                8084,
                13223,
                11779,
                9379,
                7145,
                12138,
                9442,
                10779,
                10243,
                12319,
                7721,
                12358,
                10641,
                8848,
                6464,
                8438,
                10416,
                8787,
                9841,
                8140,
                11249,
                10568,
                8997,
                6943,
                10109,
                8065,
                6979,
                8095,
                6485,
                10995,
                8856,
                6350,
                7085,
                9228,
                7770,
                3334,
                6934,
                6921,
                3557,
                5306,
                2628,
                3484,
                4198,
                0,
                6740,
                6441,
                4788,
                2671,
                2348
            ],
            name: "950"
        },
        {
            color: "#b2df8a",
            data: [
                0,
                0,
                0,
                0,
                163201,
                158906,
                9339,
                153314,
                8626,
                0,
                15437,
                7256,
                9242,
                10594,
                8548,
                8685,
                122549,
                8974,
                8614,
                7889,
                7229,
                8270,
                11551,
                5765,
                9461,
                7094,
                8366,
                5594,
                6532,
                7581,
                8172,
                8342,
                8744,
                4971,
                5913,
                6683,
                8039,
                3607,
                4655,
                7663,
                8551,
                11907,
                9630,
                9078,
                3835,
                10853,
                6674,
                6705,
                5870,
                9017,
                6536,
                1474,
                6716,
                6728,
                5196,
                0,
                4727,
                4874,
                5338,
                4382,
                1699
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
                5246,
                0,
                11567,
                0,
                9035,
                10055,
                8656,
                9867,
                10284,
                8622,
                0,
                7932,
                7483,
                9171,
                8480,
                8632,
                5391,
                8375,
                3888,
                6990,
                5997,
                9051,
                6565,
                6454,
                6647,
                5819,
                8585,
                9504,
                5601,
                4149,
                1768,
                8060,
                8005,
                6716,
                6941,
                4166,
                6441,
                6938,
                4189,
                6822,
                4086,
                4354,
                7821,
                8472,
                6012,
                6705,
                2609,
                4884,
                4679,
                6515,
                6560,
                4268,
                5724,
                3389,
                2384
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
                6515,
                0,
                161839,
                0,
                129157,
                9005,
                139562,
                7875,
                8686,
                7935,
                0,
                6732,
                9568,
                6757,
                6433,
                8399,
                7655,
                8549,
                8230,
                8083,
                5237,
                7670,
                8742,
                6873,
                5136,
                8275,
                7837,
                5527,
                7304,
                5350,
                8485,
                4457,
                96531,
                3232,
                8546,
                9026,
                7468,
                4766,
                5191,
                6442,
                5230,
                3982,
                5196,
                5174,
                2455,
                4568,
                4268,
                77881,
                2633,
                6286,
                1756,
                3328,
                2843,
                2048,
                1063
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
                192415,
                0,
                0,
                0,
                0,
                129731,
                0,
                109813,
                115056,
                121310,
                0,
                121684,
                114817,
                114903,
                113858,
                107288,
                108805,
                102641,
                106208,
                106381,
                104093,
                98098,
                95737,
                100583,
                93744,
                92607,
                79825,
                90814,
                98998,
                99526,
                91802,
                100371,
                0,
                86931,
                72304,
                70952,
                72577,
                84746,
                94069,
                68985,
                82799,
                90369,
                79300,
                64462,
                83423,
                82010,
                78587,
                0,
                77933,
                97105,
                71058,
                68762,
                69127,
                74898,
                62495
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2018-01-17 08:21 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/807590d332e8cb63f9aa86e7f423a0814c264bcb\" target=\"blank\">807590d</a>",
        useHTML: true
    },
    title: {
        text: "Priest - Shadow - Patchwerk",
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
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision</a>",
            "<a href=\"http://www.wowhead.com/item=154177\">Norgannon's Prowess +20</a>",
            "<a href=\"http://www.wowhead.com/item=154177\">Norgannon's Prowess +15</a>",
            "<a href=\"http://www.wowhead.com/item=141482\">Unstable Arcanocrystal</a>",
            "<a href=\"http://www.wowhead.com/item=154177\">Norgannon's Prowess +10</a>",
            "<a href=\"http://www.wowhead.com/item=151955\">Acrid Catalyst Injector</a>",
            "<a href=\"http://www.wowhead.com/item=144259\">Kil'jaeden's Burning Wish</a>",
            "<a href=\"http://www.wowhead.com/item=151971\">Sheath of Asara</a>",
            "<a href=\"http://www.wowhead.com/item=147016\">Terror From Below</a>",
            "<a href=\"http://www.wowhead.com/item=151962\">Prototype Personnel Decimator</a>",
            "<a href=\"http://www.wowhead.com/item=147019\">Tome of Unraveling Sanity</a>",
            "<a href=\"http://www.wowhead.com/item=147017\">Tarnished Sentinel Medallion</a>",
            "<a href=\"http://www.wowhead.com/item=140792\">Erratic Metronome</a>",
            "<a href=\"http://www.wowhead.com/item=154177\">Norgannon's Prowess</a>",
            "<a href=\"http://www.wowhead.com/item=142507,bonus_id=604\">Stat Stick (Haste)</a>",
            "<a href=\"http://www.wowhead.com/item=142507,bonus_id=603\">Stat Stick (Crit)</a>",
            "<a href=\"http://www.wowhead.com/item=141536\">Padawsen's Unlucky Charm</a>",
            "<a href=\"http://www.wowhead.com/item=144480\">Dreadstone of Endless Shadows</a>",
            "<a href=\"http://www.wowhead.com/item=147018\">Spectral Thurible</a>",
            "<a href=\"http://www.wowhead.com/item=137485\">Infernal Writ</a>",
            "<a href=\"http://www.wowhead.com/item=142507,bonus_id=607\">Stat Stick (Versatility)</a>",
            "<a href=\"http://www.wowhead.com/item=137419\">Chrono Shard</a>",
            "<a href=\"http://www.wowhead.com/item=140798\">Icon of Rot</a>",
            "<a href=\"http://www.wowhead.com/item=147002\">Charm of the Rising Tide</a>",
            "<a href=\"http://www.wowhead.com/item=137306\">Oakheart's Gnarled Root</a>",
            "<a href=\"http://www.wowhead.com/item=142507,bonus_id=605\">Stat Stick (Mastery)</a>",
            "<a href=\"http://www.wowhead.com/item=140030\">Devilsaur Shock-Baton</a>",
            "<a href=\"http://www.wowhead.com/item=137367\">Stormsinger Fulmination Charge</a>",
            "<a href=\"http://www.wowhead.com/item=142779\">PVP Badge of Dominance</a>",
            "<a href=\"http://www.wowhead.com/item=151310\">Reality Breacher</a>",
            "<a href=\"http://www.wowhead.com/item=141584\">Eyasu's Mulligan</a>",
            "<a href=\"http://www.wowhead.com/item=137433\">Obelisk of the Void</a>",
            "<a href=\"http://www.wowhead.com/item=139321\">Swarming Plaguehive</a>",
            "<a href=\"http://www.wowhead.com/item=142668\">PVP Insignia of Dominance</a>",
            "<a href=\"http://www.wowhead.com/item=137541\">Moonlit Prism</a>",
            "<a href=\"http://www.wowhead.com/item=151970\">Vitality Resonator</a>",
            "<a href=\"http://www.wowhead.com/item=140809\">Whispers in the Dark</a>",
            "<a href=\"http://www.wowhead.com/item=140804\">Star Gate</a>",
            "<a href=\"http://www.wowhead.com/item=139323\">Bough of Corruption</a>",
            "<a href=\"http://www.wowhead.com/item=139323\">Twisting Wind</a>",
            "<a href=\"http://www.wowhead.com/item=137349\">Naraxas' Spiked Tongue</a>",
            "<a href=\"http://www.wowhead.com/item=142164\">Toe Knee's Promise</a>",
            "<a href=\"http://www.wowhead.com/item=142165\">Deteriorated Construct Core</a>",
            "<a href=\"http://www.wowhead.com/item=133642\">Horn of Valor</a>",
            "<a href=\"http://www.wowhead.com/item=140800\">Pharameres Forbidden Grimoire</a>",
            "<a href=\"http://www.wowhead.com/item=140801\">Fury of the Burning Sky</a>",
            "<a href=\"http://www.wowhead.com/item=137398\">Portable Manacracker</a>",
            "<a href=\"http://www.wowhead.com/item=139326\">Wriggling Sinew</a>",
            "<a href=\"http://www.wowhead.com/item=133641\">Eye of Skovald</a>",
            "<a href=\"http://www.wowhead.com/item=137446\">Elementium Bomb Squirrel Generator</a>",
            "<a href=\"http://www.wowhead.com/item=151969\">Terminus Signaling Beacon</a>",
            "<a href=\"http://www.wowhead.com/item=142160\">Mrrgria's Favor</a>",
            "<a href=\"http://www.wowhead.com/item=151607\">Astral Alchemist Stone</a>",
            "<a href=\"http://www.wowhead.com/item=142157\">Aran's Relaxing Ruby</a>",
            "<a href=\"http://www.wowhead.com/item=137301\">Corrupted Starlight</a>",
            "<a href=\"http://www.wowhead.com/item=136716\">Caged Horror</a>",
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
                    text: 'mean: ' + Intl.NumberFormat().format(169674),
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 169674.73770491802,
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