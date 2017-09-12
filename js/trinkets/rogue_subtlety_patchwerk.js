Highcharts.chart('rogue_subtlety_patchwerk', 
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
            color: "#ffeb3b",
            data: [
                0,
                144562,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
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
            name: "970"
        },
        {
            color: "#00E676",
            data: [
                13928,
                0,
                10052,
                9625,
                6270,
                10671,
                8322,
                8508,
                8585,
                9795,
                9679,
                10031,
                8595,
                9698,
                9246,
                7198,
                8036,
                6757,
                8035,
                9074,
                9862,
                8387,
                6239,
                9040,
                7867,
                8311,
                7773,
                4446,
                0,
                6126,
                8149,
                8536,
                5944,
                6909,
                0,
                0,
                3188,
                4547,
                4062,
                4253,
                1360,
                5678,
                3827,
                2759,
                2772,
                2485,
                876,
                2030,
                1778,
                3189
            ],
            name: "940"
        },
        {
            color: "#db843d",
            data: [
                14228,
                0,
                11356,
                9044,
                8804,
                9219,
                9204,
                7598,
                9192,
                8319,
                7687,
                6832,
                8697,
                7415,
                6516,
                7585,
                7590,
                8299,
                6861,
                7965,
                7398,
                6137,
                7582,
                8210,
                6869,
                6594,
                8405,
                3614,
                6451,
                6988,
                7111,
                5036,
                6451,
                6110,
                0,
                0,
                6453,
                2650,
                2948,
                4325,
                2681,
                6696,
                2329,
                3257,
                2632,
                3578,
                2873,
                2084,
                0,
                827
            ],
            name: "930"
        },
        {
            color: "#4198af",
            data: [
                9735,
                0,
                8030,
                6531,
                5579,
                9075,
                5350,
                7153,
                5665,
                9279,
                6416,
                5377,
                5507,
                6403,
                7264,
                6534,
                6785,
                5064,
                6760,
                6590,
                6603,
                5902,
                4964,
                6660,
                6111,
                6393,
                6370,
                3254,
                7669,
                5373,
                6725,
                6444,
                5876,
                5147,
                0,
                0,
                5349,
                3543,
                4280,
                2430,
                2504,
                6049,
                646,
                1064,
                2037,
                2808,
                1296,
                809,
                735,
                850
            ],
            name: "920"
        },
        {
            color: "#71588f",
            data: [
                12519,
                0,
                9216,
                7122,
                5241,
                7804,
                6738,
                5669,
                7430,
                6810,
                5954,
                8247,
                8222,
                6529,
                6775,
                6531,
                5202,
                6474,
                5341,
                8035,
                7174,
                6311,
                6780,
                6289,
                6644,
                5672,
                7975,
                2797,
                5898,
                5291,
                4662,
                4655,
                5158,
                6239,
                0,
                0,
                1903,
                2893,
                1911,
                3152,
                1255,
                6976,
                4066,
                1815,
                1514,
                2478,
                1777,
                3329,
                678,
                2622
            ],
            name: "910"
        },
        {
            color: "#89a54e",
            data: [
                106876,
                0,
                8018,
                7480,
                6194,
                6250,
                5890,
                6975,
                4989,
                5509,
                7122,
                6189,
                5254,
                6023,
                5232,
                6172,
                5983,
                6144,
                5979,
                6201,
                5562,
                4935,
                5700,
                6520,
                3654,
                6175,
                4079,
                2866,
                4653,
                3471,
                7917,
                7074,
                3787,
                3434,
                6508,
                6536,
                3778,
                2542,
                4230,
                3184,
                2830,
                3755,
                595,
                1988,
                1444,
                1829,
                1717,
                558,
                1827,
                1739
            ],
            name: "900"
        },
        {
            color: "#aa4643",
            data: [
                0,
                0,
                6553,
                3758,
                2045,
                73964,
                6653,
                76514,
                5895,
                6794,
                3336,
                6755,
                70198,
                4034,
                5048,
                3572,
                3904,
                68214,
                4697,
                4514,
                5499,
                5552,
                6235,
                4801,
                6169,
                4517,
                5252,
                3104,
                68039,
                4682,
                3928,
                2893,
                4872,
                59420,
                5007,
                3089,
                3740,
                2080,
                82,
                1133,
                1483,
                4579,
                3511,
                1021,
                2026,
                2921,
                1700,
                1905,
                0,
                173
            ],
            name: "890"
        },
        {
            color: "#4572a7",
            data: [
                0,
                0,
                72670,
                79237,
                83461,
                0,
                70910,
                0,
                68019,
                61573,
                66457,
                63164,
                0,
                65884,
                65667,
                67776,
                64892,
                0,
                62860,
                56060,
                54758,
                58232,
                57652,
                53467,
                57480,
                56787,
                54051,
                73185,
                0,
                58939,
                51993,
                54745,
                57087,
                0,
                68125,
                64568,
                47792,
                44253,
                41083,
                37964,
                39789,
                16839,
                32519,
                33420,
                32349,
                27330,
                27971,
                22506,
                27532,
                19971
            ],
            name: "880"
        }
    ],
    subtitle: {
        text: "2017-09-08 02:02 SimC build: 43201b2"
    },
    title: {
        text: "Rogue - Subtlety DfA - Patchwerk"
    },
    tooltip: {
        backgroundColor: "#eee",
        borderColor: "#bbb",
        formatter: function() {        var s = '<b>'+ this.x +'</b>';        var cumulative_amount = 0;        for (var i = this.points.length - 1 ; i >= 0 ; i--) {            cumulative_amount += this.points[i].y;            if (this.points[i].y !== 0){                s += '<br/><span style=\"color: ' + this.points[i].series.color + '; font-weight: bold;\">' + this.points[i].series.name +'</span>: ' + cumulative_amount;            }        }        return s;      },
        headerFormat: "<b>{point.x}</b>",
        shared: true,
        style: {
            color: "black"
        }
    },
    xAxis: {
        categories: [
            "Specter of Betrayal",
            "Kil'jaeden's Burning Wish",
            "Nightblooming Frond",
            "Eye of Command",
            "Convergence of Fates",
            "Vial of Ceaseless Toxins",
            "Stat Stick (Mastery)",
            "Engine of Eradication",
            "Stat Stick (Versatility)",
            "Six-Feather Fan",
            "Entwined Elemental Foci",
            "Chaos Talisman",
            "Cradle of Anguish",
            "Memento of Angerboda",
            "Thrice-Accursed Compass",
            "Stat Stick (Crit)",
            "Bloodthirsty Instinct",
            "Umbral Moonglaives",
            "Gift of Radiance",
            "Arcanogolem Digit",
            "Bloodstained Handkerchief",
            "PVP Badge of Conquest",
            "Stat Stick (Haste)",
            "Void Stalker's Contract",
            "Chrono Shard",
            "Nightmare Egg Shell",
            "Tirathon's Betrayal",
            "Unstable Arcanocrystal",
            "Astral Alchemist Stone",
            "Horn of Valor",
            "Tempered Egg of Serpentrix",
            "Splinters of Agronax",
            "PVP Insignia of Conquest",
            "Infernal Cinders",
            "Darkmoon Deck: Dominion",
            "Infernal Alchemist Stone",
            "The Devilsaur's Bite",
            "Spontaneous Appendages",
            "Terrorbound Nexus",
            "Faulty Countermeasure",
            "Nature's Call",
            "Draught of Souls",
            "Windscar Whetstone",
            "Tiny Oozeling in a Jar",
            "Mark of Dargrul",
            "Spiked Counterweight",
            "Giant Ornamental Pearl",
            "Toe Knee's Promise",
            "Ley Spark",
            "Ravaged Seed Pod"
        ]
    },
    yAxis: {
        labels: {
            enabled: false
        },
        min: 0,
        plotLines: [
            {
                color: "#1E90FF",
                label: {
                    align: "left",
                    rotation: -90,
                    style: {
                        color: "#1E90FF"
                    },
                    text: "mean at 87710",
                    verticalAlign: "bottom",
                    x: 10,
                    y: -25
                },
                value: 87710.94,
                width: 2,
                zIndex: 2
            }
        ],
        stackLabels: {
            enabled: false,
            formatter: function() {            /* I need to figure out how to get the mean value here,            ** to allow the percent diff to mean as label            ** console.log(this); */            return;          },
            style: {
                color: (Highcharts.theme && Highcharts.theme.textColor) || 'white',
                fontWeight: "bold"
            }
        },
        title: {
            text: "\u0394 Damage per second"
        }
    }
});