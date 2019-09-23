room = game.createRoom("room", "배경-1.png") // 방 생성

room.door = room.createObject("door", "문-오른쪽-닫힘.png") // 문 생성
room.door.setWidth(136) // 크기 조절
room.locateObject(room.door, 1049, 300) // 문 배치
room.door.lock() // door 상태를 locked로 변경

room.door.onClick = function() { // door를 클릭했을 때
	if(room.door.isClosed()){ // door가 closed 상태이면
		room.door.open() // door의 상태를 open으로 바꿈
	} else if (room.door.isOpened()){ // door가 opened 상태이면
		game.clear() // 게임 클리어
	} else if (room.door.isLocked()){ // door가 locked 상태이면
		printMessage("문이 잠겨있다") // 메시지 출력
	}
}

room.door.onOpen = function() { // door 상태가 open으로 변경되면 실행
	room.door.setSprite("문-오른쪽-열림.png") // 열린 문으로 변경
}

room.keypad = room.createObject("keypad", "숫자키-우.png") // 오브젝트 생성
room.keypad.setWidth(50) // 크기 조절
room.locateObject(room.keypad, 930, 250) // 위치 변경

room.keypad.onClick = function() {
	printMessage("김일성 주석의 생일은?")
	showKeypad("number", "0415" , function(){ // 키패드 1 - 숫자4자리
		room.door.unlock() // door의 잠금을 연다
		printMessage("잠금장치가 열리는 소리가 들렸다.")
	 })
}
room.frame = room.createObject("frame", "북한국기small.png")
room.frame.setWidth(140)
room.locateObject(room.frame, 250, 84)

room.frame1 = room.createObject("frame1", "김일성.png")
room.frame1.setWidth(137)
room.locateObject(room.frame1, 410, 63)

room.shelf = room.createObject("shelf", "선반small-좌.png")
room.shelf.setWidth(200)
room.locateObject(room.shelf, 100, 178)


room.book = room.createObject("book", "책3-1.png")
room.book.setWidth(80)
room.locateObject(room.book, 100, 140)
room.book.onClick = function() {
	showImageViewer("종이-태양절.png"); // 이미지 출력
}

room.phone = room.createObject("phone", "전화기-오른쪽.png")
room.phone.setWidth(30)
room.locateObject(room.phone, 830, 250)
room.phone.onClick = function() {
	playSound("chick.wav") // 오디오 재생
}

room.table = room.createObject("table", "교탁-오른쪽.png") // 테이블 생성
room.table.setWidth(300)
room.locateObject(room.table, 550, 400)

room.radio = room.createObject("radio", "신형라디오.png")
room.radio.setWidth(90)
room.locateObject(room.radio, 500, 320)
room.radio.onClick = function() {
	printMessage("재생버튼을 눌러보세요")
	showAudioPlayer("북한아나운서.wav") // 플레이어
}

room.gun = room.createObject("gun", "권총.png")
room.bullet = room.createObject("bullet", "총알.png")
room.shotgun = room.createObject("shotgun", "장전된총.png")

room.gun.setWidth(70)
room.bullet.setWidth(40)
room.shotgun.hide() // 조합 될 아이템 숨기기

room.locateObject(room.gun, 500, 650)
room.locateObject(room.bullet, 600, 650)

game.makeCombination(room.gun, room.bullet, room.shotgun) // 총 + 총알 = 장전된총

room.gun.onClick = function(){
	room.gun.pick()
}
room.bullet.onClick = function(){
	room.bullet.pick()
}

room.frame1.onClick = function() {
	if(game.getHandItem() == room.shotgun) {
		printMessage("김일성의 사진을 쐈다!")
               playSound("shotgun.wav")
room.frame1.setSprite("김일성-깨짐.png")
	} else {
		printMessage("김일성의 사진이다.")
	}
}



game.start(room) // 게임시작
printMessage("당신은 국정원 요원이다. 적의 방에서 탈출하라!") // 환영 메시지 출력