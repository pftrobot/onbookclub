import React from 'react'
import styled from "styled-components";

// View Container
export const ListItem = ({data}) => {

	return (
		<Book href={'/books/1'}>
			<div className="img-box">
				<img src={process.env.PUBLIC_URL + data.image} alt="책 이미지"/>
			</div>
			<div className="info-box">
				<p className="title">{data.title}</p>
				<p className="desc">{data.sentences[0].content}</p>
			</div>
			<div className="like-box">
				😍 <span>{data.likes}</span>
			</div>
		</Book>
	)

}

// Data Container
export const ListItemGroup = ({data}) => {

	return (
		<div>
			{data &&
				data.map((data, i) => (
					<ListItem
						key={`book_item_${i}`}
						data={data}
					/>
				))}
		</div>
	)

}



/* STYLE */
let Book = styled.a`
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
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	
	.info-box{
		flex: 1;
		padding: 8px 0;
		
		p{
			font-size: 14px;
			color: #555;
			line-height: 1.3;
			
			&:not(:nth-of-type(1)){
				margin-top: 8px;
			}
			
			span{
				color: #111;
			}
		}
		
		.title{
			font-size: 18px;
			font-weight: 600;
		}
		
		.desc{
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
		}
	}
	
	.like-box{
		width: 80px;
    text-align: center;
    padding: 24px 0;
    cursor: pointer;
		
		span{}
	}
`
