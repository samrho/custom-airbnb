import React, { Fragment } from "react";
import styled from "styled-components";
import star from "../../images/star.png";
const StyledCardWrapper = styled.div`
	display: flex;
	position: relative;
	flex-direction: row;
	border: 1px solid #ebebeb;
	padding: 20px 13px 10px;
	margin: 10px;
	width: 800px;
`;

const LeftCardContainer = styled.div`
	display: flex;
`;

const RighttCardContainer = styled.div`
	flex: 1;
	margin-left: 20px;
	display: flex;
	flex-direction: column;
`;
const FlexDiv = styled.div`
	display: flex;
	color: ${(props) => props.color || "black"};
	margin-bottom: 10px;
	justify-content: ${(props) => props.justify || "left"};
`;
const StyledSpan = styled.span`
	display: flex;
	color: ${(props) => props.color || "black"};
	font-size: ${(props) => props.size || "14px"};
`;
const PriceDiv = styled.div`
	position: absolute;
	bottom: 10px;
	right: 10px;
`;
const Card = ({ data }) => {
	return (
		<StyledCardWrapper>
			<LeftCardContainer>
				<img src={data.thumbnail} width="320px" height="200px" />
			</LeftCardContainer>
			<RighttCardContainer>
				<div>
					<FlexDiv justify="space-between">
						<StyledSpan color="#717171" size="12px">
							{data.type}
						</StyledSpan>

						<span>
							<img src={star} width="10px" height="10px" />
							{data.star}
						</span>
					</FlexDiv>

					<FlexDiv>
						<StyledSpan size="20px">{data.title}</StyledSpan>
					</FlexDiv>
					<FlexDiv>
						<StyledSpan color="#717171" size="12px">
							인원{data.guest}명 · 침실{data.bedroom}개 · 욕실
							{data.bathroom}개 · 침대{data.bed}개
						</StyledSpan>
					</FlexDiv>
				</div>
				<PriceDiv>
					<FlexDiv>
						<b>₩{data.price}</b>/1박
					</FlexDiv>
				</PriceDiv>
			</RighttCardContainer>
		</StyledCardWrapper>
	);
};
export default Card;
