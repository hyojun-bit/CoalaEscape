
//공간생성
view = game.createRoom("view", "배경-처음.png") // 집을 멀리서 보는 시점 생성
fronthouse = game.createRoom("fronthouse", "집문앞.png") // 문 앞 생성
hall = game.createRoom("hall","당근배경.png") // 홀 생성
room = game.createRoom("room", "배경-6.png") // 경주토끼방 생성
room2 = game.createRoom("room2", "배경-어둠.png") // 이상한나라의 토끼방
room3 = game.createRoom("room3", "배경-용궁.png") // 용궁토끼방
room4 = game.createRoom("room4", "배경-6.png") //최종방



playSound("토이스토리노래.wav") // 노래 재생


//밖에서 바라보는 공간

//제목
view.title = view.createObject("title", "제목.png") // 
view.title.setWidth(180) // 크기 조절
view.locateObject(view.title, 400, 110) // 


view.arrow = view.createObject("arrow", "화살표-입구.png") // 
view.arrow.setWidth(90) // 크기 조절
view.locateObject(view.arrow, 360, 490) // 


view.arrow.onClick = function(){
	game.move(fronthouse)
	printMessage("이 집에 친구들이 있을 것 같다. 문이 잠겨 있는지 보자!")
	// 집앞으로 이동
}


//집앞에서
fronthouse.door = fronthouse.createObject("door", "현관문-닫힘.png") // 문 생성
fronthouse.door.setWidth(260) // 크기 조절
fronthouse.locateObject(fronthouse.door, 652, 386) // 문 배치
fronthouse.door.close() // door 상태를 close로 변경

fronthouse.door.onClick = function(){
	printMessage("문이 열린다! 조심스럽게 들어가보자.")
	if(fronthouse.door.isClosed()){ // door가 closed 상태이면
		fronthouse.door.open() // door의 상태를 open으로 바꿈
	} else if (fronthouse.door.isOpened()){ // door가 opened 상태이면
				game.move(hall)
				printMessage("토끼스토리에 온 것을 환영한다! \n자는 토끼 : \"너의 친구는 내가 잡아갔어!\" ")
				// 방변경
	}
}
fronthouse.door.onOpen = function() { // door 상태가 open으로 변경되면 실행
	fronthouse.door.setSprite("현관문-열림.png") // 열린 문으로 변경
}



//메인방에 토끼생성
hall.rabbit_strange = hall.createObject("rabbit_strange", "이상한토끼.png") 
hall.rabbit_sea = hall.createObject("rabbit_sea", "용궁토끼.png") 
hall.rabbit_sleep = hall.createObject("rabbit_sleep", "잠자는토끼.png")
hall.rabbit_strange.setWidth(200)
hall.rabbit_sea.setWidth(200)
hall.rabbit_sleep.setWidth(170) //
hall.locateObject(hall.rabbit_strange, 850, 480)  //토끼위치
hall.locateObject(hall.rabbit_sea, 640, 440) // 토끼위치
hall.locateObject(hall.rabbit_sleep, 400, 510)
hall.rabbit_sea.hide()

//최종구멍
hall.hole = hall.createObject("hole","hole.png")
hall.hole.setWidth(200)
hall.locateObject(hall.hole, 640, 630)
hall.hole.hide()
hall.hole.onClick = function(){
	if(room.buz.isPicked()&&room2.dog.isPicked()&&room3.forki.isPicked()){
		showImageViewer("박스안.png")
		playSound("토이스토리노래.wav")
		game.clear()
			}
	else{printMessage("모든 친구들이 있어야 탈출할 수 있어!")}
}


//잠자는 토끼방으로 이동
hall.rabbit_sleep.onClick = function(){

	game.move(room)
	printMessage("잠자는 토끼가 아니라 달리기의 왕 \n토끼 방이다!")
	playSound("뿅.wav")} // 노래 재생



//경주토끼방

room.door = room.createObject("door", "문3-우-닫힘.png") // 문 생성
room.door.setWidth(136) // 크기 조절
room.locateObject(room.door, 1049, 312) // 문 배치
room.door.lock() // door 상태를 locked로 변경

room.door.onClick = function() { // door를 클릭했을 때
	if(room.door.isClosed()){ // door가 closed 상태이면
		room.door.open() // door의 상태를 open으로 바꿈
	} else if (room.door.isOpened()){ // door가 opened 상태이면
		game.move(hall)
		printMessage("엘리스 토끼 \"너의 스프링 달린 멍멍이 친구는 내가 잡아갔어!\"") 
	} else if (room.door.isLocked()){ // door가 locked 상태이면
		printMessage("문제를 맞추기 전까지 나갈 수 없어!") // 메시지 출력
	}
}

room.door.onOpen = function() { // door 상태가 open으로 변경되면 실행
	room.door.setSprite("문3-우-열림.png") // 열린 문으로 변경
}


//키패드 -문자
room.keypad1 = room.createObject("keypad1", "암호기.png");
room.keypad1.setWidth(36);
room.locateObject(room.keypad1, 940, 328);
room.keypad1.onClick = function() {
	printMessage("토끼 \"난 영어에 약하다!\"");
	showKeypad("alphabet", "RADOX", function(){ // 키패드 2 - 알파벳 5자리
		room.door.unlock();
		printMessage("맞아! PARADOX! 알려줬으니 문을 열고 \n 너 친구를 돌려주지.");
		room.buz.show()
	 });
}


//토끼액자
room.frame = room.createObject("frame", "잠자는토끼액자.png") 
room.frame.setWidth(140)
room.locateObject(room.frame, 300, 90)


//제논의역설사진
room.board = room.createObject("board", "제논의역설.png") 
room.board.setWidth(350)
room.locateObject(room.board, 320, 300)
room.board.onClick = function() {
	printMessage("고등학교 때 수학책에서 본 그림인데."); // 이미지 출력
}

//두루마리
room.paper = room.createObject("paper", "떨어진두루마리.png")
room.paper.setWidth(100)
room.locateObject(room.paper, 300, 530)
room.paper.onClick = function() {
	printMessage("무언가 적혀있다. 힌트가 될지도 몰라!");
	showImageViewer("토끼편지.png"); // 이미지 출력
}



//티비
room.tv = room.createObject("tv", "TV2-2.png")
room.tv.setWidth(200)
room.locateObject(room.tv, 800, 250)
room.tv.onClick = function(){
	if(game.getHandItem() == room.remote){
		room.tv.setSprite("켜진티비.png")
		printMessage("티비화면이 켜졌다!");}
	else
	{printMessage("꺼진 티비다. 킬수만 있다면 힌트가 있을지도 몰라!");}
}



//토끼거북이 그림
room.capat = room.createObject("capat", "토끼만화.png")
room.capat.setWidth(350)
room.locateObject(room.capat, 660, 580)




//버즈
room.buz = room.createObject("buz", "버즈.png")
room.buz.setWidth(80)
room.locateObject(room.buz, 1040, 500)
room.buz.hide()
room.buz.onClick = function(){
	playSound("버즈목소리.wav")
	room.buz.pick()
	printMessage("버즈를 구했다!");
}


//리모컨
room.remote = room.createObject("remote", "리모컨.png")
room.remote.setWidth(80)
room.locateObject(room.remote, 300, 600)
room.remote.onClick = function(){
	room.remote.pick()
	printMessage("리모컨을 주웠다");
}


//서랍
room.drawer = room.createObject("drawer", "캐비닛-오른쪽-닫힘.png")
room.drawer.setWidth(100)
room.locateObject(room.drawer, 1200, 390)

room.drawer.onClick = function() {
	if(room.drawer.isOpened()){
		room.drawer.close();
		room.diary.hide();	
	} else if (room.drawer.isClosed()){
		room.drawer.open();
		room.diary.show();
		printMessage("캐비닛 안에 무언가가 있다!")
	}
}
room.drawer.onOpen = function() {
	room.drawer.setSprite("캐비닛-오른쪽-열림.png");
}
room.drawer.onClose = function() {
	room.drawer.setSprite("캐비닛-오른쪽-닫힘.png");	
}



//토끼일기장
room.diary = room.createObject("diary", "토끼일기장.png")
room.diary.setWidth(50)
room.locateObject(room.diary, 1182, 380)
room.diary.hide()
room.diary.onClick = function() {
	printMessage("핑크빛 일기장이다. 저 토끼취향은 아닌거 같은데..")
	showImageViewer("토끼의일기.png"); // 이미지 출력
}




//이상한나라 토끼 방으로 이동
hall.rabbit_strange.onClick = function(){
	game.move(room2)
	printMessage("이상한나라의 엘리스?")
	playSound("뿅.wav") // 노래 재생
}

//이상한 나라의 엘리스방

room2.door = room2.createObject("door", "문2-좌-닫힘.png") // 문 생성
room2.door.setWidth(136) // 크기 조절
room2.locateObject(room2.door, 50, 350) // 문 배치
room2.door.lock() // door 상태를 locked로 변경

room2.door.onClick = function() { // door를 클릭했을 때
	if(room2.door.isClosed()){ // door가 closed 상태이면
		room2.door.open() // door의 상태를 open으로 바꿈
	} else if (room2.door.isOpened()){ // door가 opened 상태이면
		game.move(hall)
		hall.rabbit_sea.show()
		printMessage("용궁 토끼 \"너의 숫가락 친구는 내가 잡아갔어!\"")
	} else if (room2.door.isLocked()){ // door가 locked 상태이면
		printMessage("문제를 맞추기 전까지 나갈 수 없어!") // 메시지 출력
	}
}

room2.door.onOpen = function() { // door 상태가 open으로 변경되면 실행
	room2.door.setSprite("문2-좌-열림.png") // 열린 문으로 변경
}

//이상한 집
room2.house = room2.createObject("house", "이상한집.png")
room2.house.setWidth(400)
room2.locateObject(room2.house, 1180, 438)
room2.house.onClick = function() {
	printMessage("토끼놈이 사는 집인가?")
}

//이상한 침대
room2.bed = room2.createObject("bed", "이상한침대.png")
room2.bed.setWidth(300)
room2.locateObject(room2.bed, 900, 608)
room2.bed.onClick = function() {
	printMessage("정체를 알 수 없는 침대다.")
}

//이상한 무늬
room2.pattern = room2.createObject("pattern", "무늬.png")
room2.pattern.setWidth(200)
room2.locateObject(room2.pattern, 260, 538)
room2.pattern.onClick = function() {
	printMessage("이 모양 속에 어떤 힌트가 있지 않을까?")
}


//키패드
room2.keypad1 = room2.createObject("keypad1", "숫자키-좌.png");
room2.keypad1.setWidth(36);
room2.locateObject(room2.keypad1, 160, 328);
room2.keypad1.onClick = function() {
	printMessage("10월 18일은 금요일이야. \n그럼 1387일은 뒤는 무슨 요일이게?!");
	showKeypad("alphabet", "SATUR", function(){ // 키패드 2 - 알파벳 5자리
		room2.door.unlock();
		printMessage("문이 열렸다. \n 문제는 맞췄지만 너 친구는 돌려줄 수 없어!");
	 });
}


//시계
room2.clock = room2.createObject("clock", "시계.png")
room2.clock.setWidth(100)
room2.locateObject(room2.clock, 960, 238)
room2.clock.onClick = function() {
	printMessage("10시 11분을 가르키고 있다!")
}


//소파
room2.sofa = room2.createObject("sofa", "소파2-2.png")
room2.sofa.setWidth(300)
room2.locateObject(room2.sofa, 960, 450)


//토끼
room2.rabbit = room2.createObject("rabbit", "이상한토끼.png")
room2.rabbit.setWidth(180)
room2.locateObject(room2.rabbit, 900, 350)

//멍멍이
room2.dog = room2.createObject("dog", "멍멍이.png")
room2.dog.setWidth(100)
room2.locateObject(room2.dog, 900, 408)
room2.dog.hide()
room2.dog.onClick = function(){
	playSound("슬링키목소리.wav")
	room2.dog.pick()
	printMessage("슬링키독을 구했다!");
}


//벽지
room2.wallpaper = room2.createObject("wallpaper", "벽지-하트.png")
room2.wallpaper.setWidth(300)
room2.locateObject(room2.wallpaper, 400, 308)

room2.wallpaper2 = room2.createObject("wallpaper2", "벽지-하트.png")
room2.wallpaper2.setWidth(300)
room2.locateObject(room2.wallpaper2, 600, 308)




//선반
room2.shelf = room2.createObject("shelf", "선반small-좌.png")
room2.shelf.setWidth(200)
room2.locateObject(room2.shelf, 250, 178)

//책
room2.book = room2.createObject("book", "책3-1.png")
room2.book.setWidth(80)
room2.locateObject(room2.book, 250, 140)
room2.book.onClick = function() {
	showImageViewer("이상한나라힌트.png"); // 이미지 출력
}

//엘리스
room2.elis = room2.createObject("elis", "엘리스.png")
room2.elis.setWidth(200)
room2.locateObject(room2.elis, 700, 390)
room2.elis.onClick = function() {
	printMessage("행운을 빌어요 우디!")
}



//흘러내리는 시계
room2.meltclock = room2.createObject("meltclock", "흘러내리는시계.png")
room2.meltclock.setWidth(200)
room2.locateObject(room2.meltclock, 800, 190)

//흘러내리는 시계
room2.meltclock2 = room2.createObject("meltclock2", "흘러내리는시계.png")
room2.meltclock2.setWidth(200)
room2.locateObject(room2.meltclock2, 1000, 390)


//병사
room2.man = room2.createObject("man", "병사.png")
room2.man.setWidth(300)
room2.locateObject(room2.man, 700, 490)
room2.man.onClick = function() {
	printMessage("토끼 대왕님은 시간 약속을 어기는 걸 싫어한다.")
}

//상자
room2.box = room2.createObject("box", "상자3-닫힘.png")
room2.box.setWidth(200)
room2.locateObject(room2.box, 500, 590)

room2.box.onClick = function() {
	if(room2.box.isOpened()){
		room2.box.close();
		room2.gun.hide();
		room2.bullet.hide();	
	} else if (room2.box.isClosed()){
		room2.box.open();
		room2.gun.show();
		room2.bullet.show();
		printMessage("캐비닛 안에 총과 총알이 있다!")
	}
}
room2.box.onOpen = function() {
	room2.box.setSprite("상자3-열림.png");
}
room2.box.onClose = function() {
	room2.box.setSprite("상자3-닫힘.png");	
}

//권총과 총알
room2.gun = room2.createObject("gun", "권총.png")  //권총생성
room2.bullet = room2.createObject("bullet", "총알.png") // 총알생성
room2.shotgun = room2.createObject("shotgun", "장전된총.png") //장된된 총

room2.gun.setWidth(50)  //총 크기설정
room2.gun.hide()
room2.bullet.setWidth(40) // 총알 크기설정
room2.bullet.hide()
room2.shotgun.hide() // 조합 될 아이템 숨기기

room2.locateObject(room2.gun, 495, 600)  //총위치 
room2.locateObject(room2.bullet, 530, 600) // 총알위치

game.makeCombination(room2.gun, room2.bullet, room2.shotgun) // 총 + 총알 = 장전된총

room2.gun.onClick = function(){
	room2.gun.pick()
}
room2.bullet.onClick = function(){
	room2.bullet.pick()
} // 누르면 총이랑 총알 줍기

room2.rabbit.onClick = function() {
	if(game.getHandItem() == room2.shotgun) {
		room2.dog.show()
		printMessage("슬링키독을 찾았다!")
               playSound("shotgun.wav")
room2.rabbit.setSprite("가상문.png")
	} else {
		printMessage("너 친구는 내가 먹어버렸어!")
	}
}// 샷건 있을 때 토끼 쏘면 죽음





//별주부전 토끼방으로 이동
hall.rabbit_sea.onClick = function(){
	game.move(room3)
	printMessage("용궁에 들어왔다!")
	playSound("뿅.wav") // 노래 재생
}


room3.door = room3.createObject("door", "문2-좌-닫힘.png") // 문 생성
room3.door.setWidth(136) // 크기 조절
room3.locateObject(room3.door, 50, 350) // 문 배치
room3.door.lock() // door 상태를 locked로 변경

room3.door.onClick = function() { // door를 클릭했을 때
	if(room3.door.isClosed()){ // door가 closed 상태이면
		room3.door.open() // door의 상태를 open으로 바꿈
	} else if (room3.door.isOpened()){ // door가 opened 상태이면
		hall.hole.show()
		game.move(hall)
		printMessage("가운데 구멍이 생겼다!") // room32로 이동
	} else if (room3.door.isLocked()){ // door가 locked 상태이면
		printMessage("문제를 맞추기 전까지 나갈 수 없어!") // 메시지 출력
	}
}

room3.door.onOpen = function() { // door 상태가 open으로 변경되면 실행
	room3.door.setSprite("문2-좌-열림.png") // 열린 문으로 변경
}

//키패드
room3.keypad1 = room3.createObject("keypad1", "숫자키-좌.png");
room3.keypad1.setWidth(36);
room3.locateObject(room3.keypad1, 160, 328);
room3.keypad1.onClick = function() {
	printMessage("수수께끼를 맞추면 숟가락 친구를 돌려주겠네.");
	showKeypad("number", "4552", function(){ // 키패드 1 - 숫자자리
		room3.door.unlock();
		printMessage("문이 열렸다. 너의 친구는 이 가방 속에 있다.");
		room3.bag.show()

	 });
}


//카펫
room3.capat= room3.createObject("capat", "카펫.png")
room3.capat.setWidth(300)
room3.locateObject(room3.capat, 700, 590)
room3.capat.onClick = function() {
printMessage("물 속에 카펫은 왜 필요하지?")}


//포키
room3.forki = room3.createObject("forki", "포키.png")
room3.forki.setWidth(100)
room3.locateObject(room3.forki, 100, 590)
room3.forki.hide()
room3.forki.onClick = function() {
	room3.forki.pick()
	printMessage("보고싶었어! 친구!")
	playSound("포키목소리.wav")
	playYoutube("https://www.youtube.com/watch?v=nKuEUgXa3NQ")
}

//가방
room3.bag = room3.createObject("bag", "가방1.png")
room3.bag.setWidth(200)
room3.locateObject(room3.bag, 100, 590)
room3.bag.hide()
room3.bag.onClick = function() {
	room3.forki.show()
	room3.bag.hide()
	printMessage("가방 속에 포키를 찾았다!")
}




//찬장
room3.drawer= room3.createObject("drawer", "찬장-2-닫힘.png")
room3.drawer.setWidth(200)
room3.locateObject(room3.drawer, 980, 460)

room3.drawer.onClick = function() {
	if(room3.drawer.isOpened()){
		room3.drawer.close();
		room3.paperpeople.hide();
	} else if (room3.drawer.isClosed()){
		room3.drawer.open();
		room3.paperpeople.show();
		printMessage("두루마리 그림이 있다!")
	}
}
room3.drawer.onOpen = function() {
	room3.drawer.setSprite("찬장-2-열림.png");
}
room3.drawer.onClose = function() {
	room3.drawer.setSprite("찬장-2-닫힘.png");	
}

//두루마리사람들
room3.paperpeople = room3.createObject("paperpeople", "두루마리-용궁.png")
room3.paperpeople.setWidth(50)
room3.locateObject(room3.paperpeople, 940, 450)
room3.paperpeople.hide();
room3.paperpeople.onClick = function() {
	printMessage("뭔가 힌트가 될거 같은데.")
	showImageViewer("두루마리-용궁.png");
}


//두루마리-힌트
room3.paper = room3.createObject("paper", "떨어진두루마리.png")
room3.paper.setWidth(100)
room3.locateObject(room3.paper, 600, 490)
room3.paper.onClick = function() {
	printMessage("수수께기와 연관된거 같은데.")
	showImageViewer("용궁-힌트.png");
}

//물고기
room3.fish = room3.createObject("fish", "물고기.png")
room3.fish.setWidth(300)
room3.locateObject(room3.fish, 650, 290)
room3.fish.onClick = function() {
	printMessage("우리가 몇 마리인지 세고 있는건 아니지?")
}



//토끼
room3.rabbit = room3.createObject("rabbit", "용궁토끼.png")
room3.rabbit.setWidth(300)
room3.locateObject(room3.rabbit, 500, 150)
room3.rabbit.onClick = function() {
	printMessage("나의 영리함으로 목숨을 건졌지!\n 너도 한 번 보자.")
}


//용왕
room3.king = room3.createObject("king", "용왕-1.png")
room3.king.setWidth(300)
room3.locateObject(room3.king, 400, 490)
room3.king.onClick = function() {
	printMessage("그대의 간이 내 병을 고칠 수 있다고?")
}







game.start(view) // 게임시작
printMessage("우디!\n 저 집에서 친구 3명을 찾아 탈출해!") // 환영 메시지 출력