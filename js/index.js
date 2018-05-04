var template = `<tr>
  <td class="version"></td>
  <td class="cu"></td>
  <td class="fileversion"></td>
  <td class="databaseversion"></td>
  <td><a class="info">Info</a></td>
  <td><a class="download">Download</a></td>
</tr>`;

var options = {
  valueNames: ['version', 'cu', 'databaseversion', 'fileversion', { name: 'info', attr: 'href' }, { name: 'download', attr: 'href' }],
  item: template
};

var versionList = new List('users', options);
versionList.add({
  version: "2018",
  info: "https://support.microsoft.com/en-us/help/4078580",
  cu: "CU2",
  fileversion: "11.0.20348",
  databaseversion: "",
  download: "https://www.microsoft.com/en-us/download/details.aspx?id=56517"
});

versionList.add({
  version: "2018",
  info: "https://support.microsoft.com/en-us/help/4058601",
  cu: "CU1",
  fileversion: "11.0.19846",
  databaseversion: "",
  download: "https://www.microsoft.com/en-us/download/details.aspx?id=56419"
});

versionList.add({
  version: "2018",
  info: "https://mbs.microsoft.com/partnersource/global/deployment/downloads/product-releases/msdnav2018download",
  cu: "RTM",
  fileversion: "11.0.19394",
  databaseversion: "100550",
  download: "https://mbs.microsoft.com/partnersource/global/deployment/downloads/product-releases/msdnav2018download"
});

versionList.add({
  version: "2017",
  info: "https://support.microsoft.com/en-us/help/4078579",
  cu: "CU15",
  fileversion: "10.0.20333",
  databaseversion: "",
  download: "https://www.microsoft.com/en-us/download/details.aspx?id=56520"
});

versionList.add({
  version: "2017",
  info: "https://support.microsoft.com/en-us/help/4058600",
  cu: "CU14",
  fileversion: "10.0.19831",
  databaseversion: "",
  download: "https://www.microsoft.com/en-us/download/details.aspx?id=56411"
});

versionList.add({
  version: "2017",
  info: "https://support.microsoft.com/en-us/help/4055892",
  cu: "CU13",
  fileversion: "10.0.19421",
  databaseversion: "91485",
  download: "https://www.microsoft.com/en-us/download/details.aspx?id=56279"
});

versionList.add({
  version: "2017",
  info: "https://support.microsoft.com/en-us/help/4052195",
  cu: "CU12",
  fileversion: "10.0.18976",
  databaseversion: "91485",
  download: "https://www.microsoft.com/en-us/download/details.aspx?id=56146"
});

versionList.add({
  version: "2017",
  info: "https://support.microsoft.com/en-us/help/4045671",
  cu: "CU11",
  fileversion: "10.0.18609",
  databaseversion: "91484",
  download: "https://www.microsoft.com/en-us/download/details.aspx?id=56038"
});

versionList.add({
  version: "2017",
  info: "https://support.microsoft.com/en-us/help/4040570",
  cu: "CU10",
  fileversion: "10.0.18197",
  databaseversion: "91483",
  download: "https://www.microsoft.com/en-US/download/details.aspx?id=55797"
});

versionList.add({
  version: "2017",
  info: "https://support.microsoft.com/en-us/help/4037309",
  cu: "CU9",
  fileversion: "10.0.17972",
  databaseversion: "91483",
  download: "https://www.microsoft.com/en-us/download/details.aspx?id=55749"
});

versionList.add({
  version: "2017",
  info: "https://support.microsoft.com/en-us/help/4034492",
  cu: "CU8",
  fileversion: "10.0.17501",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2017",
  info: "https://support.microsoft.com/en-us/help/4024642",
  cu: "CU7",
  fileversion: "10.0.16996",
  databaseversion: "91481",
  download: ""
});

versionList.add({
  version: "2017",
  info: "https://support.microsoft.com/en-us/help/4021396",
  cu: "CU6",
  fileversion: "10.0.16585",
  databaseversion: "91481",
  download: ""
});

versionList.add({
  version: "2017",
  info: "https://support.microsoft.com/en-us/help/4018437",
  cu: "CU5",
  fileversion: "10.0.16177",
  databaseversion: "91481",
  download: ""
});

versionList.add({
  version: "2017",
  info: "https://support.microsoft.com/en-us/help/4014101",
  cu: "CU4",
  fileversion: "10.0.15601",
  databaseversion: "91470",
  download: ""
});

versionList.add({
  version: "2017",
  info: "https://support.microsoft.com/en-us/help/4011763",
  cu: "CU3",
  fileversion: "10.0.15140",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2017",
  info: "https://support.microsoft.com/en-us/help/3216190",
  cu: "CU2",
  fileversion: "10.0.15052",
  databaseversion: "91470",
  download: ""
});

versionList.add({
  version: "2017",
  info: "https://support.microsoft.com/en-us/help/3209071",
  cu: "CU1",
  fileversion: "10.0.14199",
  databaseversion: "91470",
  download: ""
});

versionList.add({
  version: "2017",
  info: "https://mbs.microsoft.com/partnersource/global/deployment/downloads/product-releases/msdnav2017download",
  cu: "RTM",
  fileversion: "10.0.13682",
  databaseversion: "91470",
  download: "https://mbs.microsoft.com/partnersource/global/deployment/downloads/product-releases/msdnav2017download"
});

versionList.add({
  version: "2016",
  info: "https://support.microsoft.com/en-us/help/4055891",
  cu: "CU28",
  fileversion: "9.0.49968",
  databaseversion: "",
  download: "https://www.microsoft.com/en-us/download/details.aspx?id=56515"
});

versionList.add({
  version: "2016",
  info: "https://support.microsoft.com/en-us/help/4078578",
  cu: "CU27",
  fileversion: "9.0.56410",
  databaseversion: "",
  download: "https://www.microsoft.com/en-us/download/details.aspx?id=56410"
});

versionList.add({
  version: "2016",
  info: "https://support.microsoft.com/en-us/help/4055891",
  cu: "CU26",
  fileversion: "9.0.49575",
  databaseversion: "80214",
  download: ""
});

versionList.add({
  version: "2016",
  info: "https://support.microsoft.com/en-us/help/4052194",
  cu: "CU25",
  fileversion: "9.0.49424",
  databaseversion: "80214",
  download: ""
});

versionList.add({
  version: "2016",
  info: "https://support.microsoft.com/en-us/help/4045670",
  cu: "CU24",
  fileversion: "9.0.49326",
  databaseversion: "80213",
  download: ""
});

versionList.add({
  version: "2016",
  info: "https://support.microsoft.com/en-us/help/4040571",
  cu: "CU23",
  fileversion: "9.0.49146",
  databaseversion: "80212",
  download: ""
});

versionList.add({
  version: "2016",
  info: "https://support.microsoft.com/en-us/help/4037308",
  cu: "CU22",
  fileversion: "9.0.48992",
  databaseversion: "80212",
  download: ""
});

versionList.add({
  version: "2016",
  info: "https://support.microsoft.com/en-us/help/4034491",
  cu: "CU21",
  fileversion: "9.0.48822",
  databaseversion: "80212",
  download: ""
});

versionList.add({
  version: "2016",
  info: "https://support.microsoft.com/en-us/help/4024641",
  cu: "CU20",
  fileversion: "9.0.48628",
  databaseversion: "80212",
  download: ""
});

versionList.add({
  version: "2016",
  info: "https://support.microsoft.com/en-us/help/4021395",
  cu: "CU19",
  fileversion: "9.0.48466",
  databaseversion: "80212",
  download: ""
});

versionList.add({
  version: "2016",
  info: "https://support.microsoft.com/en-us/help/4018438",
  cu: "CU18",
  fileversion: "9.0.48316",
  databaseversion: "80212",
  download: ""
});

versionList.add({
  version: "2016",
  info: "https://support.microsoft.com/en-us/help/4014100",
  cu: "CU17",
  fileversion: "9.0.48067",
  databaseversion: "80212",
  download: ""
});

versionList.add({
  version: "2016",
  info: "https://support.microsoft.com/en-us/help/4011762",
  cu: "CU16",
  fileversion: "9.0.47864",
  databaseversion: "80212",
  download: ""
});

versionList.add({
  version: "2016",
  info: "https://support.microsoft.com/en-us/help/3216191",
  cu: "CU15",
  fileversion: "9.0.47838",
  databaseversion: "80212",
  download: ""
});

versionList.add({
  version: "2016",
  info: "https://support.microsoft.com/en-us/help/3209072",
  cu: "CU14",
  fileversion: "9.0.47444",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2016",
  info: "https://support.microsoft.com/en-us/help/3202891",
  cu: "CU13",
  fileversion: "9.0.47256",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2016",
  info: "https://support.microsoft.com/en-us/help/3193868",
  cu: "CU12",
  fileversion: "9.0.47042",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2016",
  info: "https://support.microsoft.com/en-us/help/3188240",
  cu: "CU11",
  fileversion: "9.0.46773",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2016",
  info: "https://support.microsoft.com/en-us/help/3182131",
  cu: "CU10",
  fileversion: "9.0.46621",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2016",
  info: "https://support.microsoft.com/en-us/help/3172549",
  cu: "CU9",
  fileversion: "9.0.46290",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2016",
  info: "https://support.microsoft.com/en-us/help/3166287",
  cu: "CU8",
  fileversion: "9.0.46045",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2016",
  info: "https://support.microsoft.com/en-us/help/3157492",
  cu: "CU7",
  fileversion: "9.0.45834",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2016",
  info: "https://support.microsoft.com/en-us/help/3151017",
  cu: "CU6",
  fileversion: "9.0.45480",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2016",
  info: "https://support.microsoft.com/en-us/help/3145855",
  cu: "CU5",
  fileversion: "9.0.45243",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2016",
  info: "https://support.microsoft.com/en-us/help/3139364",
  cu: "CU4",
  fileversion: "9.0.44974",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2016",
  info: "https://support.microsoft.com/en-us/help/3130298",
  cu: "CU3",
  fileversion: "9.0.44365",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2016",
  info: "https://support.microsoft.com/en-us/help/3121038",
  cu: "CU2",
  fileversion: "9.0.43897",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2016",
  info: "https://support.microsoft.com/en-us/help/3106089",
  cu: "CU1",
  fileversion: "9.0.43402",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2015",
  info: "https://support.microsoft.com/en-us/help/4078577",
  cu: "CU40",
  fileversion: "8.0.49576",
  databaseversion: "",
  download: "https://www.microsoft.com/en-us/download/details.aspx?id=56516"
});

versionList.add({
  version: "2015",
  info: "https://support.microsoft.com/en-us/help/4058598",
  cu: "CU39",
  fileversion: "8.0.49736",
  databaseversion: "",
  download: "https://www.microsoft.com/en-us/download/details.aspx?id=56413"
});

versionList.add({
  version: "2015",
  info: "https://support.microsoft.com/en-us/help/4055890",
  cu: "CU38",
  fileversion: "8.0.49576",
  databaseversion: "71063",
  download: "https://www.microsoft.com/en-us/download/details.aspx?id=56274"
});

versionList.add({
  version: "2015",
  info: "https://support.microsoft.com/en-us/help/4052193",
  cu: "CU37",
  fileversion: "8.0.49425",
  databaseversion: "71063",
  download: "https://www.microsoft.com/en-us/download/details.aspx?id=56148"
});

versionList.add({
  version: "2015",
  info: "https://support.microsoft.com/en-us/help/4045669",
  cu: "CU36",
  fileversion: "8.0.49321",
  databaseversion: "71063",
  download: "https://www.microsoft.com/en-us/download/details.aspx?id=56036"
});

versionList.add({
  version: "2015",
  info: "https://support.microsoft.com/en-us/help/4040569",
  cu: "CU35",
  fileversion: "8.0.49144",
  databaseversion: "71063",
  download: "https://www.microsoft.com/en-us/download/details.aspx?id=55796"
});

versionList.add({
  version: "2015",
  info: "https://support.microsoft.com/en-us/help/4037307",
  cu: "CU34",
  fileversion: "8.0.49000",
  databaseversion: "71063",
  download: "https://www.microsoft.com/en-us/download/details.aspx?id=55717"
});

versionList.add({
  version: "2015",
  info: "https://support.microsoft.com/en-us/help/4034490",
  cu: "CU33",
  fileversion: "8.0.48838",
  databaseversion: "71063",
  download: "https://www.microsoft.com/en-us/download/details.aspx?id=55578"
});

versionList.add({
  version: "2015",
  info: "https://support.microsoft.com/en-us/help/4024640",
  cu: "CU32",
  fileversion: "8.0.48614",
  databaseversion: "71063",
  download: "https://www.microsoft.com/en-us/download/details.aspx?id=55275"
});

versionList.add({
  version: "2015",
  info: "https://support.microsoft.com/en-us/help/4021394",
  cu: "CU31",
  fileversion: "8.0.48467",
  databaseversion: "71063",
  download: "https://www.microsoft.com/en-us/download/details.aspx?id=55181"
});

versionList.add({
  version: "2015",
  info: "https://support.microsoft.com/en-us/help/4018439",
  cu: "CU30",
  fileversion: "8.0.48308",
  databaseversion: "71063",
  download: "https://www.microsoft.com/en-us/download/details.aspx?id=55036"
});

versionList.add({
  version: "2015",
  info: "https://support.microsoft.com/en-us/help/4014099",
  cu: "CU29",
  fileversion: "8.0.48062",
  databaseversion: "71063",
  download: "https://www.microsoft.com/en-us/download/details.aspx?id=54801"
});

versionList.add({
  version: "2015",
  info: "https://support.microsoft.com/en-us/help/4011764",
  cu: "CU28",
  fileversion: "8.0.47871",
  databaseversion: "71063",
  download: "https://www.microsoft.com/en-us/download/details.aspx?id=54695"
});

versionList.add({
  version: "2015",
  info: "https://support.microsoft.com/en-us/help/3216192",
  cu: "CU27",
  fileversion: "8.0.47665",
  databaseversion: "71063",
  download: "https://www.microsoft.com/en-us/download/details.aspx?id=54586"
});

versionList.add({
  version: "2015",
  info: "https://support.microsoft.com/en-us/help/3209073",
  cu: "CU26",
  fileversion: "8.0.47438",
  databaseversion: "71063",
  download: "https://www.microsoft.com/en-us/download/details.aspx?id=54314"
});

versionList.add({
  version: "2015",
  info: "https://support.microsoft.com/en-us/help/3202890",
  cu: "CU25",
  fileversion: "8.0.47254",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2015",
  info: "https://support.microsoft.com/en-us/help/3193867",
  cu: "CU24",
  fileversion: "8.0.47039",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2015",
  info: "https://support.microsoft.com/en-us/help/3188239",
  cu: "CU23",
  fileversion: "8.0.46765",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2015",
  info: "https://support.microsoft.com/en-us/help/3182130",
  cu: "CU22",
  fileversion: "8.0.46580",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2015",
  info: "https://support.microsoft.com/en-us/help/3172546",
  cu: "CU21",
  fileversion: "8.0.46293",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2015",
  info: "https://support.microsoft.com/en-us/help/3166286",
  cu: "CU20",
  fileversion: "8.0.46054",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2015",
  info: "https://support.microsoft.com/en-us/help/3157490",
  cu: "CU19",
  fileversion: "8.0.45813",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2015",
  info: "https://support.microsoft.com/en-us/help/3151020",
  cu: "CU18",
  fileversion: "8.0.45483",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2015",
  info: "https://support.microsoft.com/en-us/help/3145854",
  cu: "CU17",
  fileversion: "8.0.45244",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2015",
  info: "https://support.microsoft.com/en-us/help/3138205",
  cu: "CU16",
  fileversion: "8.0.44973",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2015",
  info: "https://support.microsoft.com/en-us/help/3130292",
  cu: "CU15",
  fileversion: "8.0.44363",
  databaseversion: "71061",
  download: ""
});

versionList.add({
  version: "2015",
  info: "https://support.microsoft.com/en-us/help/3121037",
  cu: "CU14",
  fileversion: "8.0.43887",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2015",
  info: "https://support.microsoft.com/en-us/help/3106088",
  cu: "CU13",
  fileversion: "8.0.43389",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2015",
  info: "https://support.microsoft.com/en-us/help/3097767",
  cu: "CU12",
  fileversion: "8.0.42951",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2015",
  info: "https://support.microsoft.com/en-us/help/3091812",
  cu: "CU11",
  fileversion: "8.0.42603",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2015",
  info: "https://support.microsoft.com/en-us/help/3086434",
  cu: "CU10",
  fileversion: "8.0.42222",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2015",
  info: "https://support.microsoft.com/en-us/help/3075726",
  cu: "CU9",
  fileversion: "8.0.41779",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2015",
  info: "https://support.microsoft.com/en-us/help/3069272",
  cu: "CU8",
  fileversion: "8.0.41370",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2015",
  info: "https://support.microsoft.com/en-us/help/3058000",
  cu: "CU7",
  fileversion: "8.0.40938",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2015",
  info: "https://support.microsoft.com/en-us/help/3052226",
  cu: "CU6",
  fileversion: "8.0.40459",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2015",
  info: "https://support.microsoft.com/en-us/help/3039824",
  cu: "CU5",
  fileversion: "8.0.40262",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2015",
  info: "https://support.microsoft.com/en-us/help/3035986",
  cu: "CU4",
  fileversion: "8.0.39663",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2015",
  info: "https://support.microsoft.com/en-us/help/3024901",
  cu: "CU3",
  fileversion: "8.0.39368",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2015",
  info: "https://support.microsoft.com/en-us/help/3020885",
  cu: "CU2",
  fileversion: "8.0.38798",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2015",
  info: "https://support.microsoft.com/en-us/help/3013215",
  cu: "CU1",
  fileversion: "8.0.38457",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013 R2",
  info: "https://support.microsoft.com/help/4055889",
  cu: "CU50",
  fileversion: "7.1.49579",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013 R2",
  info: "https://support.microsoft.com/help/4052192",
  cu: "CU49",
  fileversion: "7.1.49431",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013 R2",
  info: "https://support.microsoft.com/help/4045668",
  cu: "CU48",
  fileversion: "7.1.49317",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013 R2",
  info: "https://support.microsoft.com/help/4040568",
  cu: "CU47",
  fileversion: "7.1.49153",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013 R2",
  info: "https://support.microsoft.com/help/4037306",
  cu: "CU46",
  fileversion: "7.1.48993",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013 R2",
  info: "https://support.microsoft.com/help/4034489",
  cu: "CU45",
  fileversion: "7.1.48825",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013 R2",
  info: "https://support.microsoft.com/help/4024639",
  cu: "CU44",
  fileversion: "7.1.48616",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013 R2",
  info: "https://support.microsoft.com/help/4021393",
  cu: "CU43",
  fileversion: "7.1.48469",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013 R2",
  info: "https://support.microsoft.com/help/4018440",
  cu: "CU42",
  fileversion: "7.1.48311",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013 R2",
  info: "https://support.microsoft.com/help/4014098",
  cu: "CU41",
  fileversion: "7.1.48068",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013 R2",
  info: "https://support.microsoft.com/help/4011766",
  cu: "CU40",
  fileversion: "7.1.47881",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013 R2",
  info: "https://support.microsoft.com/help/3216194",
  cu: "CU39",
  fileversion: "7.1.47662",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013 R2",
  info: "https://support.microsoft.com/help/3209074",
  cu: "CU38",
  fileversion: "7.1.47442",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013 R2",
  info: "https://support.microsoft.com/help/3202886",
  cu: "CU37",
  fileversion: "7.1.47259",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013 R2",
  info: "https://support.microsoft.com/help/3193866",
  cu: "CU36",
  fileversion: "7.1.47043",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013 R2",
  info: "https://support.microsoft.com/help/3188238",
  cu: "CU35",
  fileversion: "7.1.46774",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013 R2",
  info: "https://support.microsoft.com/help/3182128",
  cu: "CU34",
  fileversion: "7.1.46577",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013 R2",
  info: "https://support.microsoft.com/help/3172538",
  cu: "CU33",
  fileversion: "7.1.46296",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013 R2",
  info: "https://support.microsoft.com/help/3166278",
  cu: "CU32",
  fileversion: "7.1.46057",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013 R2",
  info: "https://support.microsoft.com/help/3157488",
  cu: "CU31",
  fileversion: "7.1.45822",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013 R2",
  info: "https://support.microsoft.com/help/3151021",
  cu: "CU30",
  fileversion: "7.1.45478",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013 R2",
  info: "https://support.microsoft.com/help/3145852",
  cu: "CU29",
  fileversion: "7.1.45254",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013 R2",
  info: "https://support.microsoft.com/help/3138204",
  cu: "CU28",
  fileversion: "7.1.44970",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013 R2",
  info: "https://support.microsoft.com/help/3130282",
  cu: "CU27",
  fileversion: "7.1.44366",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013 R2",
  info: "https://support.microsoft.com/help/3121033",
  cu: "CU26",
  fileversion: "7.1.43896",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013 R2",
  info: "https://support.microsoft.com/help/3106087",
  cu: "CU25",
  fileversion: "7.1.43391",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013 R2",
  info: "https://support.microsoft.com/help/3097766",
  cu: "CU24",
  fileversion: "7.1.42950",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013 R2",
  info: "https://support.microsoft.com/help/3091811",
  cu: "CU23",
  fileversion: "7.1.42610",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013 R2",
  info: "https://support.microsoft.com/help/3084775",
  cu: "CU22",
  fileversion: "7.1.42221",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013 R2",
  info: "https://support.microsoft.com/help/3075724",
  cu: "CU21",
  fileversion: "7.1.41768",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013 R2",
  info: "https://support.microsoft.com/help/3069271",
  cu: "CU20",
  fileversion: "7.1.41371",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013 R2",
  info: "https://support.microsoft.com/help/3058010",
  cu: "CU19",
  fileversion: "7.1.40941",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013 R2",
  info: "https://support.microsoft.com/help/3052269",
  cu: "CU18",
  fileversion: "7.1.40452",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013 R2",
  info: "https://support.microsoft.com/help/3039826",
  cu: "CU17",
  fileversion: "7.1.40076",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013 R2",
  info: "https://support.microsoft.com/help/3035983",
  cu: "CU16",
  fileversion: "7.1.39665",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013 R2",
  info: "https://support.microsoft.com/help/3024898",
  cu: "CU15",
  fileversion: "7.1.39354",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013 R2",
  info: "https://support.microsoft.com/help/3020884",
  cu: "CU14",
  fileversion: "7.1.38801",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013 R2",
  info: "https://support.microsoft.com/help/3013214",
  cu: "CU13",
  fileversion: "7.1.38455",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013 R2",
  info: "https://support.microsoft.com/help/3000199",
  cu: "CU12",
  fileversion: "7.1.38053",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013 R2",
  info: "https://support.microsoft.com/help/2992495",
  cu: "CU11",
  fileversion: "7.1.37799",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013 R2",
  info: "https://support.microsoft.com/help/2984452",
  cu: "CU10",
  fileversion: "7.1.37563",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013 R2",
  info: "https://support.microsoft.com/help/2977473",
  cu: "CU9",
  fileversion: "7.1.37221",
  databaseversion: "70730",
  download: ""
});

versionList.add({
  version: "2013 R2",
  info: "https://support.microsoft.com/help/2971746",
  cu: "CU8",
  fileversion: "7.1.36897",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013 R2",
  info: "https://support.microsoft.com/help/2964528",
  cu: "CU7",
  fileversion: "7.1.36703",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013 R2",
  info: "https://support.microsoft.com/help/2955941",
  cu: "CU6",
  fileversion: "7.1.36366",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013 R2",
  info: "https://support.microsoft.com/help/2937999",
  cu: "CU5",
  fileversion: "7.1.36281",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013 R2",
  info: "https://support.microsoft.com/help/2930617",
  cu: "CU4",
  fileversion: "7.1.36078",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013 R2",
  info: "https://support.microsoft.com/help/2918538",
  cu: "CU3",
  fileversion: "7.1.36035",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013 R2",
  info: "https://support.microsoft.com/help/2913982",
  cu: "CU2",
  fileversion: "7.1.35800",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013 R2",
  info: "https://support.microsoft.com/help/2901573",
  cu: "CU1",
  fileversion: "7.1.35701",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013",
  info: "https://support.microsoft.com/help/4055888",
  cu: "CU57",
  fileversion: "7.0.49578",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013",
  info: "https://support.microsoft.com/help/4052191",
  cu: "CU56",
  fileversion: "7.0.49426",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013",
  info: "https://support.microsoft.com/help/4045667",
  cu: "CU55",
  fileversion: "7.0.49316",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013",
  info: "https://support.microsoft.com/help/4040567",
  cu: "CU54",
  fileversion: "7.0.49147",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013",
  info: "https://support.microsoft.com/help/4037305",
  cu: "CU53",
  fileversion: "7.0.48967",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013",
  info: "https://support.microsoft.com/help/4034488",
  cu: "CU52",
  fileversion: "7.0.48824",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013",
  info: "https://support.microsoft.com/help/4024638",
  cu: "CU51",
  fileversion: "7.0.48618",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013",
  info: "https://support.microsoft.com/help/4021392",
  cu: "CU50",
  fileversion: "7.0.48468",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013",
  info: "https://support.microsoft.com/help/4018441",
  cu: "CU49",
  fileversion: "7.0.48310",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013",
  info: "https://support.microsoft.com/help/4014048",
  cu: "CU48",
  fileversion: "7.0.48066",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013",
  info: "https://support.microsoft.com/help/4011765",
  cu: "CU47",
  fileversion: "7.0.47880",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013",
  info: "https://support.microsoft.com/help/3216196",
  cu: "CU46",
  fileversion: "7.0.47667",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013",
  info: "https://support.microsoft.com/help/3209075",
  cu: "CU45",
  fileversion: "7.0.47432",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013",
  info: "https://support.microsoft.com/help/3202888",
  cu: "CU44",
  fileversion: "7.0.47258",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013",
  info: "https://support.microsoft.com/help/3193864",
  cu: "CU43",
  fileversion: "7.0.47058",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013",
  info: "https://support.microsoft.com/help/3188237",
  cu: "CU42",
  fileversion: "7.0.46772",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013",
  info: "https://support.microsoft.com/help/3182126",
  cu: "CU41",
  fileversion: "7.0.46576",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013",
  info: "https://support.microsoft.com/help/3172331",
  cu: "CU40",
  fileversion: "7.0.46292",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013",
  info: "https://support.microsoft.com/help/3166277",
  cu: "CU39",
  fileversion: "7.0.46056",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013",
  info: "https://support.microsoft.com/help/3157486",
  cu: "CU38",
  fileversion: "7.0.45787",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013",
  info: "https://support.microsoft.com/help/3151023",
  cu: "CU37",
  fileversion: "7.0.45477",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013",
  info: "https://support.microsoft.com/help/3145849",
  cu: "CU36",
  fileversion: "7.0.45241",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013",
  info: "https://support.microsoft.com/help/3138201",
  cu: "CU35",
  fileversion: "7.0.44969",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013",
  info: "https://support.microsoft.com/help/3130279",
  cu: "CU34",
  fileversion: "7.0.44364",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013",
  info: "https://support.microsoft.com/help/3121031",
  cu: "CU33",
  fileversion: "7.0.43894",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013",
  info: "https://support.microsoft.com/help/3106086",
  cu: "CU32",
  fileversion: "7.0.43390",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013",
  info: "https://support.microsoft.com/help/3097765",
  cu: "CU31",
  fileversion: "7.0.42948",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013",
  info: "https://support.microsoft.com/help/3091810",
  cu: "CU30",
  fileversion: "7.0.42591",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013",
  info: "https://support.microsoft.com/help/3086433",
  cu: "CU29",
  fileversion: "7.0.42219",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013",
  info: "https://support.microsoft.com/help/3075723",
  cu: "CU28",
  fileversion: "7.0.41767",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013",
  info: "https://support.microsoft.com/help/3069230",
  cu: "CU27",
  fileversion: "7.0.41354",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013",
  info: "https://support.microsoft.com/help/3058009",
  cu: "CU26",
  fileversion: "7.0.40940",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013",
  info: "https://support.microsoft.com/help/3051268",
  cu: "CU25",
  fileversion: "7.0.40468",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013",
  info: "https://support.microsoft.com/help/3039828",
  cu: "CU24",
  fileversion: "7.0.40118",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013",
  info: "https://support.microsoft.com/help/3035980",
  cu: "CU23",
  fileversion: "7.0.39671",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013",
  info: "https://support.microsoft.com/help/3024895",
  cu: "CU22",
  fileversion: "7.0.39369",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013",
  info: "https://support.microsoft.com/help/3020883",
  cu: "CU21",
  fileversion: "7.0.38800",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013",
  info: "https://support.microsoft.com/help/3013213",
  cu: "CU20",
  fileversion: "7.0.38454",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013",
  info: "https://support.microsoft.com/help/3000200",
  cu: "CU19",
  fileversion: "7.0.38052",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013",
  info: "https://support.microsoft.com/help/2992503",
  cu: "CU18",
  fileversion: "7.0.37798",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013",
  info: "https://support.microsoft.com/help/2984829",
  cu: "CU17",
  fileversion: "7.0.37532",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013",
  info: "https://support.microsoft.com/help/2977472",
  cu: "CU16",
  fileversion: "7.0.37201",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013",
  info: "https://support.microsoft.com/help/2971745",
  cu: "CU15",
  fileversion: "7.0.36919",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013",
  info: "https://support.microsoft.com/help/2964546",
  cu: "CU14",
  fileversion: "7.0.36605",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013",
  info: "https://support.microsoft.com/help/2955943",
  cu: "CU13",
  fileversion: "7.0.36347",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013",
  info: "https://support.microsoft.com/help/2937998",
  cu: "CU12",
  fileversion: "7.0.36207",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013",
  info: "https://support.microsoft.com/help/2930616",
  cu: "CU11",
  fileversion: "7.0.36076",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013",
  info: "https://support.microsoft.com/help/2918536",
  cu: "CU10",
  fileversion: "7.0.36005",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013",
  info: "https://support.microsoft.com/help/2913980",
  cu: "CU9",
  fileversion: "7.0.35782",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013",
  info: "https://support.microsoft.com/help/2901572",
  cu: "CU8",
  fileversion: "7.0.35670",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013",
  info: "https://support.microsoft.com/help/2892427",
  cu: "CU7",
  fileversion: "7.0.35488",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013",
  info: "https://support.microsoft.com/help/2881294",
  cu: "CU6",
  fileversion: "7.0.35345",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013",
  info: "https://support.microsoft.com/help/2872273",
  cu: "CU5",
  fileversion: "7.0.35201",
  databaseversion: "70340",
  download: ""
});

versionList.add({
  version: "2013",
  info: "https://support.microsoft.com/help/2860301",
  cu: "CU4",
  fileversion: "7.0.35026",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013",
  info: "https://support.microsoft.com/help/2852685",
  cu: "CU3",
  fileversion: "7.0.34902",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013",
  info: "https://support.microsoft.com/help/2843305",
  cu: "CU2",
  fileversion: "7.0.34688",
  databaseversion: "",
  download: ""
});

versionList.add({
  version: "2013",
  info: "https://support.microsoft.com/help/2829782",
  cu: "CU1",
  fileversion: "7.0.34587",
  databaseversion: "",
  download: ""
});
