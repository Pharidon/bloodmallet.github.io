Highcharts.chart('hunter_marksmanship_patchwerk', 
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
                338597,
                336641,
                326862,
                47058,
                280175,
                46293,
                45367,
                0,
                31648,
                0,
                35998,
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
                21335,
                0,
                20782,
                21441,
                10417,
                14992,
                18694,
                18883,
                17017,
                11420,
                15698,
                12664,
                13220,
                13934,
                11166,
                13112,
                13821,
                12480,
                12500,
                11829,
                13711,
                13557,
                12739,
                10605,
                13471,
                13005,
                12505,
                16294,
                9041,
                8645,
                9577,
                10385,
                8562,
                14477,
                14529,
                8989,
                9209,
                11148,
                8496,
                13759,
                12245,
                10105,
                7518,
                12015,
                9792,
                7122,
                12152,
                6231,
                6527,
                0,
                6375,
                9713,
                5050,
                3342,
                1419,
                4165,
                1741
            ],
            name: "980"
        },
        {
            color: "#ff7f00",
            data: [
                0,
                0,
                0,
                18711,
                0,
                19301,
                15734,
                7700,
                194754,
                14748,
                13656,
                9030,
                11320,
                8543,
                9459,
                11277,
                10464,
                15357,
                9734,
                10775,
                12373,
                13425,
                10324,
                11905,
                11863,
                12121,
                14236,
                10143,
                10054,
                10758,
                15027,
                9799,
                9901,
                9591,
                8093,
                8088,
                11563,
                9412,
                8517,
                9544,
                12935,
                9770,
                11330,
                10790,
                8162,
                6285,
                13797,
                6573,
                3512,
                7250,
                7666,
                5829,
                0,
                4041,
                8799,
                5677,
                4659,
                4116,
                2828,
                3717
            ],
            name: "970"
        },
        {
            color: "#fb9a99",
            data: [
                0,
                0,
                0,
                20053,
                0,
                17280,
                17330,
                10486,
                0,
                14883,
                12833,
                8714,
                11802,
                12016,
                10480,
                11792,
                10102,
                9074,
                12288,
                10266,
                11626,
                9737,
                10766,
                9543,
                9834,
                7256,
                12428,
                10881,
                11454,
                11665,
                11976,
                9627,
                6284,
                6632,
                7140,
                8155,
                9957,
                12423,
                8341,
                7292,
                6962,
                7036,
                7851,
                9359,
                5615,
                7308,
                6721,
                8030,
                7298,
                9333,
                5985,
                4038,
                0,
                7067,
                7360,
                4867,
                5107,
                3169,
                1929,
                2272
            ],
            name: "960"
        },
        {
            color: "#e31a1c",
            data: [
                0,
                0,
                0,
                13525,
                0,
                15679,
                13084,
                7705,
                0,
                14312,
                12864,
                11857,
                11616,
                9484,
                9384,
                12108,
                12744,
                11153,
                11696,
                8910,
                6925,
                11048,
                8835,
                9468,
                11694,
                12451,
                10132,
                8052,
                6821,
                8759,
                8693,
                7214,
                8379,
                8314,
                6968,
                8343,
                12007,
                7529,
                9402,
                7546,
                9189,
                7750,
                9532,
                7978,
                5682,
                5462,
                11782,
                6841,
                4557,
                8164,
                6628,
                6382,
                0,
                2327,
                7133,
                4017,
                4566,
                1119,
                3795,
                3115
            ],
            name: "950"
        },
        {
            color: "#b2df8a",
            data: [
                0,
                0,
                0,
                162921,
                0,
                158450,
                151514,
                9374,
                0,
                10286,
                129006,
                12394,
                10971,
                11286,
                8144,
                8179,
                9488,
                7799,
                8936,
                10058,
                9554,
                8072,
                9575,
                8564,
                8481,
                6007,
                9612,
                6943,
                11530,
                8843,
                10915,
                8809,
                7332,
                8051,
                7831,
                4293,
                8064,
                9812,
                5881,
                6269,
                8789,
                7002,
                9764,
                9327,
                2909,
                6971,
                4509,
                4453,
                6735,
                6890,
                3518,
                1160,
                0,
                4573,
                7759,
                5322,
                2660,
                4722,
                464,
                2008
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
                7168,
                0,
                14482,
                0,
                8702,
                9645,
                10099,
                8084,
                9192,
                8685,
                9090,
                6935,
                7443,
                9076,
                7312,
                8878,
                9669,
                10009,
                9231,
                10946,
                10203,
                7035,
                4799,
                9073,
                7650,
                10154,
                5242,
                7918,
                7252,
                7908,
                9668,
                6057,
                6993,
                8932,
                4839,
                6843,
                8802,
                7406,
                7723,
                8572,
                5897,
                3879,
                3768,
                5531,
                8919,
                8724,
                3290,
                4153,
                3594,
                2887,
                1590,
                4020,
                617
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
                6920,
                0,
                7370,
                0,
                7806,
                7002,
                7067,
                7223,
                6939,
                8271,
                8583,
                125093,
                125616,
                9072,
                10166,
                124915,
                8202,
                6331,
                121572,
                7540,
                3015,
                5700,
                9342,
                8106,
                3610,
                3879,
                7587,
                2005,
                6991,
                6442,
                5452,
                6607,
                5867,
                7097,
                6815,
                6407,
                6085,
                3330,
                4150,
                6566,
                5228,
                6814,
                7655,
                4154,
                1472,
                8605,
                3218,
                6072,
                3657,
                3263,
                2124,
                2579,
                3679
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
                200056,
                0,
                146081,
                0,
                128141,
                125319,
                123003,
                131731,
                120842,
                116488,
                117406,
                0,
                0,
                115184,
                112962,
                0,
                111698,
                110945,
                0,
                102784,
                108590,
                103749,
                98646,
                84555,
                105404,
                104189,
                100581,
                100981,
                97202,
                77769,
                75813,
                88758,
                89741,
                71293,
                84208,
                68911,
                69740,
                89455,
                86621,
                67247,
                80359,
                83648,
                67476,
                81964,
                82194,
                95247,
                75684,
                54690,
                73333,
                69217,
                73705,
                68030,
                55498
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2018-01-17 08:21 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/807590d332e8cb63f9aa86e7f423a0814c264bcb\" target=\"blank\">807590d</a>",
        useHTML: true
    },
    title: {
        text: "Hunter - Marksmanship - Patchwerk",
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
            "<a href=\"http://www.wowhead.com/item=154174\">Golganneth's Vitality +20</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision</a>",
            "<a href=\"http://www.wowhead.com/item=154174\">Golganneth's Vitality +15</a>",
            "<a href=\"http://www.wowhead.com/item=154174\">Golganneth's Vitality +10</a>",
            "<a href=\"http://www.wowhead.com/item=141482\">Unstable Arcanocrystal</a>",
            "<a href=\"http://www.wowhead.com/item=144259\">Kil'jaeden's Burning Wish</a>",
            "<a href=\"http://www.wowhead.com/item=147017\">Tarnished Sentinel Medallion</a>",
            "<a href=\"http://www.wowhead.com/item=154174\">Golganneth's Vitality</a>",
            "<a href=\"http://www.wowhead.com/item=139329\">Bloodthirsty Instinct</a>",
            "<a href=\"http://www.wowhead.com/item=147010\">Cradle of Anguish</a>",
            "<a href=\"http://www.wowhead.com/item=147015\">Engine of Eradication</a>",
            "<a href=\"http://www.wowhead.com/item=140806\">Convergence of Fates</a>",
            "<a href=\"http://www.wowhead.com/item=142506,bonus_id=605\">Stat Stick (Mastery)</a>",
            "<a href=\"http://www.wowhead.com/item=147016\">Terror From Below</a>",
            "<a href=\"http://www.wowhead.com/item=142506,bonus_id=604\">Stat Stick (Haste)</a>",
            "<a href=\"http://www.wowhead.com/item=151968\">Shadow-Singed Fang</a>",
            "<a href=\"http://www.wowhead.com/item=151969\">Terminus Signaling Beacon</a>",
            "<a href=\"http://www.wowhead.com/item=140796\">Entwined Elemental Foci</a>",
            "<a href=\"http://www.wowhead.com/item=141537\">Thrice-Accursed Compass</a>",
            "<a href=\"http://www.wowhead.com/item=151962\">Prototype Personnel Decimator</a>",
            "<a href=\"http://www.wowhead.com/item=137367\">Stormsinger Fulmination Charge</a>",
            "<a href=\"http://www.wowhead.com/item=142506,bonus_id=603\">Stat Stick (Crit)</a>",
            "<a href=\"http://www.wowhead.com/item=151963\">Forgefiend's Fabricator</a>",
            "<a href=\"http://www.wowhead.com/item=147019\">Tome of Unraveling Sanity</a>",
            "<a href=\"http://www.wowhead.com/item=137419\">Chrono Shard</a>",
            "<a href=\"http://www.wowhead.com/item=142506,bonus_id=607\">Stat Stick (Versatility)</a>",
            "<a href=\"http://www.wowhead.com/item=142773\">PVP Badge of Conquest</a>",
            "<a href=\"http://www.wowhead.com/item=141585\">Six-Feather Fan</a>",
            "<a href=\"http://www.wowhead.com/item=137433\">Obelisk of the Void</a>",
            "<a href=\"http://www.wowhead.com/item=137541\">Moonlit Prism</a>",
            "<a href=\"http://www.wowhead.com/item=137349\">Naraxas' Spiked Tongue</a>",
            "<a href=\"http://www.wowhead.com/item=140026\">The Devilsaur's Bite</a>",
            "<a href=\"http://www.wowhead.com/item=140801\">Fury of the Burning Sky</a>",
            "<a href=\"http://www.wowhead.com/item=137537\">Tirathon's Betrayal</a>",
            "<a href=\"http://www.wowhead.com/item=140802\">Nightblooming Frond</a>",
            "<a href=\"http://www.wowhead.com/item=133642\">Horn of Valor</a>",
            "<a href=\"http://www.wowhead.com/item=142662\">PVP Insignia of Conquest</a>",
            "<a href=\"http://www.wowhead.com/item=151307\">Void Stalker's Contract</a>",
            "<a href=\"http://www.wowhead.com/item=147018\">Spectral Thurible</a>",
            "<a href=\"http://www.wowhead.com/item=137373\">Tempered Egg of Serpentrix</a>",
            "<a href=\"http://www.wowhead.com/item=142165\">Deteriorated Construct Core</a>",
            "<a href=\"http://www.wowhead.com/item=142157\">Aran's Relaxing Ruby</a>",
            "<a href=\"http://www.wowhead.com/item=140798\">Icon of Rot</a>",
            "<a href=\"http://www.wowhead.com/item=139323\">Twisting Wind</a>",
            "<a href=\"http://www.wowhead.com/item=137306\">Oakheart's Gnarled Root</a>",
            "<a href=\"http://www.wowhead.com/item=142164\">Toe Knee's Promise</a>",
            "<a href=\"http://www.wowhead.com/item=144477\">Splinters of Agronax</a>",
            "<a href=\"http://www.wowhead.com/item=142160\">Mrrgria's Favor</a>",
            "<a href=\"http://www.wowhead.com/item=136716\">Caged Horror</a>",
            "<a href=\"http://www.wowhead.com/item=151607\">Astral Alchemist Stone</a>",
            "<a href=\"http://www.wowhead.com/item=137301\">Corrupted Starlight</a>",
            "<a href=\"http://www.wowhead.com/item=140794\">Arcanogolem Digit</a>",
            "<a href=\"http://www.wowhead.com/item=133641\">Eye of Skovald</a>",
            "<a href=\"http://www.wowhead.com/item=137446\">Elementium Bomb Squirrel Generator</a>",
            "<a href=\"http://www.wowhead.com/item=140027\">Ley Spark</a>",
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
                    text: 'mean: ' + Intl.NumberFormat().format(174191),
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 174191.68333333332,
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