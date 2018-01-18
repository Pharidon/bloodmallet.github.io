Highcharts.chart('demon_hunter_havoc_beastlord', 
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
                123087,
                118940,
                107066,
                581244,
                578070,
                0,
                558074,
                0,
                78423,
                448914,
                0,
                0,
                0,
                0,
                71113,
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
                44871,
                55431,
                50367,
                0,
                0,
                31517,
                0,
                42881,
                35062,
                0,
                32179,
                14849,
                36625,
                18894,
                29004,
                40444,
                18279,
                39047,
                17326,
                23397,
                14348,
                28464,
                24109,
                26399,
                30635,
                15054,
                7563,
                20485,
                28425,
                19317,
                23735,
                33015,
                30394,
                28900,
                41845,
                27686,
                22281,
                11943,
                42471,
                23952,
                26991,
                14541,
                27598,
                13283,
                24137,
                11820,
                17447,
                0,
                6520,
                12461,
                3290,
                5262,
                0,
                9340,
                18283,
                3670,
                5497,
                585,
                0,
                10009
            ],
            name: "980"
        },
        {
            color: "#ff7f00",
            data: [
                56570,
                46508,
                47554,
                0,
                0,
                54965,
                0,
                38290,
                378505,
                0,
                24553,
                8757,
                34018,
                25617,
                35767,
                28176,
                28004,
                27883,
                22938,
                32477,
                31105,
                24499,
                35429,
                30248,
                16563,
                29857,
                27342,
                18766,
                13446,
                44693,
                23413,
                13864,
                22173,
                11616,
                13757,
                20725,
                22537,
                17300,
                13580,
                23591,
                14717,
                31558,
                9158,
                13191,
                24976,
                15194,
                11971,
                0,
                13319,
                2140,
                9443,
                14239,
                13465,
                8613,
                4487,
                1800,
                0,
                0,
                0,
                8522
            ],
            name: "970"
        },
        {
            color: "#fb9a99",
            data: [
                46109,
                47274,
                38832,
                0,
                0,
                41743,
                0,
                37962,
                0,
                0,
                22688,
                6701,
                19676,
                18719,
                19240,
                17790,
                21465,
                33107,
                36373,
                22748,
                10454,
                18280,
                15559,
                13305,
                30588,
                27142,
                24659,
                36378,
                22304,
                14978,
                24203,
                19743,
                9834,
                19718,
                31373,
                29084,
                26817,
                29590,
                15473,
                20518,
                27125,
                6961,
                34944,
                20086,
                15680,
                2937,
                12662,
                0,
                8852,
                21798,
                12512,
                5441,
                7639,
                4117,
                0,
                11025,
                0,
                25004,
                12792,
                8509
            ],
            name: "960"
        },
        {
            color: "#e31a1c",
            data: [
                46042,
                37899,
                33783,
                0,
                0,
                25599,
                0,
                27340,
                0,
                0,
                37265,
                34046,
                16758,
                25241,
                22139,
                34218,
                15435,
                30118,
                17387,
                12636,
                26617,
                26843,
                11024,
                16385,
                13657,
                21122,
                18160,
                20501,
                18347,
                23105,
                17317,
                24045,
                16415,
                20685,
                14466,
                29295,
                22639,
                4286,
                28432,
                14219,
                14760,
                23680,
                13351,
                19173,
                14288,
                3457,
                8606,
                0,
                6715,
                4316,
                0,
                6977,
                2592,
                7978,
                15589,
                3548,
                5631,
                0,
                2061,
                8748
            ],
            name: "950"
        },
        {
            color: "#b2df8a",
            data: [
                425013,
                398841,
                358149,
                0,
                0,
                20168,
                0,
                35183,
                0,
                0,
                9420,
                0,
                32577,
                21396,
                231812,
                7381,
                22966,
                12448,
                10502,
                27724,
                17878,
                21749,
                25924,
                24471,
                25943,
                23705,
                11251,
                4987,
                17646,
                21711,
                10331,
                13084,
                7706,
                13588,
                32380,
                14961,
                18001,
                19630,
                14950,
                22737,
                23869,
                23184,
                5527,
                13876,
                2250,
                12314,
                9992,
                0,
                9865,
                11926,
                15379,
                18260,
                10490,
                1612,
                12090,
                8599,
                14112,
                298,
                5162,
                5737
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
                34827,
                0,
                20918,
                0,
                0,
                19002,
                23758,
                5384,
                24019,
                0,
                21560,
                18555,
                27843,
                22439,
                19137,
                28329,
                11626,
                11386,
                23062,
                10541,
                13108,
                28772,
                26014,
                16925,
                21957,
                13742,
                19032,
                14783,
                20006,
                3021,
                3840,
                18282,
                17450,
                18531,
                15441,
                20125,
                19073,
                20701,
                3557,
                22198,
                12404,
                10284,
                16920,
                20882,
                18171,
                10161,
                1981,
                14630,
                13670,
                1307,
                7643,
                0,
                4785,
                10068,
                9445
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
                353596,
                0,
                21402,
                0,
                0,
                12233,
                13270,
                23146,
                275259,
                0,
                245163,
                20735,
                9751,
                16363,
                10439,
                8175,
                20112,
                11410,
                20740,
                29952,
                14616,
                844,
                16718,
                14210,
                17921,
                23216,
                5546,
                20098,
                10524,
                25347,
                21633,
                5831,
                8623,
                14740,
                12593,
                12565,
                15140,
                21662,
                179263,
                14674,
                4577,
                19111,
                16154,
                3228,
                7036,
                2739,
                4600,
                1409,
                3309,
                10874,
                0,
                12730,
                8826,
                0,
                5262
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
                317118,
                0,
                0,
                265083,
                317221,
                246085,
                0,
                0,
                0,
                244552,
                206274,
                240663,
                233439,
                240870,
                219942,
                232212,
                212146,
                208563,
                215237,
                229132,
                203401,
                205038,
                164378,
                185693,
                191741,
                195509,
                188776,
                145676,
                160405,
                158545,
                186109,
                142923,
                156532,
                139567,
                139383,
                139454,
                0,
                139500,
                183917,
                148517,
                204446,
                158511,
                139187,
                149226,
                134447,
                132420,
                124234,
                112428,
                122392,
                108554,
                104912,
                119670,
                -32310
            ],
            name: "910"
        }
    ],
    subtitle: {
        text: "UTC 2018-01-18 10:04 SimC build: <a href=\"https://github.com/simulationcraft/simc/commit/807590d332e8cb63f9aa86e7f423a0814c264bcb\" target=\"blank\">807590d</a>",
        useHTML: true
    },
    title: {
        text: "Demon_Hunter - Havoc - Beastlord",
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
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +15</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +20</a>",
            "<a href=\"http://www.wowhead.com/item=151963\">Forgefiend's Fabricator</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision +10</a>",
            "<a href=\"http://www.wowhead.com/item=147012\">Umbral Moonglaives</a>",
            "<a href=\"http://www.wowhead.com/item=144259\">Kil'jaeden's Burning Wish</a>",
            "<a href=\"http://www.wowhead.com/item=154172\">Aman'Thul's Vision</a>",
            "<a href=\"http://www.wowhead.com/item=142167\">Eye of Command</a>",
            "<a href=\"http://www.wowhead.com/item=141482\">Unstable Arcanocrystal</a>",
            "<a href=\"http://www.wowhead.com/item=147015\">Engine of Eradication</a>",
            "<a href=\"http://www.wowhead.com/item=152093\">Gorshalach's Legacy</a>",
            "<a href=\"http://www.wowhead.com/item=154174\">Golganneth's Vitality</a>",
            "<a href=\"http://www.wowhead.com/item=151968\">Shadow-Singed Fang</a>",
            "<a href=\"http://www.wowhead.com/item=137459\">Chaos Talisman</a>",
            "<a href=\"http://www.wowhead.com/item=140794\">Arcanogolem Digit</a>",
            "<a href=\"http://www.wowhead.com/item=142506,bonus_id=605\">Stat Stick (Mastery)</a>",
            "<a href=\"http://www.wowhead.com/item=141537\">Thrice-Accursed Compass</a>",
            "<a href=\"http://www.wowhead.com/item=147010\">Cradle of Anguish</a>",
            "<a href=\"http://www.wowhead.com/item=140796\">Entwined Elemental Foci</a>",
            "<a href=\"http://www.wowhead.com/item=139329\">Bloodthirsty Instinct</a>",
            "<a href=\"http://www.wowhead.com/item=133644\">Memento of Angerboda</a>",
            "<a href=\"http://www.wowhead.com/item=142506,bonus_id=603\">Stat Stick (Crit)</a>",
            "<a href=\"http://www.wowhead.com/item=142506,bonus_id=607\">Stat Stick (Versatility)</a>",
            "<a href=\"http://www.wowhead.com/item=142506,bonus_id=604\">Stat Stick (Haste)</a>",
            "<a href=\"http://www.wowhead.com/item=142773\">PVP Badge of Conquest</a>",
            "<a href=\"http://www.wowhead.com/item=133647\">Gift of Radiance</a>",
            "<a href=\"http://www.wowhead.com/item=151190\">Specter of Betrayal</a>",
            "<a href=\"http://www.wowhead.com/item=137419\">Chrono Shard</a>",
            "<a href=\"http://www.wowhead.com/item=137312\">Nightmare Egg Shell</a>",
            "<a href=\"http://www.wowhead.com/item=137406\">Terrorbound Nexus</a>",
            "<a href=\"http://www.wowhead.com/item=142662\">PVP Insignia of Conquest</a>",
            "<a href=\"http://www.wowhead.com/item=140806\">Convergence of Fates</a>",
            "<a href=\"http://www.wowhead.com/item=141585\">Six-Feather Fan</a>",
            "<a href=\"http://www.wowhead.com/item=140802\">Nightblooming Frond</a>",
            "<a href=\"http://www.wowhead.com/item=133642\">Horn of Valor</a>",
            "<a href=\"http://www.wowhead.com/item=147011\">Vial of Ceaseless Toxins</a>",
            "<a href=\"http://www.wowhead.com/item=151307\">Void Stalker's Contract</a>",
            "<a href=\"http://www.wowhead.com/item=142159\">Bloodstained Handkerchief</a>",
            "<a href=\"http://www.wowhead.com/item=137537\">Tirathon's Betrayal</a>",
            "<a href=\"http://www.wowhead.com/item=137373\">Tempered Egg of Serpentrix</a>",
            "<a href=\"http://www.wowhead.com/item=151964\">Seeping Scourgewing</a>",
            "<a href=\"http://www.wowhead.com/item=144477\">Splinters of Agronax</a>",
            "<a href=\"http://www.wowhead.com/item=139334\">Nature's Call</a>",
            "<a href=\"http://www.wowhead.com/item=137357\">Mark of Dargrul</a>",
            "<a href=\"http://www.wowhead.com/item=151607\">Astral Alchemist Stone</a>",
            "<a href=\"http://www.wowhead.com/item=137439\">Tiny Oozeling in a Jar</a>",
            "<a href=\"http://www.wowhead.com/item=147009\">Infernal Cinders</a>",
            "<a href=\"http://www.wowhead.com/item=140026\">The Devilsaur's Bite</a>",
            "<a href=\"http://www.wowhead.com/item=139325\">Spontaneous Appendages</a>",
            "<a href=\"http://www.wowhead.com/item=142164\">Toe Knee's Promise</a>",
            "<a href=\"http://www.wowhead.com/item=137486\">Windscar Whetstone</a>",
            "<a href=\"http://www.wowhead.com/item=137369\">Giant Ornamental Pearl</a>",
            "<a href=\"http://www.wowhead.com/item=137539\">Faulty Countermeasure</a>",
            "<a href=\"http://www.wowhead.com/item=136715\">Spiked Counterweight</a>",
            "<a href=\"http://www.wowhead.com/item=139320\">Ravaged Seed Pod</a>",
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
                    text: 'mean: ' + Intl.NumberFormat().format(341448),
                    verticalAlign: "bottom",
                    x: 10,
                    y: -23
                },
                value: 341448.61666666664,
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