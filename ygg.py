import requests
#
separator = "*" * 10 
# fn values
fn_auth_val = "authenticate"
fn_play_val = "play"
# Game id
game_id_val = "7316"
# Misc
game_org = "Demo"
game_lang = "en"
bet_amount_curr = 50
bet_amount_coin = 2.00
# Main address
base_url = "https://pff.yggdrasilgaming.com/game.web/service"
#
print "'Win test' run"
print separator
print "Prerequisite: Loose and won coutners are equal zero"
print separator
print "Scenario:"
print "Send authentication request and get a Session ID"
print "While won counter equals zero do foloowing: "
print "Send first GET request and obtain a Wager ID"
print "Send second GET request using Wager ID"
print "If won payload was NOT returned, increment loose counter by 1 and repeat"
print "If won payload was returned, increment win counter by 1, stop test run, print win amount and amount of 'played' rounds"
#
# URL to be used for auth GET request as Anonymous
auth_url = "%s?fn=%s&org=%s&lang=%s&gameid=%s" % (base_url,fn_auth_val,game_org,game_lang,game_id_val)
auth_resp = requests.get(auth_url)
#
print separator
print "test started\n"
print "Sending auth request"
#Obtain session ID
resp_json = auth_resp.json()
session_id = resp_json['data']['sessid']
#
print "Session id is: %s" % session_id
print "Sending play GET requests"

def test_run():
	#URL to be used for 1st play  GET request
	play_url = "%s?fn=%s&currency=EUR&gameid=%s&sessid=%s&log=&gameHistorySessionId=seesion&gameHistoryTicketId=ticket&amount=%s&lines=1111111111111111111111111&coin=%s" %(base_url,fn_play_val,game_id_val,session_id,bet_amount_curr,bet_amount_coin)
	#print "Sending first request\n"
	# Send
	play_act = requests.get(play_url)
    # Obtain a wager ID
	wager_id = play_act.json()
	wager_id_val = wager_id['data']['wager']['wagerid']
	#print "Wager id is: %s" % wager_id_val
	#print "Sending second request"
    #URL to be used for 2nd play  GET request
	scnd_play_url = "%s?fn=%s&currency=EUR&gameid=%s&sessid=%s&log=&gameHistorySessionId=seesion&gameHistoryTicketId=ticket&amount=0&wagerid=%s&betid=1&step=2&cmd=C" %(base_url,fn_play_val,game_id_val,session_id,wager_id_val)
	scnd_play_url_r = requests.get(scnd_play_url)
	scnd_play_resp = scnd_play_url_r.json()
	return scnd_play_resp

win_count = 0
loose_count = 1 
while win_count == 0:
	my_test = test_run()
	if 'data' not in my_test:
		print "User lost."
		loose_count += 1
	else:	
		fin_resp = my_test['data']['wager']['bets'][0]['wonamount']
		print separator 
		print "User won."
		print "Test finished\n"
		print "Won amount is: %s" % fin_resp
		win_count += 1
		print "Iterations performed: %s" % loose_count	