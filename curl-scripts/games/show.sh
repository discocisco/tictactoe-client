curl "https://tic-tac-toe-wdi.herokuapp.com/games/${ID}" \
  --include \
  --request GET \
  --header "Authorization: Token token=${TOKEN}" \

echo
