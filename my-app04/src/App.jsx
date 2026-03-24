//실습1
// function Hello(){
//   return <h1>안녕하세요 REACT</h1>
// }
// export default Hello;


//====================================================================================


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


//====================================================================================


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


//====================================================================================


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


//====================================================================================


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


//====================================================================================


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


//====================================================================================


//실습7
// 자식 컴포넌트
// function FruitList({ fruits }) {
//   return(
//     <ul>
//       {/* map을 활용하여 배열 요소를 li 태그로 반환 */}
//       {fruits.map((fruit, index) => (
//         <li key={index}>{fruit}</li>
//       ))}
//     </ul>
//   );
// }

// // 부모 컴포넌트
// function App() {
//   const fruits = ["사과", "바나나", "포도"];
  
//   return(
//     <div>
//       {/* fruits 속성으로 배열 데이터를 정확히 전달 */}
//       <FruitList fruits={fruits} />
//     </div>
//   );
// }

// export default App;


//====================================================================================


// //실습과제1
// function Book(props){
//   return(
//     <div>
//       <h2>이 책의 제목은 {props.title} 입니다</h2>
//       <p>이 책의 저자는 {props.author}님 입니다</p>
//       <p>이 책은 {props.price}입니다</p>
//     </div>
//   );
// }

// function App(){
//   return(
//     <div>
//       <h1>4주차 수업과제 입니다</h1>
//       <Book title="홍길동전" author="몰라요" price={10000}/>
//       <Book title="아무거전" author="핸드폰" price={30000}/>
//       <Book title="파이썬책" author="아무나" price={53000}/>
//     </div>
//   );
// }
// export default App;


//====================================================================================


// //실습과제2
// function GreetingCard({name, message}){
//   return(
//     <div>
//       <h3>{name}님께</h3>
//       <p>{message}</p>
//     </div>
//   );
// }

// function App(){
//   return(
//     <div>
//       <GreetingCard name="이시현" message="생일축하해"/>
//       <GreetingCard name="김지현" message="시험잘봐"/>
//       <GreetingCard name="정시현" message="내일봐"/>
//     </div>
//   );
// }
// export default App;


//====================================================================================


// //실습과제3
// function Button({text, color}){
//   return(
//     <div>
//       <button style={{backgroundColor:color}}>{text}</button>
//     </div>
//   );
// }

// function App(){
//   return(
//     <div>
//       <Button text="로그인" color="red"/>
//       <Button text="로그인" color="blue"/>
//       <Button text="로그인" color="green"/>
//     </div>
//   );
// }
// export default App;


//====================================================================================


//실습과제4
function VideoCard({title, channel, views}){
  return(
    <div>
      <h3>{title}</h3>
      <p>{channel}</p>
      <p>조회수: {views}</p>
    </div>
  );
}

function VideoList({videos}){
  return(
    <div>
      {videos.map((videos, index) => (
        <VideoCard key={index} title={videos.title} channel={videos.channel} views={videos.videos}/>
      ))}
    </div>
  );
}

function App(){
  const videos = [
    {
      title: "리엑트 기초 강의",
      channel: "코딩채널",
      views: "25만"
    },
    {
      title: "파이썬 기초 강의",
      channel: "코딩파이썬",
      views: "11만"
    },
    {
      title: "자바 기초 강의",
      channel: "자바채널",
      views: "5만"
    }
    
  ]
  return(
    <div>
      <VideoList videos={videos}/>
    </div>
  );
}

export default App;