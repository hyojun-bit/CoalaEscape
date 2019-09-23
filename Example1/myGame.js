room = game.createRoom("room", "배경-1.png") // 방 생성
room2 = game.createRoom("room2","배경-6.png") // 방 생성

room.door = room.createObject("door", "문-오른쪽-닫힘.png") // 문 생성
room.door.setWidth(136) // 크기 조절
room.locateObject(room.door, 1049, 300) // 문 배치
room.door.lock() // door 상태를 locked로 변경

room.door.onClick = function() { // door를 클릭했을 때
	if(room.door.isClosed()){ // door가 closed 상태이면
		room.door.open() // door의 상태를 open으로 바꿈
	} else if (room.door.isOpened()){ // door가 opened 상태이면
		game.move(room2) // room2로 이동
	} else if (room.door.isLocked()){ // door가 locked 상태이면
		printMessage("문이 잠겨있다") // 메시지 출력
	}
}

room.door.onOpen = function() { // door 상태가 open으로 변경되면 실행
	room.door.setSprite("문-오른쪽-열림.png") // 열린 문으로 변경
}

room.door.onOpen = function() { // door 상태가 open으로 변경되면 실행
	room.door.setSprite("문-오른쪽-열림.png") // 열린 문으로 변경
}

room.keypad = room.createObject("keypad", "숫자키-우.png") // 오브젝트 생성
room.keypad.setWidth(50) // 크기 조절
room.locateObject(room.keypad, 930, 250) // 위치 변경

room.keypad.onClick = function() {
	printMessage("비밀번호를 입력하세요.")
	showKeypad("number", "1009" , function(){ // 키패드 1 - 숫자4자리
		room.door.unlock() // door의 잠금을 연다
		printMessage("잠금장치가 열리는 소리가 들렸다.")
	 })
}

room.table = room.createObject("table", "테이블-우.png") // 테이블 생성
room.table.setWidth(300)
room.locateObject(room.table, 550, 400)

room.mac = room.createObject("mac", "파란맥-우.png") // 맥 생성
room.mac.setWidth(130)
room.locateObject(room.mac, 560, 270)
room.mac.onClick = function() {
	showImageViewer("스크린.png"); // what time is it
}

room.clock = room.createObject("clock", "시계.png")
room.clock.setWidth(100)
room.locateObject(room.clock, 100, 100)

//
//
// r o o m 2

room2.door = room2.createObject("door", "문-오른쪽-열림.png") // 문 생성
room2.door.setWidth(136) // 크기 조절
room2.locateObject(room2.door, 1049, 305) // 문 배치
room2.door.open() // door 상태를 opened로 변경

room2.door.onClick = function(){
	game.move(room) // room으로 이동
}

room2.door2 = room2.createObject("door2", "문3-좌-닫힘.png")
room2.door2.setWidth(136)
room2.locateObject(room2.door2, 170, 335)
room2.door2.lock()

room2.door2.onClick = function() { // door2를 클릭했을 때
	if(room2.door2.isClosed()){ // door2가 closed 상태이면
		room2.door2.open() // door2의 상태를 open으로 바꿈
	} else if (room2.door2.isOpened()){ // door2가 opened 상태이면
		game.clear() // 게임 클리어
	} else if (room2.door2.isLocked()){ // door가 locked 상태이면
		printMessage("문이 잠겨있다") // 메시지 출력
	}
}

room2.door2.onOpen = function() {
	room2.door2.setSprite("문3-좌-열림.png")
}

room2.keypad = room2.createObject("keypad", "숫자키-좌.png") // 오브젝트 생성
room2.keypad.setWidth(50) // 크기 조절
room2.locateObject(room2.keypad, 200, 300) // 위치 변경

room2.keypad.onClick = function() {
	printMessage("비밀번호를 입력하세요.")
	showKeypad("alphabet", "BINGO" , function(){
		room2.door2.unlock() // door의 잠금을 연다
		printMessage("잠금장치가 열리는 소리가 들렸다.")
	 })
}


room2.closet = room2.createObject("closet", "옷장-1-닫힘.png")
room2.closet.setWidth(300)
room2.locateObject(room2.closet, 250, 305)

room2.chair = room2.createObject("chair", "의자-1.png")
room2.chair.setWidth(160)
room2.locateObject(room2.chair, 900, 500)

room2.book = room2.createObject("book", "책1-2.png")
room2.book.setWidth(100)
room2.locateObject(room2.book, 900, 485)
room2.book.onClick = function() {
	showImageViewer("종이.png", "책.txt"); // 이미지 출력
}

room2.radio = room2.createObject("radio", "라디오.png")
room2.radio.setWidth(90)
room2.locateObject(room2.radio, 700, 420)
room2.radio.onClick = function() {
	printMessage("재생버튼을 눌러보세요")
	showAudioPlayer("bingo.wav") // 플레이어
}


room2.closet.move = true // 플래그 변수
room2.closet.onDrag = function(direction){ // 드래그 모션 direction - Up, Down, Left, Right
	if(direction == "Right" && room2.closet.move){ // 오른쪽으로 드래그 했으면
		printMessage("옷장을 밀어버렸다!")
		room2.closet.moveX(200) // X 방향으로 200 이동
		room2.closet.moveY(-40) // Y 방향으로 -40 이동
		room2.closet.move = false // 이후에는 더 이상 움직이지 않도록 합니다.
	} else {
		printMessage("열리지 않는다.")
	}
}


game.start(room) // 게임시작
printMessage("방탈출에 오신 것을 환영합니다!") // 환영 메시지 출력