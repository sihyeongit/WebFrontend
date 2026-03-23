

//실습과제
// 1. 이름 출력 : 본인이름
// 2.환영메시지 : 인사말
// 3.좋아하는 꽃,음식 등등 목록 5가지
// 4.로그인 상태 표시
// 5.카운터 버튼 : 증가 감소

function App(){
  const name = "이시현";
  const favorite = ["사과", "라면", "바나나","포도","물"]
  const islogin = true
  return (
    <div>
      <h1>git 테스트</h1>
      <h1>{name}</h1>
      <h1>안녕하세요!</h1>
      <ul>
        {favorite.map((favorite, index) =>(
          <li key={index}>{favorite}</li>
        ))}
      </ul>
      {islogin ? <p>로그인 상태입니다.</p> : <p>로그아웃 상태입니다.</p>}
      
        <button>버튼</button>
    </div>
  )
}

export default App;