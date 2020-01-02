import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import comment from '../img/admin/comment.png';
import dashboard from '../img/admin/dashboard.png';
import feedback from '../img/admin/feedback.png';
import member from '../img/admin/member.png';
import image from '../img/admin/image.png';
import pageWindow from '../img/admin/pageWindow.png';

export default function AdminFeedback() {
  return (
    <AdminFeedbackStyle>
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
        <i>피드백</i>
        <div className="comment-title">
          <strong>총 0개</strong>
          <input type="text" placeholder="검색"></input>
        </div>

        <div className="member-sort">
          <thead>
            <tr>
              <th>날짜</th>
              <th className="feedback-content">내용</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>19.01.24</td>
              <td className="table-content">
                00000000000000000000000000000000000000000000000000000000000000000000000000000000000000
              </td>
              <button>삭제</button>
            </tr>
          </tbody>
        </div>
      </div>
    </AdminFeedbackStyle>
  );
}
const AdminFeedbackStyle = styled.div`
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
  }
  a img {
    max-width: 50px;
    height: auto;
    text-align: center;
  }
  .topping-img {
    position: relative;
    left: 130px;
    top: 10px;
    width: 954px;
    height: auto;
    @media (max-width: 1440px) {
      max-width: 750px;
      left: 80px;
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
  .comment-title {
    justify-content: space-between;
    width: 940px;
    color: black;
    @media (max-width: 1440px) {
      max-width: 730px;
    }
    display: inline-flex;
    position: absolute;
    top: 42px;
    right: 5px;
  }
  .member-sort {
    position: absolute;
    bottom: 550px;
    width: 940px;
    color: black;
    left: 5px;
    display: flex;
    flex-wrap: wrap;

    @media (max-width: 1440px) {
      bottom: 420px;
      width: 750px;
      top: 80px;
    }
  }

  thead th {
    border: 0.5px solid black;
    padding-right: 300px;
    @media (max-width: 1440px) {
      padding-right: 100px;
    }
    table-layout: fixed;
    width: 100px;
    text-align: left;
  }
  td {
    padding-right: 300px;
    @media (max-width: 1440px) {
      padding-right: 100px;
    }
    table-layout: fixed;
    width: 100px;

    text-align: left;
  }
  tbody {
    height: 24px;
    display: inline;
  }
  .feedback-content {
    width: 300px;
  }

  .table-content {
    width: 300px;
    display: flex;
    flex-wrap: wrap;
    overflow: scroll;
  }
`;
