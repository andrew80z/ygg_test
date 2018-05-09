var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2",
        "ok": "1",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "213",
        "ok": "277",
        "ko": "213"
    },
    "maxResponseTime": {
        "total": "277",
        "ok": "277",
        "ko": "213"
    },
    "meanResponseTime": {
        "total": "245",
        "ok": "277",
        "ko": "213"
    },
    "standardDeviation": {
        "total": "32",
        "ok": "0",
        "ko": "0"
    },
    "percentiles1": {
        "total": "245",
        "ok": "277",
        "ko": "213"
    },
    "percentiles2": {
        "total": "261",
        "ok": "277",
        "ko": "213"
    },
    "percentiles3": {
        "total": "273",
        "ok": "277",
        "ko": "213"
    },
    "percentiles4": {
        "total": "276",
        "ok": "277",
        "ko": "213"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 1,
        "percentage": 50
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 1,
        "percentage": 50
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "5.618",
        "ok": "2.809",
        "ko": "2.809"
    }
},
contents: {
"req_request-11-e8d8f": {
        type: "REQUEST",
        name: "Request_11",
path: "Request_11",
pathFormatted: "req_request-11-e8d8f",
stats: {
    "name": "Request_11",
    "numberOfRequests": {
        "total": "1",
        "ok": "0",
        "ko": "1"
    },
    "minResponseTime": {
        "total": "213",
        "ok": "-",
        "ko": "213"
    },
    "maxResponseTime": {
        "total": "213",
        "ok": "-",
        "ko": "213"
    },
    "meanResponseTime": {
        "total": "213",
        "ok": "-",
        "ko": "213"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "-",
        "ko": "0"
    },
    "percentiles1": {
        "total": "213",
        "ok": "-",
        "ko": "213"
    },
    "percentiles2": {
        "total": "213",
        "ok": "-",
        "ko": "213"
    },
    "percentiles3": {
        "total": "213",
        "ok": "-",
        "ko": "213"
    },
    "percentiles4": {
        "total": "213",
        "ok": "-",
        "ko": "213"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 0,
        "percentage": 0
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 1,
        "percentage": 100
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "2.809",
        "ok": "-",
        "ko": "2.809"
    }
}
    },"req_request-10-30349": {
        type: "REQUEST",
        name: "Request_10",
path: "Request_10",
pathFormatted: "req_request-10-30349",
stats: {
    "name": "Request_10",
    "numberOfRequests": {
        "total": "1",
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "277",
        "ok": "277",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "277",
        "ok": "277",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "277",
        "ok": "277",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "277",
        "ok": "277",
        "ko": "-"
    },
    "percentiles2": {
        "total": "277",
        "ok": "277",
        "ko": "-"
    },
    "percentiles3": {
        "total": "277",
        "ok": "277",
        "ko": "-"
    },
    "percentiles4": {
        "total": "277",
        "ok": "277",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 1,
        "percentage": 100
    },
    "group2": {
        "name": "800 ms < t < 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group3": {
        "name": "t > 1200 ms",
        "count": 0,
        "percentage": 0
    },
    "group4": {
        "name": "failed",
        "count": 0,
        "percentage": 0
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "2.809",
        "ok": "2.809",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
