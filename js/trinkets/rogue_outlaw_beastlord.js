Highcharts.chart('rogue_outlaw_beastlord', 
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
                148232,
                126902,
                118169,
                0,
                69573,
                384281,
                0,
                360690,
                354641,
                0,
                55701,
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
                272068,
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
                58702,
                67689,
                45334,
                30720,
                23101,
                0,
                18325,
                0,
                0,
                22144,
                20928,
                33454,
                23719,
                32299,
                16707,
                24611,
                25133,
                27379,
                25320,
                12350,
                22704,
                24024,
                19815,
                21060,
                22325,
                21159,
                0,
                17582,
                16872,
                16503,
                21283,
                21536,
                15074,
                17713,
                19946,
                24096,
                26091,
                11777,
                19034,
                20282,
                11837,
                20325,
                17331,
                17080,
                4955,
                0,
                14859,
                7683,
                7547,
                12576,
                5558,
                5562,
                0,
                14896,
                4546,
                3853,
                6391,
                1188,
                1809,
                11377
            ],
            name: "980"
        },
        {
            color: "#ff7f00",
            data: [
                55669,
                49086,
                49438,
                28958,
                318183,
                0,
                18684,
                0,
                0,
                30255,
                30200,
                24385,
                15538,
                16056,
                20422,
                20124,
                18990,
                15598,
                25148,
                19341,
                20710,
                16394,
                24542,
                33918,
                19960,
                20960,
                0,
                16293,
                27021,
                15163,
                13266,
                16088,
                11342,
                27524,
                14175,
                17083,
                15097,
                17582,
                24461,
                25920,
                20754,
                16590,
                12328,
                14474,
                22960,
                0,
                11323,
                13373,
                6301,
                6423,
                9204,
                7826,
                14898,
                0,
                7580,
                10594,
                5800,
                15148,
                4636,
                9491
            ],
            name: "970"
        },
        {
            color: "#fb9a99",
            data: [
                55855,
                45512,
                38414,
                33386,
                0,
                0,
                26038,
                0,
                0,
                21056,
                23549,
                21362,
                23562,
                17437,
                19758,
                17289,
                27995,
                27327,
                23412,
                18525,
                22215,
                17468,
                8972,
                15205,
                23636,
                15485,
                0,
                23783,
                8892,
                19891,
                21097,
                14300,
                4773,
                14686,
                20839,
                16817,
                18603,
                23526,
                14631,
                7413,
                22406,
                10384,
                16813,
                15924,
                0,
                0,
                12975,
                9076,
                11595,
                13171,
                4927,
                7176,
                2365,
                13844,
                6087,
                2817,
                4022,
                3426,
                0,
                17632
            ],
            name: "960"
        },
        {
            color: "#e31a1c",
            data: [
                43354,
                43467,
                35130,
                27814,
                0,
                0,
                19604,
                0,
                0,
                23230,
                16067,
                21254,
                27631,
                22728,
                24181,
                14801,
                15517,
                7615,
                14798,
                16706,
                11787,
                20716,
                19563,
                21350,
                12989,
                24978,
                0,
                13126,
                23325,
                23125,
                11762,
                22009,
                9720,
                17034,
                10986,
                18196,
                21567,
                7863,
                20863,
                20244,
                1360,
                12257,
                5060,
                16207,
                29254,
                0,
                13430,
                13719,
                10984,
                2095,
                10586,
                2422,
                14087,
                0,
                990,
                4343,
                6578,
                3687,
                7832,
                7240
            ],
            name: "950"
        },
        {
            color: "#b2df8a",
            data: [
                476333,
                444898,
                390007,
                17664,
                0,
                0,
                2471,
                0,
                0,
                8755,
                190540,
                23528,
                14105,
                14892,
                9010,
                22766,
                21510,
                20432,
                13483,
                23718,
                14977,
                10969,
                15367,
                14472,
                11755,
                3611,
                0,
                9067,
                9890,
                5782,
                22874,
                13949,
                8013,
                14406,
                11632,
                13517,
                9421,
                7574,
                14524,
                11297,
                10538,
                3974,
                12374,
                9113,
                2968,
                0,
                11067,
                11631,
                7784,
                4357,
                0,
                1153,
                585,
                1479,
                8531,
                3409,
                0,
                6288,
                2289,
                7386
            ],
            name: "940"
        },
        {
            color: "#33a02c",
            data: [
                0,
                0,
                0,
                26011,
                0,
                0,
                17918,
                0,
                0,
                16537,
                0,
                5939,
                13876,
                10818,
                16697,
                9597,
                15859,
                10055,
                23693,
                0,
                16201,
                11652,
                12351,
                14554,
                16271,
                15132,
                0,
                14820,
                14518,
                22266,
                7524,
                5096,
                7392,
                13433,
                8606,
                15355,
                18239,
                13678,
                7630,
                15864,
                18297,
                14571,
                20799,
                11593,
                7896,
                10821,
                1541,
                8569,
                8602,
                16524,
                10032,
                9019,
                16515,
                12266,
                2554,
                6447,
                8328,
                0,
                1519,
                10120
            ],
            name: "930"
        },
        {
            color: "#a6cee3",
            data: [
                0,
                0,
                0,
                259090,
                0,
                0,
                18021,
                0,
                0,
                217518,
                0,
                35958,
                17623,
                21199,
                4406,
                20334,
                11365,
                13797,
                16089,
                19044,
                166131,
                18290,
                7497,
                8468,
                5657,
                7044,
                0,
                26052,
                12375,
                8177,
                13735,
                20007,
                11215,
                11450,
                10666,
                15422,
                10606,
                12510,
                18268,
                7738,
                8083,
                14651,
                135193,
                6943,
                12917,
                11644,
                7548,
                0,
                7071,
                0,
                0,
                0,
                1159,
                735,
                5446,
                0,
                3812,
                3188,
                4602,
                14533
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
                262168,
                0,
                0,
                0,
                0,
                161469,
                182893,
                175541,
                194649,
                172180,
                152976,
                166278,
                136690,
                169084,
                0,
                154949,
                165603,
                144032,
                160358,
                164070,
                0,
                150006,
                156107,
                156604,
                151442,
                148818,
                186896,
                133714,
                141778,
                117932,
                117436,
                142047,
                113817,
                120341,
                132896,
                131667,
                0,
                118881,
                111567,
                158797,
                106309,
                114341,
                100550,
                100871,
                116590,
                92753,
                82523,
                82538,
                82452,
                86774,
                76144,
                74011,
                84578,
                17967
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2018-01-18 10:04 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/807590d332e8cb63f9aa86e7f423a0814c264bcb\" target=\"blank\">807590d</a>",
        useHTML: true
    },
    title: {
        text: "Rogue - Outlaw - Beastlord",
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
            "<a href=\"http://www.wowhead.com/item=154174\">Golganneth's Vitality +20</a>",
            "<a href=\"http://www.wowhead.com/item=154174\">Golganneth's Vitality +15</a>",
            "<a href=\"http://www.wowhead.com/item=154174\">Golganneth's Vitality +10</a>",
            "<a href=\"http://www.wowhead.com/item=152093\">Gorshalach's Legacy</a>",
            "<a href=\"http://www.wowhead.com/item=144259\">Kil'jaeden's Burning Wish</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +20</a>",
            "<a href=\"http://www.wowhead.com/item=140806\">Convergence of Fates</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +15</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +10</a>",
            "<a href=\"http://www.wowhead.com/item=151963\">Forgefiend's Fabricator</a>",
            "<a href=\"http://www.wowhead.com/item=154174\">Golganneth's Vitality</a>",
            "<a href=\"http://www.wowhead.com/item=140794\">Arcanogolem Digit</a>",
            "<a href=\"http://www.wowhead.com/item=137459\">Chaos Talisman</a>",
            "<a href=\"http://www.wowhead.com/item=147010\">Cradle of Anguish</a>",
            "<a href=\"http://www.wowhead.com/item=139329\">Bloodthirsty Instinct</a>",
            "<a href=\"http://www.wowhead.com/item=142167\">Eye of Command</a>",
            "<a href=\"http://www.wowhead.com/item=140802\">Nightblooming Frond</a>",
            "<a href=\"http://www.wowhead.com/item=142506,bonus_id=607\">Stat Stick (Versatility)</a>",
            "<a href=\"http://www.wowhead.com/item=151307\">Void Stalker's Contract</a>",
            "<a href=\"http://www.wowhead.com/item=142506,bonus_id=604\">Stat Stick (Haste)</a>",
            "<a href=\"http://www.wowhead.com/item=151968\">Shadow-Singed Fang</a>",
            "<a href=\"http://www.wowhead.com/item=140796\">Entwined Elemental Foci</a>",
            "<a href=\"http://www.wowhead.com/item=137419\">Chrono Shard</a>",
            "<a href=\"http://www.wowhead.com/item=151190\">Specter of Betrayal</a>",
            "<a href=\"http://www.wowhead.com/item=133644\">Memento of Angerboda</a>",
            "<a href=\"http://www.wowhead.com/item=141537\">Thrice-Accursed Compass</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision</a>",
            "<a href=\"http://www.wowhead.com/item=142773\">PVP Badge of Conquest</a>",
            "<a href=\"http://www.wowhead.com/item=137312\">Nightmare Egg Shell</a>",
            "<a href=\"http://www.wowhead.com/item=147015\">Engine of Eradication</a>",
            "<a href=\"http://www.wowhead.com/item=142506,bonus_id=603\">Stat Stick (Crit)</a>",
            "<a href=\"http://www.wowhead.com/item=142506,bonus_id=605\">Stat Stick (Mastery)</a>",
            "<a href=\"http://www.wowhead.com/item=141482\">Unstable Arcanocrystal</a>",
            "<a href=\"http://www.wowhead.com/item=141585\">Six-Feather Fan</a>",
            "<a href=\"http://www.wowhead.com/item=142662\">PVP Insignia of Conquest</a>",
            "<a href=\"http://www.wowhead.com/item=137537\">Tirathon's Betrayal</a>",
            "<a href=\"http://www.wowhead.com/item=147011\">Vial of Ceaseless Toxins</a>",
            "<a href=\"http://www.wowhead.com/item=133642\">Horn of Valor</a>",
            "<a href=\"http://www.wowhead.com/item=142159\">Bloodstained Handkerchief</a>",
            "<a href=\"http://www.wowhead.com/item=137373\">Tempered Egg of Serpentrix</a>",
            "<a href=\"http://www.wowhead.com/item=133647\">Gift of Radiance</a>",
            "<a href=\"http://www.wowhead.com/item=137406\">Terrorbound Nexus</a>",
            "<a href=\"http://www.wowhead.com/item=151964\">Seeping Scourgewing</a>",
            "<a href=\"http://www.wowhead.com/item=144477\">Splinters of Agronax</a>",
            "<a href=\"http://www.wowhead.com/item=147012\">Umbral Moonglaives</a>",
            "<a href=\"http://www.wowhead.com/item=151607\">Astral Alchemist Stone</a>",
            "<a href=\"http://www.wowhead.com/item=147009\">Infernal Cinders</a>",
            "<a href=\"http://www.wowhead.com/item=137357\">Mark of Dargrul</a>",
            "<a href=\"http://www.wowhead.com/item=137439\">Tiny Oozeling in a Jar</a>",
            "<a href=\"http://www.wowhead.com/item=142164\">Toe Knee's Promise</a>",
            "<a href=\"http://www.wowhead.com/item=139334\">Nature's Call</a>",
            "<a href=\"http://www.wowhead.com/item=137369\">Giant Ornamental Pearl</a>",
            "<a href=\"http://www.wowhead.com/item=140026\">The Devilsaur's Bite</a>",
            "<a href=\"http://www.wowhead.com/item=137539\">Faulty Countermeasure</a>",
            "<a href=\"http://www.wowhead.com/item=139320\">Ravaged Seed Pod</a>",
            "<a href=\"http://www.wowhead.com/item=136715\">Spiked Counterweight</a>",
            "<a href=\"http://www.wowhead.com/item=139325\">Spontaneous Appendages</a>",
            "<a href=\"http://www.wowhead.com/item=137486\">Windscar Whetstone</a>",
            "<a href=\"http://www.wowhead.com/item=140027\">Ley Spark</a>",
            "<a href=\"http://www.wowhead.com/item=140808\">Draught of Souls</a>"
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
                    text: 'mean: ' + Intl.NumberFormat().format(270740),
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 270740.76666666666,
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