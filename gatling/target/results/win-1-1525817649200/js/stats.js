var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2",
        "ok": "2",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "54",
        "ok": "54",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "259",
        "ok": "259",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "156",
        "ok": "156",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "102",
        "ok": "102",
        "ko": "-"
    },
    "percentiles1": {
        "total": "156",
        "ok": "156",
        "ko": "-"
    },
    "percentiles2": {
        "total": "207",
        "ok": "207",
        "ko": "-"
    },
    "percentiles3": {
        "total": "248",
        "ok": "248",
        "ko": "-"
    },
    "percentiles4": {
        "total": "256",
        "ok": "256",
        "ko": "-"
    },
    "group1": {
        "name": "t < 800 ms",
        "count": 2,
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
        "total": "4.444",
        "ok": "4.444",
        "ko": "-"
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
        "ok": "1",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "54",
        "ok": "54",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "54",
        "ok": "54",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "54",
        "ok": "54",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "54",
        "ok": "54",
        "ko": "-"
    },
    "percentiles2": {
        "total": "54",
        "ok": "54",
        "ko": "-"
    },
    "percentiles3": {
        "total": "54",
        "ok": "54",
        "ko": "-"
    },
    "percentiles4": {
        "total": "54",
        "ok": "54",
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
        "total": "2.222",
        "ok": "2.222",
        "ko": "-"
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
        "total": "259",
        "ok": "259",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "259",
        "ok": "259",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "259",
        "ok": "259",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "0",
        "ok": "0",
        "ko": "-"
    },
    "percentiles1": {
        "total": "259",
        "ok": "259",
        "ko": "-"
    },
    "percentiles2": {
        "total": "259",
        "ok": "259",
        "ko": "-"
    },
    "percentiles3": {
        "total": "259",
        "ok": "259",
        "ko": "-"
    },
    "percentiles4": {
        "total": "259",
        "ok": "259",
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
        "total": "2.222",
        "ok": "2.222",
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
