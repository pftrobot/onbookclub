import styled from 'styled-components';

const Home = () => {
  return (
    <MainBox>
      <div className="content">
        <img src={process.env.PUBLIC_URL + '/img/logo.png'} alt="로고"/>
	      <button>목록 가기</button>
	      <button>글 작성</button>
	      <p>감명받은 책 문구들을 온북클럽에 저장하고 <br/>온라인 친구들과 나눠요!</p>
      </div>
    </MainBox>
  );
};


let MainBox = styled.div`
  position: relative;
  height: 100%;
  background: url(${process.env.PUBLIC_URL + '/img/main_bg.jpg'}) no-repeat 50% 100% var(--yellow);
  background-size: 100% auto;
	
	.content{
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);

    img{
      display: block;
      width: 64px;
      margin: 0 auto;
    }

    button{
      display: block;
      width: 160px;
      font-size: 14px;
      font-weight: bold;
      color: #fff;
      padding: 6px;
      margin: 0 auto;
      border: solid 2px var(--green);
      border-radius: 2px;
      background-color: var(--green);

      &:nth-of-type(1){
        margin-top: 24px;
      }
      &:not(:nth-of-type(1)){
        margin-top: 12px;
      }
    }

    p{
      max-width: 360px;
      font-size: 12px;
      color: #333;
      text-align: center;
	    line-height: 1.5;
      margin-top: 24px;
    }
	}
`

export default Home;