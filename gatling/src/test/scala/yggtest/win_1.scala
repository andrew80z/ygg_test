package yggtest

import io.gatling.core.Predef._ // 2
import io.gatling.http.Predef._
import scala.concurrent.duration._
import io.gatling.jsonpath._

class win_1 extends Simulation { // 3

  val httpConf = http
    .baseURL("https://pff.yggdrasilgaming.com") // Here is the root for all relative URLs
    .acceptHeader("application/json") // Here are the common headers
    .doNotTrackHeader("1")
    .acceptLanguageHeader("en-US,en;q=0.5")
    .acceptEncodingHeader("gzip, deflate")
    .userAgentHeader("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.139 Safari/537.36")




  val scn1 = scenario("Send auth request and get session ID\n" +
    "Send play request and repeat if status is Finished\n"+
    "Send play request with wager ID"
  )
   /* authenticate*/
    .exec(http("authenticate").
    get("https://pff.yggdrasilgaming.com/game.web/service")
    .queryParam("fn","authenticate")
    .queryParam("org","Demo")
    .queryParam("lang","en")
    .queryParam("gameid","7316")
    .queryParam("channel","mobile")
    .queryParam("currency","EUR")
    .queryParam("userName=","")
    .check(jsonPath("$.data.sessid").saveAs("sessid")))

    /*Start game round*/
    .exec(http("play 1")
    .get("https://pff.yggdrasilgaming.com/game.web/service")
    .queryParam("fn","play")
    .queryParam("currency","EUR")
    .queryParam("gameid","7316")
    .queryParam("sessid", "${sessid}" )
    .queryParam("gameHistorySessionId","seesion")
    .queryParam("gameHistoryTicketId","ticket")
    .queryParam("amount","1.25")
    .queryParam("lines","1111111111111111111111111")
    .queryParam("coin","0.05")
    .check(jsonPath("$.data.wager.wagerid").saveAs("wagerId"))
    .check(jsonPath("$.data.wager.status").saveAs("status"))
  )
    /* Repeat play if status of round equals finished */
    .asLongAs(session => session("status").as[String].equals("Finished")) {
      exec(http("play repeat")
        .get("https://pff.yggdrasilgaming.com/game.web/service")
        .queryParam("fn","play")
        .queryParam("currency","EUR")
        .queryParam("gameid","7316")
        .queryParam("sessid", "${sessid}" )
        .queryParam("gameHistorySessionId","seesion")
        .queryParam("gameHistoryTicketId","ticket")
        .queryParam("amount","1.25")
        .queryParam("lines","1111111111111111111111111")
        .queryParam("coin","0.05")
        .check(jsonPath("$.data.wager.wagerid").saveAs("wagerId"))
        .check(jsonPath("$.data.wager.status").saveAs("status"))
      )

    }
    .exec(http("get win").
      get("https://pff.yggdrasilgaming.com/game.web/service").queryParam("fn", "play")
      .queryParam("currency", "EUR")
      .queryParam("gameid", "7316")
      .queryParam("sessid", "${sessid}")
      .queryParam("gameHistorySessionId", "seesion")
      .queryParam("gameHistoryTicketId", "ticket")
      .queryParam("amount", "0")
      .queryParam("wagerid", "${wagerId}")
      .queryParam("betid", "1")
      .queryParam("step", "2")
      .queryParam("cmd", "C")
      .check(jsonPath("$.data.wager.bets[0].wonamount").saveAs("wonAmount"))


    )


  exec(session => {





    session

  })







  setUp( // 11
    scn1.inject(atOnceUsers(1)).protocols(httpConf)) // 13
}