import React, {useEffect, useState} from "react";
import {ListItemGroup} from "../components/Books";
import styled from "styled-components";

const BookList = () => {
	const [data, setData] = useState([])

	// data test
	const fetchBackgroundImage = () => {
		return Promise.resolve([
			{ title: '책제목1', value: 'book1', thumb_url: '/img/sample.jpg', summary: '임시글임시글임시글', like: 0 },
			{ title: '책제목2', value: 'book2', thumb_url: '/img/sample.jpg', summary: '임시글2임시글2임시글', like: 2 },
			{ title: '책제목3', value: 'book3', thumb_url: '/img/sample.jpg', summary: '임시글임시333글임시글', like: 55 },
		])
	}

	useEffect(() => {
		const fetch = async () => {
			const backgroundImages = await fetchBackgroundImage()
			setData(backgroundImages)
		}

		fetch()
	}, [])

	return (
		<ListWrapper>
			<button>&lt;</button>
			<p>전체 (<span>20</span>)</p>
			<div className="list">
				<ListItemGroup data={data} />
			</div>
		</ListWrapper>
	)
}

export default BookList



/* STYLE */
let ListWrapper = styled.div`
	min-height: 100vh;
  background-color: var(--yellow);
	
	button{
    display: block;
		font-size: 32px;
    font-weight: bold;
		color: #fff;
		padding: 18px;
	}
	
	p{
		padding: 0 18px;
	}
	
	.list{
		padding: 24px 0;
		margin-top: 24px;
		background-color: #fff;
	}
`
