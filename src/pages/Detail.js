import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {useParams} from "react-router-dom";
import {ItemSentencesGroup} from "../components/Sentences";

const BookDetail = () => {
	const [bookList, setBookList] = useState([])
	const {currentId} = useParams()

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
			const book = bookList.find((x) => x.id === parseInt(currentId))
			setBookList(book)
		}

		fetch()
	}, [])

	return (
		<DetailWrapper>
			<div className="title-area">
				<p className="title">{bookList.title}</p>
				<img src={process.env.PUBLIC_URL + bookList.image} alt="책 이미지"/>
			</div>
			<ItemSentencesGroup data={bookList.sentences}/>
		</DetailWrapper>
	)
}

export default BookDetail



/* STYLE */
let DetailWrapper = styled.div`
	min-height: 100vh;
  background-color: var(--yellow);
	
	.title-area{
    overflow: hidden;
    position: relative;
		height: 300px;
		
		.title{
      position: relative;
      font-size: 36px;
      font-weight: 600;
      text-align: center;
      margin: 48px 0;
      z-index: 9;
		}
		
		img{
      position: absolute;
			top: 50%;
      display: block;
			width: 100%;
			object-fit: cover;
			z-index: 0;
			transform: translateY(-50%);
		}
	}
`
