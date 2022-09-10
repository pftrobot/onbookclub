import styled from 'styled-components';

const Books = () => {

	return (
		<>
			{
				[1,2,3].map(function(item, i){
					return(
						<Book>
							<div className="img-box">
								<img src={process.env.PUBLIC_URL + '/img/sample.jpg'} alt="책이미지"/>
							</div>
							<div className="info-box">
								<p>제목 <span>책 제목</span></p>
								<p>내용 <span>최신 글 또는 좋아요 제일 많은 글 1개</span></p>
							</div>
							<div className="like-box">
								😍 <span>34</span>
							</div>
						</Book>
					)
				})
			}
		</>

	);
};

let Book = styled.div`
  display: flex;
	align-items: center;
	
	&:not(:nth-last-of-type(1)){
		border-bottom: solid 1px #ccc;
	}
	
	.img-box{
		width: 100px;
		height: 100px;
		border: solid 1px #ccc;
		border-bottom: 0;
		
		&:nth-of-type(1){
			border-top: 0;
		}
		
		img{
      display: block;
			max-width: 100%;
			max-height: 100%;
			margin: 0 auto;
		}
	}
	
	.info-box{
		flex: 1;
		padding: 8px 0;
		
		p{
			font-size: 14px;
			color: #555;
			
			&:not(:nth-of-type(1)){
				margin-top: 8px;
			}
			
			span{
				color: #111;
			}
		}
	}
	
	.like-box{
		width: 80px;
    text-align: center;
		
		span{}
	}
`

export default Books;