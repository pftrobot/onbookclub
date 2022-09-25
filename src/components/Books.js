import React from 'react'
import styled from "styled-components";

// View Container
export const ListItem = ({data}) => {

	return (
		<Book>
			<div className="img-box">
				<img src={process.env.PUBLIC_URL + data.thumb_url} alt="책 이미지"/>
			</div>
			<div className="info-box">
				<p>제목 <span>{data.title}</span></p>
				<p>내용 <span>{data.summary}</span></p>
			</div>
			<div className="like-box">
				😍 <span>{data.like}</span>
			</div>
		</Book>
	)

}

// Data Container
export const ListItemGroup = ({data}) => {

	return (
		<div>
			<div>
				{data &&
					data.map((data, i) => (
						<ListItem
							key={`book_item_${i}`}
							data={data}
						/>
					))}
			</div>
		</div>
	)

}



/* STYLE */
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
