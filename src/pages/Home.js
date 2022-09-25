import styled from 'styled-components';

const Home = () => {
  return (
    <MainBox>
      <div className="content">
        <img src={process.env.PUBLIC_URL + '/img/logo.png'} alt="로고"/>
	      <a href={'/books'}>목록 가기</a>
	      <a href={'/write'}>글 작성</a>
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
	
	&:before{
    display: block;
		content: '';
    position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0,0,0,0.3);
		z-index: 1;
	}
	
	.content{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
		z-index: 9;

    img{
      display: block;
      width: 64px;
      margin: 0 auto;
    }

    a{
      display: block;
      width: 160px;
      font-size: 16px;
      font-weight: 500;
      color: #fff;
      text-align: center;
      padding: 10px;
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
      font-size: 14px;
      color: #eee;
      text-align: center;
	    line-height: 1.5;
	    padding: 0 24px;
      margin-top: 24px;
    }
	}
`

export default Home;