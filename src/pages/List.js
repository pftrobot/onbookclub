import styled from "styled-components";
import Books from "../components/Books";

const List = () => {
	return (
		<BookList>
			<button>&lt;</button>
			<p>전체 (<span>20</span>)</p>
			<div className="list">
				<Books/>
			</div>
		</BookList>
	);
};

let BookList = styled.div`
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

export default List;