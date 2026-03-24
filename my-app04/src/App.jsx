//실습1
// function Hello(){
//   return <h1>안녕하세요 REACT</h1>
// }
// export default Hello;

//실습2
// function User({name}){
//   return (
//     <h1>이름 : {name}</h1>
//   );
// }

// function App(){
//   return(
//     <div>
//       <User name="이시현"/>
//       <User name="김시현"/>
//     </div>
//   );
// }
// export default App;

//실습3
// function Product({pro,price}){
//   return <h1>상품 : {pro} / 가격 : {price}만원</h1>;
// }

// function App(){
//   return(
//     <div>
//       <Product pro="노트북" price={100}/> //숫자형식할때 {}사용
//       <Product pro="키보드" price={5}/>

//     </div>
//   );
// }
// export default App;


//실습4
// function ProfileCard({name,age,job}){
//   return(
//     <div>
//       <h2>이름: {name}</h2>
//       <h2>나이: {age}</h2>
//       <h2>직업: {job}</h2>
//     </div>
//   );
// }

// function App(){
//   return(
//     <div>
//       <ProfileCard name="김민지" age={20} job="학생"/>
//       <ProfileCard name="이시현" age={20} job="대학생"/>
//       <ProfileCard name="안녕하" age={20} job="반갑습"/>
      
//     </div>
//   );
// }
// export default App;

//실습5
// function Button({text}){
// return(
//     <button>{text}</button>
//   );
// }

// function App(){
//   return(
//     <div>
//       <h1>4주차 실습</h1>
//       <hr />
//       <Button text="로그인"/>
//       <Button text="회원가입"/>
//       <Button text="삭제"/>
//     </div>
//   );
// }
// export default App;


//실습6
// function Box({children}){
//   return(
//     <div>
//       {children}
//     </div>
//   );
// }

// function App(){
//   return(
//     <div>
//       <Box>
//         <h1>안녕하세요</h1>
//         <h1>안녕하세요!!!</h1>
//       </Box>
//     </div>
//   );
// }
// export default App;


//실습7
// 자식 컴포넌트
function FruitList({ fruits }) {
  return(
    <ul>
      {/* map을 활용하여 배열 요소를 li 태그로 반환 */}
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}

// 부모 컴포넌트
function App() {
  const fruits = ["사과", "바나나", "포도"];
  
  return(
    <div>
      {/* fruits 속성으로 배열 데이터를 정확히 전달 */}
      <FruitList fruits={fruits} />
    </div>
  );
}

export default App;