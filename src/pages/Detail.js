import React, {useEffect, useState} from "react";
import {ListItemGroup} from "../components/Books";
import styled from "styled-components";

const BookDetail = () => {
	const [data, setData] = useState([])

	// data test
	const fetchBookList = () => {
		return Promise.resolve([
			{
				"id": 1,
				"title": "어린왕자",
				"image": "/img/sample.jpg",
				"sentences": [
					{
						"id": 1,
						"content": "너를 4시에 만난다면 나는 3시부터 행복할거야. 너를 4시에 만난다면 나는 3시부터 행복할거야. 너를 4시에 만난다면 나는 3시부터 행복할거야. 너를 4시에 만난다면 나는 3시부터 행복할거야. 너를 4시에 만난다면 나는 3시부터 행복할거야. 너를 4시에 만난다면 나는 3시부터 행복할거야.",
						"like": 2
					},
					{
						"id": 2,
						"content": "너를 4시에 만난다면 나는 3시부터 행복할거야!",
						"like": 4
					}
				],
				"likes": 6
			},
			{
				"id": 2,
				"title": "11분",
				"image": "/img/sample.jpg",
				"sentences": [
					{
						"id": 1,
						"content": "그녀는 마치 갓 태어난 것처럼 살아갈 의지가 자신에게 있다는 것을, 따라서 어느 누구의 부재도 아쉬워할 필요가 없다는 것을 깨달았다. ",
						"like": 5
					},
					{
						"id": 2,
						"content": "진정한 사랑을 찾으려면, 내가 했던 보잘 것 없는 사랑들과 먼제 결별해야 할 것이다.",
						"like": 7
					}
				],
				"likes": 12
			}
		])
	}

	useEffect(() => {
		const fetch = async () => {
			const bookList = await fetchBookList()
			setData(bookList)
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

export default BookDetail



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
