function App(){
  const name ="이시현";
  const massage = `반갑습니다! ${name}님`
  const age =22;
  const major = "컴퓨터공학";
  return(
    <div style={{
      backgroundColor:"beige",
      border: "2px solid blue",
      padding: "20px",
      width : "500px",
      margin : "0px",
      alignItems :"center"
      }}>
        <h2>git test</h2>
        ㅏㅇ오라ㅓ오러
      <h2>{massage}</h2>
      <h1>프로필</h1>
      <h1>이름 : {name}</h1>
      <p>나이 : {age}</p>
      <p>전공 : {major}</p>
      <h2>좋아하는 것</h2>
      <ul>
        <li>게임</li>
        <li>음악</li>
        <li>여행</li>
      </ul>
    </div>
  ) 
}
export default App;