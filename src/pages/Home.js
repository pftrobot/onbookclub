import styled from 'styled-components';

// 스타일이 입혀진 컴포넌트 생성한 것
let YellowBtn = styled.button`
  background : ${ props => props.bg };
  color: ${ props => props.bg === "blue" ? "white" : "black" };
  padding: 10px;
`

const Home = () => {
    return (
        <div className="main">
            <div className="content">
                <img src="" alt="로고 이미지"/>
                <YellowBtn bg="blue">버튼</YellowBtn>
                <YellowBtn bg="green">버튼</YellowBtn>
            </div>
            <p>감명받은 책 문구들을 온북클럽에 저장하고 온라인 친구들과 나눠요!</p>
        </div>
    );
};

export default Home;