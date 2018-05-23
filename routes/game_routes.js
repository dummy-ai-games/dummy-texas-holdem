/**
 * Created by Elsie
 * 2017-11-26
 */

var app = require('../dummy-the.js');
var gameService = require('../rest_services/game_service.js');

app.post("/api/board/list_active_boards", gameService.listActiveBoards);
app.post("/api/board/create_board", gameService.createBoard);
app.post("/api/board/update_board", gameService.updateBoard);
app.post("/api/board/delete_board", gameService.deleteBoard);
app.post("/api/board/is_creator_board", gameService.isCreatorBoard);

app.get("/api/board/list_match_tables", gameService.listMatchTables);

app.post("/api/players/send_sms_for_update", gameService.sendSmsForUpdate);
app.post("/api/players/sign_in", gameService.signIn);
app.post("/api/players/sign_out", gameService.signOut);
app.post("/api/players/validate_sign_in", gameService.validateSignIn);
app.post("/api/players/get_player_by_token", gameService.getPlayerByToken);
app.post("/api/players/reset_password", gameService.resetPassword);
app.post("/api/players/get_random_dummy", gameService.getRandomDummy);
app.post("/api/players/fetch_passcode", gameService.fetchPasscode);

app.get("/api/players/get_contestants", gameService.getContestants);
app.get("/api/players/get_kanban_contestants", gameService.getKanbanContestants);