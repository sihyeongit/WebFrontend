/* import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>현재 숫자: {count}</p>
      <button onClick={() => setCount(count + 1)}>증가</button>
    </div>
  );
}

function App(){
  return(
    <div>
      <h1>안녕하세요 </h1>
      <Counter/>
    </div>
  );
}
export default App; */

// import { useState } from "react";


/* import { useState } from "react";

function NameInput() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>입력한 이름: {name}</p>
    </div>
  );
}

function App(){
  return(
    <div>
      <h1>안녕하세요 </h1>
      <NameInput/>
    </div>
  );
}
export default App; */


/* 
import { useState } from "react";

function Toggle() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "닫기" : "열기"}
      </button>

      {isOpen ? <p>내용이 보입니다.</p> : null}
    </div>
  );
}


function App(){
  return(
    <div>
      <h1>안녕하세요 </h1>
      <Toggle/>
    </div>
  );
}
export default App; */


/* import { useState } from "react";

function FruitList() {
  const [fruits, setFruits] = useState(["사과", "바나나"]);

  const addFruit = () => {
    setFruits([...fruits, "포도","딸기"]);
  };

  return (
    <div>
      <button onClick={addFruit}>과일 추가</button>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}


function App(){
  return(
    <div>
      <FruitList/>
    </div>
  );
}
export default App;
 */


/* import { useState } from "react";

function Profile() {
  const [user, setUser] = useState({
    name: "민지",
    age: 20,
  });

  const changeAge = () => {
    setUser({
      ...user,
      age: 21,
    });
  };

  return (
    <div>
      <p>이름: {user.name}</p>
      <p>나이: {user.age}</p>
      <button onClick={changeAge}>나이 변경</button>
    </div>
  );
}


function App(){
  return(
    <div>
      <Profile/>
    </div>
  );
}
export default App; */
/* 
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>증가</button>
      <button onClick={() => setCount(count - 1)}>감소</button>
      <button onClick={() => setCount(0)}>초기화</button>
    </div>
  );
}

export default Counter; */
/* import { useState } from "react";

function GreetingCard({name, message}){
  const[likes, setLikes] = useState(0);
  return(
    <div>
      <h3>{name}님께</h3>
      <p>{message}</p>
      <p>좋아요 : {likes}</p>
      <button onClick={() => setLikes(likes + 1)}>좋아요</button>
    </div>
  );
}

function App(){
  return(
    <div>
      <GreetingCard name="이시현" message="생일축하해"/>
      <GreetingCard name="김지현" message="시험잘봐"/>
      <GreetingCard name="정시현" message="내일봐"/>
    </div>
  );
}
export default App; */


/* 

import { useState } from "react";
function Button({text, color}){
  const[selected, setSelected] = useState(false);
  return(
    <div>
      <button onClick={()=> setSelected(!selected)}
       style={{
        backgroundColor:selected ? color : "yellow",
        borderRadius: "8px"
        }}>{text}{selected ? " 선택됨" : ""}
      </button>
    </div>
  );
}

function App(){
  return(
    <div>
      <Button text="로그인" color="red"/>
      <Button text="로그인" color="blue"/>
      <Button text="로그인" color="green"/>
    </div>
  );
}
export default App; */










//실습 망함 밑에 클로드 코드
/* import { useState } from "react";
function VideoCard({title, channel, views}){
  const[likes, setLikes] = useState(0);
  const[clicks, setClicks] = useState(0);
  const handleCardClick = ()=>{
    setClicks(Clicks + 1);
  }
  const handleLikeClick = (event)=>{
    event.stopPropagation(); //카드 클릭과 좋아여 클릭이 동시에되는거 방지
    setLikes(likes(likes + 1));
  }
  return(
    <div
    onClick={handleCardClick}
    style={{
      border:"1px solid #ccc",
      borderRadius : "8px",
      margin : "5px"
    }}>
      <h3>{title}</h3>
      <p>채널 : {channel}</p>
      <p>조회수: {views}</p>
      <p>클릭수 : {clicks}</p>
      <p>좋아요수 : {likes}</p>
      <button onClick={handleLikeClick}>좋아요</button>
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
  const [filter, setFilter] = useState("전체");
  const filterVideos =
  filter === "전체" ? videos : videos.filter((video) => video.category === filter)
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
      <button onClick={()=> setFilter("전체")}>전체</button>
      <button onClick={()=> setFilter("공부")}>공부</button>
      <button onClick={()=> setFilter("자바스크립트")}>자바스크립트</button>
      <button onClick={()=> setFilter("취업")}>취업</button>
      <VideoList videos={videos}/>
    </div>
  );
}

export default App; */



import { useState } from "react";

function VideoCard({ title, channel, views }) {
  const [likes, setLikes] = useState(0);
  const [clicks, setClicks] = useState(0);

  const handleCardClick = () => {
    setClicks(clicks + 1);                  // 버그1 수정
  };

  const handleLikeClick = (event) => {
    event.stopPropagation();  //이거를 해야 좋아요랑 클릭 같이 안올라감(?)
    setLikes(likes + 1);                    // 버그2 수정
  };

  return (
    <div onClick={handleCardClick} style={{ border: "1px solid #ccc", borderRadius: "8px", margin: "5px" }}>
      <h3>{title}</h3>
      <p>채널 : {channel}</p>
      <p>조회수: {views}</p>
      <p>클릭수 : {clicks}</p>
      <p>좋아요수 : {likes}</p>
      <button onClick={handleLikeClick}>좋아요</button>
    </div>
  );
}

function VideoList({ videos }) {
  return (
    <div>
      {videos.map((video, index) => (        // 버그3 수정
        <VideoCard key={index} title={video.title} channel={video.channel} views={video.views} />  // 버그4 수정
      ))}
    </div>
  );
}

function App() {
  const [filter, setFilter] = useState("전체");

  const videos = [                           // 버그5 수정 (순서 변경)
    { title: "리엑트 기초 강의", channel: "코딩채널", views: "25만", category: "리엑트" },
    { title: "파이썬 기초 강의", channel: "코딩파이썬", views: "11만", category: "파이썬" },
    { title: "자바 기초 강의", channel: "자바채널", views: "5만", category: "자바" },
  ];

  const filterVideos = filter === "전체" ? videos : videos.filter((video) => video.category === filter);

  return (
    <div>
      <button onClick={() => setFilter("전체")}>전체</button>
      <button onClick={() => setFilter("리엑트")}>리엑트</button>
      <button onClick={() => setFilter("자바")}>자바</button>
      <button onClick={() => setFilter("파이썬")}>파이썬</button>
      <VideoList videos={filterVideos} />    {/* 버그6 수정 */}
    </div>
  );
}

export default App;