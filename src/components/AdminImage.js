import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import comment from '../img/admin/comment.png';
import dashboard from '../img/admin/dashboard.png';
import feedback from '../img/admin/feedback.png';
import member from '../img/admin/member.png';
import image from '../img/admin/image.png';
import pageWindow from '../img/admin/pageWindow.png';

export default function AdminImage() {
  return (
    <AdminImageStyle>
      <div className="dash-nav">
        <Link to="/admin">
          <img src={dashboard}></img>대시보드
        </Link>
        <Link to="/adminImage">
          <img src={image}></img>토핑사진
        </Link>
        <Link to="/adminMember">
          <img src={member}></img>회원목록
        </Link>
        <Link to="/adminComment">
          <img src={comment}></img>댓글목록
        </Link>
        <Link to="/adminFeedback">
          <img src={feedback}></img>피드백
        </Link>
      </div>
      <div className="topping-img">
        <img src={pageWindow} className="pw"></img>
        <i>토핑사진</i>

        <div className="topping-menu">
          <div className="topping-type">
            <button>큰 토핑</button>
            <button>작은 토핑</button>
          </div>
          <div className="topping-find">
            <input type="text" placeholder="검색"></input>
          </div>
        </div>
        <div className="toppings">
          <div className="topping-title">
            <div className="topping-name">토핑 이름</div>
            <div className="func">
              <button>삭제</button>
              <button>+</button>
            </div>
          </div>

          <div className="topping-detail">
            <div className="topping-smallImg">
              <img src={image}></img>
              <button>이미지 수정</button>
            </div>
            <div className="topping-detail-letter">
              <div className="topping-sort">
                <strong>토핑이름</strong>
                <div>미트</div>
                <button>수정하기</button>
              </div>

              <div className="topping-category">
                <strong>카테고리</strong>
                <div>고기</div>
                <button>수정하기</button>
              </div>
            </div>
          </div>
        </div>

        <div className="add-topping">
          <button>토핑 추가</button>
        </div>
      </div>
    </AdminImageStyle>
  );
}
const AdminImageStyle = styled.div`
  background-color: #008081;
  width: 100%;
  height: 100vh;
  align-content: center;
  display: flex;
  align-items: center;
  color: white;
  font-weight: 100;
  position: fixed;
  a {
    text-decoration: none;
    color: #fff;
    display: flex;
    margin-top: 16px;
    margin-bottom: 16px;
    flex-direction: column;
    align-content: center;
    justify-content: center;
  }
  .dash-nav {
    width: 245px;
    max-height: 100vh;
    font-size: 14px;
    flex-direction: column;
    display: flex;
    align-items: center;
    align-content: center;
    position: fixed;
  }
  a img {
    max-width: 50px;
    height: auto;
    text-align: center;
  }
  .topping-img {
    position: relative;
    left: 375px;
    top: 10px;
    width: 954px;
    height: auto;
    @media (max-width: 1440px) {
      max-width: 750px;
      left: 325px;
    }
  }
  .pw {
    position: relative;
    @media (max-width: 1440px) {
      max-width: 750px;
    }
  }
  i {
    position: absolute;
    font-size: 22px;
    width: 100px;
    right: 850px;
    top: 4px;
    @media (max-width: 1440px) {
      right: 645px;
      top: -1px;
    }
  }
  button {
    border: none;
    background: none;
  }
  .topping-menu {
    flex-direction: row;
    width: 750px;
    height: auto;

    display: flex;
    position: relative;
    bottom: 680px;
    @media (max-width: 1440px) {
      bottom: 530px;
    }
  }
  .topping-find {
    position: absolute;
    display: inline;
    right: -200px;
    top: 10px;
    @media (max-width: 1440px) {
      right: 10px;
      top: 3px;
    }
  }
  .topping-type {
    position: absolute;
    font-size: 19px;
    top: 5px;
    border: none;
    @media (max-width: 1440px) {
      left: 3px;
      top: 5px;
    }
  }

  .toppings {
    position: relative;
    text-align: center;
    width: 948px;

    @media (max-width: 1440px) {
      width: 750px;
      bottom: 470px;
    }
    color: black;
    bottom: 600px;
  }
  .topping-title {
    position: absolute;
    display: flex;
    justify-content: space-between;
    width: 940px;
    @media (max-width: 1440px) {
      width: 740px;
    }

    border-bottom: 0.1px solid gray;
    padding-bottom: 5px;
    left: 3px;
  }
  .topping-name {
    margin-left: 10px;
  }

  .topping-detail {
    position: absolute;
    width: 800px;
    position: relative;
    right: 10px;
    display: flex;
    top: 30px;
  }
  .topping-smallImg button {
    position: absolute;
    left: 150px
    top: 140px;
    @media (max-width: 1440px) {
      left: 190px
    top: 180px;
    }
  }
  .topping-smallImg img {
    left: 20px;
    top: 20px;
    position: absolute;
    width: 200px;
    height: 120px;
    @media (max-width: 1440px) {
      width: 250px;
      height: 160px;
    }
  }

  .topping-detail-letter {
    position: absolute;
    left: 300px;
    top: 40px;
  }

  .topping-sort,
  .topping-category {
    flex-direction: row;
    display: flex;
  }
  .topping-sort {
    margin-bottom: 20px;
  }
  .topping-sort div,
  .topping-category div {
    margin-left: 40px;
    margin-right: 40px;
  }

  .add-topping {
    position: absolute;
    bottom: 10px;
    left: 875px;
    @media (max-width: 1440px) {
      left: 680px;
    }
  }
`;
