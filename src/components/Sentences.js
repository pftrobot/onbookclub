import styled from "styled-components";
import React from "react";

export const ItemSentencesGroup = ({data}) => {
	const sentences = data

	return(
		<SentencesWrapper>
			{
				sentences &&
				sentences.map((sentence, i) => (
					<SentenceItem
						key={`sentence_item_${i}`}
						sentence={sentence}
						index={i}
					/>
				))
			}
		</SentencesWrapper>
	)
}

const SentenceItem = ({sentence, index}) => {

	return(
		<>
			{
				sentence && (
					<SentenceContainer>
						<div className="num">{index}</div>
						<div className="content">{sentence.content}</div>
						<div className="like-box">
							😍 <span>{sentence.like}</span>
						</div>
					</SentenceContainer>
				)
			}
		</>
	)
}

const SentencesWrapper = styled.div`
	padding: 24px;
	margin-top: 36px;
	background-color: #fff;
`

const SentenceContainer = styled.div`
  display: flex;
	padding: 24px 0;
	border-top: solid 1px #ddd;
	
	.num{
		width: 64px;
    text-align: center;
	}
	
	.content{
		flex: 1;
		line-height: 1.3;
		padding-right: 80px;
	}
	
	.like-box{
		width: 100px;
    text-align: center;
	}
`